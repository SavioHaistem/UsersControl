import { styled } from "styled-components";

const Button = styled.button`
  background-color: ${({theme})=> theme.colors.primary};
  border-radius: 1rem;
  border: none;
`

interface iProps {
  onClick: any,
  ButtonText: string
}

function MainButton({ onClick, ButtonText }: iProps) {
  return (
    <Button onClick={onClick}> {ButtonText} </Button>
  );
}

export default MainButton;