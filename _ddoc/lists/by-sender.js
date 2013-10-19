function(doc,req) {
  provides("html", function() {
    var html = "<html><body><table class='ink-table alternating'>";
    var mk_a = function(id) {
      var tip = '<a href="';
      var out = '/_db/_design/lookup/_show/message/' + id;
      var tail = '?attachment=1">';
      return tip + out + tail;
    };

    var dater = function(v) {
      var out = '';
      try {
        out = v.when[0] + '/' + v.when[1] + '/' + v.when[2]
      } catch {}
      return out;
    };

    while (row = getRow()) {
      if ( !req.query['sender']  || req.query.sender === row.value.sender) {
        html += '<tr><td>' + row.key;
        html += '</td><td>' + mk_a(row.value._id) + row.value.text + '</a></td><td>' +  dater(row.value) + '</td></tr>';
      }
    }
    html += "</table></body></html>";
    return html;
  });
}
