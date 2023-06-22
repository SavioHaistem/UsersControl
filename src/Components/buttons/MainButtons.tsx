import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { Linker } from "../../Styles/ButtonStyles";
import AwesomeIcon from "../../Styles/AwesomeIcon";

interface iProps {
  LinkTo: string;
  ButtonText: string;
  icon: IconDefinition;
}

function MainButton({ ButtonText, icon, LinkTo }: iProps) {
  return (
    <Linker to={LinkTo}>
      <AwesomeIcon icon={icon} />
      {ButtonText}
    </Linker>
  );
}

export default MainButton;
