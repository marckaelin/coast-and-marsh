// Simplified, illustrative premium model for the public yacht insurance estimator.
// Keep in sync with app/api/leads/yacht/model.ts in the coast-marsh-outbound repo (the server recomputes the estimate on submit).
// This is Coast & Marsh's own approximation built from general market ranges. It is NOT a carrier rate and not a quote.

export const OPTIONS = {
  length: [["u26", "Under 26 ft"], ["26-40", "26 to 40 ft"], ["41-65", "41 to 65 ft"], ["66-100", "66 to 100 ft"], ["100p", "Over 100 ft"]],
  type: [["motor", "Motor yacht / powerboat"], ["sail", "Sailing yacht"], ["cat", "Catamaran"], ["pwc", "Jet ski / personal watercraft"]],
  built: [["2015+", "2015 or newer"], ["2000-2014", "2000 to 2014"], ["1985-1999", "1985 to 1999"], ["pre1985", "Before 1985"]],
  use: [["private", "Private / pleasure only"], ["occasional", "Occasional charter"], ["fulltime", "Full-time charter"], ["commercial", "Commercial / bareboat"]],
  storage: [["marina", "Marina slip"], ["mooring", "Mooring / anchored"], ["dry", "Dry storage / rack"], ["trailer", "Trailered at home"]],
  zone: [["coastal", "Coastal U.S. waters"], ["bahamas", "Bahamas and nearby"], ["caribbean", "Caribbean"], ["world", "Worldwide"]],
  storm: [["plan", "Written hurricane plan"], ["haulout", "Haul-out arranged"], ["none", "No formal plan"]],
  experience: [["u3", "Under 3 years"], ["3-10", "3 to 10 years"], ["10p", "10+ years"]],
  claims: [["none", "None"], ["one", "One"], ["two", "Two or more"]],
  coverage: [["hull", "Hull only"], ["hullLiab", "Hull and liability"], ["package", "Full package (adds medical and uninsured boater)"]],
};

const BASE = { motor: 0.0090, sail: 0.0070, cat: 0.0080, pwc: 0.0160 };
const AGE = { "2015+": 1, "2000-2014": 1.1, "1985-1999": 1.25, pre1985: 1.45 };
const USE = { private: 1, occasional: 1.35, fulltime: 1.8, commercial: 2.2 };
const STORAGE = { marina: 1, mooring: 1.1, dry: 0.95, trailer: 0.9 };
const ZONE = { coastal: 1, bahamas: 1.1, caribbean: 1.25, world: 1.45 };
const STORM = { plan: 1, haulout: 0.95, none: 1.15 };
const EXP = { u3: 1.25, "3-10": 1, "10p": 0.9 };
const CLAIMS = { none: 1, one: 1.15, two: 1.4 };
const LIAB = { u26: 150, "26-40": 300, "41-65": 600, "66-100": 1200, "100p": 2500 };

const round50 = (n) => Math.round(n / 50) * 50;
export function isValid(i) {
  if (!i || typeof i !== "object") return false;
  const v = Number(i.value);
  if (!Number.isFinite(v) || v < 5000 || v > 50_000_000) return false;
  return Object.keys(OPTIONS).every(k => OPTIONS[k].some(o => o[0] === i[k]));
}

export function estimate(i) {
  const factor = AGE[i.built] * USE[i.use] * STORAGE[i.storage] * ZONE[i.zone] * STORM[i.storm] * EXP[i.experience] * CLAIMS[i.claims];
  const hull = i.value * BASE[i.type] * factor;
  const liability = i.coverage === "hull" ? 0 : LIAB[i.length] * USE[i.use];
  const extras = i.coverage === "package" ? 250 : 0;
  const total = Math.max(400, hull + liability + extras);
  const notes = [];
  if (i.use === "fulltime" || i.use === "commercial") notes.push("Charter and commercial use usually needs a specialty underwriter, so real pricing can differ a lot from this estimate.");
  if (i.built === "pre1985" || i.built === "1985-1999") notes.push("Older vessels typically need a recent marine survey before a carrier will quote.");
  if (i.zone === "caribbean" || i.zone === "world") notes.push("Cruising outside U.S. waters often has seasonal navigation limits and named-storm restrictions.");
  if (i.claims === "two") notes.push("Two or more recent claims narrows the markets that will quote.");
  return { low: round50(total * 0.8), high: round50(total * 1.35), midpoint: round50(total), hull: round50(hull), liability: round50(liability), extras, notes };
}
