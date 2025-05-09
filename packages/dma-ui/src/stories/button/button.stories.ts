import { ButtonTypes } from '@dnd-mapp/dma-ui';
import { withActions } from '@storybook/addon-actions/decorator';
import { Meta, StoryObj } from '@storybook/angular';
import { ButtonStoryComponent } from './button-story.component';

const meta = {
    title: 'Components/Button',
    tags: ['!dev'],
    component: ButtonStoryComponent,
    args: {
        buttonType: ButtonTypes.SECONDARY,
        label: 'My label',
        disabled: false,
        processing: false,
    },
    decorators: [withActions],
    parameters: {
        actions: {
            handles: ['click button[dma-button]'],
        },
        docs: {
            source: {
                code: `
                    <button type="button" dma-button>
                        My Label
                    </button>
                `,
            },
        },
    },
    argTypes: {
        label: {
            table: {
                category: 'Provided as content',
            },
        },
        buttonType: {
            name: 'dma-button',
            control: {
                type: 'select',
                labels: {
                    [ButtonTypes.PRIMARY]: 'Primary',
                    [ButtonTypes.SECONDARY]: 'Secondary',
                    [ButtonTypes.DANGER]: 'Dangerous',
                },
            },
            description:
                "Adjusts the visual appearance of the button to indicate whether the action is the primary or secondary action on a page, or when it's a dangerous action.",
            options: Object.values(ButtonTypes),
            type: {
                name: 'enum',
                value: Object.values(ButtonTypes),
            },
            table: {
                category: 'Component input',
                defaultValue: {
                    summary: ButtonTypes.SECONDARY,
                    detail: `${Object.values(ButtonTypes).join(' | ')}`,
                },
            },
        },
        disabled: {
            control: 'boolean',
            description: 'Determines whether the button can be clicked.',
            type: 'boolean',
            table: {
                category: 'Component input',
                defaultValue: {
                    summary: 'false',
                },
            },
        },
        processing: {
            control: 'boolean',
            description:
                'Determines whether the action handler is still processing. The content of the button will be replaced by a spinner until the handler has resolved.',
            type: 'boolean',
            table: {
                category: 'Component input',
                defaultValue: {
                    summary: 'false',
                },
            },
        },
    },
} satisfies Meta<ButtonStoryComponent>;

export default meta;

type Story = StoryObj<ButtonStoryComponent>;

export const Default: Story = {
    tags: ['dev'],
    name: 'Interactive',
};

export const Disabled: Story = {
    args: {
        disabled: true,
    },
    parameters: {
        docs: {
            source: {
                code: `<button type="button" dma-button disabled>My Label</button>`,
            },
        },
    },
};

export const Processing: Story = {
    args: {
        processing: true,
    },
    parameters: {
        docs: {
            source: {
                code: `<button type="button" dma-button processing>My Label</button>`,
            },
        },
    },
};

export const Primary: Story = {
    args: {
        buttonType: 'primary',
    },
    parameters: {
        docs: {
            source: {
                code: `<button type="button" dma-button="primary">My Label</button>`,
            },
        },
    },
};

export const Dangerous: Story = {
    args: {
        buttonType: 'danger',
    },
    parameters: {
        docs: {
            source: {
                code: `<button type="button" dma-button="danger">My Label</button>`,
            },
        },
    },
};

export const WithLeadingIcon: Story = {
    args: {
        withIcon: true,
    },
    parameters: {
        docs: {
            source: {
                code: `
                    <button type="button" dma-button>
                        <dma-icon dma-pen-to-square-icon ngProjectAs="dma-leading-button-icon" />
                        My Label
                    </button>
                `,
            },
        },
    },
};
