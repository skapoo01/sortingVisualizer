import {Feature} from '../utilities/feature.js';

class TopNav extends Feature {

        render() {
                return `
                <div class="header">
                        <button type="button" class="banner-toggler">Banner</button>
                        <button type="button" class="dialog-toggler">Dialog</button>
                </div>
                `;
        }

        style () {
                return `
                        .app .header {
                                display: block;
                                height: 8vh;
                        
                                background-color: grey;
                        }
                        
                        .app .header .banner-toggler {
                                position: absolute;
                                right: 0;
                                display: 'inline-block';
                                width: 5rem;
                                padding-top: 0.5rem;
                                padding-bottom: 0.5rem;
                                margin-top: 1vh;
                                margin-right: 1vh;
                                text-align: center;
                        }
                        
                        .app .header .dialog-toggler {
                                position: absolute;
                                right: 6rem;
                                display: 'inline-block';
                                width: 5rem;
                                padding-top: 0.5rem;
                                padding-bottom: 0.5rem;
                                margin-top: 1vh;
                                margin-right: 1vh;
                                text-align: center;
                        }
                `;
        }

        addEventListeners() {

        }

        addMutationHandlers() {

        }
}

export {
        TopNav
}