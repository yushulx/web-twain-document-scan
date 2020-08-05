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
        <div id='dwtcontrolContainer'></div>
        <button on-click="handleClick">scan</button>
      </div>
    `;
  }

  handleClick() {
    if (DWObject) {
      DWObject.SelectSource(function () {
          var onSuccess, onFailure;
          onSuccess = onFailure = function () {
              DWObject.CloseSource();
              image.src = DWObject.GetImageURL(DWObject.CurrentImageIndexInBuffer, 640, 480);
          };
          DWObject.OpenSource();
          DWObject.IfDisableSourceAfterAcquire = true;
          DWObject.AcquireImage(onSuccess, onFailure);
      }, function () {
          console.log('SelectSource failed!');
      });
    }
  }
}

window.customElements.define('my-view1', MyView1);
