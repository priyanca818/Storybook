
 import * as React from 'react';
import { Checkbox } from "../Checkbox";
import { Meta } from '@storybook/react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
/*
export default {
    component: Checkbox,
    title: 'checkbox - a customizable react component',
  } as Meta;
*/



export default {
  title: "Checkbox",
  component: Checkbox,
} as Meta;




/* 
export const Checked = () => {
  const props = {
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void,
    onClick?: (e: React.MouseEvent<HTMLInputElement>) => void,
  /* marginLeft?: number;
  marginTop?:number; 
    type: "checkbox",
    checked: true,
    disabled: false,
  };

  return (

      <CheckboxContainer {...props}>
        <>
        Hover
        </TooltipText>
      </CheckboxContainer>
  );
};

 */

storiesOf('CheckboxTest', module)
  .add('Unchecked', () => (
    <Checkbox
      type={'normal'}
>
    </Checkbox>
  ))
  .add('Checked', () => (

      <Checkbox
        type={'normal'}
        checked={true}>
      </Checkbox>
  ))

  .add('normal', () => (
    <Checkbox
      type={'normal'}
      onClick={action('button clicked')}>
    </Checkbox>
))

  .add('Disabled', () => (
    <Checkbox
      type={'normal'}
      disabled={true}>
    </Checkbox>
  ));



