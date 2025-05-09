import { withActions } from '@storybook/addon-actions/decorator';
import { Meta, StoryObj } from '@storybook/angular';
import { InputStoryComponent } from './input-story.component';

const meta = {
    title: 'Components/Input',
    tags: ['!dev'],
    component: InputStoryComponent,
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
} satisfies Meta<InputStoryComponent>;

export default meta;

type Story = StoryObj<InputStoryComponent>;

export const Default: Story = {
    tags: ['dev'],
    name: 'Interactive',
};
