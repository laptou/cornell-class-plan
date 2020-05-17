const { src, dest, watch, parallel } = require('gulp');
const sass = require('gulp-sass');
const ts = require('gulp-typescript');

sass.compiler = require('node-sass');

const tsProject = ts.createProject('tsconfig.json');

function style() {
  return src('src/**/*.scss')
    .pipe(sass())
    .pipe(dest('dist'));
}

function script() {
  return src('src/**/*.ts')
    .pipe(tsProject())
    .pipe(dest('dist'));
}

function markup() {
  return src('src/**/*.html')
    .pipe(dest('dist'));
}

exports.default = parallel(style, script, markup);
exports.watch = () => {
  watch('src/**/*.scss', { ignoreInitial: false }, style);
  watch('src/**/*.ts', { ignoreInitial: false }, script);
  watch('src/**/*.html', { ignoreInitial: false }, markup);
};