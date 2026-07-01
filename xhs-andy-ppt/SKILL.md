---
name: xhs-andy-ppt
description: Use when turning Xiaohongshu-style reference images, a topic, or a finished outline into an editable PPT deck with pptxgenjs, HTML preview pages, and card-based social-slide layouts.
---

# XHS Andy PPT

## Overview

Use this skill to build Xiaohongshu-style PPT decks from reference images and a topic. The default output is an editable `.pptx` generated with `pptxgenjs`, plus an HTML preview when the workflow benefits from visual review before export.

## Workflow

1. Inspect the reference images before writing slide copy.
2. Lock the deck constraints:
   - topic
   - page count
   - aspect ratio, usually wide slides for export
   - output mode: editable PPTX
3. Extract the visual system from the references:
   - background tone
   - card layout
   - title hierarchy
   - accent colors
   - icon style
4. Turn the topic into a page-by-page outline.
5. Implement the deck in one `pptxgenjs` script.
6. If useful, create an HTML preview that mirrors the deck layout.
7. Export the `.pptx` and verify the output file opens cleanly.

## Trigger Examples

Use this skill for requests like:

- "Use these references to make an editable Xiaohongshu PPT."
- "Turn this topic into a card-based PPT deck with the same visual style as these images."
- "Create a 6-page PPT from this outline and keep it editable."
- "Build a social-style presentation and generate the PPT with pptxgenjs."

## Outputs

Produce these artifacts when the task requires them:

- one `generate_<topic>_ppt.js` script
- one `.pptx` export
- one optional preview `.html`
- one optional brief content outline in markdown

## Build Rules

- Prefer one self-contained Node script per deck.
- Use `pptxgenjs` rather than manual PPT editing when the deck should stay reproducible.
- Keep slide count fixed before layout work starts.
- Reuse helper functions for cards, titles, footer blocks, and progress markers.
- Keep all text editable in PowerPoint; do not flatten text into images.

## Visual Rules

- Match the references before inventing new visual motifs.
- Prefer light editorial backgrounds when the references use clean product-note aesthetics.
- Use one or two accent colors only.
- Keep the layout card-based and centered when the references suggest stacked information blocks.
- Use bold, legible typography with clear hierarchy.

## Naming Rules

- Name scripts as `generate_<topic>_ppt.js`.
- Name preview files as `<topic>_preview.html` when present.
- Name final decks as `<topic>_editable.pptx`.
- Keep topic names concise and kebab-case or underscore-safe.

## Validation

Run the generator script from the workspace root:

```powershell
node .\generate_<topic>_ppt.js
```

Confirm:

- the `.pptx` file is written
- the expected page count exists
- text boxes are editable
- slide spacing is visually consistent

## Common Failures

- If the deck looks like a generic corporate template, the reference style was not extracted tightly enough.
- If the slides feel crowded, reduce copy density before shrinking font sizes too far.
- If elements drift from slide to slide, centralize the repeated layout helpers.
- If the deck becomes hard to maintain, the script needs stronger data structures for page metadata.
- If a preview and PPT diverge, treat the script as the source of truth and realign the preview.

## References

Read [references/workflow.md](./references/workflow.md) before implementation. Use [scripts/pptxgenjs-xhs-template.js](./scripts/pptxgenjs-xhs-template.js) as the starting template when creating a new deck.
