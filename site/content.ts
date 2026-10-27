// All text and data for ADLER BEVERAGES (functional elixir brand, ₹ prices).

const IMG = "/images/pulp-fresh";
export const img = (name: string) => `${IMG}/${name}.webp`;

export type Juice = "orange" | "berry" | "green" | "beet" | "gold" | "melon";

/** Bottle stills: pixel-aligned colour edits of one master bottle (one shared cut-out mask). */
export const bottle = (j: Juice | "empty" | "glass") => img(`bottle-${j}`);

/** Band colours (whole bands only, never small accents). */
export const juiceColor: Record<Juice, string> = {
  orange: "#E9741C",
  berry: "#D7192E",
  green: "#5FA02B",
  beet: "#6B1B3D",
  gold: "#F7C336",
  melon: "#F08A8A",
};

export type Product = {
  id: string;
  name: string;
  word: string; // short word printed on the bottle label
  juice: Juice;
  goal: string; // the goal shown on its price tag
  price: number;
  ml: number;
  blurb: string;
  inside: { fruit: string; label: string }[];
  nutrition: { kcal: number; sugar: number; vitC: string; fibre: string };
};

export const products: Record<string, Product> = {
  sunrise: {
    id: "sunrise",
    name: "Mix Berry Sparks",
    word: "Berry",
    juice: "orange",
    goal: "Focus",
    price: 125,
    ml: 250,
    blurb: "80 mg clean green tea leaf caffeine with 160 mg Suntheanine® L-Theanine. Wild mountain berries & crisp blackcurrant in a 2:1 zero-jitter synergy.",
    inside: [
      { fruit: "orange", label: "Green Tea Caffeine" },
      { fruit: "carrot", label: "L-Theanine 160 mg" },
      { fruit: "ginger", label: "Vitamin B Complex" },
      { fruit: "lemon-half", label: "0g Sugar" },
    ],
    nutrition: { kcal: 10, sugar: 0, vitC: "B3, B6, B12", fibre: "0 g" },
  },
  berry: {
    id: "berry",
    name: "Peach Sparks",
    word: "Peach",
    juice: "berry",
    goal: "Hydrate",
    price: 125,
    ml: 250,
    blurb: "60 mg smooth plant caffeine + 100 mg Suntheanine®. Sun-kissed white peach with Himalayan mineral effervescence and full-spectrum electrolytes.",
    inside: [
      { fruit: "strawberry", label: "Plant Caffeine 60 mg" },
      { fruit: "apple-red", label: "Suntheanine® 100 mg" },
      { fruit: "beet", label: "Himalayan Pink Salt" },
      { fruit: "lime-half", label: "Stevia Reb-M" },
    ],
    nutrition: { kcal: 8, sugar: 0, vitC: "K, Mg, Na", fibre: "0 g" },
  },
  green: {
    id: "green",
    name: "Mix Berry Sparks",
    word: "Berry",
    juice: "green",
    goal: "Focus",
    price: 125,
    ml: 250,
    blurb: "Antioxidant focus & deep cognitive flow. Engineered with botanical extracts and zero synthetic crash.",
    inside: [
      { fruit: "apple-green", label: "Green Tea Extract" },
      { fruit: "spinach", label: "L-Theanine" },
      { fruit: "cucumber", label: "Vitamin B3" },
      { fruit: "mint", label: "Keto Friendly" },
    ],
    nutrition: { kcal: 10, sugar: 0, vitC: "100%", fibre: "0 g" },
  },
  beet: {
    id: "beet",
    name: "Peach Sparks",
    word: "Peach",
    juice: "beet",
    goal: "Hydrate",
    price: 125,
    ml: 250,
    blurb: "Electrolyte renewal & zen equilibrium. Himalayan pink rock salt with full-spectrum minerals.",
    inside: [
      { fruit: "beet", label: "Plant Caffeine" },
      { fruit: "carrot", label: "Suntheanine®" },
      { fruit: "apple-red", label: "Electrolytes" },
      { fruit: "ginger", label: "Stevia Reb-M" },
    ],
    nutrition: { kcal: 8, sugar: 0, vitC: "K, Mg, Na", fibre: "0 g" },
  },
  gold: {
    id: "gold",
    name: "Mix Berry Sparks",
    word: "Berry",
    juice: "gold",
    goal: "Energy",
    price: 125,
    ml: 250,
    blurb: "Clean energy with zero crash. 80 mg green tea leaf caffeine for sustained cognitive performance.",
    inside: [
      { fruit: "pineapple", label: "Caffeine 80 mg" },
      { fruit: "lemon-half", label: "L-Theanine 160 mg" },
      { fruit: "ginger", label: "Vitamin B6" },
      { fruit: "mint", label: "Zero Aspartame" },
    ],
    nutrition: { kcal: 10, sugar: 0, vitC: "B3, B6, B12", fibre: "0 g" },
  },
  melon: {
    id: "melon",
    name: "Peach Sparks",
    word: "Peach",
    juice: "melon",
    goal: "Zen",
    price: 125,
    ml: 250,
    blurb: "Sun-kissed white peach & Himalayan mineral effervescence. Naturally sweetened, zero added sugar.",
    inside: [
      { fruit: "lime-half", label: "Plant Caffeine" },
      { fruit: "mint", label: "Himalayan Salt" },
      { fruit: "cucumber", label: "Electrolytes" },
      { fruit: "citrus-leaves", label: "Stevia Reb-M" },
    ],
    nutrition: { kcal: 8, sugar: 0, vitC: "K, Mg, Na", fibre: "0 g" },
  },
};

