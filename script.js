// ===== Data (қалалар + орындар) =====
const CITIES = [
  { name:"Астана", region:"Астана қ.", tags:["Елорда","Сәулет"], hero:"Бәйтерек", desc:"Елорда — заманауи сәулет, музейлер, саябақтар." , maps:"https://www.google.com/maps?q=Astana" },
  { name:"Алматы", region:"Алматы қ.", tags:["Тау","Мегаполис"], hero:"Медеу", desc:"Іле Алатауы бөктеріндегі қала — табиғат пен мәдениет тоғысқан орын.", maps:"https://www.google.com/maps?q=Almaty" },
  { name:"Шымкент", region:"Шымкент қ.", tags:["Оңтүстік","Мәдениет"], hero:"Шымкент", desc:"Оңтүстіктің ірі қаласы — гастрономия, базарлар, тарихи бағыттар.", maps:"https://www.google.com/maps?q=Shymkent" },
  { name:"Түркістан", region:"Түркістан обл.", tags:["Тарих","Қасиетті"], hero:"Қ.А. Ясауи кесенесі", desc:"Рухани астана — тарихи кешендер мен ұлттық мұра.", maps:"https://www.google.com/maps?q=Turkistan" },
  { name:"Өскемен", region:"ШҚО", tags:["Шығыс","Тау"], hero:"Ертіс", desc:"Шығыс қақпасы — өзен, таулы бағыттар, табиғи көріністер.", maps:"https://www.google.com/maps?q=Oskemen" },
  { name:"Катон-Қарағай", region:"ШҚО", tags:["Алтай","Ұлттық парк"], hero:"Катон-Қарағай ҰТП", desc:"Алтайдың інжу-маржаны — ұлттық парк, көлдер, сарқырамалар.", maps:"https://www.google.com/maps?q=Katon-Karagay" },
  { name:"Ақтау", region:"Маңғыстау обл.", tags:["Каспий","Шөл"], hero:"Каспий жағалауы", desc:"Теңіз, каньондар, киелі орындар — Маңғыстаудың орталығы.", maps:"https://www.google.com/maps?q=Aktau" },
  { name:"Атырау", region:"Атырау обл.", tags:["Каспий","Өзен"], hero:"Жайық", desc:"Каспий маңы — мұнайлы өңір, Жайық жағалауы.", maps:"https://www.google.com/maps?q=Atyrau" },
  { name:"Ақтөбе", region:"Ақтөбе обл.", tags:["Батыс","Қала"], hero:"Ақтөбе", desc:"Батыс өңірі — табиғи бағыттар мен қала туризмі.", maps:"https://www.google.com/maps?q=Aktobe" },
  { name:"Қарағанды", region:"Қарағанды обл.", tags:["Орталық","Индустрия"], hero:"Қарқаралы", desc:"Орталық Қазақстан — Қарқаралы, Теміртау бағыттары жақын.", maps:"https://www.google.com/maps?q=Karaganda" },
  { name:"Көкшетау", region:"Ақмола обл.", tags:["Көл","Орман"], hero:"Бурабай", desc:"Көкше өңірі — Бурабай демалыс аймағы, көлдер.", maps:"https://www.google.com/maps?q=Kokshetau" },
  { name:"Қостанай", region:"Қостанай обл.", tags:["Солтүстік","Дала"], hero:"Наурызым", desc:"Дала ландшафты — қорықтар мен табиғи аймақтар.", maps:"https://www.google.com/maps?q=Kostanay" },
  { name:"Павлодар", region:"Павлодар обл.", tags:["Ертіс","Табиғат"], hero:"Баянауыл", desc:"Ертіс бойы — Баянауыл ұлттық паркі, көлдер.", maps:"https://www.google.com/maps?q=Pavlodar" },
  { name:"Тараз", region:"Жамбыл обл.", tags:["Тарих","Ежелгі"], hero:"Айша бибі", desc:"Ежелгі Тараз — кесенелер, тарихи орындар.", maps:"https://www.google.com/maps?q=Taraz" },
  { name:"Петропавл", region:"СҚО", tags:["Солтүстік","Тарих"], hero:"Қызылжар", desc:"Солтүстіктегі қала — тарих, мәдениет, өзен бағыттары.", maps:"https://www.google.com/maps?q=Petropavl" },
];

