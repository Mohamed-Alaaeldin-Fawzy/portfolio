import React from "react";
import { Avatar, Heading, Image, VStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";
import avatar from "../images/avatar.jpg"
import hero from "../images/hero.svg"
const greeting = "Hello, I am Mohamed!";
const bio1 = "Designer, Frontend & Backend Developer";
const bio2 = " I beautifully design and code simple things, and I love what I do.";

// Implement the UI for the LandingSection component according to the instructions.
// Use a combination of Avatar, Heading and VStack components.
const LandingSection = () => (
  <FullScreenSection
  position="relative"
    justifyContent="center"
    alignItems="center"
    isDarkBackground
     color="#252525"
  >
    <VStack spacing={8}>
      <Heading as="h1" fontSize="2.5rem"  textAlign={"center"}>
      {bio1}
      </Heading>
      <Avatar name="Mohamed Alaa" src={avatar} width="180px" height="180px" borderRadius="100%" />
    <Heading as="p" fontSize="1.4rem" fontWeight={"normal"}>
     {greeting}
      </Heading>
      <Heading as="p" fontSize="1.4rem" fontWeight={"normal"} >
     {bio2}
      </Heading>
      <Image src={hero} width={"600px"} position="absolute" bottom={0} />
    </VStack>
  </FullScreenSection>
);

export default LandingSection;
