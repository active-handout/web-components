import {render} from '@lit-labs/ssr';
import {html} from 'lit' ;
import {collectResult} from '@lit-labs/ssr/lib/render-result.js';
import {unsafeHTML} from 'lit/directives/unsafe-html.js';

import {readFile, writeFile} from 'fs/promises' ;

import './dist/ah-components-ssr.js';

const templateText = await readFile('index.html', { encoding: 'utf8' });
const templateHTML = unsafeHTML(templateText);
const result = render(html`${templateHTML}
`);
const r = await collectResult(result);
console.log(r);

writeFile("index-ssr.html", r, {encoding:'utf8'});
