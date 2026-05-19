// Gump Personalizados Landing - JS
const WHATSAPP_NUMBER = "5561993694651";

// Produtos base
// Modelos de caneca
const BASE_PRODUCTS4 = [
  {
    id: "caneca-branca",
    name: "Caneca Branca",
    price: 29.99,
    imgs: ["./assets/tipos_canecas/11.png"],
    desc: "",
    variations: [
      { name: "Tamanho", options: ["330ml"] },
    ]
  },

  {
    id: "caneca-alca-interior-coloridos",
    name: "Caneca Alça e Interior Coloridos",
    price: 35.00,
    imgs: ["./assets/tipos_canecas/3.png"],
    desc: "Modelo 330ml colorido. Unidade R$ 35,00 • 10+ unidades por R$ 30,00.",
    variations: [
      { name: "Tamanho", options: ["330ml"] },
      { name: "Cor", options: ["Azul", "Rosa", "Verde", "Vermelho", "Preto"] }
    ]
  },
  {
    id: "caneca-colher-colorida",
    name: "Caneca com Colher e Interior Colorido",
    price: 45.00,
    imgs: ["./assets/tipos_canecas/4.png"],
    desc: "Modelo com colher 330ml. Unidade R$ 45,00 • 10+ unidades por R$ 40,00.",
    variations: [
      { name: "Tamanho", options: ["330ml"] },
      { name: "Cor", options: ["Rosa", "Verde", "Vermelho"] }
    ]
  },
  
  {
    id: "caneca-coracao-colorida",
    name: "Caneca Alça Coração Colorida",
    price: 40.00,
    imgs: ["./assets/tipos_canecas/5.png"],
    desc: "Modelo alça coração colorida 330ml. Unidade R$ 40,00 • 10+ unidades por R$ 35,00.",
    variations: [
      { name: "Tamanho", options: ["330ml"] },
      { name: "Cor", options: ["Rosa", "Azul", "Vermelho", "Preto"] }
    ]
  },
  {
    id: "caneca-magica",
    name: "Caneca Mágica",
    price: 40.00,
    imgs: ["./assets/tipos_canecas/6.png"],
    desc: "Modelo mágico 330ml. Unidade R$ 40,00 • 10+ unidades por R$ 35,00.",
    variations: [
      { name: "Tamanho", options: ["330ml"] }
    ]
  }
];
const BASE_PRODUCTS = [


  

  {
    id: "dia-namorados",
    name: "Coleção Dia dos Namorados",
    price: 29.99,
    imgs: [
      "./assets/diversos/boy.png",
      "./assets/diversos/girl.png"
    ],
    desc: "Presente romântico personalizado com nome, foto ou frase para surpreender quem você ama.",
    modelImageMap: {
      "Para namorado": 0,
      "Para namorada": 1
    },
    variations: [
      { name: "Tamanho", options: ["325ml"] },
      { name: "Modelo", options: ["Para namorado", "Para namorada"] }
    ]
  },
  
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
    id: "time-nome",
    name: "Coleção Times Nome e Número",
    price: 29.99,
    imgs: [
      "./assets/times-mascote/flamengo.png",
      "./assets/times-mascote/vasco.png",
      "./assets/times-mascote/corinthians.png",
      "./assets/times-mascote/sao-paulo.png",
      "./assets/times-mascote/santos.png",
      "./assets/times-mascote/palmeiras.png"

    ],
    desc: "",
    modelImageMap: {
      "Flamengo": 0,
      "Vasco": 1,
      "Corinthians": 2,
      "São Paulo": 3,
      "Santos": 4,
      "Palmeiras": 5
    },
    variations: [
      { name: "Tamanho", options: ["325ml"] },
      { name: "Modelo", options: ["Flamengo", "Vasco", "Corinthians", "São Paulo", "Santos", "Palmeiras"] }
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
    name: "Coleção Seja Forte",
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
  

];

// Produtos base
const BASE_PRODUCTS2 = [
  {
    id: "sua-arte",
    name: "Caneca Personalizada",
    price: 29.99,
    imgs: [
      "./assets/diversos/sua-arte.png"
    ],
    desc: "",
    variations: [
      { name: "Tamanho", options: ["325ml"] },

    ]
  },
  {
    id: "michael",
    name: "Caneca Michael Jackson",
    price: 29.99,
    imgs: [
      "./assets/diversos/michael.png",
      "./assets/diversos/michael2.png",
      "./assets/diversos/michael3.png",
    ],
    desc: "",
    variations: [
      { name: "Tamanho", options: ["325ml"] }
    ]
  },
    {
    id: "spfc",
    name: "Caneca São Paulo FC",
    price: 29.99,
    imgs: [
      "./assets/diversos/spfc.png",
      "./assets/diversos/spfc2.png",
      "./assets/diversos/spfc3.png",
    ],
    desc: "",
    variations: [
      { name: "Tamanho", options: ["325ml"] }
    ]
  },
  {
    id: "cereja",
    name: "Caneca Cereja",
    price: 29.99,
    imgs: [
      "./assets/diversos/cereja.png",
      "./assets/diversos/cereja2.png",
      "./assets/diversos/cereja3.png",
    ],
    desc: "",
    variations: [
      { name: "Tamanho", options: ["325ml"] }
    ]
  },
    {
    id: "maezona",
    name: "Caneca Mãezona",
    price: 29.99,
    imgs: [
      "./assets/diversos/maezona2.png",
      "./assets/diversos/maezona.png"
      
    ],
    desc: "",
    variations: [
      { name: "Tamanho", options: ["325ml"] }
    ]
  },
  {
    id: "gatos",
    name: "Caneca Memes de Gato",
    price: 29.99,
    imgs: [
      "./assets/diversos/gatos.png",
    ],
    desc: "",
    variations: [
      { name: "Tamanho", options: ["325ml"] }
    ]
  },
  {
    id: "fofoca",
    name: "Caneca Fofoca Aceito",
    price: 29.99,
    imgs: [
      "./assets/diversos/fofoca.png",
    ],
    desc: "",
    variations: [
      { name: "Tamanho", options: ["325ml"] }
    ]
  },
  {
    id: "paciencia",
    name: "Caneca Instalando Minha Paciência",
    price: 29.99,
    imgs: [
      "./assets/diversos/paciencia.png",
    ],
    desc: "",
    variations: [
      { name: "Tamanho", options: ["325ml"] }
    ]
  },
  {
    id: "the-last",
    name: "Caneca The Last of Us",
    price: 29.99,
    imgs: [
      "./assets/diversos/the-last.png",
      "./assets/diversos/the-last2.png",
    ],
    desc: "",
    variations: [
      { name: "Tamanho", options: ["325ml"] }
    ]
  },
     {
    id: "boyfriend",
    name: "I love My Boyfriend ou My girlfriend",
    price: 27.90,
    imgs: [
      "./assets/diversos/boy.png",
      "./assets/diversos/girl.png",

    ],
    desc: "",
    modelImageMap: {
      "My Boyfriend": 0,
      "My Girlfriend": 1,
    },
    variations: [
      { name: "Tamanho", options: ["325ml"] },
      { name: "Modelo", options: ["My Boyfriend", "My Girlfriend"] }
    ]
  },
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
    id: "cat-aaa",
    name: "Caneca Cat AAAA",
    price: 27.90,
    imgs: [
      "./assets/diversos/cat-aaa.png",
    ],
    desc: "",
    variations: [
      { name: "Tamanho", options: ["325ml"] }
    ]
  },
    {
    id: "ookemon",
    name: "Caneca Pokémon",
    price: 29.99,
    imgs: [
      "./assets/diversos/pokem.png",
    ],
    desc: "",
    variations: [
      { name: "Tamanho", options: ["325ml"] }
    ]
  },
  {
    id: "harry-potter",
    name: "Caneca Harry Potter Alça Coração",
    price: 39.90,
    imgs: [
      "./assets/diversos/harry-potter.png",
    ],
    desc: "",
    variations: [
      { name: "Tamanho", options: ["325ml"] }
    ]
  },
  {
    id: "spider",
    name: "Caneca Homem-Aranha",
    price: 37.90,
    imgs: ["./assets/diversos/spider-vermelho.png",
           "./assets/diversos/spider-preto.png",
           "./assets/diversos/spider-branca.png"
    ],
    desc: "",
    modelImageMap: {
      "Vermelho": 0,
      "Preto": 1,
      "Branco": 2
    },
    variations: [
      { name: "Tamanho", options: ["325ml"] },
      { name: "Cor", options: ["Vermelho", "Preto", "Branco"] }
    ]
  },
  {
    id: "crepusculo",
    name: "Caneca Crepusculo",
    price: 32.90,
    imgs: [
      "./assets/diversos/crepusculo.png",
    ],
    desc: "",
    variations: [
      { name: "Tamanho", options: ["325ml"] }
    ]
  },
  {
    id: "spider-miles",
    name: "Caneca Homem-Aranha Miles",
    price: 39.90,
    imgs: [
      "./assets/diversos/spider-miles.png",
    ],
    desc: "",
    variations: [
      { name: "Tamanho", options: ["325ml"] }
    ]
  },
    {
    id: "henrique-juliano",
    name: "Caneca Henrique e Juliano",
    price: 37.90,
    imgs: [
      "./assets/diversos/henrique-juliano.png",
    ],
    desc: "",
    variations: [
      { name: "Tamanho", options: ["325ml"] }
    ]
  },
   {
    id: "taylor-swift",
    name: "Caneca Taylor Swift",
    price: 37.90,
    imgs: [
      "./assets/diversos/taylor-swift.png",
    ],
    desc: "",
    variations: [
      { name: "Tamanho", options: ["325ml"] }
    ]
  },
   {
    id: "tse-tung",
    name: "Tsé Tung - Bolsonaro - Lula - Manoel Gomes",
    price: 29.99,
    imgs: [
      "./assets/tse-tung/bolsonaro.png",
      "./assets/tse-tung/lula.png",
      "./assets/tse-tung/xandao.png",
      "./assets/tse-tung/manuel.png"

    ],
    desc: "",
    modelImageMap: {
      "Bolsonaro": 0,
      "Lula": 1,
      "Xandão": 2,
      "Manuel Gomes": 3
    },
    variations: [
      { name: "Tamanho", options: ["325ml"] },
      { name: "Modelo", options: ["Bolsonaro", "Lula", "Xandão", "Manuel Gomes"] }
    ]
  },

  {
    id: "sonserina",
    name: "Caneca Sonserina",
    price: 29.99,
    imgs: [
      "./assets/diversos/sonserina.png",
    ],
    desc: "",
    variations: [
      { name: "Tamanho", options: ["325ml"] }
    ]
  },
    
  
];

