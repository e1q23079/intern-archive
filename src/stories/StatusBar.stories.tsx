import type { Meta } from '@storybook/react-vite';

import StatusBar from '../components/status-bar';


// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta: Meta<typeof StatusBar> = {
    title: 'StatusBar',
    component: StatusBar,
};

export default meta;

export const StatusBarStory = {};