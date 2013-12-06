
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
      out = (msg,mode) ->
        angular.element('#alertbox').html "<div alert>" ++ msg ++ "</div>"
      out.warn = (msg) ~>
        this msg
      out.error = (msg) ~>
        this msg,\error
      out.info  = (msg) ~>
        this msg,\info
      out.success = (msg) ~>
        this msg,\success

    .directive \alert ->
      out =
        template: mk-template!
      out <<< basic-factory
    .directive \info ->
      out =
        template:  mk-template \info
      out <<< basic-factory
    .directive \error ->
      out =
        template:  mk-template \error
      out <<< basic-factory
    .directive \success ->
      out =
        template:  mk-template \success
      out <<< basic-factory

