# Projektdokumentation

**Navn:** Azad Karaman

**Hold:** WUxx

**Uddannelse:** Webudvikler

**Uddannelsessted:** Roskilde Tekniske Skole

[Link til min applikaton](https://rts-cmk-wu12.github.io/newsify-Azad210/)

## Teknologier

- HTML
- CSS
- JavaScript
- Webpack
- Jest
- Scss

---

### Redegørelse for oprindelsen af evt. tredjeparts kode anvendt i opgaveløsningen (Teknisk dokumentation)

(Hvilke node-pakker har du installeret for at dit projekt virker? Beskriv kort hvilket "problem" hver pakke løser.)

---

        "css-loader": "^7.1.2":
        css-loader oversætter CSS-filer, så de kan blive importeret og brugt i JavaScript-filer.

        "file-loader": "^6.2.0":
        file-loader håndterer import af filer og giver dem en unik URL

        "html-loader": "^5.1.0":
        html-loader behandler HTML-filer og gør det muligt at importere dem som moduler i JavaScript, hvilket kan bruges til dynamisk at indlæse indhold i Webpack.

        "html-webpack-plugin": "^5.6.3":
        html-webpack-plugin genererer automatisk en HTML-fil, som refererer til de relevante bundtede JS-filer, hvilket gør opbygningen lettere.

        "jest": "^29.7.0":
        jest er et testværktøj til JavaScript, der gør det muligt at skrive og køre enheder- og integrationstests for applikationen.

        "mini-css-extract-plugin": "^2.9.2":
        mini-css-extract-plugin generere en separat CSS-fil, hvilket forbedrer performance og gør det lettere at cache CSS.

        "sass": "^1.81.0":
        sass er Sass-kompilatoren, der oversætter scss eller .sass filer til standard CSS.

        "sass-loader": "^16.0.3":
        sass-loader gør det muligt for Webpack at oversætte Sass til CSS

        "style-loader": "^4.0.0":
        style-loader injicerer CSS direkte i DOM'en

        "webpack": "^5.96.1":
        samler alle filer og afhængigheder, optimerer dem og giver en samlet bundle, der kan bruges i produktionen.

        "webpack-cli": "^5.1.4":
        webpack-cli giver kommandolinjegrænsefladen for Webpack, så du kan konfigurere og køre Webpack-bygninger via terminalen.

        "webpack-dev-server": "^5.1.0:
        webpack-dev-server kører en lokal udviklingsserver med hot-reload, som automatisk opdaterer browseren, når du ændrer i koden.

### Argumentation for de valg du selvstændigt har truffet under løsningen af opgaven

(Hvilke overvejelser har du gjort dig, fx. i forbindelse med dit valg af animationer)

---

Timing og varighed:
Jeg har overvejet varigheden og timingen af animationerne.
Dem som er for langsomme, kan virke irriterende at sidde og vente på, mens animationer, der er for hurtige, kan være svære at opfatte.
Jeg har valgt en balance, der gør animationerne behagelige, uden at de bliver for distraherende.
Jeg har også sørget for at det er glidende og naturlige.

### Vurdering af egen indsats & gennemførelse af opgaveforløbet (Arbejdsgangen)

(Hvad gik godt. Hvor prioriterede du forkert. Klagesange fra de varme lande om halvfærdigt produkt, på grund af manglende nattesøvn, fordi din kæle-skildpadde havde tandpine er IKKE interessante.)

---

Jeg synes, det gik okay, men jeg kunne godt have brugt min tid lidt bedre. Jeg brugte en del tid på at finpudse HTML og CSS for at få designet til at se godt ud, men jeg skulle måske have prioriteret JavaScript-funktionerne mere, så de virkede ordentligt. Jeg skal til næste gang fokusere mere på funktionaliteten i stedet for at bruge så meget tid på det visuelle.

### En beskrivelse af særlige punkter til bedømmelse

(er der en særlig detalje som du synes din underviser bør lægge mærke til når dit projekt evalueres)

Du kan vise kode i markdown på følgende måder:

```js
function myFunction() {}
```

```css
.my__css-rule {
  property: value;
}
```
