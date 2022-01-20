import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import CardStatus from './CardStatus';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';

export default{
    title:"Molecules/CardStat",
    component:CardStatus,
    args:{
        variant:"caption"
    }
} as ComponentMeta<typeof CardStatus>

const Template:ComponentStory<typeof CardStatus>  = args => <CardStatus {...args} />

export const TimeStatus = Template.bind({})
TimeStatus.args = {
    children:"15 Minutes Read",
    icon:AccessTimeIcon
}
export const UserCountStatus = Template.bind({});
UserCountStatus.args = {
    children:"19.3k reads",
    icon:PersonOutlineIcon
}
