import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { Linker } from "../Styles/ButtonStyles";
import AwesomeIcon from "../Styles/AwesomeIcon";

interface iProps {
  onClick: any,
  ButtonText: string,
  icon: IconDefinition
}

function MainButton({ ButtonText, icon }: iProps) {
  return (
    <Linker to={'/adicionar'}>
      <AwesomeIcon icon={icon}/>
          {ButtonText}
    </Linker>
  );
}

export default MainButton;