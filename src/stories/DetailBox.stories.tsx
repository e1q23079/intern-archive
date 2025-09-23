import type { Meta } from '@storybook/react-vite';

import DetailBox from '../components/detail-box';


// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta: Meta<typeof DetailBox> = {
    title: 'DetailBox',
    component: DetailBox,
};

export default meta;

export const DetailBoxStory = {};