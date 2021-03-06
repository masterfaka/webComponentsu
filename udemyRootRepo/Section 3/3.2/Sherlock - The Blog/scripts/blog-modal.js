class BlogModal extends HTMLElement {
    static get observedAttributes() {
        return ['open', 'title', 'content'];
    }

    constructor() {
        super();
        this.attachShadow({mode: 'open'});
        this.close = new CustomEvent('close', {
            bubbles: true, // is escalated through all components
            cancelable: false,  //throught evt.preventDefaults
            detail: { //extra data
                open: false
            }
        })
    }
    
    connectedCallback() {
        this.render();
    }

    attributeChangedCallback(attrName, oldValue, newValue) {
        if(attrName !== 'open' && oldValue !== newValue) {
            this[attrName] = newValue;
        } else if(attrName === 'open') {
            this[attrName] = this.hasAttribute(attrName);
        }
        this.render();
    }

    render() {
        const { shadowRoot } = this;
        const templateNode = document.getElementById('modal-template');

        shadowRoot.innerHTML = '';
        if(templateNode) {
            const instance = document.importNode(templateNode.content, true);
            const close = instance.querySelector('.close');
            const wrapper = instance.querySelector('.wrapper');
            const closeEvent = this.close; //declared in constructor
            close.onclick = function() {
                console.log('Close was clicked');
                this.dispatchEvent(closeEvent); //evt is discpatched here(shadow dom)
            }
            shadowRoot.addEventListener('close', () => {
                console.log('Close was called');
                //evt could be captured  anywhere(parent component.. etc)
            })
            if(this['open'] === true) {
                instance.querySelector('.wrapper').classList.add('open');
            }
            instance.querySelector('.title').innerHTML = this['title'];
            instance.querySelector('.content').innerHTML = this['content'];
            shadowRoot.appendChild(instance);
        }
    }
}

customElements.define('blog-modal', BlogModal);