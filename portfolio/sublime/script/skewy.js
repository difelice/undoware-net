(function() {
  var selector;
  selector = ".gallery-column a img";
  $(document).ready(function() {
    var skewer;
    skewer = function(what) {
      var r;
      r = Math.round(Math.random() * 4 - 2);
      $(what).removeClass('rotor-4 rotor-3 rotor-2 rotor-1 rotor0 rotor1 rotor2 rotor3 rotor4');
      $(what).addClass('rotor' + r);
      return null;
    };
    $(selector).bind('skew', function() {
      return skewer(this);
    });
    $(selector).bind('mouseenter', function(e) {
      return $(this).addClass('quietist');
    });
    $(selector).bind('mouseleave', function(e) {
      $(this).removeClass('quietist');
      return skewer(this);
    });
    $(selector).trigger('skew');
    return null;
  });
}).call(this);
