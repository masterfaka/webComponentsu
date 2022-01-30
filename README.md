# webComponentsu

- basic read: https://blog.logrocket.com/what-happened-to-web-components/

### DOCs

- https://html.spec.whatwg.org/ (entrypoint)
- https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_shadow_DOM#working_through_a_simple_example
- https://html.spec.whatwg.org/multipage/custom-elements.html#custom-elements-autonomous-example

<details>
  <summary>Here’s the basic process of setting up a web component:
    </summary>
  <p></p>

- Create a MyElement class that extends the HTMLElementclass (using ES6 syntax since previous JavaScript versions don’t have a class syntax)
- Define the `<my-element></my-element>` custom HTML tag that will represent the MyElement JavaScript class in the HTML document. Here, you can use either the `CustomElementRegistry.define()` method or the DOM API’s `document.createElement()`method
- Attach a shadow DOM tree to the custom element’s constructor using the `Element.attachShadow()` method. This step is optional and only applicable when the web component has child elements — see a web component example without (`<flag-icon></flag-icon>`) and with (`<popup-info></popup-info>`) a shadow DOM
- Create an HTML template using the `<template> `tag. Place the reusable content of the custom MyElement web component within the template and append a clone of it to the shadow DOM. You can also add `<style> and <slot>` tags (the latter is for dynamic content within the template) to the template. This step is optional, too, you only have to add a template if you want/need to
- Import MyElement as an **ES6 module**
- You can use the `<my-element> </my-element>` web component on your page the same way as any standard HTML element

</details>


> it's a combination of SHadow DOM + Templates

- Shadow dom es independiente del dom(estilos) check ` 1.2 shadow-sample`
> const shadowRoot = document.getElementById('content').attachShadow({mode: 'open'});
        shadowRoot.innerHTML =....

- templates (`template` html tag + `importNode` + append it to any hmlt element(body)) check `1.4 index.html`

- check `/1.5/index.html` for full working example rendering **_shadow DOM template_**

## 2. Components LifeCycle hooks
 - <code>constructor()</code>//mandatory initial setup
    > not rendering nor fetch. eventsListeners + initial state + **_creating ShadowDOM_**
 - <code>connectedCallback()</code> //exec when it's added to the DOM
    > fetch + render + setAttributes
 - <code>disconectedCallback()</code> //when removed from DOM. check `/2.1/blog-card.js`
    > notyfy app + stop timers+ unsubscibe events .good practice
 - <code>attributeChangedCallback(name, oldValue, newValue)</code> //component upgraded, attributes updated. check `/2.2/blog-modal.js`
    > `static get observedAttributes` +  getter and setter to declare custom attributes
 - <code>addoptedCallback()</code>// when <code>document.adoptNode(element)</code> is called
    > NO CONSTRUCTOR is called. not destroyed in this process

> Styling and dynamic styling /2.3 & /2.4 sections check

## 3. Custom events
- <code> Element.addEventListener('evtName', handlerFunction )</code>// ` handlerFunc`can be arrow or anonymous
   > check /3.1/index.html js code comments

- <code> new CustomEvent(name, dataObject) + addEvtListner + dispatchEvent()</code>// 
   > check /3.2/index.html + blog-modal.js comments
- working example open close + HOW to pass DATA from parent to child component
> check /3.3/index.html + blog-modal.js comments

- > BoNUS ANIMATION:: simple spinner loader check video /3.4/ .css or with .js!!

## 4. implementing .js libs with webComponents
### /4.1 + /4.2 REact.js
-  // shadowDom == "Virtual Dom"
   - Remember: components can be **_declared as class or func_** check `/4.1/Main.js` vs `/4.1/components/BlogCardBody/BlogCardBody.js`. function components **DONT HAVE STATE!!**
   - i.g. `this.props.title` == `<BlogCardBody title="asdf">` this.props are the attributes
- reaCT ||VS|| WEBCOMPONENTS 
> frameworks insync components ||| encapsulation +reusability 
- check working example with integrated `/web-components `

### 4.3 Angular js
- check `/4.3/*` module import + template use + comments on logic and impòrta availability