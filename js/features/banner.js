import {Feature} from '../utilities/feature.js';

class Banner extends Feature {

        render() {
                return `
                        <div class="banner"></div>
                `;
        }

        style () {
                return `
                        .app .banner {
                                position: fixed;
                                top: 8vh;
                                z-index: 1;
                                
                                display: block;
                                height: 5vh;
                                width: 100%;
                        
                                background-color: green;    
                        }
                `;
        }

        addEventListeners() {

        }

        addMutationHandlers() {

        }
}

export {
        Banner
}