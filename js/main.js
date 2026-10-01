const buildCategories=[
 ["Applications métier","Plateformes web qui digitalisent un processus réel : gestion, transport, immobilier, administration."],
 ["Backend & APIs","Services backend, APIs REST, intégrations et logique métier fiable."],
 ["Automatisation","Workflows et intégrations qui suppriment les tâches répétitives."],
 ["IoT & systèmes connectés","Capteurs, collecte et traitement de données embarquées."],
 ["Cloud & Infrastructure","Conteneurisation, déploiement, infrastructure et réseau."],
];

const pillars=[
 ["01","Solutions","Applications et plateformes métier construites pour résoudre un problème précis, du cahier des charges au déploiement."],
 ["02","Engineering","Architecture, backend, cloud, qualité — les fondations techniques derrière chaque solution."],
 ["03","Lab","Prototypes et preuves de concept qui explorent de nouveaux domaines : IoT, IA, automatisation."],
];

// maturity: academic | proto | poc | product
const caseStudies=[
 {name:"Assistance Conseiller Intelligent",maturity:"product",maturityLabel:"Produit potentiel",
  tagline:"Plateforme d'accompagnement IA pour consultants sénégalais, pensée comme un produit dès le départ.",
  contexte:"Les consultants indépendants manquent d'outils structurés pour organiser leur activité de conseil.",
  probleme:"Offrir un accompagnement intelligent et accessible, sans l'équipe d'une grande plateforme SaaS.",
  solution:"Architecture dual-client — application web et mobile — connectée à un LLM pour l'assistance au conseil.",
  architecture:"FastAPI en backend, React pour le web, Expo pour le mobile, LLM Groq pour l'intelligence conversationnelle.",
  resultat:"Architecture fonctionnelle et conventions de projet établies ; développement en cours.",
  limites:"Pas encore d'utilisateurs réels ni de validation marché — stade produit en développement.",
  next:"Valider l'usage auprès de quelques consultants pilotes avant d'envisager une mise en production.",
  tags:["FastAPI","React","Expo","Groq LLM"],repo:""},
 {name:"MNA'KILO",maturity:"proto",maturityLabel:"Prototype",
  tagline:"Plateforme de transport de colis en groupage participatif, construite avec une rigueur de production.",
  contexte:"Le transport de colis entre particuliers en Afrique de l'Ouest manque de plateformes structurées.",
  probleme:"Permettre la mise en relation et le suivi de livraisons en groupage, de façon fiable.",
  solution:"API REST complète avec gestion des utilisateurs, trajets et colis, pensée pour évoluer vers un vrai service.",
  architecture:"Spring Boot 3.3 en couches (contrôleurs / services / repositories), PostgreSQL, MapStruct pour le mapping DTO.",
  resultat:"Couche service complète, tests unitaires (Mockito) et d'intégration (@DataJpaTest, MockMvc), CI/CD stabilisé.",
  limites:"Pas de frontend public ni d'utilisateurs réels à ce stade — c'est un backend solide, pas encore un produit utilisable.",
  next:"Construire une interface client et valider le besoin auprès d'utilisateurs réels avant d'envisager une mise en marché.",
  tags:["Spring Boot 3.3","Java 17","PostgreSQL","MapStruct"],repo:"https://gitlab.com/anzize5818/mnakilo"},
 {name:"Secure Logistics & Delivery System",maturity:"academic",maturityLabel:"Projet académique",
  tagline:"Architecture microservices de logistique sécurisée, réalisée dans le cadre d'un examen.",
  contexte:"Exercice académique portant sur la conception d'un système de livraison distribué et sécurisé.",
  probleme:"Concevoir une architecture microservices robuste, événementielle, avec une passerelle API unifiée.",
  solution:"Services .NET indépendants communiquant par messagerie asynchrone, exposés via une passerelle commune.",
  architecture:"Domain-Driven Design, RabbitMQ pour la communication événementielle, YARP comme reverse proxy / API Gateway.",
  resultat:"Architecture complète documentée et implémentée dans le cadre de l'évaluation.",
  limites:"Contexte académique — pas de déploiement réel ni de charge de production testée.",
  next:"Réutilisable comme base d'architecture pour un vrai projet de logistique nécessitant ces garanties.",
  tags:[".NET","RabbitMQ","YARP","React"],repo:""},
 {name:"LocaFullStack",maturity:"proto",maturityLabel:"Prototype",
  tagline:"Plateforme immobilière avec gestion de rôles et génération de contrats.",
  contexte:"La mise en location immobilière implique des rôles multiples (propriétaire, agence, locataire) souvent mal gérés par les petits outils existants.",
  probleme:"Modéliser une hiérarchie de rôles réaliste et automatiser la génération de documents contractuels.",
  solution:"Plateforme web avec héritage de rôles, cache applicatif et génération automatique de contrats PDF.",
  architecture:"Laravel 13 en backend avec Sanctum pour l'authentification, React en frontend, cache Redis, PostgreSQL.",
  resultat:"Fonctionnalités cœur opérationnelles : gestion des biens, des rôles et génération de contrats.",
  limites:"Pas encore testé en conditions réelles avec de vraies agences ou propriétaires.",
  next:"Pilote avec une petite agence locale pour valider le workflow métier avant d'industrialiser.",
  tags:["Laravel 13","React","PostgreSQL","Sanctum"],repo:""},
 {name:"CNI OCR Pipeline",maturity:"poc",maturityLabel:"Proof of Concept",
  tagline:"Extraction et validation automatique de cartes d'identité sénégalaises.",
  contexte:"La saisie manuelle de données d'identité est lente et source d'erreurs pour les organismes qui en ont besoin.",
  probleme:"Extraire fiablement les champs d'une carte d'identité scannée et vérifier leur authenticité formelle.",
  solution:"Pipeline OCR avec extraction positionnelle à deux colonnes et validation du checksum MRZ selon la norme ICAO 9303.",
  architecture:"FastAPI, OpenCV pour le traitement d'image (correction d'inclinaison), pytesseract (FR), SQLAlchemy/PostgreSQL.",
  resultat:"Pipeline fonctionnel avec correction d'erreurs OCR et validation de checksum automatisée, présenté en groupe.",
  limites:"Testé sur un jeu de documents limité — pas encore éprouvé à grande échelle ni en production.",
  next:"Étendre le jeu de test et évaluer la robustesse face à des scans de moindre qualité.",
  tags:["FastAPI","OpenCV","Tesseract","PostgreSQL"],repo:""},
 {name:"Banque du Peuple",maturity:"academic",maturityLabel:"Projet académique",
  tagline:"Système bancaire à architecture distribuée, réalisé dans un cadre académique.",
  contexte:"Exercice de conception d'un système d'information bancaire avec les contraintes propres au secteur (cohérence, sécurité).",
  probleme:"Concevoir une architecture distribuée capable de gérer des opérations bancaires de façon fiable.",
  solution:"Système modélisé autour de services distribués dédiés aux opérations bancaires.",
  architecture:"Architecture distribuée — détails techniques disponibles sur demande.",
  resultat:"Livrable académique réalisé et évalué dans le cadre du cursus.",
  limites:"Projet académique — non déployé, sans données ni utilisateurs réels.",
  next:"Base de réflexion pour aborder des systèmes financiers réels à l'avenir.",
  tags:["Architecture distribuée","Systèmes bancaires"],repo:""},
];

