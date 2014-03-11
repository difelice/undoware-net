site-controller = ($scope) ->
  $scope <<<
    lswipe: ->
      console.log "Hello world!"
    rswipe: ->
      console.log "Haro world!"

define <[ ng ]> ->
  angular.module \site <[ logo hr ]>
  .controller \Site  [\$scope site-controller]
