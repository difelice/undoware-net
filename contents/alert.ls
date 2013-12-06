
define <[ ng ]> ->
  angular
    .module \alert, []
    .factory \alert, ->
      out = (msg,mode) ->
        debugger
        angular.element('#alertbox').html "<div alert>" ++ msg ++ "</div>"
    .directive \alert ->
      debugger
      out =
        replace: true
        transclude: true
        restrict: \A
        scope: { @mode }
        template: '<div ng-class="mode" class="ink-alert basic"><button class="ink-dismiss">&times;</div><p ng-transclude></p></div>'


