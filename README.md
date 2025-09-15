# Comment l'utiliser 

1. Copier le repo 
2. Lancer un `npm install` après l'avoir copier
3. Lancer la commande `npm run seed` pour initialiser les données de la base de données 
4. Puis lancer la commande `npm run dev` pour lancer le serveur 
5. vous pouvez ensuite vous rendre sur  : `http://localhost:3000/` 



# Intitulé du Checkpoint

Le but de ce checkpoint est de vérifier tes connaissances en développement backend.

1. Commence par initialiser un nouveau repo git, il te servira à faire le rendu du checkpoint.
2. Crée un nouveau projet NodeJS Typescript.
    Pour un meilleur confort de dev, utilise ts-node-dev.
3. Le but de cet exercice est de créer une API GraphQL avec Apollo Server et Typegraphql pour enregistrer et lire des pays avec leur code, leur nom et leur emoji.
4. Utilise une base de données SQLite et TypeORM en ORM.
5. Voici les packages dont tu auras besoin et leur version :
```
"dependencies": {
    "@apollo/server": "^4.10.2",
    "reflect-metadata": "^0.2.2",
    "sqlite3": "^5.1.7",
    "ts-node-dev": "^2.0.0",
    "type-graphql": "^2.0.0-beta.6",
    "typeorm": "^0.3.20"
  }
  ```
6. Crée une mutation qui prend en paramètres :
    * un code (FR, BE, AN, ...),
    * un nom (France, Belgique, Andorre, ...),
    * un emoji (🇫🇷, 🇧🇪, 🇦🇩, ...),
    et qui enregistre cette entrée en BDD.

7. Crée ensuite 2 queries :
    * Une qui renvoie la liste de tous les pays (avec pour attributs, pour chaque pays, le code, le nom, l'emoji)
    * Une autre qui prend en paramètre le code du pays et qui renvoie le pays en question
Et pour finir,

8. Ajoute un code continent à la mutation d'ajout de pays et une query qui permet de récupérer tous les pays d'un continent