import type { Meta } from '@storybook/react-vite';

import List from '../components/list';


// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta: Meta<typeof List> = {
    title: 'List',
    component: List,
};

export default meta;

export const ListStory = {};