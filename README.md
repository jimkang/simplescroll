simplescroll
============

A very simple inertial scrolling module that puts together easing functions and a timer to smoothly scroll the page to where you want it.

Installation
------------

    npm install simplescroll

Usage
-----

Via script tags:

    <script src="simplescroll.js"></script>
    var simpleScroll = createSimpleScroll({
      d3: d3,
      easingFn: d3.ease('cubic'),
      timer: d3.timer
    });
    simpleScroll.scrollToElement(document.querySelect('#the-goal'), 500);

Via Browserify:

    var d3 = require('d3-selection');
    var ease = require('d3-ease');
    var timer = require('d3-timer').timer;
    var createSimpleScroll = require('simplescroll');

    var simpleScroll = createSimpleScroll({
      d3,
      easingFn: ease.easeCubicInOut,
      timer,
      root: document.body
    });
    simpleScroll.scrollToElement(document.querySelect('#the-goal'), 500);

You can also specify a third `marginAboveTargetElement` parameter to `scrollToElement` so that you can have a little head space over the element. e.g. If you pass 20, there will be 20px between the top of the view and the element that has been scrolled to.

Example
-------

[Here's an example.](https://jimkang.com/simplescroll/)

And [here's an explanation](http://bl.ocks.org/jimkang/e318dfad9c798a456ded) about how it works.

License
-------

MIT.
