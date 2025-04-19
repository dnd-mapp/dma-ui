// @ts-check
const eslint = require('@eslint/js');
const tseslint = require('typescript-eslint');
const angular = require('angular-eslint');
const pluginBan = require('eslint-plugin-ban');
const storybookPlugin = require('eslint-plugin-storybook');

module.exports = tseslint.config(
    {
        files: ['**/*.ts'],
        plugins: {
            ban: pluginBan,
        },
        extends: [
            eslint.configs.recommended,
            ...tseslint.configs.recommended,
            ...tseslint.configs.stylistic,
            ...angular.configs.tsRecommended,
        ],
        processor: angular.processInlineTemplates,
        rules: {
            '@angular-eslint/directive-selector': [
                'error',
                {
                    type: 'attribute',
                    prefix: 'dma',
                    style: 'camelCase',
                },
            ],
            '@angular-eslint/component-selector': [
                'error',
                {
                    type: 'element',
                    prefix: 'dma',
                    style: 'kebab-case',
                },
            ],
            '@angular-eslint/component-class-suffix': [
                'error',
                {
                    suffixes: ['Component', 'Icon'],
                },
            ],
            'ban/ban': [
                2,
                { name: 'fdescribe', message: 'Focussing test suites is not allowed' },
                { name: 'fit', message: 'Focussing a single unit test is not allowed' },
            ],
        },
    },
    {
        files: ['**/*.stories.ts'],
        extends: [...storybookPlugin.configs['flat/recommended']],
        rules: {},
    },
    {
        files: ['**/*.html'],
        extends: [...angular.configs.templateRecommended, ...angular.configs.templateAccessibility],
        rules: {},
    }
);
