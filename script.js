// Gump Canecas Landing - JS
const WHATSAPP_NUMBER = "5561993694651";

// Produtos base
const BASE_PRODUCTS = [
  {
    id: "time",
    name: "Coleção Times Mascote",
    price: 29.99,
    imgs: [
      "./assets/times-mascote/13.png",
      "./assets/times-mascote/14.png",
      "./assets/times-mascote/15.png",
      "./assets/times-mascote/16.png",
      "./assets/times-mascote/17.png",
      "./assets/times-mascote/19.png",
      "./assets/times-mascote/23.png",
      "./assets/times-mascote/22.png",

    ],
    desc: "",
    modelImageMap: {
      "Vasco": 0,
      "Flamengo": 1,
      "Atletico MG": 2,
      "Botafogo": 3,
      "Corinthians": 4,
      "Fluminense": 5,
      "São Paulo": 6,
      "Palmeiras": 7
    },
    variations: [
      { name: "Tamanho", options: ["325ml"] },
      { name: "Modelo", options: ["Vasco", "Flamengo", "Atletico MG", "Botafogo", "Corinthians", "Fluminense", "São Paulo", "Palmeiras"] }
    ]
  },
  {
    id: "bocao",
    name: "Coleção Bocão",
    price: 39.99,
    imgs: [
           "./assets/canecas-bocao/2.png",
           "./assets/canecas-bocao/3.png",
           "./assets/canecas-bocao/4.png",
           "./assets/canecas-bocao/5.png",
           "./assets/canecas-bocao/6.png",
           "./assets/canecas-bocao/7.png",
           "./assets/canecas-bocao/8.png",
           "./assets/canecas-bocao/9.png",

    ],
    desc: "",
    modelImageMap: {
      "Stich": 0,
      "Angel": 1,
      "Capivara": 2,
      "Gato": 3,
      "Goku": 4,
      "Vegeta": 5,
      "Simba": 6,
      "Shrek": 7
    },
    variations: [
      { name: "Tamanho", options: ["325ml"] },
      { name: "Modelo", options: ["Stich", "Angel", "Capivara", "Gato", "Goku", "Vegeta", "Simba", "Shrek"] }
    ]
  },
  {
    id: "seja-forte",
    name: "Canecas Seja Forte",
    price: 29.99,
    imgs: ["./assets/canecas-seja-forte/1.png",
           "./assets/canecas-seja-forte/2.png",
           "./assets/canecas-seja-forte/3.png",

    ],
    desc: "",
    modelImageMap: {
      "Justin Bieber": 0,
      "Luan Santana": 1,
      "Virginia": 2,
    },
    variations: [
      { name: "Tamanho", options: ["325ml"] },
      { name: "Modelo", options: ["Justin Bieber", "Luan Santana", "Virginia"] }
    ]
  },
  {
    id: "dia-maes",
    name: "Coleção Dia das Mães",
    price: 29.99,
    imgs: [ 
          "./assets/dia-maes/26.png",
          "./assets/dia-maes/27.png",
          "./assets/dia-maes/28.png",
          "./assets/dia-maes/29.png",
          "./assets/dia-maes/30.png",
          "./assets/dia-maes/31.png"
          ,],
     desc: "",
    modelImageMap: {
      "Opção 1": 0,
      "Opção 2": 1,
      "Opção 3": 2,
      "Opção 4": 3,
      "Opção 5": 4,
      "Opção 6": 5
    },
    variations: [
      { name: "Tamanho", options: ["325ml"] },
      { name: "Modelo", options: ["Opção 1", "Opção 2", "Opção 3", "Opção 4", "Opção 5", "Opção 6"] }
    ]
  },
  {
    id: "casal",
    name: "Kit Casal (2 canecas)",
    price: 79.90,
    imgs: ["./assets/caneca-casal.png", "./assets/caneca-casal-2.png"],
    desc: "Duas canecas combinando. Ideal para presente.",
    variations: [
      { name: "Tamanho", options: ["325ml", "500ml"] },
      { name: "Tema", options: ["Romântico", "Divertido", "Minimalista"] }
    ]
  },
  {
    id: "corp",
    name: "Caneca Corporativa",
    price: 49.90,
    imgs: ["./assets/caneca-corporativa.png", "./assets/caneca-corporativa-2.png"],
    desc: "Para empresas e eventos (desconto por quantidade).",
    variations: [
      { name: "Tamanho", options: ["325ml", "500ml", "1L"] },
      { name: "Acabamento", options: ["Brilhante", "Fosco"] },
      { name: "Quantidade", options: ["1–9 unid.", "10–29 unid.", "30+ unid."] }
    ]
  }
];

