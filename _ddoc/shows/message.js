function(doc,req) {
  var attachment = false;
  var html = '<html><body><ul>';
  var mk_a = function(root) {
    return '<a href="/_db/' + root +  '/attachment">download</a>';
  }

  var dater = function(w) {
    return w.join('/');
  }

  if ('attachment' in req.query) { attachment = true; }


  html += '<li><strong>id</strong>: ' + doc._id + '</li>';
  html += '<li><strong>sender</strong>: ' + doc.sender + '</li>';
  html += '<li><strong>when</strong>: ' + dater(doc.when) + '</li>';
  html += '<li><strong>text</strong>: ' + doc.text + '</li>';

  if (attachment) {
    html += '<li><strong>attachment</strong>:' +  mk_a(doc._id)  + '</li>';
  }



  return html + '</ul></body></html>';

}
