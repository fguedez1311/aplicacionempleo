import {src,dest,watch} from 'gulp'
import * as dartSass from 'sass'
import gulSass from 'gulp-sass'

const sass=gulSass(dartSass)

export function css(done){
    src('src/scss/app.scss')
    .pipe(sass().on('error',sass.logError))
    .pipe(dest('build/css'))
    done()
}

export function dev(){
    watch('src/scss/**/*.scss',css)
}