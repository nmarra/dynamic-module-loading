import {
  Injectable,
  Injector,
  Compiler,
  ComponentRef,
  NgModuleRef
} from '@angular/core';
import * as path from 'path';
import { configSystemJS } from './systemjs.config';

declare const SystemJS;

@Injectable()
export class AddonService {
  constructor(
    private compiler: Compiler,
    private injector: Injector,
    private moduleRef: NgModuleRef<any>
  ) {}


  private loadSystemJs(addonPath: string) {
    console.log('config', configSystemJS);
    console.log('path', addonPath);
    SystemJS.config(configSystemJS);
    return SystemJS.load(addonPath);
  }

  loadAddon(addon: string): Promise<ComponentRef<any>> {
    console.group('Load addon ngModule');
    return this.loadSystemJs(addon)
      .then(pkg => pkg.AddonModule)
      .then(ngModule => this.compile(ngModule))
      .then(cmpRef => {
        console.groupEnd();
        return cmpRef;
      }).catch(e => {
        console.groupEnd();
        throw e;
      });
  }
  private compile(ngModule): Promise<ComponentRef<any>> {
    console.log('compile: ', ngModule);
    return this.compiler
      .compileModuleAndAllComponentsAsync(ngModule)
      .then(factories => {
        console.log('factories', factories);
        const factory = factories.componentFactories.find(
          componentFactory =>
            ngModule.getViewComponent().name ===
            componentFactory.componentType.name
        );
        if (factory) {
          console.log('factory: ', factory);
          const cmpRef = factory.create(
            this.injector,
            [],
            null,
            this.moduleRef
          );
          return cmpRef;
        }
      });
  }
}
