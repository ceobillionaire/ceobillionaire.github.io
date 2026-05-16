# Vincent Boucher bilingual authority surface — seal and portrait integration QA

This package integrates the provided QUEBEC.AI seal and Vincent Boucher portrait into the bilingual authority surface.

## Display fixes retained

- No absolute-positioned text on the hero card.
- Portrait and seal are placed inside bounded cards with `object-fit`, `max-width`, and responsive grid rules.
- French and English hero layouts use separate sizing rules.
- Long titles such as `MONTREAL.AI` and `Dossier technique` use responsive font sizing and overflow-safe wrapping.
- Header navigation collapses to a mobile menu before crowding.
- The package contains no `CNAME` file.

## Integrated assets

- `/assets/img/quebec-ai-seal.png`
- `/assets/img/quebec-ai-seal.webp`
- `/assets/img/vincent-boucher-lab.jpg`
- `/assets/img/vincent-boucher-lab-portrait.jpg`
- `/assets/img/vincent-boucher-authority-og.png`
- `/assets/img/favicon.png`

## Primary test URLs after GitHub upload

- `https://ceobillionaire.github.io/`
- `https://ceobillionaire.github.io/fr/`
- `https://ceobillionaire.github.io/quebec-ai/`
- `https://ceobillionaire.github.io/fr/quebec-ai/`
- `https://ceobillionaire.github.io/media/`
- `https://ceobillionaire.github.io/fr/medias/`
