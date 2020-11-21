import {TopNav} from '../features/top-nav.js';
import {BottomNav} from '../features/bottom-nav.js';
import {Banner} from '../features/banner.js';
import {Dialog} from '../features/dialog.js';
import {ExampleFeature} from '../features/example-feature.js';
import {ExampleEmbeddedFeature} from '../features/example-embedded-feature.js';
import {SortingVisualizer} from '../features/sorting-visualizer.js'


const registry = {
        TopNav,
        BottomNav,
        Banner,
        Dialog,
        ExampleFeature,
        ExampleEmbeddedFeature,
        SortingVisualizer
}

function lookup(featureName, ...args) {
        console.log('In lookup, args: ', ...args)
        return new registry[featureName](...args);
}

function tagToClassName(tagName) {
        let camelCased = tagName.replace(/-([a-z])/g, 
                        function (g) { return g[1].toUpperCase(); });
        let classCased = camelCased.charAt(0).toUpperCase() + camelCased.slice(1)
        return classCased
}

function classToTagName(className) {
        
}

export { 
        lookup,
        tagToClassName
}