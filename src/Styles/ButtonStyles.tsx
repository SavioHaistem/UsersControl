import { styled } from "styled-components";
import { Link } from "react-router-dom";

const Linker = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: 1rem;
  text-decoration: none;
  border: none;
  height: 100%;
  width: 100%;
  transition: 0.4s;

  &:hover {
    width: calc(100% + 4px);
    height: calc(100% + 4px);
    cursor: pointer;
  }
  color: ${({ theme }) => theme.fonts.textIn};
  font-size: medium;
  font-family: ${({ theme }) => theme.fonts.menus};
  font-weight: 400;
`;
export { Linker };
