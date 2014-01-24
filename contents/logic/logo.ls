
/* Small module that wraps all .logo elts in a link to the root */

define <[ ng ]> ->
  angular.module(\logo []).directive \logo ->
    {
      link: (scope,elt,attrs) ->
        elt.wrap-inner( "<a href='/'/>")
      restrict: 'C'
    }




