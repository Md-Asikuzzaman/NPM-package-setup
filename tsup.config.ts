import { defineConfig } from 'tsup';

export default defineConfig((options) => ({
  entry: ['src/index.ts'], // Entry point for your package
  format: ['cjs', 'esm'], // CommonJS and ES Module output
  dts: true, // Generate TypeScript declaration files
  clean: true, // Clean output directory before each build
  external: ['react', 'react-dom'], // Do not bundle React or React DOM
  sourcemap: options.watch ? false : true, // Enable sourcemaps in production
  minify: !options.watch, // Minify only for production builds
  target: 'esnext', // Use the latest JavaScript features
  splitting: true, // Enable code splitting for better tree-shaking
  treeshake: true, // Optimize and remove unused code
  esbuildOptions: (options) => {
    options.define = {
      'process.env.NODE_ENV': JSON.stringify(
        process.env.NODE_ENV || 'production'
      ), // Define NODE_ENV for React
    };
  },
}));
