
/* put your app-specific stuff here.

   FYI: By default, we also pull in logo.ls as a
   dependency (it wraps any .logo-classed elements in a link to the base)

   logo.ls is required by local.ls because it is not appropriate for every use case, and is included largely for propadeutic purposes.
   Feel free to remove it.

*/


define <[ ng jq logo modernizr ink ink-ui site ]> ->
  uploads = ($scope,$) ->
    p = window.location.pathname
    v = p / \/
    w = v[1] || 'home' /* This is ugly and inflexible; TODO FIXME */
    angular.element('nav ul li.' ++ w).addClass('active')
    $scope.search = ->
      <- angular.element('#target').load('_db/_design/lookup/_list/by-sender/by-sender?sender=' ++ $scope.sender)
      table = new Ink.UI.Table ('.ink-table')
    $scope


  angular
    .module(\site <[ logo ]>)
    .controller('uploads', ['$scope', uploads])
    .directive 'stub', (injectables) ->
      { replace: false
        transclude: false
        restrict: 'A'
        compile: (tElement, tAttrs, transclude) ->
          { post: (scope, iElement, iAttrs, controller) ->
             iElement.html 'foo'
          }
      }
});

