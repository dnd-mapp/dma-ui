import { withActions } from '@storybook/addon-actions/decorator';
import { Meta, StoryObj } from '@storybook/angular';
import { SideBarStoryComponent } from './side-bar-story.component';

const meta = {
    title: 'Components/Side bar',
    tags: ['!dev'],
    component: SideBarStoryComponent,
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
} satisfies Meta<SideBarStoryComponent>;

export default meta;

type Story = StoryObj<SideBarStoryComponent>;

export const Default: Story = {
    tags: ['dev'],
    name: 'Interactive',
};
