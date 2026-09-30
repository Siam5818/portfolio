# Portfolio — Mohamed Anzize (AMSD-GIK)

Portfolio personnel statique, sans dépendance ni build : HTML/CSS/JS purs.

## Structure

```
portfolio/
├── index.html        # structure de la page
├── css/
│   └── style.css      # tous les styles
├── js/
│   └── main.js         # données (projets, compétences, outils…) + interactions
├── assets/
│   ├── avatar.jpg      # à ajouter : ta photo de profil
│   └── cv.pdf           # à ajouter : ton CV téléchargeable
└── README.md
```

## Personnaliser

- **Photo** : dépose ton fichier dans `assets/avatar.jpg`, puis dans `index.html` remplace
  `<div class="avatar-inner" id="avatar">MA</div>` par
  `<div class="avatar-inner" id="avatar"><img src="assets/avatar.jpg" alt="Mohamed Anzize"></div>`
- **CV** : dépose ton PDF dans `assets/cv.pdf`, puis remplace les `href="cv.pdf"` par `href="assets/cv.pdf"` (2 occurrences dans `index.html`)
- **Projets, compétences, outils, témoignages** : tout se modifie dans `js/main.js`, dans les tableaux en haut du fichier (`projects`, `backend`, `toolsList`, `testimonials`, etc.) — pas besoin de toucher au HTML
- **Liens réels** (LinkedIn, email) : à mettre à jour dans `index.html` (section `#contact` et `<footer>`)

## Déployer

### GitHub Pages (gratuit)
1. Crée un repo sur GitHub (ex. `portfolio` ou `<ton-username>.github.io`)
2. Pousse ce dossier dedans :
   ```bash
   git init
   git add .
   git commit -m "Portfolio initial"
   git branch -M main
   git remote add origin https://github.com/Siam5818/portfolio.git
   git push -u origin main
   ```
3. Repo → **Settings → Pages** → Source = branche `main`, dossier `/ (root)`
4. En ligne en 1–2 min à `https://siam5818.github.io/portfolio/`

### Netlify (gratuit)
- Glisse-dépose le dossier entier sur [app.netlify.com/drop](https://app.netlify.com/drop) — en ligne immédiatement, HTTPS inclus

### Vercel (gratuit)
```bash
npm i -g vercel
cd portfolio
vercel
```

Aucune configuration, aucun build : c'est du HTML/CSS/JS statique servi tel quel sur les trois plateformes.
