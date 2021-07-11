import { Meta } from '@storybook/react';
import CheckBox, { ICheckBoxProps } from './CheckBox';

export default {
    title: "Inputs/CheckBox",
    component: CheckBox,
} as Meta

export const Plain = (args : ICheckBoxProps) => <CheckBox {...args} />;

Plain.args = {
    
};