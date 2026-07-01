const pptxgen = require("pptxgenjs");

const pptx = new pptxgen();
pptx.layout = "LAYOUT_WIDE";
pptx.author = "OpenAI Codex";
pptx.company = "OpenAI";
pptx.subject = "Xiaohongshu style PPT";
pptx.title = "Replace with your deck title";
pptx.lang = "zh-CN";
pptx.theme = {
  headFontFace: "Microsoft YaHei",
  bodyFontFace: "Microsoft YaHei",
  lang: "zh-CN",
};

const colors = {
  bg: "F6F8FB",
  white: "FFFFFF",
  text: "111111",
  muted: "4B5563",
  soft: "6B7280",
  line: "D9E1EA",
  blue: "3B82F6",
  teal: "14B8A6",
  navy: "111827",
  cardBlue: "EFF6FF",
  cardMint: "ECFDF5",
};

const slides = [
  {
    page: "Page 1",
    label: "HOOK",
    eyebrow: "EDITORIAL DECK",
    progress: 1 / 6,
    title: [
      { text: "Replace with", color: colors.text },
      { text: "your title", color: colors.blue },
    ],
    sub: "Short supporting line.",
    footer: "Closing note for this page.",
  },
];

function addRounded(slide, x, y, w, h, fill, radius = 0.18, line = null, transparency = 0) {
  slide.addShape(pptx.ShapeType.roundRect, {
    x,
    y,
    w,
    h,
    rectRadius: radius,
    fill: { color: fill, transparency },
    line: line
      ? { color: line.color, pt: line.pt || 1, transparency: line.transparency || 0 }
      : { color: fill, transparency: 100 },
  });
}

function addProgress(slide, ratio) {
  addRounded(slide, 5.02, 0.36, 1.28, 0.07, colors.line, 0.08, null, 25);
  addRounded(slide, 5.02, 0.36, 1.28 * ratio, 0.07, colors.blue, 0.08);
}

function addTitle(slide, lines) {
  lines.forEach((line, idx) => {
    slide.addText(line.text, {
      x: 3.14,
      y: 2.24 + idx * 0.44,
      w: 4.36,
      h: 0.36,
      fontFace: "Microsoft YaHei",
      fontSize: 24,
      bold: true,
      color: line.color,
      align: "center",
      margin: 0,
    });
  });
}

function addSub(slide, text) {
  slide.addText(text, {
    x: 3.58,
    y: 3.14,
    w: 3.5,
    h: 0.48,
    fontFace: "Microsoft YaHei",
    fontSize: 12,
    bold: true,
    color: colors.muted,
    align: "center",
    margin: 0,
    valign: "mid",
  });
}

function addFooter(slide, text, y = 5.26) {
  addRounded(slide, 3.54, y, 3.32, 0.56, colors.white, 0.18, null, 2);
  slide.addText(text, {
    x: 3.68,
    y: y + 0.08,
    w: 3.04,
    h: 0.4,
    fontFace: "Microsoft YaHei",
    fontSize: 9.8,
    bold: true,
    color: "1F2937",
    align: "center",
    valign: "mid",
    margin: 0,
  });
}

slides.forEach((page) => {
  const slide = pptx.addSlide();
  slide.background = { color: colors.bg };

  slide.addText(page.page, {
    x: 0.4,
    y: 0.18,
    w: 1.12,
    h: 0.18,
    fontFace: "Microsoft YaHei",
    fontSize: 10,
    color: colors.soft,
    margin: 0,
  });

  slide.addText(page.eyebrow, {
    x: 3.76,
    y: 1.96,
    w: 2.94,
    h: 0.16,
    fontFace: "Arial",
    fontSize: 10,
    color: colors.soft,
    charSpace: 2.4,
    align: "center",
    margin: 0,
  });

  addProgress(slide, page.progress);

  addRounded(slide, 4.62, 0.76, 1.18, 1.18, colors.white, 0.22, null, 2);
  addRounded(slide, 5.24, 0.64, 1.02, 0.28, colors.navy, 0.18);
  slide.addText(page.label, {
    x: 5.32,
    y: 0.705,
    w: 0.86,
    h: 0.12,
    fontFace: "Microsoft YaHei",
    fontSize: 9,
    bold: true,
    color: colors.white,
    align: "center",
    margin: 0,
  });

  addTitle(slide, page.title);
  addSub(slide, page.sub);
  addFooter(slide, page.footer);
});

async function main() {
  await pptx.writeFile({ fileName: "replace_me_editable.pptx" });
  console.log("wrote:replace_me_editable.pptx");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
