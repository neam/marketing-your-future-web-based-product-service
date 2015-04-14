// Require Node modules in the browser thanks to Browserify: http://browserify.org
var bespoke = require('bespoke'),
  cube = require('bespoke-theme-cube'),
  keys = require('bespoke-keys'),
  touch = require('bespoke-touch'),
  pdf = require('bespoke-pdf'),
  bullets = require('bespoke-bullets'),
  backdrop = require('bespoke-backdrop'),
  scale = require('bespoke-scale'),
  hash = require('bespoke-hash'),
  progress = require('bespoke-progress'),
  state = require('bespoke-state'),
  forms = require('bespoke-forms');

// Bespoke.js
bespoke.from('article', [
  cube(),
  keys(),
  touch(),
  pdf(),
  bullets('li, .bullet'),
  backdrop(),
  scale(),
  hash(),
  progress(),
  state(),
  forms()
]);

// Prism syntax highlighting
// This is actually loaded from "bower_components" thanks to
// debowerify: https://github.com/eugeneware/debowerify
require('prism');

(function preloadBackgroundImages() {

  var matches, image,
    forEach = function(arrayLike, fn) {
      [].slice.call(arrayLike, 0).forEach(fn);
    };

  forEach(document.styleSheets, function(sheet) {
    forEach(sheet.rules, function(rule) {
      if (rule.style && rule.style.backgroundImage) {
        matches = rule.style.backgroundImage.match(/url\((.*)\)/);
        if (matches) {
          image = new Image();
          image.src = matches[1];
        }
      }
    });
  });

}());
