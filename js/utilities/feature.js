/*
* Filename:     feature.js
* Author:       Siddharth Kapoor
* Date:         Oct 20, 2020
* Purpose:      Feature Class definition
*
* A feature is a collection of html elements and/or features. A feature has 
* the following data elements
*       1. state
*       2. elements
*       3. features
*       4. mutations
*
* The public interface is as follows
*       1. render()
*               Here a client can set state and compose html for the first
*               render
*
*       2. style()
*               Here client can create a stylesheet that will apply to the 
*               feature and its containing elements
*
*       3. setState(newState)
*               Here client can set the feature state in a controlled fashion
*               which will lead to seeting off of events registered as callbacks
*               for that state key
*        
*       4. reactTo(mutatedKey, callback)
*               for key in mutation with matching name in elements, register
*               callback.
*
* Sections
*       1. render 
*       2. style
*       3. create actions which change component or global state, or simply do
*          do something
*       4. react to feature state changes
*       5. react to global state changes
*/

import {lookup, tagToClassName} from './registry.js'

class Feature {
        // PRIVATE VARIABLES START----------------------------------------------
        #parentContainer = '.app'
        // PRIVATE VARIABLES END------------------------------------------------
        

        // PRIVATE METHODS START------------------------------------------------
        constructor(stateString = "{}", isFunctionalFeature = false, parentContainer='.app') {
                this.state = JSON.parse(stateString);
                this.elements = {};
                this.features = [];
                this.mutations = {};
                this.functional = isFunctionalFeature;
                
                this.parent = document.querySelector(parentContainer);
                
                this.component = document.createElement('div');
                this.component.className = this.constructor.name.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
                this.parent.appendChild(this.component)

                console.log(`inserting ${this.component.className} into ${parentContainer}`);

                this.mount()
        }

        mount() {
                let component = this.component;
                let html = this.render();
                let style = this.style();
                let featureStyleTag = document.createElement('style');

                //process template based on state
                component.innerHTML = html;
                featureStyleTag.type = 'text/css';
                featureStyleTag.id = component.className + '-styles';
                featureStyleTag.innerHTML = style;
                this.styleTag = featureStyleTag;
                document.querySelector('head').appendChild(featureStyleTag);
                
                this.initChildFeatures();
                this.bindElements();
                this.addMutationHandlers();
                this.addEventListeners();
        }

        initChildFeatures() {
                let featuresToInit = this.component.querySelectorAll('[data-feature]');
                if (featuresToInit.length > 0) {
                        console.log('to init: ', featuresToInit);
                        for (let i = 0; i < featuresToInit.length; i++) {
                                let featureTag = featuresToInit[i].dataset.feature;
                                let featureClass = tagToClassName(featureTag)
                                console.log('init feature with name: ', featureTag);
                                lookup(featureClass, '{}', false, '.'+this.component.className);
                        }
                }

                
        }

        bindElements() {
                let component = this.component;
                console.log(component.querySelectorAll('[data-element]'));
                let elemList = component.querySelectorAll('[data-element]');
                for (let i = 0; i < elemList.length; i++) {
                        this.elements[elemList[i].dataset.element] = elemList[i];
                }
        }
        // PRIVATE METHODS END--------------------------------------------------


        // PUBLIC METHODS START-------------------------------------------------
        setState(newState) {
                let state = this.state;
                let mutations = this.mutations;
                let isFunctionalFeature = this.functional;

                if (isFunctionalFeature) {
                        for (let key in newState) {
                                state[key] = newState[key];
                        }
                        this.render();
                } else {
                        for (let key in newState) {
                                state[key] = newState[key];
                                if (mutations.hasOwnProperty(key)) {
                                        let sideEffects = mutations[key];
                                        sideEffects.forEach(function(mutator) {
                                                mutator();
                                        });
                                }
                        }
                }
                
        }

        reactTo(state, mutator) {
                let mutations = this.mutations;

                if (!mutations.hasOwnProperty(state)) {
                        mutations[state] = [];
                }
                mutations[state].push(mutator);
        }
        // PUBLIC METHODS END---------------------------------------------------


        // OVERLOADED METHODS START---------------------------------------------
        render() {
                this.state = {};
                let HTML =  '';
                return HTML;
        }

        style() {
                return '';
        }

        addEventListeners() {

        }

        addMutationHandlers() {

        }
        // OVERLOADED METHODS END-----------------------------------------------


        // MUTATORS START-------------------------------------------------------
        // MUTATORS ENDS--------------------------------------------------------


        // EVENT HANDLERS START-------------------------------------------------
        // EVENT HANDLERS END---------------------------------------------------
        
}

export {
        Feature
}

/* Questions
*       1. How to embed features
*       2. How will features communicate with each other?
events, handlers, bindEvents, bindSelectors, store based events
how to add features
Proxies
State versus parameters

**
Application questions
1. switching pages but remembering page state - i.e. do  need to handle
unmounting features?
2. todo item versus lists -> how will list communicate with component?
3. sidebar with widgets - handle reordering? minimize and maximize?
4. Can features be reused? Like a menu? Make file menu, view menu, and so on?
5. Is there a ned for features to pass data back and forth?
6. What state should reside in component versus app state? Is there state that
        needs to reside in a parent feature? Like for example the control panel
        in sorting visualizer

        WHAT IF RENDER DOESN'T HAVE ANYTHING TO DO WITH STATE?
        That way render can be called to handle state changes and re-render the
        whole feature

Purpose of features
1. Compartmentalization
2. Reuse

Challenges
1. Where to house state
2. compartmentalization versus data sharing and efficiency 

Think about state in features/components
*/

