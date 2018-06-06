export let configSystemJS = {
  map: {
    rxjs: '../node_modules/rxjs',
    tslib: '../node_modules/tslib/tslib.js',
    typescript: '../node_modules/typescript/lib/typescript.js',

    // Angular specific mappings.
    '@angular/core': '../node_modules/@angular/core/bundles/core.umd.js',
    '@angular/common': '../node_modules/@angular/common/bundles/common.umd.js',
    '@angular/common/http':
      '../node_modules/@angular/common/bundles/common-http.umd.js',
    '@angular/compiler': '../node_modules/@angular/compiler/bundles/compiler.umd.js',
    '@angular/forms': '../node_modules/@angular/forms/bundles/forms.umd.js',
    '@angular/animations':
      '../node_modules/@angular/animations/bundles/animations.umd.js',
    '@angular/router': '../node_modules/@angular/router/bundles/router.umd.js',
    '@angular/animations/browser':
      '../node_modules/@angular/animations/bundles/animations-browser.umd.js',
    '@angular/platform-browser/animations':
      '../node_modules/@angular/platform-browser/bundles/platform-browser-animations.umd',
    '@angular/platform-browser':
      '../node_modules/@angular/platform-browser/bundles/platform-browser.umd.js',
    '@angular/platform-browser-dynamic':
      '../node_modules/@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.js',

    '@angular/material': '../node_modules/@angular/material/bundles/material.umd.js',
    '@angular/cdk': '../node_modules/@angular/cdk/bundles/cdk.umd.js',
    '@angular/cdk/a11y': '../node_modules/@angular/cdk/bundles/cdk-a11y.umd.js',
    '@angular/cdk/accordion': '../node_modules/@angular/cdk/bundles/cdk-accordion.umd.js',
    '@angular/cdk/bidi': '../node_modules/@angular/cdk/bundles/cdk-bidi.umd.js',
    '@angular/cdk/coercion': '../node_modules/@angular/cdk/bundles/cdk-coercion.umd.js',
    '@angular/cdk/collections': '../node_modules/@angular/cdk/bundles/cdk-collections.umd.js',
    '@angular/cdk/keycodes': '../node_modules/@angular/cdk/bundles/cdk-keycodes.umd.js',
    '@angular/cdk/layout': '../node_modules/@angular/cdk/bundles/cdk-layout.umd.js',
    '@angular/cdk/observers': '../node_modules/@angular/cdk/bundles/cdk-observers.umd.js',
    '@angular/cdk/overlay': '../node_modules/@angular/cdk/bundles/cdk-overlay.umd.js',
    '@angular/cdk/platform': '../node_modules/@angular/cdk/bundles/cdk-platform.umd.js',
    '@angular/cdk/portal': '../node_modules/@angular/cdk/bundles/cdk-portal.umd.js',
    '@angular/cdk/scrolling': '../node_modules/@angular/cdk/bundles/cdk-scrolling.umd.js',
    '@angular/cdk/stepper': '../node_modules/@angular/cdk/bundles/cdk-stepper.umd.js',
    '@angular/cdk/table': '../node_modules/@angular/cdk/bundles/cdk-table.umd.js',
  },
  packages: {
    rxjs: { main: 'index' },
    '*': {
      defaultExtension: 'ts'
    }
  },
  transpiler: 'typescript'
};
