
define <[ ng ]> ->
  mk-template = (mode) ->
    beginning = '<div class="ink-alert basic '
    ending    = '"><button class="ink-dismiss">&times;</button><div ng-transclude></div></div>'
    if (mode)
       beginning ++ mode ++ ending
    else
      beginning ++ ending

  basic-factory =
    replace: true
    transclude: true
    restrict: \A

  angular
    .module \alert, []
    .factory \alert, ->
      debugger
      out = (msg,mode) ->
        angular.element('#alertbox').html "<div alert>" ++ msg ++ "</div>"
    .directive \alert ->
      out ^^^ basic-factory
      out.template =  mk-template!
    .directive \info ->
      out ^^^ basic-factory
      out.template =  mk-template \info
    .directive \error ->
      out ^^^ basic-factory
      out.template =  mk-template \error
    .directive \success ->
      out ^^^ basic-factory
      out.template =  mk-template \success

