import { Component, ViewChild, ViewContainerRef } from '@angular/core';

import { AddonService } from './addon.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  @ViewChild('view', { read: ViewContainerRef })
  view: ViewContainerRef;

  constructor(private addonService: AddonService) {
  }

  load() {
    this.addonService.loadAddon('http://127.0.0.1:8081/dist/addon-module/bundles/addon.umd.js').then(cmpRef => {
        this.view.clear();
        this.view.insert(cmpRef.hostView);
    });
  }
}
