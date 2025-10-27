class LikeButton extends HTMLElement {
    constructor() {
        super();
        this.isliked = false;
        //implementation
    }


    connectedCallback() {
        this.innerHTML = `<label>👍<input type="checkbox"></label>`; 

        const likebtn = this.querySelector("label");
        likebtn.addEventListener("click" , () =>{
            preventDefault();
            this.isliked = !this.isliked;
        }
    )
    }

    disconnectedCallback() {
        //implementation
    }

    attributeChangedCallback(name, oldVal, newVal) {
        //implementation
    }

    adoptedCallback() {
        //implementation
    }

}

window.customElements.define('like-button', LikeButton);