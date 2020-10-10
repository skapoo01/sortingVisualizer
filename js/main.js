import * as app from './app.js';
import {Component} from './components/component.js'
// import {ArrayVisualizer} from './js/features/array-visualizer.js';
// import {ArrayVisualizer} from './js/features/array-visualizer.js';



document.addEventListener('DOMContentLoaded', function() {
        app.init('.app');
        app.render();

        var c = new Component();
        window.c = c;
});

