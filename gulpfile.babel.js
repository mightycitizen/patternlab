/*eslint strict: ["error", "global"]*/
'use strict';

// Include gulp helpers.
const { series, src, dest, parallel, watch } = require('gulp');
//import browser       from 'browser-sync';
import fs            from 'fs';
import yaml          from 'js-yaml';

let ddevYmlFile = fs.readFileSync(__dirname + '/../.ddev/config.yaml', 'utf8');
const siteName = yaml.load(ddevYmlFile).name;
let method;

// Include Pattern Lab and config.
const config = require('./patternlab-config.json');
const patternlab = require('@pattern-lab/core')(config);

// Include Our tasks.
//
// Each task is broken apart to it's own node module.
// Check out the ./gulp-tasks directory for more.
const { compileSass, compileJS } = require('./gulp-tasks/compile.js');
const { lintJS, lintSass } = require('./gulp-tasks/lint.js');
const { compressAssets } = require('./gulp-tasks/compress.js');
const { cleanCSS, cleanJS, cleanWebDist, cleanWebComponents, cleanWebLayout } = require('./gulp-tasks/clean.js');

const { concatCSS } = require('./gulp-tasks/concat.js');
const { moveFonts, movePatternCSS } = require('./gulp-tasks/move.js');
const server = require('browser-sync').create();
//const webpack = require('webpack-stream');
const jsonToSass = require('gulp-json-data-to-sass');


// Compile Our Sass and JS
exports.compile = parallel(compileSass, compileJS, moveFonts, movePatternCSS);

// Lint Sass and JavaScript
exports.lint = parallel(lintSass, lintJS);

// Compress Files
exports.compress = compressAssets;

// Concat all CSS and JS files into a master bundle.
exports.concat = parallel(concatCSS);

// Clean all directories.
exports.clean = parallel(cleanCSS, cleanJS);

/**
 * Start browsersync server.
 * @param {function} done callback function.
 * @returns {undefined}
 */
function serve(done) {
  // See https://browsersync.io/docs/options for more options.
  method = 'patternlab';
  server.init({
    // We want to serve both the patternlab directory, so it gets
    // loaded by default AND three directories up which is the
    // Drupal core directory. This allows urls that reference
    // Drupal core JS files to resolve correctly.
    // i.e. /core/misc/drupal.js
    server: ['./patternlab/', '../../../'],
    notify: false,
    open: false
  });
  done();
}

/**
 * Start Pattern Lab build watch process.
 * @param {function} done callback function.
 * @returns {undefined}
 */
function watchPatternlab(done) {
  patternlab
    .build({
      cleanPublic: config.cleanPublic,
      watch: true
    })
    .then(() => {
      done();
    });
}

/**
 * Build Pattern Lab.
 * @param {function} done callback function.
 * @returns {undefined}
 */
function buildPatternlab(done) {
  patternlab
    .build({
      cleanPublic: config.cleanPublic,
      watch: false
    })
    .then(() => {
      done();
    });
}

function buildVariables(){

    return src('src/_patterns/global/base/**/*.json')
        .pipe(jsonToSass({
            sass: 'src/assets/scss/_variables.scss',
            prefix: 'theme',
            suffix: '',
            separator: '-'
        }));

}

/**
 * Watch Sass and JS files.
 * @returns {undefined}
 */
function watchFiles() {
  // Watch all my sass files and compile sass if a file changes.
  watch(['./src/_patterns/global/base/**/*.json'],
    series(buildVariables, compileSass, concatCSS, (done) => {
      server.reload('*.css');
      done();
    })
  )
  watch(
    ['./src/assets/**/*.scss'],
    series(compileSass, concatCSS, (done) => {
      server.reload('*.css');
      done();
    })
  );

  // Watch all my JS files and compile if a file changes.
  watch(
    ['./src/assets/js/**/*.js'],
    series(compileJS, (done) => {
      server.reload('*.js');
      done();
    })
  );

  // Reload the browser after patternlab updates.
  if (method === 'patternlab'){
    patternlab.events.on('patternlab-build-end', () => {
      server.reload('*.html');
    });
  }else{
    watch(['./src/_patterns/components/**/*.twig'], (done) =>  {server.reload('*.html'); done()});
    watch(['./src/_patterns/layout/**/*.twig'], (done) =>  {server.reload('*.html'); done()});
    watch([
      '../templates/**/*',
    ], (done) => {
      server.reload();
      done();
    })
  }
}


// Start a server with BrowserSync to preview the site in
function browserSync(done) {
  server.init({
    notify: false,
    // server: PATHS.dist, port: PORT,
    proxy: 'https://'+siteName+'.ddev.site:8443'
  });
  done();

}




// Watch task that runs a browsersync server.
exports.watch = series(
  buildVariables,
  parallel(cleanCSS, cleanJS),
  parallel(
    lintSass,
    compileSass,
    lintJS,
    compileJS,
    compressAssets,
    moveFonts,
    movePatternCSS
  ),
  concatCSS,
  series(watchPatternlab, serve, watchFiles)
);

// Build task for Pattern Lab.
exports.styleguide = buildPatternlab;

//exports.copyComponent = copyComponent;

// exports.deploy = parallel(
//   series(cleanWebComponents,cleanWebLayout,copyComponent, copyLayouts),
//   series(cleanWebDist, parallel(copyCSS, copyJS, copyFonts, copyImages))
// );

exports.ddev = series(
  browserSync,
  watchFiles
);;

// Default Task
exports.default = series(
  parallel(cleanCSS, cleanJS),
  parallel(
    compileSass,
    compileJS,
    compressAssets,
    moveFonts,
    movePatternCSS
  ),
  concatCSS,
  buildPatternlab
);
