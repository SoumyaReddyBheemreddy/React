import React from "react";
import { ComponentStory, ComponentMeta } from '@storybook/react';
import MediaCard from "./Card";
import CoverPhoto from '../../../assets/cover_image/2.png';
export default{
  title:"Molecules/Card",
  component:MediaCard
} as ComponentMeta<typeof MediaCard>

const Template: ComponentStory<typeof MediaCard> = args => <MediaCard {...args} />
export const Card = Template.bind({});
Card.args = {
  title:"Beyond Entreprenurship",
  author:"Jim Collins & Bill Lazier",
  image:CoverPhoto,
  readingTime:"13 minute read",
  progress:55
}