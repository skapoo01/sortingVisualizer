import {Feature} from '../utilities/feature.js';

class Dialog extends Feature {

        render() {
                return `
                        <div class="dialog"></div>
                `;
        }

        style () {
                return `
                        .app .dialog {
                                position: fixed;
                                top: 30vh;
                                left: 10vw;
                                z-index: 1;
                        
                                display: block;
                                height: 40vh;
                                width: 80vw;
                        
                                background-color: blue;
                        }
                `;
        }

        addEventListeners() {

        }

        addMutationHandlers() {

        }
}

export {
        Dialog
}