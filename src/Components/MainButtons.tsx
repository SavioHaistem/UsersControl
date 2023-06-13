import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { MainButtonStyle } from "../Styles/ButtonStyles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


interface iProps {
  onClick: () => void,
  ButtonText: string,
  icon: IconDefinition
}

function MainButton({ onClick, ButtonText, icon }: iProps) {
  return (
    <MainButtonStyle 
      onClick={onClick}>
        <FontAwesomeIcon icon={icon}/>
        {ButtonText} 
    </MainButtonStyle> 
  );
}

export default MainButton;