// Produtos base
const BASE_PRODUCTS2 = [
  {
    id: "dindo",
    name: "Caneca Dindo e Dinda",
    price: 29.99,
    imgs: [
      "./assets/diversos/dindo.png",
      "./assets/diversos/dindo.png"
    ],
    desc: "",
    modelImageMap: {
      "Dinda": 0,
      "Dindo": 1,
    },
    variations: [
      { name: "Tamanho", options: ["325ml"] },
      { name: "Modelo", options: ["Dindo", "Dinda"] }
    ]
  },
  {
    id: "harry-potter",
    name: "Caneca Harry Potter Alça Coração",
    price: 37.99,
    imgs: [
      "./assets/diversos/harry-potter.png",
    ],
    desc: "",
    variations: [
      { name: "Tamanho", options: ["325ml"] }
    ]
  },
  {
    id: "nome",
    name: "Caneca com Nome + Frase",
    price: 42.90,
    imgs: ["./assets/caneca-nome.png", "./assets/caneca-nome-2.png", "./assets/caneca-nome-3.png"],
    desc: "Nome, frase e cores do seu jeito.",
    variations: [
      { name: "Tamanho", options: ["325ml", "500ml"] },
      { name: "Cor do fundo", options: ["Branca", "Rosa", "Azul", "Roxa", "Preta"] },
      { name: "Acabamento", options: ["Brilhante", "Fosco"] }
    ]
  },
  {
    id: "aniver",
    name: "Caneca Aniversário",
    price: 44.90,
    imgs: ["./assets/caneca-aniversario.png", "./assets/caneca-aniversario-2.png"],
    desc: "Data + mensagem especial para presentear.",
    variations: [
      { name: "Tamanho", options: ["325ml", "500ml"] },
      { name: "Cor do fundo", options: ["Branca", "Rosa", "Dourada"] }
    ]
  },
  {
    id: "casal",
    name: "Kit Casal (2 canecas)",
    price: 79.90,
    imgs: ["./assets/caneca-casal.png", "./assets/caneca-casal-2.png"],
    desc: "Duas canecas combinando. Ideal para presente.",
    variations: [
      { name: "Tamanho", options: ["325ml", "500ml"] },
      { name: "Tema", options: ["Romântico", "Divertido", "Minimalista"] }
    ]
  },
  {
    id: "corp",
    name: "Caneca Corporativa",
    price: 49.90,
    imgs: ["./assets/caneca-corporativa.png", "./assets/caneca-corporativa-2.png"],
    desc: "Para empresas e eventos (desconto por quantidade).",
    variations: [
      { name: "Tamanho", options: ["325ml", "500ml", "1L"] },
      { name: "Acabamento", options: ["Brilhante", "Fosco"] },
      { name: "Quantidade", options: ["1–9 unid.", "10–29 unid.", "30+ unid."] }
    ]
  }
];

// Seções independentes
const SECTION1_PRODUCTS = structuredClone(BASE_PRODUCTS).map(p => ({ ...p, sectionKey: "s1", uniqueId: `s1-${p.id}` }));
const SECTION2_PRODUCTS = structuredClone(BASE_PRODUCTS2).map(p => ({ ...p, sectionKey: "s2", uniqueId: `s2-${p.id}` }));
const ALL_PRODUCTS = [...SECTION1_PRODUCTS, ...SECTION2_PRODUCTS];

let cart = loadCart();
let cartNotes = localStorage.getItem("gump_cart_notes") || "";

const elGrid       = document.getElementById("productGrid");
const elGrid2      = document.getElementById("productGrid2");
const elCartCount  = document.getElementById("cartCount");
const elDrawer     = document.getElementById("drawer");
const elCartItems  = document.getElementById("cartItems");
const elSubtotal   = document.getElementById("subtotal");
const elCartNotes  = document.getElementById("cartNotes");
const elSearch     = document.getElementById("search");
const elSearch2    = document.getElementById("search2");
const elSort       = document.getElementById("sort");
const elSort2      = document.getElementById("sort2");
const elCustomerName = document.getElementById("customerName");
const elCustomerObs  = document.getElementById("customerObs");

