import path from 'path';

export default {
  /** Option to write dev compilation to disk. */
  writeToDisk: false,
  paths: {
    dirDist: path.resolve(__dirname, 'dist'),
    dirSrc: path.resolve(__dirname, 'src'),
    dirDev: path.resolve(__dirname, 'dev'),
    dirStyles: path.resolve(__dirname, 'src/styles')
    // NOTE: Add other project paths here.
  }
}