const PLACES = [
  // Астана
  { title:"Бәйтерек", city:"Астана", type:"Сәулет", best:"Жыл бойы", desc:"Елорда символы, панорама көруге ыңғайлы.", maps:"https://www.google.com/maps?q=Baiterek%20Astana" },
  { title:"EXPO аумағы", city:"Астана", type:"Заманауи", best:"Жыл бойы", desc:"Нұр-Әлем және EXPO инфрақұрылымы.", maps:"https://www.google.com/maps?q=Expo%20Astana" },

  // Алматы
  { title:"Медеу мұз айдыны", city:"Алматы", type:"Спорт/Тау", best:"Қыс/көктем", desc:"Тау бөктеріндегі әйгілі мұз айдыны.", maps:"https://www.google.com/maps?q=Medeu" },
  { title:"Шымбұлақ", city:"Алматы", type:"Тау-шаңғы", best:"Қыс", desc:"Шаңғы трассалары, канат жолы.", maps:"https://www.google.com/maps?q=Shymbulak" },
  { title:"Көлсай көлдері", city:"Алматы", type:"Табиғат", best:"Жаз/күз", desc:"Таудағы керемет көлдер жүйесі.", maps:"https://www.google.com/maps?q=Kolsai%20Lakes" },
  { title:"Шарын шатқалы", city:"Алматы", type:"Табиғат", best:"Көктем/күз", desc:"Каньон, жаяу маршруттар.", maps:"https://www.google.com/maps?q=Charyn%20Canyon" },

  // Түркістан
  { title:"Қ.А. Ясауи кесенесі", city:"Түркістан", type:"Тарих", best:"Жыл бойы", desc:"ЮНЕСКО тізіміндегі тарихи кешен.", maps:"https://www.google.com/maps?q=Khoja%20Ahmed%20Yasawi%20Mausoleum" },

  // Шымкент
  { title:"Сайрам", city:"Шымкент", type:"Тарих", best:"Көктем/күз", desc:"Ежелгі Сайрам бағыты, тарихи орындар.", maps:"https://www.google.com/maps?q=Sairam" },

  // ШҚО
  { title:"Катон-Қарағай ҰТП", city:"Катон-Қарағай", type:"Ұлттық парк", best:"Жаз", desc:"Алтай табиғаты, тау-орман бағыттары.", maps:"https://www.google.com/maps?q=Katon-Karagay%20National%20Park" },

  // Маңғыстау
  { title:"Бозжыра", city:"Ақтау", type:"Каньон", best:"Көктем/күз", desc:"Маңғыстаудың ең танымал ландшафты.", maps:"https://www.google.com/maps?q=Bozzhyra" },
  { title:"Шерқала", city:"Ақтау", type:"Табиғат", best:"Көктем/күз", desc:"Айрықша тау пішіні, фототурға жақсы.", maps:"https://www.google.com/maps?q=Sherkala" },

  // Ақмола/Көкше
  { title:"Бурабай", city:"Көкшетау", type:"Көл/Орман", best:"Жаз", desc:"Көлдер, орман, демалыс базалары.", maps:"https://www.google.com/maps?q=Burabay" },

  // Қарағанды
  { title:"Қарқаралы", city:"Қарағанды", type:"Табиғат", best:"Жаз/күз", desc:"Орманды-тау массиві, таза ауа.", maps:"https://www.google.com/maps?q=Karkaraly" },

  // Павлодар
  { title:"Баянауыл", city:"Павлодар", type:"Ұлттық парк", best:"Жаз", desc:"Көлдер, жартастар, тынығуға таптырмас.", maps:"https://www.google.com/maps?q=Bayanaul" },

  // Тараз
  { title:"Айша бибі кесенесі", city:"Тараз", type:"Тарих", best:"Көктем/күз", desc:"Ортағасырлық сәулет ескерткіші.", maps:"https://www.google.com/maps?q=Aisha%20Bibi%20Mausoleum" },
];