const secondaryProjects=[
 {name:"RAG Chatbot",cat:"academic",label:"Académique",desc:"Chatbot à récupération augmentée sur documents multilingues.",tags:["FastAPI","Groq","PgVector"],repo:""},
 {name:"UserMgmt",cat:"proto",label:"Prototype",desc:"Outil d'administration avec auth JWT à refresh automatique.",tags:[".NET 10","Angular 21"],repo:""},
 {name:"Passerelle SOAP → REST",cat:"academic",label:"Académique",desc:"Modernisation d'un service legacy Java SOAP en API REST.",tags:["ASP.NET Core","SOAP"],repo:""},
 {name:"Milieu Dominant",cat:"proto",label:"Prototype",desc:"Application mobile d'entraînement football gamifiée (MVP en développement actif).",tags:["Expo","React Native","Supabase"],repo:""},
 {name:"Spring MVC/JSP · Ressources",cat:"academic",label:"Académique",desc:"Même entité exposée en MVC/JSP, REST et SOAP, sur une persistance commune.",tags:["Spring MVC","JAX-RS","JAX-WS"],repo:"https://gitlab.com/isidk/m1gl2026/springmvc-jsp"},
 {name:"Colobane",cat:"academic",label:"Académique",desc:"Automatisation de tests d'API — Postman et pipeline CI/CD multi-environnements.",tags:["Postman","GitLab CI","QA"],repo:""},
 {name:"S3DPA",cat:"poc",label:"POC",desc:"Système de monitoring IoT orienté santé.",tags:["IoT","Monitoring"],repo:""},
 {name:"Projet IoT — soutenance de licence",cat:"academic",label:"Académique",desc:"Système connecté à base d'Arduino, réalisé pour la soutenance de licence.",tags:["Arduino","IoT"],repo:""},
 {name:"Taverne",cat:"academic",label:"Académique",desc:"Application web avec backend léger et interface réactive.",tags:["Flask","React"],repo:""},
 {name:"FlexiPay",cat:"academic",label:"Académique",desc:"Application de bureau pour la gestion de paiements.",tags:["JavaFX","Java"],repo:""},
 {name:"IoT Health Monitor",cat:"proto",label:"Prototype",desc:"Suivi de santé connecté, capteurs embarqués et dashboard web.",tags:["ESP32","Angular","IoT"],repo:""},
];

