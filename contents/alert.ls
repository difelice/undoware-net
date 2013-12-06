
define <[ ng ]> ->
  foo =
  angular
    .module \alert, []
    .factory \alert, ->
      debugger
      out = (msg,mode) ->
        angular.element('#alertbox').html "<div alert>" ++ msg ++ "</div>"
    .directive \alert ->
      out =
        replace: true
        transclude: true
        restrict: \A
        template: '<div class="ink-alert basic"><button class="ink-dismiss">&times;</button><div ng-transclude></div></div>'