// Garrafas personalizadas
const BASE_PRODUCTS3 = [
  {
    id: "garrafa-personalizada",
    name: "Garrafa Personalizada",
    price: 39.99,
    imgs: ["./assets/tipos_canecas/9.png"],
    desc: "Garrafa personalizada com nome, frase, foto ou logo. Ideal para presente, escola, academia e lembranças.",
    variations: [
      { name: "Tamanho", options: ["600ml"] },
    ]
  },
  {
    id: "garrafa-infantil",
    name: "Garrafa Infantil Personalizada",
    price: 49.99,
    imgs: ["./assets/tipos_canecas/10.png"],
    desc: "Modelo infantil para personalizar com nome, personagem, tema ou frase curta.",
    variations: [
      { name: "Tamanho", options: ["500ml"] },

    ]
  },

];




// Canecas de chopp
const BASE_PRODUCTS5 = [
  {
    id: "chopp-transparente",
    name: "Caneca de Chopp Transparente",
    price: 40.00,
    imgs: ["./assets/tipos_canecas/7.png"],
    desc: "Caneca de chopp em vidro. Unidade R$ 40,00 • 10+ unidades por R$ 35,00.",
    variations: [
      { name: "Modelo", options: ["Transparente"] }
    ]
  },
  {
    id: "chopp-jateada",
    name: "Caneca de Chopp Jateada",
    price: 45.00,
    imgs: ["./assets/tipos_canecas/8.png"],
    desc: "Caneca de chopp jateada. Unidade R$ 45,00 • 10+ unidades por R$ 40,00.",
    variations: [
      { name: "Modelo", options: ["Jateada"] }
    ]
  }
];

