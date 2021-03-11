/**
 * @license
 * Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
 */

import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import './shared-styles.js';

class MyView1 extends PolymerElement {
  MyView1() {
    this.dwtObj;
  }
  static get template() {
    return html`
      <style include="shared-styles">
        :host {
          display: block;

          padding: 10px;
        }
      </style>

      <div class="card">
        <h1>Web Document Scan</h1>
        <select size="1" id="source" style="position: relative; width: 220px;"></select>
        <div id="dwtcontrolContainer"></div>
        <button on-click="handleClick">scan</button>
      </div>
    `;
  }

  ready() {
    super.ready();
    // TODO: initialization
    this.initializeDWT();
  }

  initializeDWT() {
    // Dynamsoft.WebTwainEnv.ProductKey = "LICENSE-KEY";
    Dynamsoft.WebTwainEnv.CreateDWTObjectEx({ WebTwainId: 'Viewer' }, (obj) => {
      this.dwtObj = obj;
      obj.Viewer.bind(this.shadowRoot.querySelector('#dwtcontrolContainer'));
      obj.Viewer.width = 560;
      obj.Viewer.height = 600;
      obj.Viewer.show();

      var count = obj.SourceCount;
      for (var i = 0; i < count; i++) {
        this.shadowRoot.querySelector('#source').options.add(new Option(obj.GetSourceNameItems(i), i));
      }

    }, function (e) {
      console.log(e)
    });
  }

  handleClick() {
    var obj = this.dwtObj;
    if (obj) {
      var onSuccess, onFailure;
      onSuccess = onFailure = function () {
        obj.CloseSource();
      };

      obj.SelectSourceByIndex(this.shadowRoot.querySelector('#source').selectedIndex); 
      obj.OpenSource();
      obj.IfDisableSourceAfterAcquire = true;	
      obj.AcquireImage(onSuccess, onFailure);
    }
  }
}

window.customElements.define('my-view1', MyView1);
