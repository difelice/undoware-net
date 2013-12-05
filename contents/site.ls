
define <[ ng ng-cookies pwgen jq logo modernizr ink ink-ui site ]> ->
  quick-send = ($scope, $http, $location, $cookies) ->
    $http.defaults.headers.post = { \Content-Type : 'application/json;charset=utf-8' }
    $scope <<<
      user: ($cookies.user / \@)[0]
      recipient: ''
      text: 'You have received a document from MedExtra that has been secured with a password. Please follow the link below and enter this password to retrieve the document. The password will be given to you orally, by telephone, or by text message (SMS).'
      file: null
      password: ''
      send: ->
        $scope.premature = true /* disables send button */
        senda = (m) -> /* return to senda! address unknown! No such number! No such zone! */
          dun= ->
            $scope.premature = false
          sss = ->
             window.alert "Thank you! Your message has been sent. After closing this dialog box, call or text the recipient, giving them the password."
             dun!
          err = ->
             window.alert "Could not send message. Please call x213."
             dun!
          $http.post(\/_db,JSON.stringify(m)).success(sss).error(err)

        filesenda = (m,f,sendr) ->
          reader = new FileReader
          reader.onload = ->
            m._attachments[$scope.password] = { content_type: f.type, data: b64(reader.result) }
            sendr m
          reader.onerror = (e) ->
            window.alert "Error sending attachment:" ++ JSON.stringify(e)
          reader.onloadstart = ->
            console.log 'starting send'
          reader.readAsArrayBuffer f.data

        m =
          sender:     $scope.user ++ \@medextra.com
          recipient:  $scope.recipient
          text:       $scope.text
          password:   $scope.password

        if $scope.file
          filesenda m, $scope.file, senda
        else
          senda m

      pwgen: ->
        $scope.password = generate-password 7 #miller's magic number
        $scope.change!
        false
      premature: true
      change: ->
        $scope.premature = !$scope.text || !$scope.recipient || !$scope.password || !$scope.file
      file-change: (elt) ->
        $scope.file = elt.files[0]
        debugger;
        $scope.change!




  normalize-path = (p) ->
    v = p / \/
    v[1] || \home

  angular.element('nav ul li.' ++ normalize-path(window.location.pathname)).add-class \active
  angular
    .module \site, <[ logo ngCookies ]>
    .controller \quick-send, [\$scope, \$http, \$location, \$cookies, quick-send]

