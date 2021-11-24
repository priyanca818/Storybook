import * as React from 'react';
import styled from 'styled-components'

export const TooltipContainer = styled.div<ITooltipProps>`
width:fit-content;
border-bottom: 1px dotted black;  
  color:purple;
  position: fixed;
    display: block;
    top: 50%;
    left: 50%;
    margin: 0 0 0 0;;


.ToolTiptext{
 visibility: hidden;
  width: 150px;
  background-color: #555;
  color: #fff;
  text-align: center;
  padding: 5px 0;
  border-radius: 6px;
  position: absolute;

  margin-left: 80px;

  &::after {
      content: '';
      position: absolute;  }

}

.ToolTiptext::after {
  content: "";

  position:  ${(props) =>
    props.TooltipPosition? props.TooltipPosition
      :"absolute"};

      left: ${(props) =>
    props.TooltipPosition? props.positionLeft
      :"15px"};

  top:  ${(props) =>
    props.TooltipPosition? props.positionTop
      :"15px"};

  margin-left: ${(props) =>
    props.TooltipPosition? props.marginLeft
      :"15px"};
      
} ;


&:hover .ToolTiptext {
    opacity: 1;
    visibility: visible;
};
`


 export const Tooltip=() => (

  <TooltipContainer> Hover over mee
    <div className = 'ToolTiptext'>
this is tool tip text
    </div>
  </TooltipContainer>

);  





export interface ITooltipProps {
TooltipPosition?: number;
topMargin?: number;
positionLeft?: number;
positionTop?: number;
marginLeft?:number;
/*   checkmarkBorderWidth?:number; */
}

export const Checkbox: React.FC<ITooltipProps> = (props) => (

  <TooltipContainer{...props} >     Hover over me 
  <div className = 'ToolTiptext'>
  this is tool tip text
      </div>
    </TooltipContainer>
  
);

