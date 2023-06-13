import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { MainButtonStyle } from "../Styles/ButtonStyles";
import AwesomeIcon from "../Styles/AwesomeIcon";

interface iProps {
  onClick: () => void,
  ButtonText: string,
  icon: IconDefinition
}

function MainButton({ onClick, ButtonText, icon }: iProps) {
  return (
    <MainButtonStyle 
      onClick={onClick}>
      <AwesomeIcon icon={icon}/>
        {ButtonText} 
    </MainButtonStyle> 
  );
}

export default MainButton;