import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import AwesomeIcon from "../../Styles/AwesomeIcon";
import { RoundedButtonStyle } from "../../Styles/Buttons";
import { propFunction } from "../../Types/propFunction";
import { ReactNode } from "react";

interface IPropsButton {
  onClick: propFunction,
  icon: any,
  children: ReactNode
}
function RoundedButton({ onClick, icon, children }: IPropsButton) {
  return (
  <>
    <RoundedButtonStyle onClick={()=>{onClick}}>
      <AwesomeIcon icon={icon}/>
      {children}
    </RoundedButtonStyle>
  </>
  );
}

export default RoundedButton;