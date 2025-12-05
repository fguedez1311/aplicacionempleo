
class DevJobsAvatar extends HTMLElement{
    constructor(){
        super()
        this.attachShadow({ mode: 'open' }) // Creamos Shadow DOM
        
    }
    createURL(service,username){
            return `https://unavatar.io/${service}/${username}`
    }
    render(){
        const service=this.getAttribute('service') ?? 'github'
        const username=this.getAttribute('username') ?? 'fguedez1311'
        const size=this.getAttribute('size') ?? '40'
        const url=this.createURL(service,username)
        this.shadowRoot.innerHTML=`
            <style>
                img{
                    border:10px solid blue;
                    width:${size}px;
                    height:${size}px
                    border-radius:9999px;
                }
            </style>
            <img 
                src="${url}"
                alt="Avaatar de ${username}"
                

            />
            
        
        `
    }
    connectedCallback(){
        this.render()
    }
}

customElements.define('devjobs-avatar', DevJobsAvatar)