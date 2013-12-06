
define <[ ng ]> ->
  foo = ($compile)->
      debugger
      out = (msg,mode) ->
        angular.element('#alertbox').html "<div alert>" ++ msg ++ "</div>"
  angular
    .module \alert, []
    .factory \alert, [ \$compile, foo ]
    .directive \alert ->
      out =
        replace: true
        transclude: true
        restrict: \A
        scope: { @mode }
        template: '<div ng-class="mode" class="ink-alert basic"><button class="ink-dismiss">&times;</button><div ng-transclude></div></div>'


