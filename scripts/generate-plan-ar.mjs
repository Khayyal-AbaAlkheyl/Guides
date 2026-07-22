/**
 * Generates data/london-ar.js — full Arabic overlay (names + all text).
 * Run: node scripts/generate-plan-ar.mjs
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const dictPath = path.join(root, 'scripts', 'ar-dict.json');
const extractedPath = path.join(root, 'scripts', 'ar-extracted-pairs.json');
const manualSeedPath = path.join(root, 'scripts', 'ar-manual-seed.json');
const seedPath = path.join(root, 'scripts', 'ar-static-seed.json');
const outPath = path.join(root, 'data', 'london-ar.js');
const staticOnly = process.argv.includes('--static-only');

const plan = new Function(fs.readFileSync(path.join(root, 'data/london.js'), 'utf8') + '; return PLAN;')();

const SKIP_KEYS = new Set([
  'mapUrl', 'bookUrl', 'lat', 'lng', 'photos', 'heroImage', 'theme', 'stats',
  'icon', 'lens', 'googleRating', 'rating', 'price', 'michelin', 'halal',
  'vegetarian', 'kidsFriendly', 'dressCode', 'reservation', 'goodForKids',
  'stroller', 'babyChange', 'familyTicket', 'crowd', 'timeOfDay', 'step', 'day',
  'color', 'edition', 'badge', 'photos', 'img', 'signature', 'exterior',
  'room', 'restaurant', 'view', 'detail', 'hero', 'photoSpot', 'heroPosition'
]);

const HOME_AR = {
  meta: {
    city: 'لندن',
    country: 'المملكة المتحدة',
    tagline: 'معالم وإقامة وطعام وخطط يومية — في جيبك.'
  },
  welcome: {
    editorLetter:
      'لندن ليست مدينة تزورها فحسب. إنها مدينة تُتمرَّن عليها — تمرين قرون من الإمبراطوريات والظهرانات، من سيارات الأجرة السوداء والحدائق الهادئة. بُني هذا الدليل لغرض واحد: أن يكون في جيبك ويجيب على السؤال الوحيد الذي يهم في أي رحلة جيدة — ماذا أفعل الآن؟\n\nكل معلم وفندق ومطعم ومستشفى وسفارة في هذه الصفحات يحمل رمز QR يفتح مباشرة في خرائط Google. كل مسار له خريطة وجدول زمني ومسافة مشي تقديرية. صُمم كل فصل ليكون جميلاً في العرض ومفيداً في الاستخدام.'
  },
  essentials: {
    currency: { label: '£ الجنيه الإسترليني', note: 'الدفع بدون تلامس هو الأسرع. أبلغ بنكك قبل السفر.' },
    power: { label: 'نوع G · 230V', note: 'قابس بريطاني بثلاثة دبابيس. أحضر محولاً عالمياً.' },
    sim: { label: 'eSIM أو شريحة في المطار', note: 'EE وVodafone وThree. eSIM يعمل فور الوصول.' },
    language: { label: 'الإنجليزية', note: 'العربية مفهومة على نطاق واسع في Mayfair وEdgware Road.' },
    tipping: { label: '10–12.5%', note: 'تحقق إن كانت رسوم الخدمة مضافة مسبقاً.' },
    emergency: { label: '999 · 112', note: 'شرطة · إطفاء · إسعاف · خفر السواحل.' },
    tapWater: { label: 'آمن للشرب', note: 'المقاهي تعبّئ زجاجتك عند الطلب.' },
    timezone: { label: 'GMT / BST +1', note: 'تتغير الساعات آخر أحد من مارس وأكتوبر.' }
  },
  arrival: [
    { step: '01', title: 'الجوازات', desc: 'اتبع إشارات UK Border. بوابات e-Gates متاحة لمعظم الجوازات بما فيها دول الخليج. جهّز عنوان إقامتك.' },
    { step: '02', title: 'SIM / eSIM', desc: 'فعّل eSIM على Wi-Fi المطار. أو اشترِ شريحة EE / Three من متجر الوصول (£10 تعطيك 20GB).' },
    { step: '03', title: 'نقد', desc: 'اسحب £50–£100 من صراف (Halifax / HSBC — تجنّب Travelex). البطاقات تعمل في كل مكان لكن احتفظ بورقة.' },
    { step: '04', title: 'قطار لا تاكسي', desc: 'خط Elizabeth من LHR T2/T3/T5 إلى وسط لندن: 30 دقيقة، £11.50. من LGW خذ Gatwick Express: 30 دقيقة، £22.' },
    { step: '05', title: 'Oyster / Contactless', desc: 'مرّر بطاقتك البنكية عند البوابات. الحد اليومي £8.90 تلقائياً. معظم الزوار لا يحتاجون Oyster.' },
    { step: '06', title: 'الفندق', desc: 'تسجيل الوصول عادة من 15:00. معظم الفنادق الفاخرة تحفظ الأمتعة من 09:00 لتبدأ الاستكشاف.' },
    { step: '07', title: 'أول وجبة', desc: 'توجّه إلى Borough Market (Southwark) أو Dishoom (Covent Garden). استعد بالشاي ثم قيلولة.' }
  ],
  packing: {
    spring: { months: 'مار–مايو', temp: '8–17 °م · أمطار خفيفة', items: ['سترة خفيفة مقاومة للماء', 'كنزة قابلة للطبقات', 'مظلة صغيرة', 'حذاء مشي', 'نظارات شمس', 'وشاح خفيف'] },
    summer: { months: 'يون–أغ', temp: '16–24 °م · أمسيات طويلة', items: ['قمصان كتان / tops خفيفة', 'فستان خفيف أو جاكيت', 'حذاء رياضي + زوج أنيق', 'واقي شمس SPF 30', 'زجاجة قابلة لإعادة التعبئة', 'قبعة شمس'] },
    autumn: { months: 'سب–نوف', temp: '9–17 °م · ضوء ذهبي', items: ['معطف trench', 'سترة صوف', 'أحذية مقاومة للماء', 'مظلة', 'قفازات لنهاية نوفمبر', 'كتاب للمقاهي'] },
    winter: { months: 'ديس–فبر', temp: '2–8 °م · أيام قصيرة باردة', items: ['معطف صوف ثقيل', 'طبقة حرارية', 'قبعة + وشاح + قفازات', 'أحذية مقاومة للماء', 'مدفئات يد', 'مرطب'] }
  },
  weatherTable: {
    sweetSpot: 'مايو– أوائل يونيو وسبتمبر يقدّمان أفضل إضاءة وأقصر طوابير عند المعالم المدفوعة وأطول نهاراً. تجنّب آخر أسبوعين من أغسطس — ذروة العطلة المدرسية — إلا إذا حجزت كل شيء مسبقاً.'
  }
};

function isBadTranslation(s) {
  return typeof s !== 'string' || s.includes('MYMEMORY WARNING');
}

function collectStrings(obj, set = new Set(), key = '') {
  if (typeof obj === 'string' && obj.trim() && !/^https?:\/\//.test(obj)) {
    set.add(obj.trim());
  } else if (Array.isArray(obj)) {
    obj.forEach((v, i) => collectStrings(v, set, `${key}[${i}]`));
  } else if (obj && typeof obj === 'object') {
    for (const [k, v] of Object.entries(obj)) {
      if (SKIP_KEYS.has(k)) continue;
      collectStrings(v, set, key ? `${key}.${k}` : k);
    }
  }
  return set;
}

function sleep(ms) {
  return new Promise(r => setTimeout(r, ms));
}

async function translateBatch(strings, dict) {
  const pending = strings.filter(s => !dict[s] || isBadTranslation(dict[s]));
  console.log(`Translating ${pending.length} strings...`);
  for (let i = 0; i < pending.length; i++) {
    const en = pending[i];
    try {
      const url = `https://api.mymemory.translated.net/get?q=${encodeURIComponent(en)}&langpair=en|ar`;
      const res = await fetch(url);
      const json = await res.json();
      const ar = json?.responseData?.translatedText || en;
      if (!isBadTranslation(ar)) dict[en] = ar;
      if ((i + 1) % 25 === 0) {
        console.log(`  ${i + 1}/${pending.length}`);
        fs.writeFileSync(dictPath, JSON.stringify(dict, null, 2), 'utf8');
      }
      await sleep(400);
    } catch {
      /* keep existing */
    }
  }
  return dict;
}

