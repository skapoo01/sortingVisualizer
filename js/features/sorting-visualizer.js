import {Feature} from '../utilities/feature.js';

class SortingVisualizer extends Feature {

        render() {
                return `
                        <div class="sorting-visualizer">
                                <div class="array-visualizer"></div>
                                <div class="controller"></div>
                                <feature></feature>
                        </div>
                `;
        }

        style () {
                return `
                        .app .sorting-visualizer {
                                display: block;
                                height: 88vh;
                        
                                background-color: black;
                        }

                        .app feature {
                                display: block;
                                height: 10px;
                                width: 10px;
                                z-index: 1000;
                                position: absolute;
                                left: 70px;
                                top: 70px;
                                background-color: white;
                        }
                `;
        }

        addEventListeners() {

        }

        addMutationHandlers() {

        }
}

export {
        SortingVisualizer
}