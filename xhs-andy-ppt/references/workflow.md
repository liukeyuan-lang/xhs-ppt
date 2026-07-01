# Workflow

## Purpose

Turn reference images and a topic into an editable Xiaohongshu-style PPT deck with repeatable structure and reproducible output.

## Inputs

- 1-6 reference images
- one clear topic
- target page count
- optional outline
- optional tone, such as sharp, educational, or editorial

## Standard Flow

1. Read the references and describe recurring layout patterns.
2. Convert those patterns into a minimal deck system:
   - background color
   - card types
   - title scale
   - accent colors
   - footer pattern
3. Turn the topic into a fixed page outline.
4. Write slide metadata in JavaScript arrays or objects.
5. Build helper functions for repeated slide primitives.
6. Generate the `.pptx`.
7. Generate an HTML preview only when it helps layout review.
8. Open the output deck and verify editability.

## Recommended Page Shape

For a 6-8 page social deck:

- page 1: hook cover
- page 2: problem framing
- page 3: core framework
- page 4: step or method
- page 5: step or method
- page 6: step, warning, or takeaway
- page 7: mistakes or examples
- page 8: closing action

Keep each page focused on one claim.

## Copy Rules

- Write for scanning speed, not speech.
- Keep headlines short and direct.
- Use support text to clarify the claim, not restate it.
- Prefer 2-4 bullets or cards per dense page.
- Highlight only the few words that carry contrast or emphasis.

## Layout Rules

- Use shared helper functions for repeated boxes and text blocks.
- Keep margins and card spacing numerically consistent.
- Use one slide metadata array as the source of truth.
- Separate content data from drawing helpers whenever possible.

## File Pattern

```text
generate_<topic>_ppt.js
<topic>_preview.html
<topic>_editable.pptx
```

## Command Pattern

```powershell
node .\generate_<topic>_ppt.js
```

## Deliverable Checklist

- references were inspected first
- page count was fixed before layout work
- shared helper functions exist for repeated shapes
- all output text is editable in PPT
- final `.pptx` was generated successfully
- preview file exists when the task required visual review

## Out of Scope

This skill does not cover:

- HyperFrames video generation
- TTS
- narration timing
- subtitle sync
