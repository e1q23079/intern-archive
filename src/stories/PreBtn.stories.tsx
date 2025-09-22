import type { Meta } from '@storybook/react-vite';

import PreBtn from '../components/pre-btn';


// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta: Meta<typeof PreBtn> = {
    title: 'PreBtn',
    component: PreBtn,
    argTypes: {
        show: { type: 'boolean' },
    },
};

export default meta;

export const PreBtnStory = {
    args: {
        show: true
    }
};