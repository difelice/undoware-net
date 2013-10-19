function(doc,req) {
  var attachments = false;
  var html = '<html><body><ul>';
  if ('attachments' in req) { attachments = true; }


  html += '<li><strong>id</strong>: ' + doc._id + '</li>';
  html += '<li><strong>sender</strong>: ' + doc.sender + '</li>';
  html += '<li><strong>text</strong>: ' + doc.text + '</li>';

  if (attachments) {
    html += '<li><strong>attachment</strong>: <a href=#notyetimpl>download</a></li>';
  }



  return html + '</ul></body></html>';

}
