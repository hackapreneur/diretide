// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require bootstrap
//= require snap
//= require turbolinks
//= require_tree .

$(function() {
    var snapper = new Snap({
        element: document.getElementById('content')
    });

    var addEvent = function addEvent(element, eventName, func) {
        if (element.addEventListener) {
            return element.addEventListener(eventName, func, false);
        } else if (element.attachEvent) {
            return element.attachEvent("on" + eventName, func);
        }
    };

    addEvent(document.getElementById('open-left'), 'click', function () {
        if (snapper.state().state == "left") {
            snapper.close();
        } else {
            snapper.open('left');
        }
    });

})
