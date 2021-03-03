
// IIFE - Immediately Invoked Function Expression
(function($, window, document) {
    "use strict";

    /* Global Init */
    function init() {
        navbar();
        relax();
    }

    // Listen for the jQuery ready event on the document
    $(function() {
        init();
    });

}(window.jQuery, window, document));
// The global jQuery object is passed as a parameter