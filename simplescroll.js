var commonJS = (typeof module === 'object' && typeof module.exports === 'object');

function createSimpleScroll(opts) {
  var localD3;
  var easingFn;

  if (opts) {
    localD3 = opts.d3;
    easingFn = opts.easingFn;
  }

  if (!localD3 && !commonJS) {
    // Probably being included via script tags. Try the global D3.
    localD3 = d3;
  }

  function scrollTo(toTop, time) {
    var fromTop = document.body.scrollTop;
    var scrollDistance = toTop - fromTop;
    var scrolledTop = 0;

    localD3.timer(updateScrollTop);

    function updateScrollTop(elapsed) {
      var portion = easingFn(elapsed * 1.0 /time);
      var scrollChange = scrollDistance * portion;

      document.body.scrollTop = fromTop + scrollChange;

      // Stop the timer by returning true if we've scrolled as far as requested.
      if (scrollDistance < 0 && document.body.scrollTop <= toTop) {
        return true;
      }
      if (scrollDistance >= 0 && document.body.scrollTop >= toTop) {
        return true;
      }
      if (elapsed > time) {
        // This is as far as we're going to get.
        return true;
      }
    }
  }

  function scrollToElement(el, time) {
    scrollTo(el.offsetTop, time);
  }

  return {
    scrollTo: scrollTo,
    scrollToElement: scrollToElement
  };
}

if (commonJS) {
  module.exports = createSimpleScroll;
}