// Seções independentes
const SECTION1_PRODUCTS = structuredClone(BASE_PRODUCTS).map(p => ({ ...p, sectionKey: "s1", uniqueId: `s1-${p.id}` }));
const SECTION2_PRODUCTS = structuredClone(BASE_PRODUCTS2).map(p => ({ ...p, sectionKey: "s2", uniqueId: `s2-${p.id}` }));
const SECTION3_PRODUCTS = structuredClone(BASE_PRODUCTS3).map(p => ({ ...p, sectionKey: "s3", uniqueId: `s3-${p.id}` }));
const SECTION4_PRODUCTS = structuredClone(BASE_PRODUCTS4).map(p => ({ ...p, sectionKey: "s4", uniqueId: `s4-${p.id}` }));
const SECTION5_PRODUCTS = structuredClone(BASE_PRODUCTS5).map(p => ({ ...p, sectionKey: "s5", uniqueId: `s5-${p.id}` }));
const ALL_PRODUCTS = [...SECTION1_PRODUCTS, ...SECTION2_PRODUCTS, ...SECTION3_PRODUCTS, ...SECTION4_PRODUCTS, ...SECTION5_PRODUCTS];

// Descrições curtas para deixar os cards mais vendedores
ALL_PRODUCTS.forEach(product => {
  if(product.desc && product.desc.trim()) return;

  const name = product.name.toLowerCase();
  if(name.includes("namorado") || name.includes("namorada") || name.includes("namorados")){
    product.desc = "Presente romântico e personalizado para surpreender no Dia dos Namorados.";
  } else if(name.includes("mãe") || name.includes("maes") || name.includes("mães")){
    product.desc = "Presente especial para emocionar com nome, frase ou foto.";
  } else if(name.includes("time") || name.includes("fc")){
    product.desc = "Caneca temática 325ml para torcer ou presentear.";
  } else if(name.includes("garrafa")){
    product.desc = "Garrafa personalizada com nome, frase, foto ou logo.";
  } else if(name.includes("chopp")){
    product.desc = "Caneca de chopp personalizada, ótima para presente ou brindes.";
  } else if(name.includes("personalizada") || name.includes("sua arte")){
    product.desc = "Envie sua ideia, nome, frase ou foto e personalize do seu jeito.";
  } else {
    product.desc = "Produto personalizado, ideal para presente criativo.";
  }
});

