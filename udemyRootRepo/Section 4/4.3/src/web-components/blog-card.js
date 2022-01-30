class BlogCard extends HTMLElement {
    static get observedAttributes() {
        return ['title', 'subtitle', 'cover'];
    }

    constructor() {
        super();
        this.attachShadow({mode: 'open'});
    }

    connectedCallback() { 
        this.render();
    }

    attributeChangedCallback(attrName, oldValue, newValue) {
        if(oldValue !== newValue && newValue !== null) {
            this[attrName] = newValue;
        }
        this.render();
    }

    render() {
        const { shadowRoot } = this;
        const templateNode = document.getElementById('card-template');
        const style = document.createElement('style');
        style.textContent = 
        `
        :host {
            display: flex;
            justify-content: center;
            width: 100%;
        }

        :host .title {
            margin: 0;
            font-size: 20px;
        }

        .cover {
            height: 100%;
            width: 100%;
            object-fit: cover;
        }

        .subtitle {
            color: #666;
            font-size: 15px;
        }

        .card {
            display: flex;
            flex-direction: column;
            align-items: center;
            border: 1px solid #ddd;
            width: 80%;
            height: 400px;
            box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
            background-color: #fff;
            justify-content: space-evenly;
            border-radius: 10px;
            cursor: pointer;
        }
        
        .header {
            height: 300px;
            width: 100%;
            border-bottom: 1px solid #ddd;
        }
        
        :host .content {
            box-sizing: border-box;
            width: 100%;
            margin: 0;
            padding: 0 10px;
        }
        `

        shadowRoot.innerHTML = '';
        if(templateNode) {
            const instance = templateNode.children[0].cloneNode(true); 
            //very important clash between content variable ina angular
            instance.querySelector('.title').innerHTML = this['title'];
            instance.querySelector('.subtitle').innerHTML = this['subtitle'];
            instance.querySelector('.cover').src = this['cover'];

            shadowRoot.appendChild(style); //Style hack needed 
            shadowRoot.appendChild(instance);
        } else {
            shadowRoot.innerHTML = '<p>Shadow Root failed. Please try again later.</p>';
        }
    }
}

//Check this used in html:: name is html selector tag(and filename)
customElements.define('blog-card', BlogCard);