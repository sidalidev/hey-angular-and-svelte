import svelte from 'rollup-plugin-svelte';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import { terser } from 'rollup-plugin-terser';

function createConfig(file) {
    return {
        input: `src/components/${file}.svelte`,
        output: [
            { file: `dist/${file}.js`, format: 'es' }
        ],
        plugins: [
            svelte(),
            resolve(),
            commonjs(),
            terser(),
        ],
        external: ['svelte']
    };
}

export default [
    createConfig('Button'),
    //  les autres composants ici
];
