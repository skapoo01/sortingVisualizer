class App {
        // PRIVATE VARIABLES START----------------------------------------------
        #parentContainer = 'body'
        // PRIVATE VARIABLES END------------------------------------------------
        

        // PRIVATE METHODS START------------------------------------------------
        constructor() {
                this.state = JSON.parse(stateString);
                this.elements = {};
                this.features = {};
                this.mutations = {};
                
                this.parent = document.querySelector(this.#parentContainer);
                this.component = document.createElement('div');
                this.component.className = this.constructor.name.toLowerCase();
                this.parent.appendChild(this.component)

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
                
                this.bindElements();
                this.addMutationHandlers();
                this.addEventListeners();
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
                let HTML =  `
                <div class="header">
                        <button type="button" class="banner-toggler">Banner</button>
                        <button type="button" class="dialog-toggler">Dialog</button>
                </div>
                <div class="sorting-visualizer">
                        <div class="array-visualizer"></div>
                        <div class="controller"></div>
                </div>
                <div class="footer"></div>

                <div class="banner"></div>
                <div class="dialog"></div>
                `;
                return HTML;
        }

        style() {
                return `
                        .feature {
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
                        }   
                `;
        }

        addEventListeners() {
                let self = this;

                this.elements.cbx.addEventListener('change', function(e) {
                        self.setState({check: e.target.checked});
                });
        }

        addMutationHandlers() {
                this.reactTo('check', this.checkHandler.bind(this));
        }
        // OVERLOADED METHODS END-----------------------------------------------


        // MUTATORS START-------------------------------------------------------
        checkHandler() {
                console.log('checkHandler, this = ', this);
                let check = this.state.check;
                let span = this.elements.span;
                let cbx = this.elements.cbx;
                if (check) {
                        span.innerText = 'checked';
                        cbx.checked = true;
                } else {
                        span.innerText = 'unchecked';
                        cbx.checked = false;
                }
        }
        // MUTATORS ENDS--------------------------------------------------------


        // EVENT HANDLERS START-------------------------------------------------
        // EVENT HANDLERS END---------------------------------------------------
        
}

export {
        Feature
}