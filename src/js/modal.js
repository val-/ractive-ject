/**
* @author Valentin Agafonov <agafonov@sirena2000.ru>
* @name Ject
* @purpose new project template
*/

/*jslint browser: true, nomen: true */
/*global require, module, console, $, _, Promise*/

var Ractive = require('ractive'),
    modalTemplate = require('./templates/modal.html');

(function (window) {
    
    'use strict';


    var Modal = Ractive.extend({

        el: 'app',
        append: true,
        template: modalTemplate,

        onrender: function () {
            var self = this, resizeHandler;
            
            this.outer = this.find('.modal-outer');
            this.modal = this.find('.modal');

            // if the user taps on the background, close the modal
            this.on('close', function (event) {
                if (!this.modal.contains(event.original.target)) {
                    this.teardown();
                }
            });


            window.addEventListener('resize', resizeHandler = function () {
                self.center();
            }, false);
            this.on('teardown', function () {
                window.removeEventListener('resize', resizeHandler);
            }, false);
            this.center();
        },

        center: function () {
            var outerHeight, modalHeight, verticalSpace;
            outerHeight = this.outer.clientHeight;
            modalHeight = this.modal.clientHeight;
            verticalSpace = (outerHeight - modalHeight) / 2;
            this.modal.style.top = verticalSpace + 'px';
        }
    });
    
    module.exports = Modal;

}(window));
