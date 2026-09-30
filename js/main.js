const backend=[["Java (JEE · Spring Boot · Quarkus)",92],[".NET / C#",88],["Laravel / PHP",85],["Python (FastAPI · Flask)",90]];
const frontend=[["React",90],["Angular",82],["Expo / React Native",78],["TypeScript",86]];
const archi=[["PostgreSQL",88],["Docker / CI-CD",80],["RabbitMQ / MassTransit",75],["Architecture (DDD/Onion/FSD)",85]];
const systems=[["Administration Linux (VM, réseau, services)",80],["Cloud AWS (IAM, EC2, IaaS/PaaS/CaaS)",74],["Oracle Database",68],["Réseaux (SSH, DNS, DHCP, Apache, partages)",78]];
const quality=[["TDD & Tests Unitaires",85],["Tests d'Intégration & Non-Fonctionnels",80],["Scrum & Cycle de vie logiciel",83],["SAFe (Agile à l'échelle)",62]];

const cloud=["C++","C","Dart","Flutter","Blazor","Symfony","WordPress","Bootstrap","Tailwind CSS","Vite","Alpine.js","React Router","Selenium","Kubernetes","Terraform","SonarQube","SonarLint","Grafana","Prometheus","Nginx","Redis","MariaDB","MySQL","SQLite","Sequelize","Twilio","Arduino","Cisco","Trello","Streamlit","Web3.js","Insomnia","NumPy","Gradle","Cloudflare"];

// img: URL d'image (ratio ~16:9) — vide = motif + initiales en fallback
// repo: URL GitHub/GitLab — vide = lien masqué
const projects=[
 {cat:"java",name:"MNA'KILO",desc:"Plateforme de transport de colis en groupage participatif — architecture en couches, tests unitaires et d'intégration complets.",tags:["Spring Boot 3.3","Java 17","PostgreSQL","MapStruct"],img:"",repo:"https://gitlab.com/anzize5818/mnakilo"},
 {cat:"ai",name:"Assistance Conseiller Intelligent",desc:"Startup d'accompagnement IA pour consultants sénégalais — architecture dual-client web + mobile.",tags:["FastAPI","React","Expo","Groq LLM"],img:"",repo:""},
 {cat:"php",name:"LocaFullStack",desc:"Plateforme immobilière avec héritage de rôles, cache Redis et génération de contrats PDF.",tags:["Laravel 13","React","PostgreSQL","Sanctum"],img:"",repo:""},
 {cat:"dotnet",name:"Secure Logistics & Delivery System",desc:"Microservices de logistique sécurisée — DDD, event-driven, passerelle API.",tags:[".NET","RabbitMQ","YARP","React"],img:"",repo:""},
 {cat:"ai",name:"RAG Chatbot",desc:"Chatbot à récupération augmentée sur documents multilingues, pipeline complet validé.",tags:["FastAPI","Groq","PgVector","Embeddings"],img:"",repo:""},
 {cat:"dotnet",name:"UserMgmt",desc:"Outil d'administration dense — auth JWT à refresh automatique, CRUD, statistiques.",tags:[".NET 10","Angular 21","Signals"],img:"",repo:""},
 {cat:"dotnet",name:"Passerelle SOAP → REST",desc:"Modernisation d'un service legacy Java SOAP, ré-exposé en API REST.",tags:["ASP.NET Core","WCF","SOAP"],img:"",repo:""},
 {cat:"ai",name:"CNI OCR Pipeline",desc:"Extraction et validation de cartes d'identité sénégalaises — checksum MRZ ICAO 9303.",tags:["FastAPI","OpenCV","Tesseract"],img:"",repo:""},
 {cat:"mobile",name:"Milieu Dominant",desc:"Application mobile d'entraînement football gamifiée pour joueurs amateurs, position milieu de terrain.",tags:["Expo SDK 57","React Native","Supabase","TypeScript"],img:"",repo:""},
 {cat:"java",name:"Spring MVC/JSP · Ressources",desc:"Reproduction multi-modules d'un projet académique — même entité exposée en MVC/JSP, REST et SOAP.",tags:["Spring MVC","JAX-RS","JAX-WS","Hibernate"],img:"",repo:"https://gitlab.com/isidk/m1gl2026/springmvc-jsp"},
 {cat:"other",name:"Colobane",desc:"Automatisation de tests d'API de bout en bout — collection Postman et pipeline CI/CD multi-environnements.",tags:["Postman","GitLab CI","QA"],img:"",repo:""},
 {cat:"other",name:"Taverne",desc:"Application web avec backend léger et interface réactive.",tags:["Flask","React"],img:"",repo:""},
 {cat:"other",name:"FlexiPay",desc:"Application de bureau pour la gestion de paiements.",tags:["JavaFX","Java"],img:"",repo:""},
 {cat:"other",name:"IoT Health Monitor",desc:"Système de suivi de santé connecté, capteurs embarqués et dashboard web.",tags:["ESP32","Angular","IoT"],img:"",repo:""},
];

