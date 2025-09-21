import type { Meta } from '@storybook/react-vite';

import Typing from '../animation/Typing';


// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta: Meta<typeof Typing> = {
    title: 'Typing',
    component: Typing,
    argTypes: {
        text: { control: 'text' },
    },
    args: { text: 'Hello, Storybook!' },
};

export default meta;

export const TypingStory = {
    args: {
        text: "Storybookへ，ようこそ！"
    }
};