export const fruit = (name: string) => img(`fruit-${name}`);

// ── Nav ─────────────────────────────────────────────
export const nav = {
  links: [
    { label: "Home", href: "#top" },
    { label: "Our Products", href: "#flavours" },
    { label: "Why ADLER", href: "#farm" },
    { label: "Partner With Us", href: "#cleanses" },
  ],
  bagCount: 2,
  bag: [
    { id: "green", qty: 1 },
    { id: "beet", qty: 1 },
  ],
};

// ── Hero ────────────────────────────────────────────
export const hero = {
  lines: ["Focus Like", "An Eagle."],
  lead: "India's premier caffeinated functional elixir, engineered with botanical extracts, clean L-Theanine, and zero synthetic crash. Crafted for high-performance minds.",
  primary: "Shop elixirs",
  secondary: "Why ADLER",
  chalk: ["Flagship Elixir", "₹125", "a can"],
  badges: ["100% Clean Botanicals", "0g Added Sugar", "250 ml Aluminium Can"],
  // Two diagonal rows of the bottle wall (they slide opposite ways in Round 2).
  rowA: ["beet", "sunrise", "berry", "melon"],
  rowB: ["gold", "green", "sunrise"],
};

// ── Flavours (goal chips) ───────────────────────────
export const goals = [
  // the chip, its featured bottle and its cards always match: each card shows its own goal
  { id: "detox", label: "Focus", lead: "green", cards: ["green", "beet", "sunrise", "gold"] },
  { id: "immunity", label: "Energy", lead: "sunrise", cards: ["sunrise", "gold", "berry", "green"] },
  { id: "energy", label: "Hydrate", lead: "gold", cards: ["gold", "sunrise", "berry", "green"] },
  { id: "glow", label: "Zen", lead: "berry", cards: ["berry", "melon", "green", "sunrise"] },
] as const;
export const startGoal = "immunity";
export const ghostWord: Record<Juice, string> = {
  orange: "Berry",
  berry: "Peach",
  green: "Berry",
  beet: "Peach",
  gold: "Berry",
  melon: "Peach",
};

// ── Mix your own ────────────────────────────────────
export const mix = {
  title: ["Build", "your stack."],
  lead: "Choose your nootropic profile. We blend the perfect functional formula for peak performance.",
  bins: [
    { id: "orange", label: "Caffeine", liquid: "#F39A1E" },
    { id: "apple-green", label: "L-Theanine", liquid: "#9CC54A" },
    { id: "strawberry", label: "Electrolytes", liquid: "#E0313F" },
    { id: "beet", label: "Vitamin B3", liquid: "#7A1F45" },
    { id: "carrot", label: "Vitamin B6", liquid: "#E2561B" },
    { id: "pineapple", label: "Vitamin B12", liquid: "#F6C540" },
    { id: "lime-half", label: "Stevia Reb-M", liquid: "#B9D661" },
    { id: "mint", label: "Pink Salt", liquid: "#6FAF5A" },
    { id: "ginger", label: "Green Tea", liquid: "#EBCB6E" },
  ],
  // The demo blend (record cursor picks these in Round 4); ?static=1 shows it finished.
  picks: ["orange", "carrot", "ginger"],
  blend: { name: ["Eagle", "Focus"], recipe: "caffeine + vitamin B6 + green tea", price: 125 },
};