const repoMini=[
 {name:"Etudiant",desc:"CRUD étudiant complet en Angular.",lang:"TypeScript",url:"https://github.com/Siam5818/Etudiant"},
 {name:"Gestion-rendez-vous",desc:"Gestion des rendez-vous et clients — PHP orienté objet, modèle MVC, PostgreSQL.",lang:"PHP",url:"https://github.com/Siam5818/Gestion-rendez-vous"},
 {name:"Gestion-University",desc:"Gestion universitaire — PHP procédural, modèle MVC, PostgreSQL.",lang:"PHP",url:"https://github.com/Siam5818/Gestion-University"},
 {name:"Gestion-ferme",desc:"Gestion d'une ferme agricole — PHP orienté objet, ORM Doctrine, MVC.",lang:"Twig / PHP",url:"https://github.com/Siam5818/Gestion-ferme"},
 {name:"Développement-C#",desc:"Projets développés en C# sur Visual Studio.",lang:"C#",url:"https://github.com/Siam5818/Developpement-C-"},
 {name:"Language-C",desc:"Initiation et travaux pratiques en langage C.",lang:"C",url:"https://github.com/Siam5818/Language-C"},
];

const toolsList=[
 ["Git & GitFlow","branches, commits conventionnels"],
 ["Jira","gestion agile, sprints"],
 ["Docker","conteneurisation, CI/CD"],
 ["Swagger / OpenAPI","documentation API"],
 ["JUnit·PHPUnit·Pytest·Jest","tests automatisés"],
 ["Postman","tests d'API"],
 ["Figma / FigJam","maquettes UI/UX"],
 ["GitHub Actions / GitLab CI","pipelines CI/CD"],
 ["draw.io","diagrammes d'architecture"],
 ["Supabase","BaaS — Auth, DB, Storage"],
 ["ESLint / Prettier","qualité de code"],
 ["MongoDB","base NoSQL orientée documents"],
 ["DBeaver","client universel de bases de données"],
 ["pgAdmin","administration PostgreSQL"],
 ["Oracle DB","bases de données relationnelles"],
 ["AWS (IAM · EC2)","cloud IaaS / PaaS / CaaS"],
];

const services=[
 ["Développement Backend","APIs robustes et sécurisées avec Spring Boot, Quarkus, .NET, Laravel ou FastAPI."],
 ["Développement Frontend","Interfaces réactives et accessibles avec React ou Angular."],
 ["Applications Mobiles","Apps de production avec Expo / React Native, testées sur devices réels."],
 ["Intégration IA","RAG, LLM (Groq/Llama), OCR et pipelines de traitement de données."],
 ["Architecture & Conseil","DDD, microservices, revues d'architecture, conformité ISO/IEC 25010."],
 ["Tests & Qualité","TDD, tests unitaires, d'intégration et non-fonctionnels, automatisation CI/CD."],
 ["Administration Systèmes & Réseau","VM Linux, SSH/DNS/DHCP/Apache, partages de données, durcissement serveur."],
 ["Cloud & Infrastructure","Déploiement AWS (IAM, EC2), architectures IaaS/PaaS/CaaS."],
];

const testimonials=[
 ["« Ajoute ici le retour d'un professeur, d'un encadrant ou d'un client sur ton travail. »","[Nom à ajouter]","[Rôle / Encadrant]"],
 ["« Ajoute ici le retour d'un camarade de projet ou collaborateur. »","[Nom à ajouter]","[Rôle / Collaborateur]"],
 ["« Ajoute ici un retour sur un projet freelance ou académique. »","[Nom à ajouter]","[Rôle]"],
];

const timeline=[
 ["Août 2026","Assistance Conseiller Intelligent","Plateforme IA de conseil pour consultants sénégalais — FastAPI, React, Expo, LLM Groq."],
 ["Août 2026","Secure Logistics & Delivery System","Microservices .NET en DDD avec messagerie événementielle et passerelle API."],
 ["Juillet 2026","CNI OCR Pipeline","Pipeline d'extraction et de validation de documents d'identité — FastAPI + OpenCV."],
 ["Juillet 2026","LocaFullStack & RAG Chatbot","Plateforme immobilière Laravel/React et chatbot à récupération augmentée."],
 ["Juin 2026","MNA'KILO & UserMgmt","Plateforme de transport de colis Spring Boot et outil d'administration .NET/Angular."],
];

function fillSkills(id,list){
  document.getElementById(id).innerHTML=list.map(([n,p])=>`<div class="skill-card"><div class="skill-top"><b>${n}</b><span>${p}%</span></div><div class="bar"><i data-p="${p}"></i></div></div>`).join('');
}
fillSkills('skills-backend',backend); fillSkills('skills-frontend',frontend); fillSkills('skills-tools',archi);
fillSkills('skills-systems',systems); fillSkills('skills-quality',quality);

document.getElementById('cloud').innerHTML=cloud.map(t=>`<span>${t}</span>`).join('');

