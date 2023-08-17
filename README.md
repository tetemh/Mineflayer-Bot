# Start

Pour lancer le bot vous pouvez faire
```bash
node core.js
```
ou alors 
```bash
nodemon core.js
```

<br>

# Serveur

Vous pouvez ajouter des serveur en ajoutant un dossier nommé avec l'IP du serveur là ou vous voulez ajouter du code personnaliser.

Vous deverez crée un fichier nommé ``index.js`` et dedans nous alons crée un module avec la fonction ``main`` :

```js
module.exports = {
    main: (bot) => {
        
    }
}
```

<br>

# Events

Vous pouvez ajouter de nouveaux events en créant un fichier portant le nom de l'event que vous voulez ajouter et dedans mettre un fonction main comme dans les serveurs :
```js
module.exports = {
    main: (bot, args) => {
        console.log(args)
    }
}
```
