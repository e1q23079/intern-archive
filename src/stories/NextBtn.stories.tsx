import type { Meta } from '@storybook/react-vite';

import NextBtn from '../components/next-btn';


// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta: Meta<typeof NextBtn> = {
    title: 'NextBtn',
    component: NextBtn,
};

export default meta;

export const NextBtnStory = {};