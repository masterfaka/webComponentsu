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