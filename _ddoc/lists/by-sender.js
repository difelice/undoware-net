function(doc,req) {
  provides("html", function() {
    var html = "<html><body><table class='ink-table alternating'>";
        html+= "<thead><tr><th data-sortable='true'>Date</th><th>Message</th><th>Sender</th></tr></thead>";
    var mk_a = function(id) {
      var tip = '<a href="';
      var out = '/_db/_design/lookup/_show/message/' + id;
      var tail = '?attachment=1">';
      return tip + out + tail;
    };

    var dater = function(v) {
      var out = '0-0-0';
      if ('when' in v) {
        out = v.when[0] + '-' + v.when[1] + '-' + v.when[2];
      }
      return out;
    };

    while (row = getRow()) {
      if ( !req.query['sender']                  ||
           req.query.sender === row.value.sender
         ) {
        html += '<tr><td>' + dater(row.value)
        html += '</td><td>' + mk_a(row.value._id) + row.value.text + '</a></td><td>' +  row.key + '</td></tr>';
      }
    }
    html += "</table></body></html>";
    return html;
  });
}
