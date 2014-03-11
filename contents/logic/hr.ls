
/* Small module that replaces hr with div.hr, used for presentation finesse */

define <[ ng ]> ->
  angular.module(\hr []).directive \hr ->
    {
      link: (scope,elt,attrs) ->
        elt.replace-with( "<div class='hr'>*&nbsp;&nbsp;&nbsp;*&nbsp;&nbsp;&nbsp;*</div>" )
      restrict: 'E'
    }




