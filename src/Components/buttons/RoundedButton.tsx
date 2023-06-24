import { useContext } from "react";
import { RoundedButtonStyle } from "../../Styles/Buttons";
import { createPageContext } from "../routes/CreatePage";

interface IButtonProps {
  buttonName?: string,
  submit?: any
}

function RoundedButton({buttonName}:IButtonProps) {

  const sendIt:any = useContext(createPageContext)

  return (
  <>
    <RoundedButtonStyle onSubmit={()=>sendIt}>
      {buttonName}
    </RoundedButtonStyle>
  </>
  );
}

export default RoundedButton;