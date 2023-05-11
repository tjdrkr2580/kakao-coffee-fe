import React from "react";
import styled from "@emotion/styled";
import { buttonTypes } from "@/types/props";

const Button = ({ children, color }: buttonTypes) => {
  return <CustomButton color={color}>{children}</CustomButton>;
};

const CustomButton = styled.button`
  width: fit-content;
  height: 4.5rem;
  border-radius: 1.2rem;
  padding: 0.3rem 0.8rem;
  font-size: 1.5rem;
  font-weight: 500;
  background: ${(props) => props.color};
  border: none;
`;

Button.defaultProps = {
  color: "#ffdc00",
};

export default Button;