document.getElementById('tool-grid').innerHTML=toolsList.map(([n,d])=>
  `<div class="tool-card"><b>${n}</b><span>${d}</span></div>`).join('');

document.getElementById('service-grid').innerHTML=services.map(([n,d])=>
  `<div class="tool-card"><b>${n}</b><span>${d}</span></div>`).join('');

document.getElementById('testi-grid').innerHTML=testimonials.map(([q,name,role])=>
  `<div class="testi-card"><div class="testi-q">"</div><p class="quote">${q}</p><div class="testi-who"><b>${name}</b><span>${role}</span></div></div>`).join('');

document.getElementById('timeline').innerHTML=timeline.map(([date,title,desc])=>
  `<div class="tl-item reveal in"><div class="tl-date">${date}</div><h4>${title}</h4><p>${desc}</p></div>`).join('');

function initials(name){return name.split(/[\s'/]/).filter(Boolean).slice(0,2).map(w=>w[0]).join('').toUpperCase();}
document.getElementById('proj-grid').innerHTML=projects.map(p=>`
  <div class="pcard" data-cat="${p.cat}">
    <div class="pcard-top">${p.img?`<img src="${p.img}" alt="${p.name}">`:`<span class="mono">${initials(p.name)}</span>`}</div>
    <div class="pcard-body">
      <h3>${p.name}</h3><p>${p.desc}</p>
      <div class="tags">${p.tags.map(t=>`<span class="tag-chip">${t}</span>`).join('')}</div>
      ${p.repo?`<div class="pcard-links"><a href="${p.repo}" target="_blank" rel="noopener" class="repo-link">Voir le code →</a></div>`:''}
    </div>
  </div>`).join('');

document.getElementById('repo-mini-grid').innerHTML=repoMini.map(r=>`
  <div class="repo-mini">
    <div class="rm-top"><b>${r.name}</b><span class="lang">${r.lang}</span></div>
    <p>${r.desc}</p>
    <a href="${r.url}" target="_blank" rel="noopener">github.com/Siam5818/${r.name} →</a>
  </div>`).join('');

document.querySelectorAll('.filter-btn').forEach(btn=>{
  btn.addEventListener('click',()=>{
    document.querySelectorAll('.filter-btn').forEach(b=>b.classList.remove('active'));
    btn.classList.add('active');
    const f=btn.dataset.f;
    document.querySelectorAll('.pcard').forEach(c=>c.classList.toggle('hide', f!=='all' && c.dataset.cat!==f));
  });
});

const burger=document.getElementById('burger'),navlinks=document.getElementById('navlinks');
burger.addEventListener('click',()=>navlinks.classList.toggle('open'));
document.querySelectorAll('.navlink').forEach(a=>a.addEventListener('click',()=>navlinks.classList.remove('open')));

const sections=document.querySelectorAll('section[id]');
window.addEventListener('scroll',()=>{
  let cur='';
  sections.forEach(s=>{ if(scrollY>=s.offsetTop-140) cur=s.id; });
  document.querySelectorAll('.navlink').forEach(a=>a.classList.toggle('active',a.getAttribute('href')==='#'+cur));
});

const roles=["Développeur Full-Stack","Ingénieur Java / Spring Boot / Quarkus",".NET · Laravel · FastAPI","Ingénieur mobile (Expo / RN)","Administrateur Systèmes Linux & Cloud AWS","Étudiant Master GL — ISI Dakar"];
let ri=0,ci=0,del=false;
const typedEl=document.getElementById('typed');
function tick(){
  const word=roles[ri];
  typedEl.textContent=del?word.slice(0,ci--):word.slice(0,ci++);
  let speed=del?32:68;
  if(!del && ci>word.length+8){del=true;speed=1000;}
  if(del && ci<0){del=false;ri=(ri+1)%roles.length;speed=280;}
  setTimeout(tick,speed);
}
tick();

const io=new IntersectionObserver(entries=>{
  entries.forEach(e=>{ if(e.isIntersecting){ e.target.classList.add('in'); io.unobserve(e.target); } });
},{threshold:.15});
document.querySelectorAll('.reveal').forEach(el=>io.observe(el));

function animateBars(){document.querySelectorAll('.bar i').forEach(b=>{ if(b.style.width==='') b.style.width=b.dataset.p+'%'; });}
const skillSection=document.getElementById('competences');
const io2=new IntersectionObserver(entries=>{ entries.forEach(e=>{ if(e.isIntersecting){animateBars(); io2.disconnect();} }); },{threshold:.15});
io2.observe(skillSection);

function animateCounters(){
  document.querySelectorAll('.counter').forEach(c=>{
    const target=+c.dataset.target; let cur=0;
    const step=()=>{ cur+=Math.max(1,target/30); if(cur<target){c.textContent=Math.floor(cur);requestAnimationFrame(step);} else c.textContent=target; };
    step();
  });
}
const io3=new IntersectionObserver(entries=>{ entries.forEach(e=>{ if(e.isIntersecting){animateCounters(); io3.disconnect();} }); },{threshold:.3});
io3.observe(document.querySelector('.stats'));
