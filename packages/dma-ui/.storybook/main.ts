import type { StorybookConfig } from '@storybook/angular';

const config: StorybookConfig = {
    stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
    addons: [
        '@storybook/addon-backgrounds',
        '@storybook/addon-controls',
        '@storybook/addon-docs',
        '@storybook/addon-measure',
        '@storybook/addon-outline',
        '@storybook/addon-storysource',
        '@storybook/addon-toolbars',
        '@storybook/addon-viewport',
        '@storybook/addon-actions',
    ],
    framework: {
        name: '@storybook/angular',
        options: {},
    },
    core: {
        disableTelemetry: true,
    },
};

export default config;
