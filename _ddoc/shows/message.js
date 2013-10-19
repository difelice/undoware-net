function(doc,req) {
  var attachment = false;
  var html = '<html><body><ul>';
  if ('attachment' in req.query) { attachment = true; }


  html += '<li><strong>id</strong>: ' + doc._id + '</li>';
  html += '<li><strong>sender</strong>: ' + doc.sender + '</li>';
  html += '<li><strong>text</strong>: ' + doc.text + '</li>';

  if (attachment) {
    html += '<li><strong>attachment</strong>: <a href=#notyetimpl>download</a></li>';
  }



  return html + '</ul></body></html>';

}