function brl(v){ return v.toLocaleString("pt-BR",{style:"currency",currency:"BRL"}); }
function saveCart(){ localStorage.setItem("gump_cart", JSON.stringify(cart)); }
function loadCart(){ try{ return JSON.parse(localStorage.getItem("gump_cart")||"{}"); }catch(e){ return {}; } }
function cartCount(){ return Object.values(cart).reduce((a,b)=>a + (Number(b?.qty) || 0), 0); }
function cartSubtotal(){
  return Object.values(cart).reduce((sum,item)=>{
    const p = ALL_PRODUCTS.find(x=>x.uniqueId===item.uniqueId);
    return sum + (p ? p.price * (Number(item?.qty) || 0) : 0);
  },0);
}
function getVariationImageIndex(product, variations = {}){
  if(product?.modelImageMap && variations?.["Modelo"] in product.modelImageMap){
    return product.modelImageMap[variations["Modelo"]];
  }
  return 0;
}
function getCartItemImage(product, variations = {}){
  const idx = getVariationImageIndex(product, variations);
  return product.imgs?.[idx] || product.imgs?.[0] || "";
}
function openDrawer(){ elDrawer.classList.add("show"); elDrawer.setAttribute("aria-hidden","false"); }
function closeDrawer(){ elDrawer.classList.remove("show"); elDrawer.setAttribute("aria-hidden","true"); }

function addToCart(uniqueId, variations){
  const key = uniqueId + (variations ? "__" + Object.entries(variations).map(([k,v])=>`${k}:${v}`).join("|") : "");
  if(cart[key]){
    cart[key].qty++;
  } else {
    cart[key] = { uniqueId, qty: 1, variations: variations || {} };
  }
  saveCart();
  renderCart();
  openDrawer();
}

function setQty(key, qty){
  if(qty <= 0) delete cart[key];
  else cart[key].qty = qty;
  saveCart();
  renderCart();
}

function clearCartFn(){
  cart = {};
  saveCart();
  renderCart();
}

function buildWhatsMessage(){
  const name   = (elCustomerName?.value||"").trim();
  const obsTop = (elCustomerObs?.value||"").trim();
  const notes  = (elCartNotes?.value||"").trim();

  const lines = [];
  lines.push("Olá! Quero fazer um pedido na Gump Canecas ☕");
  if(name) lines.push(`Nome: ${name}`);
  lines.push("");
  lines.push("Itens:");

  Object.entries(cart).forEach(([key,item],idx)=>{
    const p = ALL_PRODUCTS.find(x=>x.uniqueId===item.uniqueId);
    if(!p) return;
    let line = `${idx+1}) ${p.name} — ${item.qty}x (${brl(p.price)})`;
    const vars = Object.entries(item.variations||{});
    if(vars.length) line += ` | ${vars.map(([k,v])=>`${k}: ${v}`).join(", ")}`;
    lines.push(line);
  });

  lines.push("");
  lines.push(`Subtotal: ${brl(cartSubtotal())}`);
  lines.push("Entrega: a combinar");
  lines.push("");

  const obsBlock = [obsTop,notes].filter(Boolean).join(" | ");
  if(obsBlock){ lines.push("Observações:"); lines.push(obsBlock); lines.push(""); }
  lines.push("Pode me passar as opções de pagamento e prazo?");
  return lines.join("\n");
}