let cart = loadCart();
let cartNotes = localStorage.getItem("gump_cart_notes") || "";
let activeCoupon = localStorage.getItem("gump_active_coupon") || null;
const COUPONS = {
  "GUMP10": 0.10
};

const elGrid       = document.getElementById("productGrid");
const elGrid2      = document.getElementById("productGrid2");
const elGrid3      = document.getElementById("productGrid3");
const elGrid4      = document.getElementById("productGrid4");
const elGrid5      = document.getElementById("productGrid5");
const elShowMore1  = document.getElementById("showMore1");
const elShowMore2  = document.getElementById("showMore2");
const elShowMore3  = document.getElementById("showMore3");
const elShowMore4  = document.getElementById("showMore4");
const elShowMore5  = document.getElementById("showMore5");
const elCartCount  = document.getElementById("cartCount");
const elDrawer     = document.getElementById("drawer");
const elCartItems  = document.getElementById("cartItems");
const elSubtotal   = document.getElementById("subtotal");
const elSubtotalBeforeDiscount = document.getElementById("subtotalBeforeDiscount");
const elDiscountRow = document.getElementById("discountRow");
const elDiscountValue = document.getElementById("discountValue");
const elCouponCode = document.getElementById("couponCode");
const elApplyCoupon = document.getElementById("applyCoupon");
const elCouponMessage = document.getElementById("couponMessage");
const elCartNotes  = document.getElementById("cartNotes");
const elSearch     = document.getElementById("search");
const elSearch2    = document.getElementById("search2");
const elSearch3    = document.getElementById("search3");
const elSearch4    = document.getElementById("search4");
const elSearch5    = document.getElementById("search5");
const elSort       = document.getElementById("sort");
const elSort2      = document.getElementById("sort2");
const elSort3      = document.getElementById("sort3");
const elSort4      = document.getElementById("sort4");
const elSort5      = document.getElementById("sort5");
const elCustomerName = document.getElementById("customerName");
const elCustomerObs  = document.getElementById("customerObs");
const PRODUCT_LIMIT = 18;
let sectionExpanded = { s1: false, s2: false, s3: false, s4: false, s5: false };

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
function getDiscount(){
  if(!activeCoupon || !COUPONS[activeCoupon]) return 0;
  return cartSubtotal() * COUPONS[activeCoupon];
}
function cartTotal(){
  return Math.max(cartSubtotal() - getDiscount(), 0);
}
function setCouponMessage(message, type = ""){
  if(!elCouponMessage) return;
  elCouponMessage.textContent = message || "";
  elCouponMessage.className = `coupon-message ${type ? `coupon-message--${type}` : ""}`.trim();
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
function escapeHtml(value){
  return String(value || "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function openDrawer(){ elDrawer.classList.add("show"); elDrawer.setAttribute("aria-hidden","false"); }
function closeDrawer(){ elDrawer.classList.remove("show"); elDrawer.setAttribute("aria-hidden","true"); }

function addToCart(uniqueId, variations, personalization = ""){
  const cleanPersonalization = (personalization || "").trim();
  const variationKey = variations ? Object.entries(variations).map(([k,v])=>`${k}:${v}`).join("|") : "";
  const personalizationKey = cleanPersonalization ? `__personalizacao:${cleanPersonalization}` : "";
  const key = `${uniqueId}__${variationKey}${personalizationKey}`;
  if(cart[key]){
    cart[key].qty++;
  } else {
    cart[key] = { uniqueId, qty: 1, variations: variations || {}, personalization: cleanPersonalization };
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
  lines.push("Olá! Quero fazer um pedido na Gump Personalizados ✨");
  if(name) lines.push(`Nome: ${name}`);
  lines.push("");
  lines.push("Itens do pedido:");

  Object.entries(cart).forEach(([key,item],idx)=>{
    const p = ALL_PRODUCTS.find(x=>x.uniqueId===item.uniqueId);
    if(!p) return;
    const vars = Object.entries(item.variations||{});

    lines.push("");
    lines.push(`${idx+1}) Produto: ${p.name}`);
    lines.push(`Quantidade: ${item.qty}`);
    lines.push(`Valor unitário: ${brl(p.price)}`);
    if(vars.length) lines.push(`Variações: ${vars.map(([k,v])=>`${k}: ${v}`).join(", ")}`);
    if(item.personalization) lines.push(`Personalização: ${item.personalization}`);
  });

  lines.push("");
  if(getDiscount() > 0){
    lines.push(`Subtotal: ${brl(cartSubtotal())}`);
    lines.push(`Cupom: ${activeCoupon} (-${brl(getDiscount())})`);
    lines.push(`Total com desconto: ${brl(cartTotal())}`);
  } else {
    lines.push(`Total: ${brl(cartSubtotal())}`);
  }
  lines.push("Entrega: a combinar");
  lines.push("");

  const obsBlock = [obsTop,notes].filter(Boolean).join(" | ");
  if(obsBlock){ lines.push("Observações gerais:"); lines.push(obsBlock); lines.push(""); }
  lines.push("Pode confirmar o prazo e a forma de pagamento?");
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
    elCartItems.innerHTML=`<div class="empty">Seu carrinho está vazio. Adicione um produto 🙂</div>`;
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
                <div class="small muted">${p.sectionKey === "s1" ? "Canecas por coleção" : p.sectionKey === "s2" ? "Canecas diversas" : p.sectionKey === "s3" ? "Garrafas personalizadas" : p.sectionKey === "s4" ? "Modelos de caneca" : "Canecas de chopp"}</div>
                ${vars.length ? `<div class="cart-item__vars">${vars.map(([k,v])=>`<span class="var-tag">${escapeHtml(k)}: ${escapeHtml(v)}</span>`).join("")}</div>` : ""}
                ${item.personalization ? `<div class="cart-item__personalization"><strong>Personalização:</strong> ${escapeHtml(item.personalization)}</div>` : ""}
              </div>
              <button class="icon-btn" data-remove="${escapeHtml(key)}" aria-label="Remover">🗑️</button>
            </div>
            <div class="qty">
              <button data-dec="${escapeHtml(key)}" aria-label="Diminuir">−</button>
              <span>${item.qty}</span>
              <button data-inc="${escapeHtml(key)}" aria-label="Aumentar">+</button>
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
  const discount = getDiscount();
  if(elSubtotalBeforeDiscount) elSubtotalBeforeDiscount.textContent = brl(cartSubtotal());
  if(elDiscountRow) elDiscountRow.style.display = discount > 0 ? "flex" : "none";
  if(elDiscountValue) elDiscountValue.textContent = `- ${brl(discount)}`;
  elSubtotal.textContent = brl(cartTotal());

  if(elCouponCode && activeCoupon){
    elCouponCode.value = activeCoupon;
    setCouponMessage(`Cupom ${activeCoupon} aplicado: 10% de desconto.`, "success");
  }
}

function productSearchText(product){
  const variationText = (product.variations || [])
    .flatMap(group => [group.name, ...(group.options || [])])
    .join(" ");
  return `${product.name} ${product.desc} ${variationText}`.toLowerCase();
}

function renderShowMoreButton(button, fullList, sectionKey){
  if(!button) return;
  const shouldShow = fullList.length > PRODUCT_LIMIT;
  button.hidden = !shouldShow;
  button.textContent = sectionExpanded[sectionKey] ? "Ver menos" : "Ver mais";
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
            <div class="card-tags"><span>Personalizável</span><span>${(p.variations?.[0]?.options || ["Produto"])[0]}</span></div>
          </div>
          <div class="price">${brl(p.price)}</div>
        </div>
        <p class="card__desc muted">${p.desc}</p>
        <div class="card__actions">
          <button class="btn" data-checkout="${p.uniqueId}">Ver detalhes</button>
        </div>
      </div>
    </article>
  `).join("");
}

function renderProducts(){
  const q1 = (elSearch?.value||"").trim().toLowerCase();
  const q2 = (elSearch2?.value||"").trim().toLowerCase();
  const q3 = (elSearch3?.value||"").trim().toLowerCase();
  const q4 = (elSearch4?.value||"").trim().toLowerCase();
  const q5 = (elSearch5?.value||"").trim().toLowerCase();

  let list1 = SECTION1_PRODUCTS.filter(p=> productSearchText(p).includes(q1));
  let list2 = SECTION2_PRODUCTS.filter(p=> productSearchText(p).includes(q2));
  let list3 = SECTION3_PRODUCTS.filter(p=> productSearchText(p).includes(q3));
  let list4 = SECTION4_PRODUCTS.filter(p=> productSearchText(p).includes(q4));
  let list5 = SECTION5_PRODUCTS.filter(p=> productSearchText(p).includes(q5));

  list1 = sortList(list1, elSort?.value||"featured");
  list2 = sortList(list2, elSort2?.value||"featured");
  list3 = sortList(list3, elSort3?.value||"featured");
  list4 = sortList(list4, elSort4?.value||"featured");
  list5 = sortList(list5, elSort5?.value||"featured");

  renderShowMoreButton(elShowMore1, list1, "s1");
  renderShowMoreButton(elShowMore2, list2, "s2");
  renderShowMoreButton(elShowMore3, list3, "s3");
  renderShowMoreButton(elShowMore4, list4, "s4");
  renderShowMoreButton(elShowMore5, list5, "s5");

  const visibleList1 = sectionExpanded.s1 ? list1 : list1.slice(0, PRODUCT_LIMIT);
  const visibleList2 = sectionExpanded.s2 ? list2 : list2.slice(0, PRODUCT_LIMIT);
  const visibleList3 = sectionExpanded.s3 ? list3 : list3.slice(0, PRODUCT_LIMIT);
  const visibleList4 = sectionExpanded.s4 ? list4 : list4.slice(0, PRODUCT_LIMIT);
  const visibleList5 = sectionExpanded.s5 ? list5 : list5.slice(0, PRODUCT_LIMIT);

  if(elGrid) elGrid.innerHTML = buildCardsHtml(visibleList1, "");
  if(elGrid2) elGrid2.innerHTML = buildCardsHtml(visibleList2, "");
  if(elGrid3) elGrid3.innerHTML = buildCardsHtml(visibleList3, "");
  if(elGrid4) elGrid4.innerHTML = buildCardsHtml(visibleList4, "");
  if(elGrid5) elGrid5.innerHTML = buildCardsHtml(visibleList5, "");

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
  const modalPersonalization = document.getElementById("modalPersonalization");

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
  if(modalPersonalization) modalPersonalization.value = "";

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

  // Seleciona automaticamente variações com opção única, como Tamanho 325ml.
  p.variations.forEach(varGroup => {
    if((varGroup.options || []).length === 1){
      selectedVars[varGroup.name] = varGroup.options[0];
      const singleBtn = modalVars.querySelector(`.var-option[data-var-name="${varGroup.name}"]`);
      if(singleBtn) singleBtn.classList.add("active");
    }
  });

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
    for(let i=0;i<qtyVal;i++) addToCart(p.uniqueId, {...selectedVars}, modalPersonalization?.value || "");
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

["btnWhatsHeader","btnWhatsFooter","floatingWhats"].forEach(id=>{
  const el = document.getElementById(id);
  if(!el) return;
  el.addEventListener("click",(e)=>{ e.preventDefault(); openWhatsApp("Olá! Vim pela landing page da Gump Personalizados ✨"); });
});

document.getElementById("modalBackdrop").addEventListener("click", closeProductModal);
document.getElementById("modalClose").addEventListener("click", closeProductModal);
document.addEventListener("keydown",(e)=>{ if(e.key==="Escape") closeProductModal(); });

elSearch.addEventListener("input",()=>{ sectionExpanded.s1 = false; renderProducts(); });
elSort.addEventListener("change",()=>{ sectionExpanded.s1 = false; renderProducts(); });
if(elSearch2) elSearch2.addEventListener("input",()=>{ sectionExpanded.s2 = false; renderProducts(); });
if(elSort2) elSort2.addEventListener("change",()=>{ sectionExpanded.s2 = false; renderProducts(); });
if(elSearch3) elSearch3.addEventListener("input",()=>{ sectionExpanded.s3 = false; renderProducts(); });
if(elSort3) elSort3.addEventListener("change",()=>{ sectionExpanded.s3 = false; renderProducts(); });
if(elSearch4) elSearch4.addEventListener("input",()=>{ sectionExpanded.s4 = false; renderProducts(); });
if(elSort4) elSort4.addEventListener("change",()=>{ sectionExpanded.s4 = false; renderProducts(); });
if(elSearch5) elSearch5.addEventListener("input",()=>{ sectionExpanded.s5 = false; renderProducts(); });
if(elSort5) elSort5.addEventListener("change",()=>{ sectionExpanded.s5 = false; renderProducts(); });
if(elShowMore1) elShowMore1.addEventListener("click",()=>{ sectionExpanded.s1 = !sectionExpanded.s1; renderProducts(); });
if(elShowMore2) elShowMore2.addEventListener("click",()=>{ sectionExpanded.s2 = !sectionExpanded.s2; renderProducts(); });
if(elShowMore3) elShowMore3.addEventListener("click",()=>{ sectionExpanded.s3 = !sectionExpanded.s3; renderProducts(); });
if(elShowMore4) elShowMore4.addEventListener("click",()=>{ sectionExpanded.s4 = !sectionExpanded.s4; renderProducts(); });
if(elShowMore5) elShowMore5.addEventListener("click",()=>{ sectionExpanded.s5 = !sectionExpanded.s5; renderProducts(); });
elCartNotes.addEventListener("input",()=>{ cartNotes=elCartNotes.value||""; localStorage.setItem("gump_cart_notes",cartNotes); });

if(elApplyCoupon){
  elApplyCoupon.addEventListener("click",()=>{
    const code = (elCouponCode?.value || "").trim().toUpperCase();

    if(!code){
      activeCoupon = null;
      localStorage.removeItem("gump_active_coupon");
      setCouponMessage("Digite um cupom para aplicar.", "error");
      renderCart();
      return;
    }

    if(COUPONS[code]){
      activeCoupon = code;
      localStorage.setItem("gump_active_coupon", activeCoupon);
      setCouponMessage(`Cupom ${code} aplicado: 10% de desconto.`, "success");
    }else{
      activeCoupon = null;
      localStorage.removeItem("gump_active_coupon");
      setCouponMessage("Cupom inválido.", "error");
    }

    renderCart();
  });
}

if(elCouponCode){
  elCouponCode.addEventListener("keydown",(e)=>{
    if(e.key === "Enter") elApplyCoupon?.click();
  });
}

renderProducts();
renderCart();


document.querySelectorAll("[data-hero-open]").forEach(btn=>{
  btn.addEventListener("click",()=>{
    const uniqueId = btn.getAttribute("data-hero-open");
    openProductModal(uniqueId);
  });
});


(function initFeaturedCarousel(){
  const carousel = document.querySelector('[data-featured-carousel]');
  if(!carousel) return;

  const track = carousel.querySelector('.featured-products');
  const prev = carousel.querySelector('.featured-carousel__arrow--prev');
  const next = carousel.querySelector('.featured-carousel__arrow--next');
  const items = Array.from(carousel.querySelectorAll('.featured-product'));
  const visible = 2;
  let index = 0;

  function update(){
    const itemWidth = items[0]?.getBoundingClientRect().width || 0;
    const gap = parseFloat(getComputedStyle(track).gap || '0') || 0;
    const maxIndex = Math.max(items.length - visible, 0);
    index = Math.min(Math.max(index, 0), maxIndex);
    track.style.transform = `translateX(-${index * (itemWidth + gap)}px)`;
    if(prev) prev.disabled = index === 0;
    if(next) next.disabled = index >= maxIndex;
  }

  prev?.addEventListener('click',()=>{
    index -= visible;
    update();
  });

  next?.addEventListener('click',()=>{
    index += visible;
    update();
  });

  window.addEventListener('resize', update);
  update();
})();
