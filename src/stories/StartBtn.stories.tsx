import type { Meta } from '@storybook/react-vite';

import StartBtn from '../components/start-btn';


// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta: Meta<typeof StartBtn> = {
    title: 'StartBtn',
    component: StartBtn,
};

export default meta;

export const StartBtnStory = {};