function openWhatsApp(message){
  if(!WHATSAPP_NUMBER||WHATSAPP_NUMBER.includes("SEUNUMEROAQUI")){
    alert("Falta configurar o número do WhatsApp no script.js.");
    return;
  }
  window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`,"_blank","noopener");
}

function renderCart(){
  elCartCount.textContent = String(cartCount());
  elCartNotes.value = cartNotes;

  const entries = Object.entries(cart);
  if(entries.length===0){
    elCartItems.innerHTML=`<div class="empty">Seu carrinho está vazio. Adicione uma caneca 🙂</div>`;
  } else {
    elCartItems.innerHTML = entries.map(([key,item])=>{
      const p = ALL_PRODUCTS.find(x=>x.uniqueId===item.uniqueId);
      if(!p) return "";
      const vars = Object.entries(item.variations||{});
      return `
        <div class="cart-item">
          <img src="${getCartItemImage(p, item.variations)}" alt="${p.name}">
          <div>
            <div class="cart-item__top">
              <div>
                <strong>${p.name}</strong>
                <div class="small muted">${brl(p.price)} • cada</div>
                <div class="small muted">${p.sectionKey === "s1" ? "Seção 1" : "Seção 2"}</div>
                ${vars.length ? `<div class="cart-item__vars">${vars.map(([k,v])=>`<span class="var-tag">${k}: ${v}</span>`).join("")}</div>` : ""}
              </div>
              <button class="icon-btn" data-remove="${key}" aria-label="Remover">🗑️</button>
            </div>
            <div class="qty">
              <button data-dec="${key}" aria-label="Diminuir">−</button>
              <span>${item.qty}</span>
              <button data-inc="${key}" aria-label="Aumentar">+</button>
            </div>
          </div>
        </div>`;
    }).join("");

    elCartItems.querySelectorAll("[data-inc]").forEach(btn=>{
      btn.addEventListener("click",()=>{ const k=btn.getAttribute("data-inc"); setQty(k,(cart[k]?.qty||0)+1); });
    });
    elCartItems.querySelectorAll("[data-dec]").forEach(btn=>{
      btn.addEventListener("click",()=>{ const k=btn.getAttribute("data-dec"); setQty(k,(cart[k]?.qty||0)-1); });
    });
    elCartItems.querySelectorAll("[data-remove]").forEach(btn=>{
      btn.addEventListener("click",()=>{ setQty(btn.getAttribute("data-remove"),0); });
    });
  }
  elSubtotal.textContent = brl(cartSubtotal());
}

function sortList(list, sortValue){
  const cloned = [...list];
  if(sortValue==="price-asc")  cloned.sort((a,b)=>a.price-b.price);
  if(sortValue==="price-desc") cloned.sort((a,b)=>b.price-a.price);
  if(sortValue==="name-asc")   cloned.sort((a,b)=>a.name.localeCompare(b.name));
  return cloned;
}

function buildCardsHtml(list, suffix=""){
  return list.map(p=>`
    <article class="card" data-id="${p.uniqueId}">
      <div class="card__gallery">
        <div class="gallery__track" id="gallery-${p.uniqueId}${suffix}">
          ${p.imgs.map((img,i)=>`<img class="gallery__img${i===0?" active":""}" src="${img}" alt="${p.name} foto ${i+1}">`).join("")}
        </div>
        ${p.imgs.length > 1 ? `
        <div class="gallery__dots" id="dots-${p.uniqueId}${suffix}">
          ${p.imgs.map((_,i)=>`<button class="gallery__dot${i===0?" active":""}" data-gallery-id="${p.uniqueId}${suffix}" data-product-id="${p.uniqueId}" data-index="${i}" aria-label="Foto ${i+1}"></button>`).join("")}
        </div>
        <button class="gallery__arrow gallery__arrow--prev" data-prev-gallery="${p.uniqueId}${suffix}" data-product-id="${p.uniqueId}">‹</button>
        <button class="gallery__arrow gallery__arrow--next" data-next-gallery="${p.uniqueId}${suffix}" data-product-id="${p.uniqueId}">›</button>
        ` : ""}
      </div>
      <div class="card__body">
        <div class="card__title">
          <div>
            <strong>${p.name}</strong>
            <div class="small">Personalizada</div>
          </div>
          <div class="price">${brl(p.price)}</div>
        </div>
        <p class="card__desc muted">${p.desc}</p>
        <div class="card__actions">
          <button class="btn" data-checkout="${p.uniqueId}">Adicionar ao carrinho</button>
        </div>
      </div>
    </article>
  `).join("");
}

function renderProducts(){
  const q1 = (elSearch?.value||"").trim().toLowerCase();
  const q2 = (elSearch2?.value||"").trim().toLowerCase();

  let list1 = SECTION1_PRODUCTS.filter(p=> (p.name+" "+p.desc).toLowerCase().includes(q1));
  let list2 = SECTION2_PRODUCTS.filter(p=> (p.name+" "+p.desc).toLowerCase().includes(q2));

  list1 = sortList(list1, elSort?.value||"featured");
  list2 = sortList(list2, elSort2?.value||"featured");

  if(elGrid) elGrid.innerHTML = buildCardsHtml(list1, "");
  if(elGrid2) elGrid2.innerHTML = buildCardsHtml(list2, "");

  document.querySelectorAll("[data-prev-gallery]").forEach(btn=>{
    btn.addEventListener("click",()=>{
      const galleryId = btn.getAttribute("data-prev-gallery");
      const productId = btn.getAttribute("data-product-id");
      galleryMove(galleryId, productId, -1);
    });
  });
  document.querySelectorAll("[data-next-gallery]").forEach(btn=>{
    btn.addEventListener("click",()=>{
      const galleryId = btn.getAttribute("data-next-gallery");
      const productId = btn.getAttribute("data-product-id");
      galleryMove(galleryId, productId, 1);
    });
  });
  document.querySelectorAll(".gallery__dot").forEach(btn=>{
    btn.addEventListener("click",()=>{
      const galleryId = btn.getAttribute("data-gallery-id");
      const productId = btn.getAttribute("data-product-id");
      const idx = parseInt(btn.getAttribute("data-index"));
      galleryGoto(galleryId, productId, idx);
    });
  });
  document.querySelectorAll("[data-checkout]").forEach(btn=>{
    btn.addEventListener("click",()=> openProductModal(btn.getAttribute("data-checkout")));
  });
}

const galleryState = {};
function galleryGoto(galleryId, productId, index){
  const p = ALL_PRODUCTS.find(x=>x.uniqueId===productId);
  if(!p) return;
  const total = p.imgs.length;
  const safeIdx = ((index % total) + total) % total;
  galleryState[galleryId] = safeIdx;

  const track = document.getElementById(`gallery-${galleryId}`);
  if(!track) return;
  track.querySelectorAll(".gallery__img").forEach((img,i)=> img.classList.toggle("active", i===safeIdx));

  const dotsEl = document.getElementById(`dots-${galleryId}`);
  if(dotsEl) dotsEl.querySelectorAll(".gallery__dot").forEach((d,i)=> d.classList.toggle("active", i===safeIdx));
}
function galleryMove(galleryId, productId, dir){
  const current = galleryState[galleryId] || 0;
  galleryGoto(galleryId, productId, current + dir);
}

let modalProductId = null;
let modalImgIndex  = 0;
let selectedVars   = {};

function openProductModal(uniqueId){
  const p = ALL_PRODUCTS.find(x=>x.uniqueId===uniqueId);
  if(!p) return;

  modalProductId = uniqueId;
  modalImgIndex  = 0;
  selectedVars   = {};

  const modal = document.getElementById("productModal");
  const modalImg = document.getElementById("modalMainImg");
  const modalThumbs = document.getElementById("modalThumbs");
  const modalTitle = document.getElementById("modalTitle");
  const modalPrice = document.getElementById("modalPrice");
  const modalDesc  = document.getElementById("modalDesc");
  const modalVars  = document.getElementById("modalVariations");
  const modalQty   = document.getElementById("modalQty");

  modalImg.src = p.imgs[0];
  modalImg.alt = p.name;

  modalThumbs.innerHTML = p.imgs.map((img,i)=>`
    <button class="modal-thumb${i===0?" active":""}" data-thumb-idx="${i}">
      <img src="${img}" alt="${p.name} ${i+1}">
    </button>
  `).join("");

  modalThumbs.querySelectorAll(".modal-thumb").forEach(btn=>{
    btn.addEventListener("click",()=>{
      const idx = parseInt(btn.getAttribute("data-thumb-idx"));
      modalImgIndex = idx;
      modalImg.src = p.imgs[idx];
      modalThumbs.querySelectorAll(".modal-thumb").forEach((b,i)=> b.classList.toggle("active",i===idx));
    });
  });

  document.getElementById("modalPrev").onclick = ()=>{
    modalImgIndex = ((modalImgIndex-1)+p.imgs.length)%p.imgs.length;
    modalImg.src = p.imgs[modalImgIndex];
    modalThumbs.querySelectorAll(".modal-thumb").forEach((b,i)=>b.classList.toggle("active",i===modalImgIndex));
  };
  document.getElementById("modalNext").onclick = ()=>{
    modalImgIndex = (modalImgIndex+1)%p.imgs.length;
    modalImg.src = p.imgs[modalImgIndex];
    modalThumbs.querySelectorAll(".modal-thumb").forEach((b,i)=>b.classList.toggle("active",i===modalImgIndex));
  };

  modalTitle.textContent = p.name;
  modalPrice.textContent = brl(p.price);
  modalDesc.textContent  = p.desc;
  modalQty.textContent   = "1";

  modalVars.innerHTML = p.variations.map(varGroup=>`
    <div class="var-group">
      <div class="var-group__label">${varGroup.name}</div>
      <div class="var-group__options">
        ${varGroup.options.map(opt=>`
          <button class="var-option" data-var-name="${varGroup.name}" data-var-value="${opt}">${opt}</button>
        `).join("")}
      </div>
    </div>
  `).join("");

  modalVars.querySelectorAll(".var-option").forEach(btn=>{
    btn.addEventListener("click",()=>{
      const name = btn.getAttribute("data-var-name");
      const val  = btn.getAttribute("data-var-value");
      selectedVars[name] = val;
      modalVars.querySelectorAll(`.var-option[data-var-name="${name}"]`).forEach(b=>b.classList.remove("active"));
      btn.classList.add("active");

      if(name === "Modelo" && p.modelImageMap && Object.prototype.hasOwnProperty.call(p.modelImageMap, val)){
        const idx = p.modelImageMap[val];
        modalImgIndex = idx;
        modalImg.src = p.imgs[idx];
        modalThumbs.querySelectorAll(".modal-thumb").forEach((b,i)=> b.classList.toggle("active", i===idx));
      }

      checkModalReady();
    });
  });

  let qtyVal = 1;
  document.getElementById("modalQtyDec").onclick = ()=>{ if(qtyVal>1){ qtyVal--; modalQty.textContent=qtyVal; } };
  document.getElementById("modalQtyInc").onclick = ()=>{ qtyVal++; modalQty.textContent=qtyVal; };

  document.getElementById("modalAddToCart").onclick = ()=>{
    const requiredVars = p.variations.map(v=>v.name);
    const missing = requiredVars.filter(v=>!selectedVars[v]);
    if(missing.length){
      highlightMissing(missing);
      return;
    }
    for(let i=0;i<qtyVal;i++) addToCart(p.uniqueId, {...selectedVars});
    closeProductModal();
  };

  checkModalReady();
  modal.classList.add("show");
  modal.setAttribute("aria-hidden","false");
  document.body.style.overflow="hidden";
}

function checkModalReady(){
  const p = ALL_PRODUCTS.find(x=>x.uniqueId===modalProductId);
  if(!p) return;
  const requiredVars = p.variations.map(v=>v.name);
  const allSelected  = requiredVars.every(v=>selectedVars[v]);
  document.getElementById("modalAddToCart").disabled = false;
  document.getElementById("modalAddToCart").classList.toggle("btn--ready", allSelected);
}

function highlightMissing(names){
  names.forEach(name=>{
    const group = document.querySelector(`.var-group:has([data-var-name="${name}"])`);
    if(group){ group.classList.add("var-group--error"); setTimeout(()=>group.classList.remove("var-group--error"),900); }
  });
}
function closeProductModal(){
  const modal = document.getElementById("productModal");
  modal.classList.remove("show");
  modal.setAttribute("aria-hidden","true");
  document.body.style.overflow="";
}

document.getElementById("cartOpen").addEventListener("click",()=>{ renderCart(); openDrawer(); });
document.getElementById("cartClose").addEventListener("click", closeDrawer);
document.getElementById("drawerBackdrop").addEventListener("click", closeDrawer);
document.getElementById("btnOpenCartFromHero").addEventListener("click",()=>{ renderCart(); openDrawer(); });

document.getElementById("clearCart").addEventListener("click",()=>{ if(confirm("Limpar o carrinho?")) clearCartFn(); });
document.getElementById("checkoutWhats").addEventListener("click",()=>{
  if(cartCount()===0){ alert("Seu carrinho está vazio 🙂"); return; }
  cartNotes = elCartNotes.value||"";
  localStorage.setItem("gump_cart_notes", cartNotes);
  openWhatsApp(buildWhatsMessage());
});

document.getElementById("btnBudget").addEventListener("click",()=>{
  openWhatsApp("Olá! Quero um orçamento de caneca personalizada ☕\n\nPode me dar mais detalhes sobre valores e prazos?");
});

["btnWhatsHeader","btnWhatsFooter"].forEach(id=>{
  const el = document.getElementById(id);
  if(!el) return;
  el.addEventListener("click",(e)=>{ e.preventDefault(); openWhatsApp("Olá! Vim pela landing page da Gump Canecas ☕"); });
});

document.getElementById("modalBackdrop").addEventListener("click", closeProductModal);
document.getElementById("modalClose").addEventListener("click", closeProductModal);
document.addEventListener("keydown",(e)=>{ if(e.key==="Escape") closeProductModal(); });

elSearch.addEventListener("input", renderProducts);
elSort.addEventListener("change", renderProducts);
if(elSearch2) elSearch2.addEventListener("input", renderProducts);
if(elSort2) elSort2.addEventListener("change", renderProducts);
elCartNotes.addEventListener("input",()=>{ cartNotes=elCartNotes.value||""; localStorage.setItem("gump_cart_notes",cartNotes); });

renderProducts();
renderCart();
