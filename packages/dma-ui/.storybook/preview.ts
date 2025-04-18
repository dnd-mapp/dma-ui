import type { Preview } from '@storybook/angular';

const preview: Preview = {
    parameters: {
        controls: {
            expended: true,
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i,
            },
        },
    },
};

export default preview;
