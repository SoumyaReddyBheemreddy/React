import React from 'react';
import AddIcon from '@mui/icons-material/Add';
import { ComponentStory, ComponentMeta } from '@storybook/react';
export default{
    title:"Atoms/icons/Add",
    component:AddIcon
}as ComponentMeta <typeof AddIcon>
const Template:ComponentStory<typeof AddIcon>  = args => <AddIcon {...args} />

export const Add = Template.bind({})