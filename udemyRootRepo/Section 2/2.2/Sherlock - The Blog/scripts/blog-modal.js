class BlogModal extends HTMLElement {
    static get observedAttributes() {//VERY IMPORTANT!!!
        return ['title', 'content'];
    }

    constructor() {
        super();
        this.attachShadow({mode: 'open'});
    }
    
    connectedCallback() {
        this.render();
    }

    attributeChangedCallback(attrName, oldValue, newValue) {
        if(oldValue !== newValue) { this[attrName] = newValue; }
        this.render();// no change detection here so we have to rerender.
    }

    //needed getter and setter for custom(anyName) attributes _title | content _
    get title() { return this.getAttribute('title'); }
    get content() { return this.getAttribute('content');}
    set title(title_attr) {
        if(title_attr) {
            this.setAttribute('title', title_attr)
        } else {
            this.removeAttribute('title');
        }
    }
    set content(content_attr) {
        if(content_attr) {
            this.setAttribute('content', content_attr)
        } else {
            this.removeAttribute('content');
        }
    }



    render() {
        const { shadowRoot } = this;
        const templateNode = document.getElementById('modal-template');

        shadowRoot.innerHTML = '';
        if(templateNode) {
            const instance = document.importNode(templateNode.content, true);
            instance.querySelector('.title').innerHTML = this['title']; //
            instance.querySelector('.content').innerHTML = this['content'];// class attributes names .
            //could be attributes types!! so we don't need to hardcode

            shadowRoot.appendChild(instance);
        }
    }
}

customElements.define('blog-modal', BlogModal);