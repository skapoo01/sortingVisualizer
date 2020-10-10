class Component {
        #parentContainer = '.app'

        constructor() {
                this.state = {
                        text: 'Hello World!',
                        check: true
                };
                this.features = {};
                
                this.parent = document.querySelector(this.#parentContainer);
                this.component = document.createElement('div');
                this.component.className = this.constructor.name.toLowerCase();
                this.parent.appendChild(this.component)

                this.render()
        }

        render() {
                let component = this.component;
                let template = this.html();
                let style = this.style();

                //process template based on state
                component.innerHTML = template;
                component.style = style;
                this.addEventListeners();
        }

        setState(newState) {
                let state = this.state;

                for (let key in newState) {
                        state[key] = newState[key];
                }

                this.render();
        }

        html() {
                let state = this.state;
                return `
                        <h4>One way binding: ${state['text']}</h4>
                        <input type="checkbox" id="two-way-binding" name="two-way-binding"
                                ${state['check'] ? 'checked' : ''}>
                        <label for="two-way-binding">Two Way Binding -> 
                                ${state['check'] ? 'checked' : 'unchecked'}</label>
                        <button>Event</button>
                `;
        }

        addEventListeners = function(e) {
                console.log('adding event listeners')
                let checkbox = document.querySelector('#two-way-binding');
                let thisInstance = this;
                checkbox.addEventListener('change', function(e) {
                        console.log('checkbox is ' + this.checked);
                        thisInstance.setState({check: this.checked})
                });
        }

        style() {
                return `
                        display: block;
                        width: 30%;
                        height: 30%;

                        position: absolute;
                        top: 50%;
                        left: 50%;
                        z-index: 2;

                        background-color: red;
                        color: white;
                `;
        }



}

export {
        Component
}