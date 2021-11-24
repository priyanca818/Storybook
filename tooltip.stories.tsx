import React from "react";
import styled from "styled-components";
import { withA11y } from "@storybook/addon-a11y";

import {
  boolean,
  color,
  text,
  withKnobs,
} from "@storybook/addon-knobs";

import Tooltip from "../tooltip";


export default {
  title: "Tooltip",
  component: Tooltip,
  decorators: [
    withA11y,
    withKnobs,
    (storyFn: () => React.ReactNode) => <Container>{storyFn()}</Container>,
  ],
};

export const TopLeft = () => {
  const props = {
    content: (
      <TooltipContent>
        {text(
          "Tooltip Text",
          " This is tool tip text "
        )}
      </TooltipContent>
    ),

    color: color("Color", ""),
    visible: boolean("Visibility", false),
    arrowDirection: "bottom",
    arrowPositionX: "80%",
   containerPositionX: "-130px",
    containerPositionY: "calc(100% + 15px)",
  };

  return (
    <div>
      <Tooltip {...props}>
        <TooltipText>
        Hover
        </TooltipText>
      </Tooltip>
    </div>
  );
};

export const TopCenter = () => {
  const props = {
    content: (
      <TooltipContent>
        {text(
          "Tooltip Text",
          " This is tooltip text "
        )}
      </TooltipContent>
    ),

    color: color("Color", ""  ),
    visible: boolean("Visibility", false),
    arrowDirection: "bottom",
    arrowPositionX: "45%",
    containerPositionX: "calc(10% - 55px)",
    containerPositionY: "calc(100% + 15px)",
  };

  return (
    <div>
      <Tooltip {...props}>
        <TooltipText>
        Hover
        </TooltipText>
      </Tooltip>
    </div>
  );
};


export const TopRight = () => {
  const props = {
    content: (
      <TooltipContent>
        {text(
          "Tooltip Text",
          " This is tooltip text "
        )}
      </TooltipContent>
    ),

    color: color("Color", ""  ),
    visible: boolean("Visibility", false),
    arrowDirection: "bottom",
    arrowPositionX: "5%",
    containerPositionX: "calc(100% - 15px)",
    containerPositionY: "calc(100% + 15px)",
  };

  return (
    <div>
      <Tooltip {...props}>
        <TooltipText>
        Hover
        </TooltipText>
      </Tooltip>
    </div>
  );
};



export const Right = () => {
  const props = {
    content: (
      <TooltipContent>
        {text(
          "Tooltip Text",
          " This is tool tip text "
        )}
      </TooltipContent>
    ),

    color: color("Color", ""),
    visible: boolean("Visibility", false),
    arrowDirection: "left",
    arrowPositionY: "5px",
    containerPositionX: "calc(100% + 15px)",
    containerPositionY: "-4px",
  };

  return (
    <div>
      <Tooltip {...props}>
        <TooltipText>
        Hover
        </TooltipText>
      </Tooltip>
    </div>
  );
};

export const BottomRight = () => {
  const props = {
    content: (
      <TooltipContent>
        {text(
          "Tooltip Text",
          " This is tool tip text "
        )}
      </TooltipContent>
    ),

    color: color("Color", ""  ),
    visible: boolean("Visibility", false ),
    arrowDirection: "top",
    arrowPositionX: "15px",
    containerPositionX: "calc(50% - 5px)",
    containerPositionY: "calc(100% + 10px)",
  };

  return (
    <div>
      <Tooltip {...props}>
        <TooltipText>
        Hover 
        </TooltipText>
      </Tooltip>
    </div>
  );
};

export const BottomCenter = () => {
  const props = {
    content: (
      <TooltipContent>
        {text(
          "Tooltip Text",
          " This is tool tip text "
        )}
      </TooltipContent>
    ),

    color: color("Color", ""),
    visible: boolean("Visibility", false),
    arrowDirection: "top",
    arrowPositionX: "45%",
    containerPositionX: "calc(10% - 60px)",
    containerPositionY: "calc(80% + 15px)",
  };

  return (
    <div>
      <Tooltip {...props}>
        <TooltipText>
        Hover
        </TooltipText>
      </Tooltip>
    </div>
  );
};

export const BottomLeft = () => {
  const props = {
    content: (
      <TooltipContent>
        {text(
          "Tooltip Text",
          " This is tool tip text "
        )}
      </TooltipContent>
    ),

    color: color("Color", ""),
    visible: boolean("Visibility", false),
    arrowDirection: "top",
    arrowPositionX: "calc(100% - 30px)",
    containerPositionX: "-130px",
    containerPositionY: "calc(100% + 15px)",
  };

  return (
    <div>
      <Tooltip {...props}>
        <TooltipText>
         Hover
        </TooltipText>
      </Tooltip>
    </div>
  );
};

export const Left = () => {
  const props = {
    content: (
      <TooltipContent>
        {text(
          "Tooltip Text",
          "This is tool tip text "
        )}
      </TooltipContent>
    ),

    color: color("Color", ""  ),
    visible: boolean("Visibility", false),
    arrowDirection: "right",
    arrowPositionY: "5px",
    containerPositionX: "calc(100% + 15px)",
    containerPositionY: "-4px",
  };

  return (
    <div>
      <Tooltip {...props}>
        <TooltipText>
        Hover
        </TooltipText>
      </Tooltip>
    </div>
  );
};

const TooltipContent = styled.div`
  padding: 0 10px;
  height: 15px;
  width: fit-content;
  border-radius: 10px;
  vertical-align: middle;
`;

const TooltipText = styled.div`
 padding: 5px;
 box-shadow: 0 4px 6px 0 transparent;
height: 15px;
 width: auto;

`;

const Container = styled.div`
  height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color:transparent;
  
`;
