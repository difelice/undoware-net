function(doc,req) {
  var attachment = false;
  var html = '<html><body><ul>';
  var mk_a = function(root) {
    return '<a href="/_db/design/lookup/_show/message/' + root +  '/attachment">download</a>';
  }

  if ('attachment' in req.query) { attachment = true; }


  html += '<li><strong>id</strong>: ' + doc._id + '</li>';
  html += '<li><strong>sender</strong>: ' + doc.sender + '</li>';
  html += '<li><strong>text</strong>: ' + doc.text + '</li>';

  if (attachment) {
    html += '<li><strong>attachment</strong>:' +  mk_a(doc._id)  + '</li>';
  }



  return html + '</ul></body></html>';

}
