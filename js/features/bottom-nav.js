import {Feature} from '../utilities/feature.js';

class BottomNav extends Feature {

        render() {
                return `
                        <div class="footer"></div>
                `;
        }

        style () {
                return `
                        .app .footer {
                                display: block;
                                height: 4vh;
                                background-color: grey;
                        }
                `;
        }

        addEventListeners() {

        }

        addMutationHandlers() {

        }
}

export {
        BottomNav
}