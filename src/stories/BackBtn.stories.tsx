import type { Meta } from '@storybook/react-vite';

import BackBtn from '../components/back-btn';


// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta: Meta<typeof BackBtn> = {
    title: 'BackBtn',
    component: BackBtn,
};

export default meta;

export const BackBtnStory = {};