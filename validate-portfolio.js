const fs = require('fs');
const data = JSON.parse(fs.readFileSync('data/portfolio.json', 'utf8'));
const ids = new Set(), slugs = new Set();
const errs = [];
const seenTitle = new Map(), seenDesc = new Map();
for (const it of data) {
  if (ids.has(it.id)) errs.push('DUP id ' + it.id); ids.add(it.id);
  if (slugs.has(it.slug)) errs.push('DUP slug ' + it.slug); slugs.add(it.slug);
  for (const f of ['id', 'slug', 'title', 'category', 'description', 'tags', 'image']) {
    if (!it[f]) errs.push('MISSING ' + f + ' in ' + it.id);
  }
  const p = 'public' + it.image;
  if (!fs.existsSync(p)) errs.push('BROKEN img ' + it.image + ' (id ' + it.id + ')');
  const t = it.title.trim().toLowerCase();
  const d = it.description.trim().toLowerCase();
  if (!seenTitle.has(t)) seenTitle.set(t, []);
  seenTitle.get(t).push(it.id);
  if (!seenDesc.has(d)) seenDesc.set(d, []);
  seenDesc.get(d).push(it.id);
}
for (const [k, v] of seenTitle) if (v.length > 1) errs.push('SAME TITLE ids ' + v.join(','));
for (const [k, v] of seenDesc) if (v.length > 1) errs.push('SAME DESC ids ' + v.join(','));
console.log('Total items:', data.length);
console.log('Categories:', [...new Set(data.map(d => d.category))].sort().join(' | '));
console.log('Errors:', errs.length ? errs : 'NONE');
