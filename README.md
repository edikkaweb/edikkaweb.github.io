# Le laboratoire ouvert d’Edikka

[Explorer les démonstrations](https://edikkaweb.github.io/) · [English](https://edikkaweb.github.io/index-en.html) · [Bibliothèque Edikka](https://www.edikka.com/bibliotheque)

Une galerie FR/EN pour essayer les expériences, retrouver leur code et comprendre leur méthode. Le catalogue évolue dans `projects.json` : aucun nombre de projets n’est inscrit dans la navigation.

## Construire et vérifier

Node.js 22 ou ultérieur ; aucune dépendance à installer.

```sh
npm run build
npm test
```

Les sources sont `projects.json`, `assets/` et `scripts/build.mjs`. `dist/` est généré et non suivi. GitHub Actions vérifie les deux langues et les ressources avant de publier. La galerie fonctionne sans JavaScript, sans traceur, sans police distante.

Les aperçus sont les captures réelles du laboratoire Edikka, publiées dans la bibliothèque le 2 octobre 2026. Ils sont des illustrations de l’interface, pas de nouvelles mesures. Les dépôts des expériences restent la source des résultats, des versions et des licences.

## Contribuer

Pour signaler un lien ou proposer une expérience : ouvrir une issue avec la page, la langue et le résultat attendu. Une proposition de code doit conserver les deux langues, les destinations explicites, l’accès clavier et les droits des ressources. Exécuter les deux commandes ci-dessus avant une pull request. Ne pas transmettre de donnée personnelle ou de secret dans une issue publique.

## English

A growing, bilingual gallery of hands-on web experiments. Project data lives in `projects.json`; HTML is generated with Node.js and requires no client JavaScript. Run `npm run build` and `npm test`. Each experiment’s repository remains authoritative for evidence, scope and licences.

## Droits / Rights

Code original : MIT, voir [LICENSE](LICENSE). Logo et identité Edikka : droits réservés, pas de licence de marque. Les captures de démonstrations sont attribuées à Edikka / Bertrand Morel et publiées ici pour présenter ces projets ; elles ne modifient pas les licences des corpus sous-jacents.
