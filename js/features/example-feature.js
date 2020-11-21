import {Feature} from '../utilities/feature.js';

class ExampleFeature extends Feature {

        render() {
                this.state = {
                        text: 'Hello World!',
                        check: true,
                        numList: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
                };
                let state = this.state;

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
                HTML += '<div data-feature="example-embedded-feature"></feature>';
                return HTML;
        }

        style () {
                return `
                        .example-feature {
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
        ExampleFeature
}