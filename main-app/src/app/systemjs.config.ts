export let configSystemJS = {
  map: {
    rxjs: '../node_modules/rxjs',
    tslib: '../node_modules/tslib/tslib.js',
    typescript: '../node_modules/typescript/lib/typescript.js',

    // Angular specific mappings.
    '@angular/core': '../node_modules/@angular/core/bundles/core.umd.js',
    '@angular/common': '../node_modules/@angular/common/bundles/common.umd.js',
  },
  packages: {
    rxjs: { main: 'index' },
    '*': {
      defaultExtension: 'ts'
    }
  },
  transpiler: 'typescript'
};
