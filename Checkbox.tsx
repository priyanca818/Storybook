
import styled from 'styled-components'
import React from 'react';


export const CheckboxContainer = styled.div<ICheckboxProps>`
/* //checkboxcontainer is the name of the div, it can be anything */
display: block;
  position: relative;
  padding-left: 35px;
  margin-bottom: 12px;
  cursor: pointer;
  font-size: 22px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
   

/* // to make the normal checkbox not visible */
input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
/*   height: 0;
 width: 0; */
}


.checkmark
{
  left: 0; 
  position: absolute;
  top: 0;
  height: 20px;
  width: 20px;
  border-style: solid;
  border-color:	#B0B0B0;
  border-width: 2px;
  background-color: ivory;
border-radius: 4px;
}


:hover input ~ .checkmark {
  background-color: #DCDCDC; 

}

input:checked ~ .checkmark {
  background-color: blue;
}


.checkmark:after {
  content: "";
  position: absolute;
  display: none;
}

input:checked ~ .checkmark:after {
  display: block;
}


  .checkmark:after {
/* //checkboxcontainer is the name of the div, it can be anything */
position: absolute;
left: 6px;
  top: 2px;
  width: 5px;
  height: 10px;
  border: solid white;
  border-width: 0 3px 3px 0;
  transform: rotate(45deg);
 }


 input:disabled ~ .checkmark {
    background-color: ${(props) =>
    props.disabledBgColor? props.disabledBgColor
      :"#EAEAEA"};
    border: 1px solid78-
      ${(props) =>
    props.BorderColor
      ? props.BorderColor
      : "grey"};
    cursor: not-allowed;

  }

` 



/* 
export const Checkbox=(
) => (

<CheckboxContainer> Option
<input type = "checkbox"/>
<span className='checkmark'/>
</CheckboxContainer>
  
);  */





/* import { TooltipContainer } from '../src/Components/tooltip.style'; */

export interface ICheckboxProps {
  children?: React.ReactNode;
  onClick?: (e: React.MouseEvent<HTMLInputElement>) => void;
  styles?: React.CSSProperties;
  checkboxStyle?: React.CSSProperties;
  BorderColor?: string;
  disabledBgColor?: string;
/* marginLeft?: number;
marginTop?:number; */
  type?: string;
  checked?: boolean;
  disabled?: boolean;
/*   checkmarkBorderWidth?:number; */
}

export const Checkbox: React.FC<ICheckboxProps> = (props) => (


  <CheckboxContainer{...props} >     {props.children} Option 
  
  <input
  type='checkbox'
  checked={props.checked}
  disabled={props.disabled}
  onClick={props.onClick} 
/>
 <span className='checkmark'>

     </span>
  </CheckboxContainer>
);









