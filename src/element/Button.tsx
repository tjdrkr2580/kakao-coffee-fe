import React from "react";
import styled from "@emotion/styled";
import { buttonTypes } from "@/types/props";

const Button = ({ children, color, onClick }: buttonTypes) => {
  return (
    <CustomButton onClick={onClick} color={color}>
      {children}
    </CustomButton>
  );
};

const CustomButton = styled.button`
  width: fit-content;
  height: 4.5rem;
  border-radius: 1.2rem;
  padding: 0.3rem 1.8rem;
  font-size: 1.5rem;
  font-weight: 500;
  background: ${(props) => props.color};
  border: none;
  cursor: pointer;
  transition: 0.15s filter;
  &:hover {
    filter: brightness(80%);
  }
`;

Button.defaultProps = {
  color: "#ffdc00",
  onClick: () => {},
};

export default Button;
