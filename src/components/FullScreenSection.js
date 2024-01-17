import * as React from "react";
import { VStack } from "@chakra-ui/react";
import background from "../images/background.svg"
/**
 * Illustrates the use of children prop and spread operator
 */
const FullScreenSection = ({ children, isDarkBackground, ...boxProps }) => {
  return (
    <VStack
    backgroundImage={background}
    backgroundAttachment={"fixed"}
    backgroundColor={boxProps.backgroundColor}
    color={isDarkBackground ? "white" : "black"}
    zIndex={9}
      >
      <VStack width="100%" minHeight="100vh" {...boxProps}>
        {children}
      </VStack>
    </VStack>
  );
};

export default FullScreenSection;
