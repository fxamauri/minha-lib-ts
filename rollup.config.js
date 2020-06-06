import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import sourceMaps from 'rollup-plugin-sourcemaps';
import run from '@rollup/plugin-run';
import json from '@rollup/plugin-json';
import camelCase from 'lodash.camelcase';
import typescript from 'rollup-plugin-typescript2';
import pkg from './package.json';

const libraryName = 'minha-lib-ts';

const dev = process.env.ROLLUP_WATCH === 'true';

export default [
  {
    input: `src/${libraryName}.ts`,
    // external libraries
    external: [],
    plugins: [
      json(),
      typescript({ useTsconfigDeclarationDir: true }),

      // Allow bundling cjs modules (unlike webpack, rollup doesn't understand cjs)
      commonjs(),

      // Allow node_modules resolution, so you can use 'external' to control
      // which external modules to include in the bundle
      // https://github.com/rollup/rollup-plugin-node-resolve#usage
      resolve(),

      // Resolve source maps to the original source
      sourceMaps(),
      dev && run(),
    ],
    output: [
      {
        file: pkg.main,
        name: camelCase(libraryName),
        format: 'umd',
        sourcemap: true,
      },
      { file: pkg.module, format: 'es', sourcemap: true },
    ],
  },
];
