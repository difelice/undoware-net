function(doc,req) {
  provides("html", function() {
    var html = "<html><body><table class='ink-table alternating'>";
    while (row = getRow()) {
      html += '<tr><td>' + row.key + '</td><td>' + row.value.text + '</td></tr>';
    }
    html += "</table></body></html>";
    return html;
  });
}