function buildOverlay(obj, dict) {
  if (typeof obj === 'string') {
    if (/^https?:\/\//.test(obj)) return undefined;
    const ar = dict[obj];
    if (!ar || isBadTranslation(ar)) return undefined;
    return ar;
  }
  if (Array.isArray(obj)) {
    const items = obj.map(item => buildOverlay(item, dict)).filter(x =>
      x != null && (typeof x !== 'object' || Object.keys(x).length > 0)
    );
    return items.length ? items : undefined;
  }
  if (obj && typeof obj === 'object') {
    const out = {};
    for (const [k, v] of Object.entries(obj)) {
      if (SKIP_KEYS.has(k)) continue;
      const val = buildOverlay(v, dict);
      if (val !== undefined) out[k] = val;
    }
    return Object.keys(out).length ? out : undefined;
  }
  return undefined;
}

function deepMerge(base, override) {
  if (override == null) return base;
  if (Array.isArray(override)) return override;
  if (typeof override !== 'object') return override;
  const out = { ...(base && typeof base === 'object' ? base : {}) };
  for (const [k, v] of Object.entries(override)) {
    if (v && typeof v === 'object' && !Array.isArray(v) && out[k] && typeof out[k] === 'object' && !Array.isArray(out[k])) {
      out[k] = deepMerge(out[k], v);
    } else {
      out[k] = v;
    }
  }
  return out;
}

function mergeDictFile(dict, filePath, label) {
  if (!fs.existsSync(filePath)) return dict;
  const extra = JSON.parse(fs.readFileSync(filePath, 'utf8'));
  const clean = Object.fromEntries(
    Object.entries(extra).filter(([, v]) => !isBadTranslation(v))
  );
  console.log(`Merged ${label}`, Object.keys(clean).length, 'entries');
  return { ...dict, ...clean };
}

/** Corrects bad crowd/recommend mappings from early partial overlays */
const WEATHER_FIXES = {
  Low: 'منخفض',
  Medium: 'متوسط',
  High: 'مرتفع',
  Peak: 'ذروة',
  Rising: 'في ازدياد',
  'Museums · Sales': 'متاحف · تخفيضات',
  'Afternoon tea': 'شاي بعد الظهر',
  'Parks awakening': 'إيقاظ الحدائق',
  'Cherry blossom': 'أزهار الكرز',
  'Perfect walking': 'مشي مثالي',
  'Long evenings': 'أمسيات طويلة',
  'Book everything': 'احجز كل شيء مسبقاً',
  'Notting Hill Carnival': 'كرنفال نوتينغ هيل',
  'Golden light': 'ضوء ذهبي',
  'Autumn colour': 'ألوان الخريف',
  'Bonfire · lights': 'نيران · أضواء',
  'Christmas markets': 'أسواق عيد الميلاد',
  Jan: 'يناير',
  Feb: 'فبراير',
  Mar: 'مارس',
  Apr: 'أبريل',
  May: 'مايو',
  Jun: 'يونيو',
  Jul: 'يوليو',
  Aug: 'أغسطس',
  Sep: 'سبتمبر',
  Oct: 'أكتوبر',
  Nov: 'نوفمبر',
  Dec: 'ديسمبر'
};

async function main() {
  let dict = {};
  if (fs.existsSync(dictPath)) {
    dict = JSON.parse(fs.readFileSync(dictPath, 'utf8'));
    console.log('Loaded ar-dict.json', Object.keys(dict).length, 'entries');
  }
  dict = mergeDictFile(dict, extractedPath, 'ar-extracted-pairs.json');
  dict = mergeDictFile(dict, manualSeedPath, 'ar-manual-seed.json');
  dict = mergeDictFile(dict, seedPath, 'ar-static-seed.json');
  dict = { ...dict, ...WEATHER_FIXES };

  const allStrings = [...collectStrings(plan)];
  const missing = allStrings.filter(s => !dict[s] || isBadTranslation(dict[s]));
  if (missing.length) {
    console.log(`${missing.length} strings still untranslated`);
  }
  if (!staticOnly && missing.length) {
    dict = await translateBatch(allStrings, dict);
    fs.writeFileSync(dictPath, JSON.stringify(dict, null, 2), 'utf8');
    console.log('Saved ar-dict.json');
  } else if (staticOnly) {
    console.log('--static-only: skipping API fetch');
  }

  const fromPlan = buildOverlay(plan, dict) || {};
  const PLAN_AR = deepMerge(fromPlan, HOME_AR);

  for (const k of Object.keys(PLAN_AR)) {
    if (PLAN_AR[k] == null) delete PLAN_AR[k];
  }

  fs.writeFileSync(
    outPath,
    `/* Auto-generated — node scripts/generate-plan-ar.mjs */\nconst PLAN_AR = ${JSON.stringify(PLAN_AR, null, 2)};\n`,
    'utf8'
  );
  console.log('Wrote', outPath);

  const sample = plan.attractions?.[0]?.name;
  const arName = PLAN_AR.attractions?.[0]?.name;
  console.log('Sample name:', sample, '->', arName || '(missing — re-run when API quota resets)');
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});
