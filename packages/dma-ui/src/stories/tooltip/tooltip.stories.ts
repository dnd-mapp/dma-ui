import { withActions } from '@storybook/addon-actions/decorator';
import { Meta, StoryObj } from '@storybook/angular';
import { TooltipStoryComponent } from './tooltip-story.component';

const meta = {
    title: 'Components/Tooltip',
    tags: ['!dev'],
    component: TooltipStoryComponent,
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
} satisfies Meta<TooltipStoryComponent>;

export default meta;

type Story = StoryObj<TooltipStoryComponent>;

export const Default: Story = {
    tags: ['dev'],
    name: 'Interactive',
};
