
/* put your app-specific stuff here.

   FYI: By default, we also pull in logo.ls as a
   dependency (it wraps any .logo-classed elements in a link to the base)

   logo.ls is required by local.ls because it is not appropriate for every use case, and is included largely for propadeutic purposes.
   Feel free to remove it.

*/


define <[ ng jq logo modernizr ink ink-ui site ]> ->
  quick-send = ($scope,$http) ->
    $http.defaults.headers.post = { 'Content-Type': 'application/json;charset=UTF-8' }
    p = window.location.pathname
    v = p / \/
    w = v[1] || 'home' /* This is ugly and inflexible; TODO FIXME */
    angular.element('nav ul li.' ++ w).addClass('active')
    $scope <<<
      message:
        sender: ''
        recipient: ''
        text: ''
        has-attachment: false
      file:
        data: null
        password: ''
      send: ->
        angular.element(\#send).addClass \sending
        senda = (m) ->
          dun = ->
             angular.element(\#send).removeClass \sending
          sss = ->
             dun!
             window.alert "Thank you! Your message has been sent."
          err = ->
             window.alert "Could not send message. Please call x213."
             dun!
          $http.post(\/db/outgoing,m).success(sss).error(err)

        filesenda = (m,f,sendr) ->
          reader = new FileReader
          reader.onload = ->
            m._attachments[file.password] = { \content_type: f.type, data: b64(reader.result) }
            console.log 'file send completed without error'
            sendr m
          reader.onerror = (e) ->
            window.alert "Error sending attachment:" ++ JSON.stringify(e)
          reader.onloadstart = ->
            console.log 'starting send'
          reader.readAsArrayBuffer f.data

        /* for some reason, if I don't use a separate var to check status, I get a false positive '$scope.attachment != {}' */
        if $scope.message.has-attachment
          filesenda $scope.message, $scope.file, senda
        else
          senda $scope.message

    filer = angular.element(\#message-attachment).get 0
    filer.addEventListener \change, (evt) ->
        if (evt.target.files)
          $scope.file.data = evt.target.files[0]
          $scope.message.has-attachment = true;
        else
          window.alert 'Your browser does not support the FileReader API, which is required for file uploads. It is probable that you are using IE9 or older. Please upgrade.'


  angular
    .module(\site, <[ logo ]>)
    .controller(\quick-send, [\$scope, \$http, quick-send])
