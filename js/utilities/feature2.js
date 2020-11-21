const FeatureProto = {
        state: {},
        elements: {},
        features: {},
        mutations: {},
        parent: null,
        component: null,

        init: function(parentContainer='.app', stateString='{}') {
                state = JSON.parse(stateString);
                
                parent = document.querySelector(parentContainer);
                component = document.createElement('div');
                component.className = this.constructor.name.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
                console.log(this.component.className)
                parent.appendChild(this.component);

                mount()
        },

        mount: function() {
                let html = this.render();
                let style = this.style();

                //process template based on state
                component.innerHTML = html;
                component.style = style;
                bindElements();
                addMutationHandlers();
                addEventListeners();
        },

        bindElements: function() {
                console.log(component.querySelectorAll('[data-element]'));
                let elemList = component.querySelectorAll('[data-element]');
                for (let i = 0; i < elemList.length; i++) {
                        elements[elemList[i].dataset.element] = elemList[i];
                }
        },

        setState: function(newState) {
                for (let key in newState) {
                        state[key] = newState[key];
                        if (mutations.hasOwnProperty(key)) {
                                let sideEffects = mutations[key];
                                sideEffects.forEach(function(mutator) {
                                        mutator();
                                });
                        }
                }
        },

        reactTo: function(state, mutator) {
                if (!mutations.hasOwnProperty(state)) {
                        mutations[state] = [];
                }
                mutations[state].push(mutator);
        },

        render() {
                state = {
                        text: 'Hello World!',
                        check: true,
                        numList: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
                };

                let HTML =  `
                        <h4 data-element="heading">One way binding: ${state['text']}</h4>
                        <input data-element="cbx" type="checkbox" id="two-way-binding" name="two-way-binding"
                                ${state['check'] ? 'checked' : ''}>
                        <label for="two-way-binding">
                                Two Way Binding -> <span data-element="span">${state['check'] ? 'checked' : 'unchecked'}</span>
                        </label>
                        <button>Event</button>
                `;
                state.numList.forEach(function(num) {
                        HTML += `<p>${num}</p>`
                })
                return HTML;
        },

        style: function() {
                return `
                        display: block;
                        width: 30%;
                        height: 30%;
                        overflow-y: scroll;

                        position: absolute;
                        top: 50%;
                        left: 50%;
                        z-index: 2;

                        background-color: red;
                        color: white;
                `;
        },

        addEventListeners: function() {
                // let self = this;

                elements.cbx.addEventListener('change', function(e) {
                        setState({check: e.target.checked});
                });
        }

        
}

const FeatureFactory = function(stateString) {
        let newFeature = Object.create(FeatureProto);

}