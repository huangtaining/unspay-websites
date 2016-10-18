'use strict';

// var indexModel = require('modules/ui/model_index');
// indexModel.init();


var $ = require('jquery');
require('lib/ysbbase');
require('app/jquery.scroll');

var indexModel = new function() {

    var _self = this;

    _self.init = function() {

        $(document).ready(function() {

            // Twitter Bootstrap 3 carousel plugin
            $("#myCarousel").carousel();

            $('.beautify').hover(function() {
                console.log('dddd');
                $(this).addClass('active').siblings().removeClass('active');
            }, function() {
                $(this).siblings().removeClass('active');
            });

            $("#scrollDiv").Scroll({
                line: 1,
                speed: 500,
                timer: 3000,
                up: "but_up",
                down: "but_down"
            });

            console.log('from index.js');

        });
    }
};

module.exports = indexModel;
