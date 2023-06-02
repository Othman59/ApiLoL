# ApiLoL
API de League of Legends pour le Quiz d'Images.

Ce README explique l'utilisation de l'API de League of Legends pour créer une application de quiz basée sur des images. L'application permettra aux utilisateurs de deviner le nom d'un champion de League of Legends en se basant sur une image affichée. 
Le nombre d'essais sera limité pour ajouter un défi supplémentaire.

Configuration de l'API
Pour utiliser l'API de League of Legends, vous devez suivre les étapes suivantes :

1 - Créez un compte développeur sur le site des développeurs de Riot Games.
2 - Créez une nouvelle application et obtenez une clé d'API valide.
3 - Installez les dépendances nécessaires à votre application, telles que requests pour effectuer des requêtes HTTP.
Fonctionnement de l'application
L'application de quiz sur les champions de League of Legends fonctionne de la manière suivante :

1 - Utilisez l'API de League of Legends pour récupérer une liste de tous les champions disponibles. Vous pouvez utiliser l'endpoint GET /lol/static-data/v3/champions pour cela.
2 - Sélectionnez un champion au hasard parmi la liste.
3 - Utilisez l'API pour récupérer l'image du champion sélectionné. Vous pouvez utiliser l'endpoint GET /lol/static-data/v3/champions/{championId} en remplaçant {championId} par l'ID du champion.
4 - Affichez l'image du champion à l'utilisateur et demandez-lui de deviner le nom du champion correspondant.
5 - L'utilisateur a un nombre limité d'essais pour deviner correctement le nom du champion.
6 - Vérifiez si la réponse de l'utilisateur est correcte en comparant avec le nom réel du champion.
7 - Affichez le résultat (correct/incorrect) à l'utilisateur et passez à l'étape suivante.
