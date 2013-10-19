
/* put your app-specific stuff here.

   FYI: By default, we also pull in logo.ls as a
   dependency (it wraps any .logo-classed elements in a link to the base)

   logo.ls is required by local.ls because it is not appropriate for every use case, and is included largely for propadeutic purposes.
   Feel free to remove it.

*/


define <[ ng jq logo modernizr ink site ]> ->
  uploads = ($scope,$) ->
    p = window.location.pathname
    v = p / \/
    w = v[1] || 'home' /* This is ugly and inflexible; TODO FIXME */
    angular.element('nav ul li.' ++ w).addClass('active')
    $scope.search = ->
      val = '"' ++ $scope.sender ++ '"'
      console.log(val)
      angular.element('#target').load('_db/_design/lookup/_view/by-sender?key=' ++ val)
    $scope


  angular.module(\site <[ logo ]>).controller('uploads', ['$scope', uploads])
