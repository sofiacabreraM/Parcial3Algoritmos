import "./components/export"


class AppContainer extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode: "open"})
    }

    connectedCallback() {
        this.render()
    }

    render() {
       

        const something = this.ownerDocument.createElement('h1');
        something.textContent =  `Formulario`
        this.shadowRoot?.appendChild(something);

        const titleuserName = this.ownerDocument.createElement('h3');
        titleuserName.textContent = `User-Name`
        this.shadowRoot?.appendChild(titleuserName);

        const userName = this.ownerDocument.createElement('input');
        userName.placeholder = "escribe tu nombre"
        this.shadowRoot?.appendChild(userName);

        const titlColor = this.ownerDocument.createElement('h3');
        titlColor.textContent = `Color`
        this.shadowRoot?.appendChild(titlColor);

        const color = this.ownerDocument.createElement('input');
        color.placeholder = `escribe un color`
        this.shadowRoot?.appendChild(color);

        const titleLetra = this.ownerDocument.createElement('h3');
        titleLetra.textContent = `letra`
        this.shadowRoot?.appendChild(titleLetra);

        const letra = this.ownerDocument.createElement('input');
        letra.placeholder = `escribe una letra`
        this.shadowRoot?.appendChild(letra);
    }
}

customElements.define('app-container', AppContainer)