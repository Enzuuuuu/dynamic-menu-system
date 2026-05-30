(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function o(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerPolicy&&(i.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?i.credentials="include":r.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(r){if(r.ep)return;r.ep=!0;const i=o(r);fetch(r.href,i)}})();const d={primary:"#f2ca50",onPrimary:"#3c2f00",background:"#121414",surface:"#121414",surfaceContainer:"#1e2020",surfaceContainerLow:"#1a1c1c",surfaceContainerHigh:"#282a2b",onSurface:"#e2e2e2",onSurfaceVariant:"#d0c5af",outline:"#99907c",outlineVariant:"#4d4635",fontHeadline:"'Sora', sans-serif",fontBody:"'Inter', sans-serif"};function j(){const e=document.documentElement;e.classList.add("dark");const t={"--color-primary":d.primary,"--color-on-primary":d.onPrimary,"--color-background":d.background,"--color-surface":d.surface,"--color-surface-container":d.surfaceContainer,"--color-surface-container-low":d.surfaceContainerLow,"--color-surface-container-high":d.surfaceContainerHigh,"--color-on-surface":d.onSurface,"--color-on-surface-variant":d.onSurfaceVariant,"--color-outline":d.outline,"--color-outline-variant":d.outlineVariant,"--font-headline":d.fontHeadline,"--font-body":d.fontBody};for(const[o,n]of Object.entries(t))e.style.setProperty(o,n)}const k="/assets/banner-B76x9GS0.png",L="/assets/logo-CNT6RtHa.png",B="/assets/p1-D88TVUry.png",$="/assets/p10-Bm40NrJS.png",H="/assets/p11-RjmgFGve.png",S="/assets/p12-9BIyhEmA.png",N="/assets/p13-DMCi6QTP.png",T="/assets/p14-DFnTifmc.png",O="/assets/p15-Hj_DswLi.png",M="/assets/p16-CX0kjyNb.png",A="/assets/p17-BUzsvyei.png",D="/assets/p18-hF3Gd4k2.png",I="/assets/p19-Blpvnhk3.png",P="/assets/p2-DRmp1U7G.png",R="/assets/p20-Hg5XbjJv.png",q="/assets/p21-Cm6W4VjK.png",G="/assets/p22-DEdLa4V7.png",z="/assets/p23-CFihHZaz.png",F="/assets/p3-i33djWR8.png",V="/assets/p4-CZmmWICu.png",U="/assets/p5-CyFZO5MC.png",W="/assets/p6-BnkK8Urf.png",Z="/assets/p7-BsPHX_NC.png",Q="/assets/p8-XzSMS5-T.png",X="/assets/p9-CibYieZS.png",K=Object.assign({"./banner.png":k,"./logo.png":L,"./p1.png":B,"./p10.png":$,"./p11.png":H,"./p12.png":S,"./p13.png":N,"./p14.png":T,"./p15.png":O,"./p16.png":M,"./p17.png":A,"./p18.png":D,"./p19.png":I,"./p2.png":P,"./p20.png":R,"./p21.png":q,"./p22.png":G,"./p23.png":z,"./p3.png":F,"./p4.png":V,"./p5.png":U,"./p6.png":W,"./p7.png":Z,"./p8.png":Q,"./p9.png":X}),c=e=>K[`./${e}`],s={name:"smoky",fullName:"Smoky Grill Burger",city:"Recife - PE",address:"Av. Boa Viagem, 500 - Recife",phone:"5581999999999",hours:"Seg–Dom, 17h às 23h",closingHour:"23:00",openDays:[1,2,3,4,5,6,0],logo:c("logo.png"),banner:c("banner.png"),categories:[{id:"burgers",label:"🍔 Hambúrgueres",default:!0},{id:"combos",label:"🍟 Combos"},{id:"drinks",label:"🥤 Bebidas"},{id:"desserts",label:"🍦 Sobremesas"}],highlights:["p8","p5","p21","p22","p23"],products:[{id:"p1",category:"burgers",name:"Smoky Classic",description:"Pão brioche, burger 180g, cheddar cremoso e bacon crocante.",price:29.9,image:c("p1.png")},{id:"p2",category:"burgers",name:"Cheese Salad",description:"Burger artesanal, alface americana, tomate e molho da casa.",price:31.9,image:c("p2.png")},{id:"p3",category:"burgers",name:"Blue Smoke",description:"Burger 180g, queijo gorgonzola, cebola caramelizada e rúcula.",price:37.9,image:c("p3.png")},{id:"p9",category:"burgers",name:"Double Cheddar",description:"Dois burgers smash, cheddar extra e cebola crispy.",price:39.9,image:c("p9.png")},{id:"p10",category:"burgers",name:"Bacon Monster",description:"Burger artesanal, muito bacon e molho especial defumado.",price:41.9,image:c("p10.png")},{id:"p12",category:"burgers",name:"California Burger",description:"Burger bovino, avocado, tomate fresco e molho verde.",price:39.9,image:c("p12.png")},{id:"p13",category:"burgers",name:"Veggie Grill",description:"Hambúrguer vegetal, queijo, rúcula e molho pesto.",price:34.9,image:c("p13.png")},{id:"p14",category:"burgers",name:"BBQ House",description:"Burger 180g, onion rings e barbecue artesanal.",price:42.9,image:c("p14.png")},{id:"p15",category:"burgers",name:"Mexican Hot",description:"Burger com cheddar picante, chipotle e cebola crispy.",price:40.9,image:c("p15.png")},{id:"p16",category:"burgers",name:"Truffle Burger",description:"Burger premium, queijo suíço e creme trufado.",price:46.9,image:c("p16.png")},{id:"p17",category:"burgers",name:"Prime Angus",description:"Burger Angus, queijo prato, bacon e maionese especial.",price:47.9,image:c("p17.png")},{id:"p18",category:"burgers",name:"Green Burger",description:"Burger bovino, avocado e molho de ervas.",price:40.9,image:c("p18.png")},{id:"p19",category:"burgers",name:"Blue Cheese Deluxe",description:"Burger artesanal, gorgonzola e cebola caramelizada.",price:43.9,image:c("p19.png")},{id:"p20",category:"burgers",name:"Titan Burger",description:"Três carnes, cheddar duplo, bacon e molho especial.",price:54.9,image:c("p20.png")},{id:"p4",category:"combos",name:"Combo Classic",description:"Smoky Classic + fritas + refrigerante 350ml.",price:44.9,image:c("p4.png")},{id:"p5",category:"combos",name:"Combo BBQ",description:"BBQ House + onion rings + refrigerante.",price:49.9,image:c("p5.png")},{id:"p21",category:"combos",name:"Combo Crispy Chicken",description:"Chicken burger + fritas + refrigerante.",price:46.9,image:c("p21.png")},{id:"p22",category:"combos",name:"Combo Veggie",description:"Veggie Grill + batata rústica + suco natural.",price:45.9,image:c("p22.png")},{id:"p23",category:"combos",name:"Combo Família",description:"2 burgers, frita grande e 2 refrigerantes.",price:89.9,image:c("p23.png")},{id:"p6",category:"drinks",name:"Refrigerante Lata",description:"Coca-Cola, Guaraná ou Sprite.",price:6.5,image:c("p6.png")},{id:"p7",category:"drinks",name:"Suco Natural 500ml",description:"Laranja, limão ou maracujá.",price:10.9,image:c("p7.png")},{id:"p8",category:"desserts",name:"Brownie Supreme",description:"Brownie artesanal com sorvete e calda de chocolate.",price:16.9,image:c("p8.png")}]};function J({title:e,logo:t}){const o=document.createElement("header");return o.className=["bg-[var(--color-surface)]/95","border-b border-[var(--color-outline-variant)]/30","top-0 sticky flex justify-between items-center","w-full px-5 py-4 z-50"].join(" "),o.innerHTML=`
    <div class="w-8"></div>

    <div class="flex items-center gap-3">
      <img src="${t}"
           alt="Logo ${e}"
           class="hidden md:block w-9 h-9 rounded-full object-cover" />
      <h1 class="font-bold text-xl tracking-tight text-[var(--color-primary)]"
          style="font-family: var(--font-headline)">
        ${e.toUpperCase()}
      </h1>
    </div>

    <div class="w-8"></div>
  `,o}function Y(){return window.matchMedia("(min-width: 768px)").matches?te():ee()}function ee(){const e=document.createElement("div"),t=document.createElement("section");t.className="relative w-full h-64 md:h-80 overflow-hidden",t.innerHTML=`
    <img src="${s.banner}"
         alt="Banner"
         class="w-full h-full object-cover" />
    <div class="absolute inset-0 bg-gradient-to-t from-[var(--color-background)] via-[var(--color-background)]/60 to-transparent"></div>
    <div class="absolute -bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center">
      <div class="w-24 h-24 rounded-full border-4 border-[var(--color-background)] bg-[var(--color-surface)] overflow-hidden">
        <img src="${s.logo}" alt="Logo ${s.name}" class="w-full h-full object-cover" />
      </div>
    </div>
  `;const o=document.createElement("section");o.className="mt-16 px-5 text-center";const r=x()?`<span class="w-2 h-2 rounded-full bg-green-500 inline-block"></span>
       <span class="text-[var(--color-primary)] text-xs font-bold tracking-widest">
         ABERTO AGORA • FECHA ÀS ${s.closingHour}
       </span>`:`<span class="w-2 h-2 rounded-full bg-red-500 inline-block"></span>
       <span class="text-red-400 text-xs font-bold tracking-widest">FECHADO AGORA</span>`;return o.innerHTML=`
    <h2 class="text-2xl font-bold text-[var(--color-on-surface)]"
        style="font-family: var(--font-headline)">
      ${s.fullName}
    </h2>
    <div class="flex items-center justify-center gap-2 mt-2 text-[var(--color-on-surface-variant)] text-sm">
      <span class="material-symbols-outlined text-sm">location_on</span>
      <span>${s.city}</span>
    </div>
    <div class="mt-4 inline-flex items-center gap-2 bg-[var(--color-surface-container)] border border-[var(--color-outline-variant)]/30 px-4 py-1.5 rounded-full">
      ${r}
    </div>
  `,e.appendChild(t),e.appendChild(o),e}function te(){const t=x()?`<span class="w-2 h-2 rounded-full bg-green-500 inline-block"></span>
       <span class="text-[var(--color-primary)] text-xs font-bold tracking-widest">
         ABERTO AGORA • FECHA ÀS ${s.closingHour}
       </span>`:`<span class="w-2 h-2 rounded-full bg-red-500 inline-block"></span>
       <span class="text-red-400 text-xs font-bold tracking-widest">FECHADO AGORA</span>`,o=document.createElement("section");return o.className="relative w-full h-[60vh] flex items-center justify-center overflow-hidden",o.innerHTML=`
    <div class="absolute inset-0 z-0">
      <img src="${s.banner}"
           alt="Banner"
           class="w-full h-full object-cover opacity-60" />
      <div class="absolute inset-0 bg-gradient-to-t from-[var(--color-background)] via-transparent to-transparent"></div>
      <div class="absolute inset-0 bg-black/30"></div>
    </div>

    <div class="relative z-10 text-center px-5 max-w-4xl">
      <h2 class="text-5xl font-extrabold tracking-tight text-[var(--color-primary)] mb-4 drop-shadow-lg"
          style="font-family: var(--font-headline)">
        ${s.fullName.toUpperCase()}
      </h2>
      <p class="text-[var(--color-on-surface)] text-base max-w-2xl mx-auto mb-6"
         style="font-family: var(--font-body)">
        ${s.city} • ${s.hours}
      </p>
      <div class="inline-flex items-center gap-2 bg-[var(--color-surface-container)] border border-[var(--color-outline-variant)]/30 px-4 py-1.5 rounded-full mb-8">
        ${t}
      </div>
      <br/>
      <button class="bg-[var(--color-primary)] text-[var(--color-on-primary)] font-bold text-sm tracking-widest px-10 py-4 rounded-lg hover:opacity-90 transition-opacity"
              style="font-family: var(--font-body)"
              onclick="document.getElementById('product-list-section').scrollIntoView({ behavior: 'smooth' })">
        VER CARDÁPIO COMPLETO
      </button>
    </div>
  `,o}function x(){const e=new Date,t=e.getDay(),o=e.getHours(),[n]=s.closingHour.split(":").map(Number);return s.openDays.includes(t)&&o>=18&&o<n}function oe({onSelect:e}){var i;const t=document.createElement("nav");t.className="mt-8 px-5";const o=document.createElement("div");o.className="flex  gap-4 overflow-x-auto custom-scrollbar pb-2 md:justify-center";let n=((i=s.categories.find(a=>a.default))==null?void 0:i.id)??s.categories[0].id;function r(){o.innerHTML="",s.categories.forEach(a=>{const l=document.createElement("button"),u=a.id===n;l.className=["flex-none px-6 py-2.5 rounded-full text-xs font-bold tracking-widest","transition-all duration-200",u?"bg-[var(--color-primary)] text-[var(--color-on-primary)]":"bg-[var(--color-surface-container)] text-[var(--color-on-surface)] hover:opacity-80"].join(" "),l.textContent=a.label,l.style.fontFamily="var(--font-body)",l.addEventListener("click",()=>{n=a.id,r(),e(a.id)}),o.appendChild(l)})}return r(),t.appendChild(o),t}function g(e){return e.toLocaleString("pt-BR",{style:"currency",currency:"BRL",minimumFractionDigits:2})}let p=[];const b=[];function v(){b.forEach(e=>e(C()))}const f={subscribe(e){return b.push(e),()=>{const t=b.indexOf(e);t>-1&&b.splice(t,1)}},add(e){const t=p.find(o=>o.product.id===e.id);t?t.qty++:p.push({product:e,qty:1}),v()},remove(e){const t=p.findIndex(o=>o.product.id===e);t!==-1&&(p[t].qty--,p[t].qty<=0&&p.splice(t,1),v())},removeAll(e){p=p.filter(t=>t.product.id!==e),v()},clear(){p=[],v()},getState(){return C()}};function C(){const e=p.map(n=>({...n})),t=e.reduce((n,r)=>n+r.product.price*r.qty,0),o=e.reduce((n,r)=>n+r.qty,0);return{items:e,total:t,count:o}}function y({product:e,variant:t="list"}){return t==="highlight"?ne(e):t==="grid"?ae(e):re(e)}function ne(e){const t=document.createElement("div");return t.className=["flex-none w-[280px] bg-[var(--color-surface-container)]","border border-[var(--color-outline-variant)]/20 rounded-xl overflow-hidden"].join(" "),t.innerHTML=`
    <div class="relative h-44 overflow-hidden">
      <img src="${e.image}" alt="${e.name}" class="w-full h-full object-cover" />
    </div>
    <div class="p-4">
      <h4 class="font-semibold text-[var(--color-on-surface)] truncate"
          style="font-family: var(--font-headline)">${e.name}</h4>
      <p class="text-[var(--color-on-surface-variant)] text-sm line-clamp-1 mt-1">${e.description}</p>
      <div class="flex justify-between items-center mt-3">
        <span class="font-bold text-lg text-[var(--color-primary)]"
              style="font-family: var(--font-headline)">${g(e.price)}</span>
        <button class="js-add bg-[var(--color-primary)] text-[var(--color-on-primary)]
                       w-10 h-10 rounded-full flex items-center justify-center
                       hover:opacity-90 transition-opacity duration-200">
          <span class="material-symbols-outlined">add</span>
        </button>
      </div>
    </div>
  `,t.querySelector(".js-add").addEventListener("click",()=>f.add(e)),t}function re(e){const t=document.createElement("div");return t.className=["flex bg-[var(--color-surface-container-low)] p-3 rounded-xl","border border-[var(--color-outline-variant)]/20","hover:border-[var(--color-outline-variant)]/40 transition-colors duration-200"].join(" "),t.innerHTML=`
    <div class="w-24 h-24 rounded-lg overflow-hidden flex-none">
      <img src="${e.image}" alt="${e.name}" class="w-full h-full object-cover" />
    </div>
    <div class="ml-4 flex flex-col justify-between flex-grow">
      <div>
        <h4 class="font-semibold text-[var(--color-on-surface)]"
            style="font-family: var(--font-headline)">${e.name}</h4>
        <p class="text-[var(--color-on-surface-variant)] text-sm line-clamp-2 mt-1">${e.description}</p>
      </div>
      <div class="flex justify-between items-center mt-2">
        <span class="font-bold text-[var(--color-primary)]"
              style="font-family: var(--font-headline)">${g(e.price)}</span>
        <button class="js-add w-8 h-8 rounded-full border border-[var(--color-primary)]
                       text-[var(--color-primary)] flex items-center justify-center
                       hover:bg-[var(--color-primary)] hover:text-[var(--color-on-primary)]
                       transition-colors duration-200">
          <span class="material-symbols-outlined text-sm">add</span>
        </button>
      </div>
    </div>
  `,t.querySelector(".js-add").addEventListener("click",()=>f.add(e)),t}function ae(e){const t=document.createElement("div");return t.className=["flex flex-col bg-[var(--color-surface-container)]","border border-[var(--color-outline-variant)]/20 rounded-xl overflow-hidden","hover:border-[var(--color-outline-variant)]/50 transition-colors duration-200 group"].join(" "),t.innerHTML=`
    <div class="relative h-48 overflow-hidden flex-none">
      <img src="${e.image}" alt="${e.name}"
           class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
      ${e.badge?`
        <div class="absolute top-3 right-3 bg-[var(--color-primary)] text-[var(--color-on-primary)]
                    text-[10px] font-bold tracking-widest px-2 py-1 rounded"
             style="font-family: var(--font-body)">
          ${e.badge}
        </div>`:""}
    </div>
    <div class="p-5 flex flex-col flex-grow">
      <h4 class="font-semibold text-[var(--color-on-surface)] mb-2"
          style="font-family: var(--font-headline)">${e.name}</h4>
      <p class="text-[var(--color-on-surface-variant)] text-sm line-clamp-2 flex-grow">${e.description}</p>
      <div class="flex items-center justify-between mt-4">
        <span class="font-bold text-lg text-[var(--color-primary)]"
              style="font-family: var(--font-headline)">${g(e.price)}</span>
        <button class="js-add bg-[var(--color-primary)] text-[var(--color-on-primary)]
                       w-10 h-10 rounded-full flex items-center justify-center
                       hover:opacity-90 active:scale-90 transition-all duration-200">
          <span class="material-symbols-outlined">add</span>
        </button>
      </div>
    </div>
  `,t.querySelector(".js-add").addEventListener("click",()=>f.add(e)),t}const se=5,h=3;function ie({category:e}){const t=document.createElement("div");t.appendChild(le()),t.appendChild(oe({onSelect:n=>ce(n)}));const o=document.createElement("section");return o.className="mt-8",o.id="product-list-section",t.appendChild(o),E(o,e),t}function ce(e){const t=document.getElementById("product-list-section");t&&E(t,e)}function le(){const e=document.createElement("section");e.className="mt-8",e.innerHTML=`
    <div class="px-5 flex justify-between items-end mb-4">
      <h3 class="text-xl font-semibold text-[var(--color-on-surface)]"
          style="font-family: var(--font-headline)">Destaques</h3>
      
    </div>
  `;const t=document.createElement("div");t.className="flex gap-4 overflow-x-auto px-5 custom-scrollbar pb-4 md: flex md:justify-center";const o=document.createElement("div");return o.className="flex gap-4 overflow-x-auto px-5 custom-scrollbar pb-4",s.highlights.map(n=>s.products.find(r=>r.id===n)).filter(Boolean).slice(0,se).forEach(n=>{o.appendChild(y({product:n,variant:"highlight"}))}),t.appendChild(o),e.appendChild(t),e}function E(e,t){var i;const o=s.products.filter(a=>a.category===t),n=((i=s.categories.find(a=>a.id===t))==null?void 0:i.label)??"";if(e.innerHTML=`
    <h3 class="px-5 text-xl font-semibold text-[var(--color-on-surface)] mb-4"
        style="font-family: var(--font-headline)">
      ${n}
    </h3>
  `,o.length===0){const a=document.createElement("p");a.className="text-[var(--color-on-surface-variant)] text-sm text-center py-8",a.textContent="Nenhum produto nesta categoria ainda.",e.appendChild(a);return}if(o.length<=h){const a=document.createElement("div");a.className="flex flex-col gap-4 px-5",o.forEach(l=>{a.appendChild(y({product:l,variant:"list"}))}),e.appendChild(a);return}const r=document.createElement("div");r.className="flex gap-4 overflow-x-auto px-5 custom-scrollbar pb-4",de(o,h).forEach(a=>{const l=document.createElement("div");l.className="flex-none w-[calc(100vw-60px)] max-w-[420px] flex flex-col gap-4",a.forEach(u=>{l.appendChild(y({product:u,variant:"list"}))}),r.appendChild(l)}),e.appendChild(r)}function de(e,t){const o=[];for(let n=0;n<e.length;n+=t)o.push(e.slice(n,n+t));return o}let m=null;function pe(){const e=document.createElement("div");e.id="cart-backdrop",e.className=["fixed inset-0 bg-black/60 z-40 opacity-0 pointer-events-none","transition-opacity duration-300"].join(" "),e.addEventListener("click",w),document.body.appendChild(e),m=document.createElement("div"),m.id="cart-drawer",m.className=["fixed bottom-0 left-0 w-full z-50","bg-[var(--color-surface-container-high)] rounded-t-2xl","translate-y-full transition-transform duration-300 ease-out","max-h-[75vh] flex flex-col"].join(" "),m.innerHTML=`
    <div class="flex items-center justify-between px-5 py-4 border-b border-[var(--color-outline-variant)]/30">
      <h2 class="text-lg font-bold text-[var(--color-on-surface)]"
          style="font-family: var(--font-headline)">🛒 Seu Pedido</h2>
      <button id="cart-close"
              class="text-[var(--color-on-surface-variant)] hover:text-[var(--color-on-surface)] transition-colors">
        <span class="material-symbols-outlined">close</span>
      </button>
    </div>
    <div id="cart-items" class="overflow-y-auto flex-1 px-5 py-4 flex flex-col gap-3"></div>
    <div id="cart-footer" class="px-5 py-4 border-t border-[var(--color-outline-variant)]/30 hidden">
      <div class="flex justify-between items-center mb-4">
        <span class="text-[var(--color-on-surface-variant)] text-sm">Total</span>
        <span id="cart-total" class="text-xl font-bold text-[var(--color-primary)]"
              style="font-family: var(--font-headline)"></span>
      </div>
    </div>
  `,m.querySelector("#cart-close").addEventListener("click",w),document.body.appendChild(m),f.subscribe(ue)}function _(){document.getElementById("cart-backdrop").classList.remove("opacity-0","pointer-events-none"),m.classList.remove("translate-y-full"),document.body.style.overflow="hidden"}function w(){document.getElementById("cart-backdrop").classList.add("opacity-0","pointer-events-none"),m.classList.add("translate-y-full"),document.body.style.overflow=""}function ue({items:e,total:t,count:o}){const n=document.getElementById("cart-items"),r=document.getElementById("cart-footer"),i=document.getElementById("cart-total");if(n){if(n.innerHTML="",e.length===0){n.innerHTML=`
      <div class="flex flex-col items-center justify-center py-12 text-[var(--color-on-surface-variant)]">
        <span class="material-symbols-outlined text-5xl mb-3 opacity-40">shopping_cart</span>
        <p class="text-sm">Seu carrinho está vazio</p>
      </div>
    `,r.classList.add("hidden");return}r.classList.remove("hidden"),i.textContent=g(t),e.forEach(({product:a,qty:l})=>{const u=document.createElement("div");u.className=["flex items-center gap-3 bg-[var(--color-surface-container)] p-3 rounded-xl cart-item-enter"].join(" "),u.innerHTML=`
      <img src="${a.image}" alt="${a.name}"
           class="w-14 h-14 rounded-lg object-cover flex-none" />
      <div class="flex-grow min-w-0">
        <p class="font-semibold text-sm text-[var(--color-on-surface)] truncate"
           style="font-family: var(--font-headline)">${a.name}</p>
        <p class="text-xs text-[var(--color-on-surface-variant)]">${g(a.price)} /un.</p>
      </div>
      <div class="flex items-center gap-2 flex-none">
        <button class="js-dec w-7 h-7 rounded-full border border-[var(--color-outline-variant)]
                       text-[var(--color-on-surface-variant)] flex items-center justify-center
                       hover:border-[var(--color-primary)] hover:text-[var(--color-primary)] transition-colors">
          <span class="material-symbols-outlined text-sm">remove</span>
        </button>
        <span class="text-[var(--color-on-surface)] font-bold w-5 text-center text-sm">${l}</span>
        <button class="js-inc w-7 h-7 rounded-full bg-[var(--color-primary)] text-[var(--color-on-primary)]
                       flex items-center justify-center hover:opacity-90 transition-opacity">
          <span class="material-symbols-outlined text-sm">add</span>
        </button>
      </div>
    `,u.querySelector(".js-inc").addEventListener("click",()=>f.add(a)),u.querySelector(".js-dec").addEventListener("click",()=>f.remove(a.id)),n.appendChild(u)})}}function me(e,t,o){const n=e.map(({product:r,qty:i})=>`• ${i}x ${r.name} — ${g(r.price*i)}`);return[`🍔 *Pedido — ${o}*`,"",...n,"",`*Total: ${g(t)}*`,"","_Pedido gerado pelo cardápio digital_"].join(`
`)}function fe(e,t){const o=encodeURIComponent(t);window.open(`https://wa.me/${e}?text=${o}`,"_blank")}function ge(){const e=document.createElement("nav");e.className=["fixed bottom-0 left-0 w-full z-50","bg-[var(--color-surface-container)] border-t border-[var(--color-outline-variant)]/30","flex justify-between items-center px-5 py-4 gap-4"].join(" "),e.innerHTML=`
    <button id="btn-cart"
            class="relative flex flex-row items-center gap-2 text-[var(--color-on-surface)]
                   px-4 py-2 hover:opacity-70 transition-opacity duration-200 cursor-pointer">
      <span class="material-symbols-outlined">shopping_cart</span>
      <span class="text-xs font-bold tracking-widest" style="font-family: var(--font-body)">CARRINHO</span>
      <span id="cart-badge"
            class="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] font-bold
                   rounded-full w-5 h-5 flex items-center justify-center hidden">
        0
      </span>
    </button>

    <button id="btn-send"
            class="flex flex-row items-center gap-2 bg-[var(--color-primary)] text-[var(--color-on-primary)]
                   px-6 py-3 rounded-full hover:opacity-90 transition-opacity duration-200 cursor-pointer
                   disabled:opacity-40 disabled:cursor-not-allowed">
      <span class="material-symbols-outlined">send</span>
      <span class="text-xs font-bold tracking-widest" style="font-family: var(--font-body)">ENVIAR PEDIDO</span>
    </button>
  `;const t=e.querySelector("#cart-badge"),o=e.querySelector("#btn-send");return e.querySelector("#btn-cart").addEventListener("click",_),o.addEventListener("click",()=>{const{items:n,total:r,count:i}=f.getState();if(!x()){alert("Ops! O restaurante está fechado no momento. Por favor, tente novamente durante o horário de funcionamento.");return}if(i===0){_();return}const a=me(n,r,s.name);fe(s.phone,a)}),f.subscribe(({count:n})=>{n>0?(t.textContent=n>99?"99+":n,t.classList.remove("hidden"),t.classList.add("badge-pulse"),setTimeout(()=>t.classList.remove("badge-pulse"),300)):t.classList.add("hidden")}),e}function ve(){var r;j(),document.title=`${s.name} | Cardápio`;const e=document.getElementById("app");e.className="bg-[var(--color-background)] text-[var(--color-on-surface)] overflow-x-hidden min-h-screen";const t=((r=s.categories.find(i=>i.default))==null?void 0:r.id)??s.categories[0].id,o=J({title:s.name,logo:s.logo}),n=document.createElement("main");n.className="pb-32",n.appendChild(Y()),n.appendChild(ie({category:t})),n.appendChild(be()),n.appendChild(ye()),e.appendChild(o),e.appendChild(n),e.appendChild(ge()),pe()}function be(){const e=document.createElement("a");return e.href=`https://wa.me/${s.phone}`,e.target="_blank",e.className=["fixed bottom-24 right-5 bg-[#25D366] text-white","w-14 h-14 rounded-full flex items-center justify-center","hover:opacity-90 transition-opacity z-40 shadow-lg"].join(" "),e.innerHTML=`
    <svg class="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.771-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793 0-.853.448-1.273.607-1.446.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86.174.088.275.073.376-.043.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087.158.058 1.012.477 1.185.564.173.087.289.129.332.202.043.073.043.419-.101.824z"/>
    </svg>
  `,e}function ye(){const e=document.createElement("footer");return e.className=["bg-[var(--color-surface-container-lowest)] flex flex-col items-center text-center","p-8 border-t border-[var(--color-outline-variant)]/10 pb-32 w-full mt-8"].join(" "),e.innerHTML=`
    <div class="text-xl font-semibold text-secondary mb-4"
         style="font-family: var(--font-headline)">${s.name.toUpperCase()}</div>
    <div class="flex flex-col gap-2 text-sm text-[var(--color-on-surface-variant)]">
      <span>${s.address}</span>
      <span>${s.hours}</span>
    </div>
    <p class="mt-6 text-[10px] text-[var(--color-on-surface-variant)]/50">
      © ${new Date().getFullYear()} ${s.name}. Todos os direitos reservados.
    </p>
  `,e}document.addEventListener("DOMContentLoaded",ve);