const backend=[["Java (JEE · Spring Boot · Quarkus)",92],[".NET / C#",88],["Laravel / PHP",85],["Python (FastAPI · Flask)",90]];
const frontend=[["React",90],["Angular",82],["Expo / React Native",78],["TypeScript",86]];
const archi=[["PostgreSQL",88],["Docker / CI-CD",80],["RabbitMQ / MassTransit",75],["Architecture (DDD/Onion/FSD)",85]];
const systems=[["Administration Linux (VM, réseau, services)",80],["Cloud AWS (IAM, EC2, IaaS/PaaS/CaaS)",74],["Oracle Database",68],["Réseaux (SSH, DNS, DHCP, Apache, partages)",78]];
const quality=[["TDD & Tests Unitaires",85],["Tests d'Intégration & Non-Fonctionnels",80],["Scrum & Cycle de vie logiciel",83],["SAFe (Agile à l'échelle)",62]];
const cloud=["C++","C","Dart","Flutter","Blazor","Symfony","WordPress","Bootstrap","Tailwind CSS","Vite","Alpine.js","React Router","Selenium","Kubernetes","Terraform","SonarQube","SonarLint","Grafana","Prometheus","Nginx","Redis","MariaDB","MySQL","SQLite","Sequelize","Twilio","Arduino","Cisco","Trello","Streamlit","Web3.js","Insomnia","NumPy","Gradle","Cloudflare","MongoDB","DBeaver","pgAdmin"];

const services=[
 ["Build","Conception et développement d'applications web, du cahier des charges au déploiement."],
 ["Backend","APIs, logique métier, architecture et intégrations entre systèmes."],
 ["Modernization","Évolution et restructuration de systèmes existants (ex. legacy SOAP vers REST)."],
 ["Automation","Automatisation de workflows et intégration de processus métier."],
 ["Infrastructure","Docker, Linux, CI/CD, déploiement et cloud (AWS)."],
 ["IoT","Systèmes connectés et plateformes de monitoring."],
];

function fillSkills(id,list){
  document.getElementById(id).innerHTML=list.map(([n,p])=>`<div class="skill-card"><div class="skill-top"><b>${n}</b><span>${p}%</span></div><div class="bar"><i data-p="${p}"></i></div></div>`).join('');
}
fillSkills('skills-backend',backend); fillSkills('skills-frontend',frontend); fillSkills('skills-tools',archi);
fillSkills('skills-systems',systems); fillSkills('skills-quality',quality);
document.getElementById('cloud').innerHTML=cloud.map(t=>`<span>${t}</span>`).join('');

