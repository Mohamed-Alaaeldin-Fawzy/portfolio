import { Heading, HStack, Image, Text, Box } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  return (
    <>
      {/* Outer container */}
      <Box
        maxW="lg"
        borderWidth="1px"
        borderRadius="xl"
        overflow="hidden"
        bg="white"
        boxShadow="base"
        border={"none"}
      >
        {/* Image */}
        <Image
          src={imageSrc}
          alt={title}
          mb="4"
          width="100%"
          borderRadius="xl"
        />

        {/* Title */}
        <Heading fontSize="xl" fontWeight="bold" m="2" color={"#252525"}>
          {title}
        </Heading>

        {/* Description */}
        <Text color="gray.600" m={2}>
          {description}
        </Text>

        {/* Link */}
        <HStack color={"#252525"} m={2}>
          <a href="">see more</a>
          <FontAwesomeIcon icon={faArrowRight} size="1x" />
        </HStack>
      </Box>
    </>
  );
};

export default Card;
