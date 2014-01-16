function(doc,req) {
  provides("html", function() {
    var html  = "<html><body><table id='uploads' class='ink-table alternating'>";
        html += "<thead><tr><th data-sortable='true'>Date</th><th>Message</th><th data-sortable='true'>Attachment</th><th data-sortable='true'>Sender</th></tr></thead><tbody>";

    var mk_a = function(v) {
      var icon = '<i class="icon-file icon-2x"></i>';
      if (!!v._attachments) {
        var tip =  '<a stub href="' +  '/_db/' + v._id + '/attachment">';
        var tail = '</a>';
        return tip + icon + tail;
      } else {
        return '-';
      }
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
        html += '<tr><td>' + dater(row.value)    + '</td>';     /* first column: date */
        html +=     '<td>' + row.value.text      + '</td>';     /* 2nd: message */
        html +=     '<td>' + mk_a(row.value)     + '</td>';     /* 3rd; attachment */
        html +=     '<td>' + row.value.sender    + '</td>';     /* Fourth: sender */
        html += '</tr>'; /* done row */
      }
    }
    html += "</tbody></table></body></html>";
    return html;
  });
}
