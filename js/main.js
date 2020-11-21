import * as app from './utilities/app_v2.js';
import { lookup } from './utilities/registry.js'
// import {ArrayVisualizer} from './js/features/array-visualizer.js';
// import {ArrayVisualizer} from './js/features/array-visualizer.js';



document.addEventListener('DOMContentLoaded', function() {
        // app.init('.app');
        // app.render();
        var topNav = lookup('TopNav');
        var sortingVisualizer = lookup('SortingVisualizer');
        var bottomNav = lookup('BottomNav');

        var banner = lookup('Banner');
        var dialog = lookup('Dialog');
        var exampleFeature = lookup('ExampleFeature');

        window.ex = exampleFeature;
});

