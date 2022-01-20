import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import { ComponentStory, ComponentMeta } from '@storybook/react';
export default{
    title:'Atoms/icons/Search',
    component:SearchIcon
}as ComponentMeta <typeof SearchIcon>


const Template:ComponentStory<typeof SearchIcon>  = args => <SearchIcon {...args} />

export const Search = Template.bind({})