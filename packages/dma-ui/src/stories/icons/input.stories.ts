import { withActions } from '@storybook/addon-actions/decorator';
import { Meta, StoryObj } from '@storybook/angular';
import { IconsStoryComponent } from './icons-story.component';

const meta = {
    title: 'Components/Icons',
    tags: ['!dev'],
    component: IconsStoryComponent,
    args: {},
    decorators: [withActions],
    parameters: {
        actions: {
            // handles: [],
        },
        docs: {
            source: {
                code: `
                `,
            },
        },
    },
    argTypes: {},
} satisfies Meta<IconsStoryComponent>;

export default meta;

type Story = StoryObj<IconsStoryComponent>;

export const Default: Story = {
    tags: ['dev'],
    name: 'Interactive',
};
