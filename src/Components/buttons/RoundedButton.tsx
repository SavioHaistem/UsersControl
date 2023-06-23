import { useContext } from "react";
import { createPageContext } from "../routes/CreatePage";
import { RoundedButtonStyle } from "../../Styles/Buttons";

interface IButtonProps {
  buttonName: string
}

function RoundedButton({buttonName}:IButtonProps) {

  let sendIt = useContext(createPageContext);

  return (
  <>
    <RoundedButtonStyle onClick={()=>{sendIt}} placeholder={buttonName}>
    </RoundedButtonStyle>
  </>
  );
}

export default RoundedButton;