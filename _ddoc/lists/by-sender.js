function(doc,req) {
  provides("html", function() {
    var html = "<html><body><table class='ink-table alternating'>";
        html+= "<thead><tr><th data-sortable='true'>Date</th><th>Message</th><th data-sortable='true'>Upload</th><th data-sortable='true'>Sender</th></tr></thead>";
    var mk_a = function(id) {
      var tip = '<a href="';
      var out = '/_db/' + id;
      var tail = '/attachment"><i class="icon-file"></i></a>';
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
        html += '<tr><td>'  + dater(row.value) /* first column: date */
        html += '</td><td>' + row.value.text      + '</td><td>'; /* 2nd: message */
        html += '</td><td>' + mk_a(row.value._id) + '</td><td>'; /* 3rd; attachment */
        html += '</td><td>' + row.value.sender /* Fourth: sender */
        html += '</td></tr>'; /* done row */
      }
    }
    html += "</table></body></html>";
    return html;
  });
}
