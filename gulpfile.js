'use strict'

const csso = require('gulp-csso')
const del = require('del')
const gulp = require('gulp')
const htmlmin = require('gulp-htmlmin')
const inline = require('gulp-inline')

const buildDir = 'build'

gulp.task('clean', () =>
  del(`${buildDir}`)
)

gulp.task('build', ['clean'], () =>
  gulp.src('app/index.html')
    .pipe(inline({
      css: csso
    }))
    .pipe(htmlmin({
      collapseBooleanAttributes: true,
      collapseInlineTagWhitespace: true,
      collapseWhitespace: true,
      quoteCharacter: '\'',
      removeAttributeQuotes: true,
      removeComments: true,
      removeOptionalTags: true,
      removeRedundantAttributes: true,
      useShortDoctype: true
    }))
    .pipe(gulp.dest(buildDir))
)

gulp.task('default', ['build'])
