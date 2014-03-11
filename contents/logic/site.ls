site-controller = ($scope) ->
  $scope <<<
    lswipe: ->
      console.log "Hello world!"
    rswipe: ->
      console.log "Haro world!"

define <[ ng ng-touch ]> ->
  angular.module \site <[ ngTouch logo hr ]>
  .controller \Site  [\$scope site-controller]
