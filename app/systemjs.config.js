/**
 * @author k on 16. 5. 14.
 */
(function(global) {

    // map tells the System loader where to look for things
    var map = {
      'app':                        'scripts/angular2-site', // 'dist',
      'rxjs':                       'scripts/rxjs',

      // add on 16.10.20
      //'rxjs/observable/fromPromise':                       'scripts/Rx.min.js',
      //'rxjs/observable/from':                       'scripts/Rx.min.js',
      //'rxjs/observable/of':                       'scripts/Rx.min.js',
      //'rxjs/*':                       'scripts/Rx.min.js',
      /*'rxjs/concatMap':                       'scripts/Rx.min.js',
      'rxjs/every':                       'scripts/Rx.min.js',
      'rxjs/map':                       'scripts/Rx.min.js',
      'rxjs/mergeAll':                       'scripts/Rx.min.js',
      'rxjs/mergeMap':                       'scripts/Rx.min.js',
      'rxjs/reduce':                       'scripts/Rx.min.js',
      'rxjs/catch':                       'scripts/Rx.min.js',
      'rxjs/concatAll':                       'scripts/Rx.min.js',
      'rxjs/first':                       'scripts/Rx.min.js',*/
      //'rxjs/util/EmptyError':                       'scripts/Rx.min.js',
      /*'rxjs/last':                       'scripts/Rx.min.js',
      'rxjs/BehaviorSubject':                       'scripts/Rx.min.js',
      'rxjs/filter':                       'scripts/Rx.min.js',*/
      //-----------------------------------------------------------------------------------------




      /*'rxjs/observable/PromiseObservable':                       'scripts/Rx.min.js',
      'rxjs/Observable':                       'scripts/Rx.min.js',
      'rxjs/Subject':                       'scripts/Rx.min.js',
      'rxjs/operator':                       'scripts/Rx.min.js',
      'rxjs/operator/toPromise':                       'scripts/Rx.min.js',
      'rxjs/Rx':                       'scripts/Rx.min.js',
      'rxjs/add/operator/map':                       'scripts/Rx.min.js',
      'rxjs/add/operator/share':                       'scripts/Rx.min.js',*/



      'angular-in-memory-web-api': 'scripts/angular-in-memory-web-api',
      '@angular/common': 'scripts/@angular/common.umd.js',
      '@angular/compiler': 'scripts/@angular/compiler.umd.js',
      '@angular/core': 'scripts/@angular/core.umd.js',
      '@angular/forms': 'scripts/@angular/forms.umd.js',
      '@angular/http': 'scripts/@angular/http.umd.js',
      '@angular/router': 'scripts/@angular/router.umd.js',
      '@angular/upgrade': 'scripts/@angular/upgrade.umd.js',
      '@angular/platform-browser': 'scripts/@angular/platform-browser.umd.js',
      '@angular/platform-browser-dynamic': 'scripts/@angular/platform-browser-dynamic.umd.js',
      '@angular/material' : 'scripts/@angular/material.umd.js',

      'angular2-cookie' : 'scripts/angular2-cookie'
    };

    // packages tells the System loader how to load when no filename and/or no extension
    var packages = {
      'app':                        { main: 'app.js', defaultExtension: 'js' },
      'angular-in-memory-web-api': { defaultExtension: 'js' },
      'rxjs': { defaultExtension: 'js' },
      'angular2-cookie': { main: 'core.js', defaultExtension: 'js' }
    };

    var config = {
        map: map,
        packages: packages
    };

    // filterSystemConfig - index.html's chance to modify config before we register it.
    if (global.filterSystemConfig) { global.filterSystemConfig(config); }

    System.config(config);

})(this);
