// ==UserScript==
// @name backToWorkEvan
// @namespace http://twitter.com/evangoldin
// @description a userscript to help @evangoldin get off Facebook and back to work
// @match https://www.facebook.com/*
// @version 1.0
// ==/UserScript==

// do stuff

// new date object
var d = new Date();

// conditionals:
// if not weekend (sat or sun)
// if in work hours (9-6)
// if not https://www.facebook.com/groups/lyftdrivers/
// then redirect away from facebook
if (!(d.getDay() === 6 || d.getDay() === 0) && (d.getHours() > 8 && d.getHours() < 17) && !(window.location.pathname ===  '/groups/lyftdrivers/')) window.location = 'http://briznad.github.io/backToWorkEvan/';
