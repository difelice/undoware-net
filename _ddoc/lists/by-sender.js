function(doc,req) {
  provides("html", function() {
    var html = "<html><body><table class='ink-table alternating'>";
    var mk_a = function(id) {
      var tip = '<a href="';
      var out = '/_db/_design/lookup/_show/message' + id;
      var tail = '">';
      return tip + out + tail;
    };
    while (row = getRow()) {
      if ( !req.query['sender']  || req.query.sender === row.value.sender) {
        html += '<tr><td>' + row.key + '</td><td>' + mk_a(row.value._id) + row.value.text + '</a></td></tr>';
      }
    }
    html += "</table></body></html>";
    return html;
  });
}
