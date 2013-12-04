
/* put your app-specific stuff here.

   FYI: By default, we also pull in logo.ls as a
   dependency (it wraps any .logo-classed elements in a link to the base)

   logo.ls is required by local.ls because it is not appropriate for every use case, and is included largely for propadeutic purposes.
   Feel free to remove it.

*/


define <[ ng jq logo modernizr ink ink-ui site ]> ->
  quick-send = ($scope,$) ->
    p = window.location.pathname
    v = p / \/
    w = v[1] || 'home' /* This is ugly and inflexible; TODO FIXME */
    angular.element('nav ul li.' ++ w).addClass('active')
    $scope <<<
      message:
        text: ''
        attachment: null
      send: ->
      password:
        one: ''
        two: ''



  angular
    .module(\site <[ logo ]>)
    .controller('quick-send', ['$scope', quick-send])
    .directive 'stub' ->
      {
        replace: false
        transclude: false
        restrict: 'A'
        link:  (scope, iElement, iAttrs, controller) ->
          console.log \foo
      }