// ── Product detail ──────────────────────────────────
export const pdp = {
  wheel: ["berry", "green", "sunrise", "beet", "gold"],
  start: "sunrise",
  sizes: [
    { id: "single", label: "Single Can", note: "250 ml", price: 125 },
    { id: "six", label: "4-Pack", note: "4 × 250 ml", price: 480 },
    { id: "cleanse", label: "12-Can Collector", note: "12 cans", price: 1350 },
  ],
  stamp: "Batch Tested",
  sample: "ADLER ELIXIRS · Where Health Meets Refreshment",
};

// ── Farm → bottle ───────────────────────────────────
export const farm = {
  title: ["Lab to can,", "zero compromise."],
  steps: [
    { word: "Source", time: "Step 01", note: "botanical extracts sourced", photo: "farm-orchard" },
    { word: "Blend", time: "Step 02", note: "clean emulsion chemistry", photo: "farm-wash" },
    { word: "Test", time: "Step 03", note: "48-point spectroscopy", photo: "farm-cut" },
    { word: "Fill", time: "Step 04", note: "sealed recyclable aluminium", photo: "farm-press" },
    { word: "Ship", time: "Step 05", note: "cold chain delivery", photo: "farm-bottles" },
  ],
  start: 2, // ?static=1 shows step 03
};

// ── Benefits (fresh vs carton) ──────────────────────
export const compare = {
  title: ["ADLER vs", "the rest."],
  ours: "ADLER Elixirs",
  theirs: "Energy drinks",
  rows: [
    { label: "Synthetic caffeine", ours: "None", theirs: "200 mg", a: 0, b: 80 },
    { label: "Added sugar", ours: "0 g", theirs: "27 g", a: 2, b: 70 },
    { label: "L-Theanine per can", ours: "160 mg", theirs: "0 mg", a: 92, b: 0 },
    { label: "Batch testing points", ours: "48", theirs: "0", a: 95, b: 3 },
  ],
  note: "Compared against typical energy drinks · ADLER ELIXIRS",
};

// ── Cleanse & subscription ──────────────────────────
export const plans = {
  title: "Pick your pack.",
  stamp: "Monthly drops, weekly focus",
  rows: [
    { id: "reset", name: "Single Can", note: "250 ml · Mix Berry or Peach", price: 125 },
    { id: "cleanse3", name: "4-Pack", note: "4 × 250 ml · mix or match", price: 480 },
    { id: "reboot", name: "12-Can Collector", note: "12 cans · free merch", price: 1350 },
  ],
  start: "cleanse3",
  freq: [
    { id: "once", label: "Once", off: 0 },
    { id: "weekly", label: "Weekly save 15%", off: 0.15 },
    { id: "fortnight", label: "Fortnightly save 10%", off: 0.1 },
    { id: "monthly", label: "Monthly save 5%", off: 0.05 },
  ],
  startFreq: "weekly",
  cta: "Subscribe",
};

// ── Reviews ─────────────────────────────────────────
export const reviews = {
  title: ["Notes from", "the eagles."],
  meta: "average from 2,400 subscribers.",
  sample: "Real reviews · ADLER ELIXIRS",
  notes: [
    { quote: "Mix Berry Sparks before a pitch meeting. I've never been this locked in.", who: "Riya · Pune", fruit: "orange" },
    { quote: "Peach Sparks after a long run. The electrolytes hit different with zero sugar.", who: "Kabir · Mumbai", fruit: "beet" },
    { quote: "My whole team switched from coffee. The 2:1 L-Theanine ratio is a game-changer.", who: "Anika · Bengaluru", fruit: "apple-green" },
    { quote: "The 12-Can Collector arrived cold, on time, with a handwritten note.", who: "Dev · Delhi", fruit: "lime-half" },
  ],
};

// ── Footer ──────────────────────────────────────────
export const footer = {
  strip: "Ready to focus like an eagle?",
  placeholder: "Your email",
  join: "Join",
  cols: [
    { title: "Products", links: ["Mix Berry Sparks", "Peach Sparks", "4-Pack", "12-Can Collector"] },
    { title: "About", links: ["Our Story", "Why ADLER", "Lab Reports"] },
    { title: "Help", links: ["Delivery", "Subscriptions", "Recycling"] },
  ],
  hours: ["Focus daily · Zero crash", "Delivered nationwide"],
  socials: ["IG", "YT", "X"],
  wordmark: "ADLER",
  note: "© ADLER BEVERAGES. All rights reserved. Where Health Meets Refreshment.",
};

export const rupee = (n: number) => `₹${n.toLocaleString("en-IN")}`;
