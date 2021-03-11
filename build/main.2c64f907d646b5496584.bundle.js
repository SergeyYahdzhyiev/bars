(()=>{"use strict";function t(t={}){return"string"==typeof t?t:Object.keys(t).map((e=>`${e}: ${t[e]}`)).join(";")}function e(t="remove",e={},i){"remove"===t?Object.keys(e).forEach((t=>{i.target.style.removeProperty(t)})):Object.keys(e).forEach((t=>{i.target.style.setProperty(t,e[t])}))}class i{constructor(t){this.id=t.id,this.styles=t.styles,this.items=t.items,this.handleHoverEnter=this.handleHoverEnter.bind(this),this.handleHoverExit=this.handleHoverExit.bind(this)}init(){document.querySelectorAll(`#${this.id}-link`).forEach((t=>{t.addEventListener("mouseover",this.handleHoverEnter),t.addEventListener("mouseout",this.handleHoverExit)}))}handleHoverEnter(t){e("set",this.styles.hover,t)}handleHoverExit(t){e("remove",this.styles.hover,t)}itemsToHTML(e=[]){return e.map(((e,i)=>0===i?`\n              <li id="${this.id}-link" class="navbar-list-item active" style="${t(this.styles.item)};${t(this.styles.active)}">\n                <a href="#" class="navbar-link" style="${t(this.styles.link)}">${e}</a>\n              </li>`:`\n              <li id="${this.id}-link" class="navbar-list-item" style="${t(this.styles.item)}">\n                <a href="#" class="navbar-link" style="${t(this.styles.link)}">${e}</a>\n              </li>`)).join("")}toHTML(){return`\n          <nav class="navbar" id="${this.id}" style="${t(this.styles.nav)}">\n            <div class="logo" style="${t(this.styles.logo)}">[ LOGO ]</div>\n            <ul class="navbar-list" style="${t(this.styles.list)}">\n              ${this.itemsToHTML(this.items)}\n            </ul>\n          </nav>\n          `}}class n{constructor(t){this.options=t,this.navbar=new i(t)}init(){document.querySelector("main").insertAdjacentHTML("beforeend",this.toHTML()),this.navbar.init()}toHTML(){const{id:t,title:e}=this.options;return`\n      <section id="${t}" class="navbar-section-container">\n        <h3 class="bar-title">${e}</h3>\n        <div class="navbar-container">\n          ${this.navbar.toHTML()}\n        </div>\n        <button class="get-code-btn">Get Source</button>\n      </section>`}}[new n({id:"nav-1",title:"Simple Dark",styles:{nav:{display:"flex","justify-content":"space-between","align-items":"center",color:"white","background-color":"rgb(0, 0, 0)",height:"10vh"},logo:{"font-size":"24px","letter-spacing":"2px","padding-left":"1.5em"},list:{display:"flex","justify-content":"space-around",padding:"0 1em",height:"100%"},item:{display:"flex",transition:"background-color 200ms"},link:{"flex-direction":"column","align-items":"center","justify-content":"center",display:"flex",padding:"0 1.5em","font-size":"16px","text-decoration":"none",color:"white"},hover:{"background-color":"gray"},active:{"background-color":"gray"}},items:["Home","Contacts","About"]}),new n({id:"nav-2",title:"Simple Light",styles:{nav:{display:"flex","justify-content":"space-between","align-items":"center",color:"black","background-color":"rgb(255, 255, 255)",height:"10vh"},logo:{"font-size":"24px","letter-spacing":"2px","padding-left":"1.5em"},list:{display:"flex","justify-content":"space-around",padding:"0 1em",height:"100%"},item:{display:"flex",transition:"background-color 200ms"},link:{"flex-direction":"column","align-items":"center","justify-content":"center",display:"flex",padding:"0 1.5em","font-size":"16px","text-decoration":"none",color:"black"},hover:{"background-color":"lightgray"},active:{"background-color":"lightgray"}},items:["Home","Contacts","About"]}),new n({id:"nav-3",title:"Simple Blue",styles:{nav:{display:"flex","justify-content":"space-between","align-items":"center",color:"white","background-color":"blue",height:"10vh"},logo:{"font-size":"24px","letter-spacing":"2px","padding-left":"1.5em"},list:{display:"flex","justify-content":"space-around",padding:"0 1em",height:"100%"},item:{display:"flex",transition:"background-color 200ms"},link:{"flex-direction":"column","align-items":"center","justify-content":"center",display:"flex",padding:"0 1.5em","font-size":"16px","text-decoration":"none",color:"white"},hover:{"background-color":"darkblue"},active:{"background-color":"darkblue"}},items:["Home","Contacts","About"]})].forEach((t=>t.init()))})();