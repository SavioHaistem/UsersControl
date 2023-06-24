import { useContext } from "react";
import { RoundedButtonStyle } from "../../Styles/Buttons";
import { createPageContext } from "../routes/CreatePage";

interface IButtonProps {
  buttonName?: string,
  submit?: any
}

function RoundedButton({buttonName}:IButtonProps) {

  const sendIt:any = useContext(createPageContext)
  console.log(sendIt)
  return (
  <>
    <RoundedButtonStyle onClick={()=>sendIt()}>
      {buttonName}
    </RoundedButtonStyle>
  </>
  );
}

export default RoundedButton;