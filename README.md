# Moè Naturshop – Shopify-Sektionen

Moderne, video-fähige Landingpage für Naturseifen (Tonerde) und den Mentholstein.
Läuft mit jedem Online-Store-2.0-Theme (z. B. Dawn), ohne Apps.

## Inhalt

```
shopify/
  assets/moe-shop.css        gemeinsames Design
  assets/moe-shop.js         Scroll-Animationen, Videos spielen nur, wenn sichtbar
  sections/moe-hero.liquid           Vollbild-Hero mit Hintergrund-Video
  sections/moe-benefits.liquid       4 Vorteils-Karten
  sections/moe-products.liquid       Produkt-Grid aus einer Kollektion (Hover zeigt 2. Bild)
  sections/moe-video-feature.liquid  Video + Text + Kauf-Button (für Seife & Mentholstein)
  sections/moe-reviews.liquid        Bewertungs-Slider
  sections/moe-faq.liquid            Aufklappbare FAQ
  templates/page.naturshop.json      fertige Seite mit allen Sektionen
preview/index.html           lokale Vorschau im Browser
MEDIA-PROMPTS.md             Prompts für GPT Image 2 & Seedance 2.0
```

## Installation (ca. 5 Minuten)

1. Shopify Admin → **Onlineshop → Themes** → beim aktiven Theme **⋯ → Duplizieren** (Sicherheitskopie).
2. Beim Duplikat **⋯ → Code bearbeiten**.
3. **Assets → Neues Asset hinzufügen** → `moe-shop.css` und `moe-shop.js` hochladen.
4. **Sections → Neue Section hinzufügen** → jeweils den Namen (z. B. `moe-hero`) eingeben und den Inhalt der gleichnamigen Datei einfügen. Für alle 6 Sektionen wiederholen.
5. **Templates → Neues Template hinzufügen** → Typ *page*, JSON, Name `naturshop` → Inhalt von `page.naturshop.json` einfügen.
6. **Onlineshop → Seiten → Seite hinzufügen** → Titel z. B. „Shop“ → rechts unter *Theme-Vorlage* `naturshop` wählen.
7. Im **Theme-Editor** die Seite öffnen und Videos, Bilder, Kollektion und Produkte auswählen.

Alternative für die Startseite: Im Theme-Editor auf der Startseite **Abschnitt hinzufügen** → die „Moè …“-Sektionen auswählen.

## Bilder & Videos

Die Sektionen zeigen Platzhalter, bis du Medien auswählst. Prompts und Formate für GPT Image 2 und Seedance 2.0 stehen in
[`MEDIA-PROMPTS.md`](MEDIA-PROMPTS.md). Videos: MP4, ohne Ton, unter 20 MB, vorher unter *Inhalt → Dateien* hochladen.

## Wichtig vor dem Livegang

- Die Bewertungs-Sektion enthält Platzhaltertexte, bitte nur **echte** Kundenbewertungen eintragen.
- Versand- und Produktaussagen (Versandkosten, Lieferzeit, Inhaltsstoffe, „vegan“, „palmölfrei“) an deine tatsächlichen Angaben anpassen.
- Beim Mentholstein keine Heilversprechen machen (z. B. „heilt Kopfschmerzen“); Formulierungen wie „kühlend“, „erfrischend“ sind unproblematisch.
