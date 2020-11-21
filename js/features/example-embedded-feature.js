import {Feature} from '../utilities/feature.js';

class ExampleEmbeddedFeature extends Feature {

        render() {
                this.state = {
                        numList: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
                };
                let state = this.state;

                let HTML =  '<ul>';
                state.numList.forEach(function(num) {
                        HTML += `<li>${num}</li>`
                })
                HTML += '</ul>'
                return HTML;
        }

        style () {
                return `  
                `;
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
        ExampleEmbeddedFeature
}