document.getElementById('build-grid').innerHTML=buildCategories.map(([n,d])=>
  `<div class="build-card reveal in"><b>${n}</b><p>${d}</p></div>`).join('');

document.getElementById('pillar-grid').innerHTML=pillars.map(([num,n,d])=>
  `<div class="pillar reveal in"><div class="num">${num}</div><h3>${n}</h3><p>${d}</p></div>`).join('');

document.getElementById('service-grid').innerHTML=services.map(([n,d])=>
  `<div class="tool-card reveal in"><b>${n}</b><span>${d}</span></div>`).join('');

const mClass={academic:"m-academic",proto:"m-proto",poc:"m-poc",product:"m-product"};
document.getElementById('case-studies').innerHTML=caseStudies.map(c=>`
  <div class="cs-card reveal in">
    <div class="cs-head">
      <div><div class="cs-title">${c.name}</div><p class="cs-tagline">${c.tagline}</p></div>
      <span class="maturity ${mClass[c.maturity]}">${c.maturityLabel}</span>
    </div>
    <div class="cs-body">
      <div class="cs-field"><h5>Contexte</h5><p>${c.contexte}</p></div>
      <div class="cs-field"><h5>Problème</h5><p>${c.probleme}</p></div>
      <div class="cs-field"><h5>Solution</h5><p>${c.solution}</p></div>
      <div class="cs-field"><h5>Architecture</h5><p>${c.architecture}</p></div>
      <div class="cs-field"><h5>Résultat</h5><p>${c.resultat}</p></div>
      <div class="cs-field"><h5>Limites</h5><p>${c.limites}</p></div>
      <div class="cs-field" style="grid-column:1/-1"><h5>Prochaine étape</h5><p>${c.next}</p></div>
    </div>
    <div class="cs-foot">
      <div class="cs-tags">${c.tags.map(t=>`<span class="tag-chip">${t}</span>`).join('')}</div>
      ${c.repo?`<a href="${c.repo}" target="_blank" rel="noopener" class="cs-link">Voir le code →</a>`:''}
    </div>
  </div>`).join('');

document.getElementById('sec-grid').innerHTML=secondaryProjects.map(p=>`
  <div class="sec-card" data-cat="${p.cat}">
    <div class="sec-top"><b>${p.name}</b><span class="maturity ${mClass[p.cat]}" style="font-size:.62rem">${p.label}</span></div>
    <p>${p.desc}</p>
    <div class="tags" style="display:flex;flex-wrap:wrap;gap:6px;margin-bottom:10px">${p.tags.map(t=>`<span class="tag-chip">${t}</span>`).join('')}</div>
    ${p.repo?`<a href="${p.repo}" target="_blank" rel="noopener">Voir le code →</a>`:''}
  </div>`).join('');

document.querySelectorAll('.filter-btn').forEach(btn=>{
  btn.addEventListener('click',()=>{
    document.querySelectorAll('.filter-btn').forEach(b=>b.classList.remove('active'));
    btn.classList.add('active');
    const f=btn.dataset.f;
    document.querySelectorAll('.sec-card').forEach(c=>c.classList.toggle('hide', f!=='all' && c.dataset.cat!==f));
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

const io=new IntersectionObserver(entries=>{
  entries.forEach(e=>{ if(e.isIntersecting){ e.target.classList.add('in'); io.unobserve(e.target); } });
},{threshold:.1});
document.querySelectorAll('.reveal').forEach(el=>io.observe(el));

function animateBars(){document.querySelectorAll('.bar i').forEach(b=>{ if(b.style.width===''){ b.style.width=b.dataset.p+'%'; } });}
const io2=new IntersectionObserver(entries=>{ entries.forEach(e=>{ if(e.isIntersecting){animateBars(); io2.disconnect();} }); },{threshold:.15});
io2.observe(document.getElementById('engineering'));
