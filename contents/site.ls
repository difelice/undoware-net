
/* put your app-specific stuff here.

   FYI: By default, we also pull in logo.ls as a
   dependency (it wraps any .logo-classed elements in a link to the base)

   logo.ls is required by local.ls because it is not appropriate for every use case, and is included largely for propadeutic purposes.
   Feel free to remove it.

*/


define <[ ng logo modernizr ink autoload site ]> ->
  angular.module \site <[ logo ]>
