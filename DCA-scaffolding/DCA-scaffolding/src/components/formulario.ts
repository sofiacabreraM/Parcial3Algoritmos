
class Formulario extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode: "open"})
    }

    connectedCallback() {
        this.render()
    }
    
     
    render() {
        const userName = this.ownerDocument.createElement('');
        userName.textContent =  ``
        this.shadowRoot?.appendChild(userName);
    }
}

customElements.define('app-formulario', Formulario)
export default Formulario

