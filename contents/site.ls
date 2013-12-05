
define <[ ng ng-cookies pwgen jq logo modernizr ink ink-ui site ]> ->
  quick-send = ($scope, $http, $cookies) ->
    $http.defaults.headers.post = { \Content-Type : 'application/json;charset=utf-8' }
    $scope <<<
      good-to-go: false
      user: ($cookies.user / \@)[0]
      message:
        recipient: ''
        text: 'You have received a document from MedExtra that has been secured with a password. Please follow the link below and enter this password to retrieve the document. The password will be given to you orally, by telephone, or by text message (SMS).'
        has-attachment: false
      file:
        data: null
        password: ''
      send: ->
        $scope.send-disabled = true
        senda = (m) -> /* return to senda! address unknown! No such number! No such zone! */
          m.sender = $scope.user ++ \@medextra.com
          dun= ->
            $scope.send-disabled = false
          sss = ->
             dun!
             window.alert "Thank you! Your message has been sent. After closing this dialog box, call or text the recipient, giving them the password."
          err = ->
             window.alert "Could not send message. Please call x213."
             dun!
          $http.post(\/_db,JSON.stringify(m)).success(sss).error(err)

        filesenda = (m,f,sendr) ->
          reader = new FileReader
          reader.onload = ->
            m._attachments[file.password] = { content_type: f.type, data: b64(reader.result) }
            console.log 'file send completed without error'
            sendr m
          reader.onerror = (e) ->
            window.alert "Error sending attachment:" ++ JSON.stringify(e)
          reader.onloadstart = ->
            console.log 'starting send'
          reader.readAsArrayBuffer f.data

        if $scope.message.has-attachment
          filesenda $scope.message, $scope.file, senda
        else
          senda $scope.message

      pwgen: ->
        angular.element(\#file-password).val(generate-password(7)) && $scope.premature = false
      premature: true

    filer = angular.element(\#file-data).get 0
    filer.add-event-listener \change, (evt) ->
        if evt.target.files
          $scope.file.data = evt.target.files[0]
          $scope.message.has-attachment = true
        else
          window.alert 'Your browser does not support the FileReader API, which is required for file uploads. It is probable that you are using IE9 or older. Please upgrade.'



  normalize-path = (p) ->
    v = p / \/
    v[1] || \home

  angular.element('nav ul li.' ++ normalize-path(window.location.pathname)).add-class \active
  angular
    .module \site, <[ logo ngCookies ]>
    .controller \quick-send, [\$scope, \$http, \$cookies, quick-send]
