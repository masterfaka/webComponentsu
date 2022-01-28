/**
 * Here, we create a ES6 class which backs our <employee-presentation> tag,
 * lets call it EmployeePresentationElement (you could call it as you want !)
 *
 * It extends HTMLElement which already holds several methods and callbacks
 */
class EmployeePresentationElement extends HTMLElement {
  // We have to declare a custom constructor
  constructor() {
    // First, call super() to be sure everything was made alright
    super();

    // Then we can take care of our attributes
    const position = this.getAttribute("job-position");
    const fullName = this.getAttribute("full-name");
    const avatar = {
      service: this.getAttribute("avatar-service"),
      user: this.getAttribute("avatar-user"),
    };
    const avatarUrl = `https://avatars.io/${avatar.service}/${avatar.user}`;

    // Let's declare a Shadow DOM within our tag and our rendering will be done IN the Shadow DOM
    const shadow = this.attachShadow({ mode: "open" });

    // Let's find our template tag and extract the content from it
    const template = document.querySelector("#employee-presentation-template");
    // In order to activate this markup, we have to import it to the document and later to append it to the shadow DOM
    const content = document.importNode(template.content, true);

    content.querySelector("h3").textContent = fullName;
    content.querySelector("img").src = avatarUrl;
    content.querySelector("small").textContent = position;

    // Finaly, we can render the real DOM behind our custom tag
    shadow.appendChild(content);
  }
}

// We have to register our custom tag to window.customElements which lists all the custom tags we have.
window.customElements.define(
  "employee-presentation",
  EmployeePresentationElement
);
