import { Story } from '@storybook/react';
import GalleryElement from './GalleryElement'
import IGalleryElement from './interfaces/IGalleryElement'

export default {
	title: 'Gallery/GalleryElement',
	component: GalleryElement,
};


const Template = (args: IGalleryElement) => <GalleryElement {...args} />


export const Standard: Story<IGalleryElement> = Template.bind({})

Standard.args = {
}