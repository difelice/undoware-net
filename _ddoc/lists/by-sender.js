function(doc,req) {
  provides("html", function() {
    var html = "<html><body><table class='ink-table alternating'>";
    var mk_a = function(href) {
      var tip = '<a href="';
      var tail = '">';
      return tip + href + tail;
    };
    while (row = getRow()) {
      if (!!req.query.sender && req.query.sender === row.value.sender) {
        html += '<tr><td>' + row.key + '</td><td>' + mk_a(row.value) + row.value.text + '</a></td></tr>';
      }
    }
    html += "</table></body></html>";
    return html;
  });
}
