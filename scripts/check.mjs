import fs from 'node:fs';
import assert from 'node:assert/strict';
const projects=JSON.parse(fs.readFileSync('projects.json'));
assert.equal(new Set(projects.map(p=>p.slug)).size,projects.length,'Unique projects');
for(const lang of ['fr','en']){
  const page=fs.readFileSync(`dist/${lang==='fr'?'index.html':'index-en.html'}`,'utf8');
  assert.ok(page.includes(`<html lang="${lang}">`));
  assert.equal((page.match(/<h1\b/g)||[]).length,1);
  assert.equal((page.match(/<article\b/g)||[]).length,projects.length);
  assert.ok(page.includes(`rel="canonical" href="https://edikkaweb.github.io/${lang==='en'?'index-en.html':''}"`));
  for(const p of projects){
    assert.ok(p.title[lang]&&p.description[lang]);
    assert.ok(page.includes(`href="/${p.slug}/${lang==='en'?'index-en.html':''}"`));
    assert.ok(page.includes(`href="https://github.com/edikkaweb/${p.slug}"`));
  }
  for(const [,asset] of page.matchAll(/(?:src|href)="(assets\/[^"]+)"/g))assert.ok(fs.existsSync(`dist/${asset}`),asset);
  assert.ok(!page.includes('<script'),'Gallery works without JavaScript');
}
console.log('Bilingual routes, assets, project coverage and static navigation verified.');
