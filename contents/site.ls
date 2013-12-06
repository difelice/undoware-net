
define <[ ng ng-cookies pwgen jq logo alert modernizr ink ink-ui site b64 ]> ->
  quick-send = ($scope, $http, $location, $cookies) ->
    $http.defaults.headers.post = { \Content-Type : 'application/json;charset=utf-8' }
    $scope <<<
      user: ($cookies.user / \@)[0]
      recipient: ''
      text: 'You have received a document from MedExtra that has been secured with a password. Please follow the link below and enter this password to retrieve the document. The password will be given to you orally, by telephone, or by text message (SMS).'
      file: null
      password: ''
      send: ->
        senda = (m) -> /* return to senda! address unknown! No such number! No such zone! */
          dun= ->
            $scope.premature = false
            $scope.$apply
          sss = ->
             angular.element(\#send-success).add-class(\show-all).remove-class(\hide-all)
             dun!
          err = ->
             angular.element(\#send-error).add-class(\show-all).remove-class(\hide-all)
             dun!
          $http.post(\/_db,JSON.stringify(m)).success(sss).error(err)

        filesenda = (m,f,sendr) ->
          reader = new FileReader
          reader.onload = ->
            m._attachments = {}
            m._attachments[f.name] = { content_type: f.type, data: b64(reader.result) }
            sendr m
          reader.onerror = (e) ->
            window.alert "Error sending attachment:" ++ JSON.stringify(e)
          reader.readAsArrayBuffer f

        m =
          sender:     $scope.user ++ \@medextra.com
          recipient:  $scope.recipient
          text:       $scope.text
          password:   $scope.password

        $scope.premature = true /* disables send button */
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
      fange: (elt) ->
        $scope.file = elt.files[0]
        $scope.premature = !$scope.text || !$scope.recipient || !$scope.password
        $scope.$apply!




  normalize-path = (p) ->
    v = p / \/
    v[1] || \home

  angular.element('nav ul li.' ++ normalize-path(window.location.pathname)).add-class \active
  angular
    .module \site, <[ logo ngCookies alert ]>
    .controller \quick-send, [\$scope, \$http, \$location, \$cookies, quick-send]

