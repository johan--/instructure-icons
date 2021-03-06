import gulp from 'gulp';
import browserSync from 'browser-sync';
import config from '../config';

gulp.task('serve', function () {
  return browserSync({
    server: {
      baseDir: config.destination
    },
    ui: {
      port: 3030,
    },
    open: false,
    port: 3002,
    reloadOnRestart: true,
    logLevel: 'info',
    logConnections: true,
    logFileChanges: true,
    injectChanges: false
  });
});
