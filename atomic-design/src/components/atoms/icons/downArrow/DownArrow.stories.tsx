import React from 'react';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default{
    title:'Atoms/icons/Arrow',
    component:KeyboardArrowDownIcon
}as ComponentMeta <typeof KeyboardArrowDownIcon>

const Template : ComponentStory<typeof KeyboardArrowDownIcon> = args => <KeyboardArrowDownIcon {...args} />

export const Arrow = Template.bind({});