// ===== Helpers =====
function $(sel){ return document.querySelector(sel); }
function escapeHtml(str){
  return String(str).replace(/[&<>"']/g, s => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[s]));
}

function setActiveMenu(){
  const path = (location.pathname.split("/").pop() || "index.html").toLowerCase();
  document.querySelectorAll(".menu a").forEach(a=>{
    const href = (a.getAttribute("href")||"").toLowerCase();
    if(href === path) a.classList.add("active");
  });
}

function renderCards(list, targetId, kind){
  const root = document.getElementById(targetId);
  if(!root) return;

  root.innerHTML = list.map(item=>{
    const title = kind==="city" ? item.name : item.title;
    const sub = kind==="city" ? item.region : item.city;
    const pills = kind==="city"
      ? item.tags.map(t=>`<span class="pill">${escapeHtml(t)}</span>`).join("")
      : [`<span class="pill">${escapeHtml(item.type)}</span>`, `<span class="pill">${escapeHtml(item.best)}</span>`].join("");

    const desc = kind==="city" ? item.desc : item.desc;
    const hero = kind==="city" ? item.hero : item.type;
    const maps = item.maps;

    return `
      <article class="card">
        <div class="cover">
          <div>
            <strong>${escapeHtml(title)}</strong>
            <div class="mini">${escapeHtml(sub)} • ${escapeHtml(hero)}</div>
          </div>
        </div>
        <div class="body">
          <h3>${escapeHtml(title)}</h3>
          <div class="meta">${pills}</div>
          <p>${escapeHtml(desc)}</p>
        </div>
        <div class="actions">
          <a class="link" href="${maps}" target="_blank" rel="noopener">Картадан ашу</a>
        </div>
      </article>
    `;
  }).join("");
}

function setupFilter(kind){
  const q = $("#q");
  const region = $("#region");
  const city = $("#city");
  const type = $("#type");

  function apply(){
    if(kind==="city"){
      const text = (q?.value||"").toLowerCase().trim();
      const reg = region?.value || "all";
      let filtered = CITIES.filter(c=>{
        const okText = !text || (c.name+c.region+c.desc+c.tags.join(" ")).toLowerCase().includes(text);
        const okReg = reg==="all" || c.region===reg;
        return okText && okReg;
      });
      renderCards(filtered, "cards", "city");
      $("#count").textContent = filtered.length;
    } else {
      const text = (q?.value||"").toLowerCase().trim();
      const cval = city?.value || "all";
      const tval = type?.value || "all";
      let filtered = PLACES.filter(p=>{
        const okText = !text || (p.title+p.city+p.type+p.desc).toLowerCase().includes(text);
        const okCity = cval==="all" || p.city===cval;
        const okType = tval==="all" || p.type===tval;
        return okText && okCity && okType;
      });
      renderCards(filtered, "cards", "place");
      $("#count").textContent = filtered.length;
    }
  }

  [q,region,city,type].forEach(el=>{
    if(!el) return;
    el.addEventListener("input", apply);
    el.addEventListener("change", apply);
  });

  // Ctrl+K quick focus
  window.addEventListener("keydown",(e)=>{
    if((e.ctrlKey || e.metaKey) && e.key.toLowerCase()==="k"){
      e.preventDefault();
      q?.focus();
    }
  });

  apply();
}

function fillSelects(){
  const regionSel = $("#region");
  if(regionSel){
    const regs = ["all", ...Array.from(new Set(CITIES.map(c=>c.region)))];
    regionSel.innerHTML = regs.map(r=>`<option value="${escapeHtml(r)}">${r==="all"?"Барлық аймақ":escapeHtml(r)}</option>`).join("");
  }

  const citySel = $("#city");
  if(citySel){
    const cities = ["all", ...Array.from(new Set(PLACES.map(p=>p.city)))];
    citySel.innerHTML = cities.map(c=>`<option value="${escapeHtml(c)}">${c==="all"?"Барлық қала":escapeHtml(c)}</option>`).join("");
  }

  const typeSel = $("#type");
  if(typeSel){
    const types = ["all", ...Array.from(new Set(PLACES.map(p=>p.type)))];
    typeSel.innerHTML = types.map(t=>`<option value="${escapeHtml(t)}">${t==="all"?"Барлық түрі":escapeHtml(t)}</option>`).join("");
  }
}

function setupContact(){
  const form = document.getElementById("contactForm");
  if(!form) return;

  form.addEventListener("submit",(e)=>{
    e.preventDefault();
    const name = $("#name").value.trim();
    const email = $("#email").value.trim();
    const msg = $("#message").value.trim();

    const out = $("#result");
    if(!name || !email || !msg){
      out.textContent = "Өтінемін, барлық өрістерді толтырыңыз.";
      out.style.color = "rgba(255,200,200,.95)";
      return;
    }
    out.textContent = "Рахмет! Хабарлама қабылданды (демо нұсқа).";
    out.style.color = "rgba(200,255,220,.95)";
    form.reset();
  });
}

// ===== init =====
document.addEventListener("DOMContentLoaded", ()=>{
  setActiveMenu();
  fillSelects();

  const page = document.body.getAttribute("data-page");
  if(page==="cities") setupFilter("city");
  if(page==="places") setupFilter("place");
  if(page==="contact") setupContact();

  // Index highlights
  const topCities = document.getElementById("topCities");
  if(topCities){
    renderCards(CITIES.slice(0,6), "topCities", "city");
  }
  const topPlaces = document.getElementById("topPlaces");
  if(topPlaces){
    renderCards(PLACES.slice(0,6), "topPlaces", "place");
  }
});
