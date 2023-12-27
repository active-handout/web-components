import '@lit-labs/ssr-client/lit-element-hydrate-support.js';
import {isServer} from 'lit';

import './ah-external-content';
import './ah-button';
// import './ah-diagram';
import './ah-terminal';


import './themes/light.scss';

if (!isServer) {
  document.addEventListener("DOMContentLoaded", async () => {
    if (!HTMLTemplateElement.prototype.hasOwnProperty('shadowRoot')) {
      const { hydrateShadowRoots } = await import('https://unpkg.com/@webcomponents/template-shadowroot@0.2.1/template-shadowroot.js');
      hydrateShadowRoots(document.body);
    }

  });
}
