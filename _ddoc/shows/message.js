function(doc,req) {
  var attachments = false;
  if ('attachments' in req) { attachments = true; }
  return '<html><body>' + JSON.stringify(doc) + '</body></html>';

}
