import { Box, BoxProps } from "@chakra-ui/react";
import { Icon } from "react-feather";

export type IconProps = BoxProps & { iconComp: Icon };

const CustomIcon = (props: IconProps) => {
  const { boxSize = 5, iconComp, ...others } = props;
  return <Box as={iconComp} boxSize={boxSize} {...others} />;
};

export default CustomIcon;
