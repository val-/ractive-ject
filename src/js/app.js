/**
* @author Valentin Agafonov <agafonov@sirena2000.ru>
* @name Ject
* @purpose new project template
*/

/*jslint browser: true, nomen: true */
/*global require, module, console, $, _, Promise*/

window._ = require('underscore');
if (!window.$) {
    window.$ = require('zepto-browserify').$;
}

var Modal = require('./modal.js');

(function (window) {
    
    'use strict';
            
    $(function () {
        
        $("#newJectPlaceholder button").text("Get started").click(function () {
            // We can now instantiate our modal
            var basicModal = new Modal({
                partials: {
                    modalContent: '<p>This is some important content!</p><a class="modal-button" on-click="okay">Okay</a>'
                }
            });

            basicModal.on('okay', function () {
                this.teardown();
            });
            
        });

    });

}(window));

