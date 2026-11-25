# Moè Natur – komplettes Shopify-Theme

Modernes Online-Store-2.0-Theme für Naturseifen (Tonerde) und den Mentholstein, mit Video-Hero,
Produktseiten, Warenkorb, Suche und Blog. Keine Apps nötig.

## Installation (Zip hochladen)

1. Shopify Admin → **Onlineshop → Themes**.
2. **Theme hinzufügen → Zip-Datei hochladen** → `moe-natur-theme.zip` auswählen.
3. Beim neuen Theme **Anpassen** klicken und Bilder, Videos, Kollektion und Produkte auswählen.
4. Wenn alles passt: **⋯ → Veröffentlichen**.

Die Zip-Datei enthält den Inhalt des Ordners `theme/` (mit `layout/theme.liquid` auf oberster Ebene).
Nach Änderungen neu packen:

```bash
cd theme && zip -r ../moe-natur-theme.zip . -x '.*'
```

## Aufbau

```
theme/
  layout/       theme.liquid, password.liquid
  templates/    index (Startseite), product, collection, cart, page, page.naturshop, search, blog, article, 404, password
  sections/     moe-*  = Landingpage-Bausteine (Hero, Vorteile, Produkte, Video+Text, Bewertungen, FAQ)
                main-* = Shop-Seiten (Produkt, Kollektion, Warenkorb, Suche …), header, footer
  snippets/     product-card, pagination, meta-tags
  assets/       moe-shop.css, moe-shop.js
  config/       Theme-Einstellungen (Farben, Favicon)
preview/index.html   lokale Vorschau der Startseite
MEDIA-PROMPTS.md     Prompts für GPT Image 2 & Seedance 2.0
```

## Nach dem Hochladen einrichten

- **Menü:** Onlineshop → Navigation → „Hauptmenü“ und „Footer-Menü“ (z. B. Shop, Seifen, Mentholstein, Impressum, Datenschutz, AGB, Widerruf).
- **Startseite:** Im Editor bei „Moè Produkte“ deine Kollektion wählen und bei „Video + Text (Mentholstein)“ das Mentholstein-Produkt verknüpfen.
- **Produktseite:** Die Aufklapp-Texte „Inhaltsstoffe“ und „Anwendung“ anpassen.
- **Rechtstexte:** Einstellungen → Richtlinien (Impressum, AGB, Datenschutz, Widerruf, Versand). Pflicht in Deutschland.

## Bilder & Videos

Die Sektionen zeigen Platzhalter, bis du Medien auswählst. Prompts und Formate stehen in
[`MEDIA-PROMPTS.md`](MEDIA-PROMPTS.md). Videos: MP4, ohne Ton, unter 20 MB, vorher unter *Inhalt → Dateien* hochladen.

## Wichtig vor dem Livegang

- Die Bewertungs-Sektion enthält Platzhaltertexte, bitte nur **echte** Kundenbewertungen eintragen.
- Versand- und Produktaussagen (Versandkosten, Lieferzeit, Inhaltsstoffe, „vegan“) an deine tatsächlichen Angaben anpassen.
- Beim Mentholstein keine Heilversprechen machen; „kühlend“ und „erfrischend“ sind unproblematisch.
