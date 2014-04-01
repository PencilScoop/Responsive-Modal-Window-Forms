/**
 * FormModalEffects.js v1.0.0
 * http:/www.pencilscoop.com
 *
 * Licensed under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 *
 * Copyright 2014, PencilScoop
 * http://www.pencilscoop.com
 */
var ModalEffects = (function () {

    function init() {

        var overlay = document.querySelector('.md-overlay');

        [].slice.call(document.querySelectorAll('.md-click')).forEach(function (el, i) {

            var modal = document.querySelector('#' + el.getAttribute('data-modal')),
                close = modal.querySelector('.md-close');

            function removeModal(hasPerspective) {
                classie.remove(modal, 'md-active');

                if (hasPerspective) {
                    classie.remove(document.documentElement, 'md-perspective');
                }
            }

            function removeModalHandler() {
                removeModal(classie.has(el, 'md-setperspective'));
            }

            el.addEventListener('click', function (ev) {
                classie.add(modal, 'md-active');
                overlay.removeEventListener('click', removeModalHandler);
                overlay.addEventListener('click', removeModalHandler);

                if (classie.has(el, 'md-setperspective')) {
                    setTimeout(function () {
                        classie.add(document.documentElement, 'md-perspective');
                    }, 25);
                }
            });

            close.addEventListener('click', function (ev) {
                    ev.stopPropagation();
                    removeModalHandler();
            });

        });

    }

    init();

})();

window.addEventListener(
    'load',
    function load() {
        window.removeEventListener('load', load, false);
        document.body.classList.remove('preload');
    },
    false);