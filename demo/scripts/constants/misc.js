'use strict';

var miscConstants = angular.module('miscConstants', []);
//set default options for RTE
miscConstants.constant('RteOptions', {
    valid_elements: "p,h3,br,ol,ul,li,strong/b,em/i",
    plugins: ["paste"],
    menubar: false,
    toolbar_items_size: 'small',
    toolbar: "undo redo | formatselect | bullist | bold italic",
    block_formats: "Paragraph=p;Header 3=h3",
    width: '100%',
    height: 300,
    resize: false
});


