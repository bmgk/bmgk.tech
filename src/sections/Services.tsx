import * as React from "react";
import { Box, Center, Divider, Flex, Heading, Text } from "@chakra-ui/react";

import Transition from "../components/Transition";
import useMobileView from "../utils/hooks/useMobileView";
import useCurrentSection from "../utils/hooks/useCurrentSection";
import { useTranslation } from "../../i18n";

const Services = () => {
  const { t } = useTranslation();
  const [isMobile] = useMobileView();
  const { ref } = useCurrentSection("services");

  const minH = isMobile ? "100vh" : "60vh";
  const m = "5rem 0";
  const fontSize = isMobile ? "2rem" : "1.2rem";
  const flexDirection = isMobile ? "column" : "row";

  return (
    <Box
      ref={ref}
      mt="-2rem"
      mb="1rem"
      as="section"
      flexDirection="column"
      id="services"
      css={{ scrollMarginTop: "100px" }}
    >
      <Box mt="2rem">
        <Center>
          <Heading as="h2" size="3xl" isTruncated color="#43A047" height="10vh">
            {t("Services")}
          </Heading>
        </Center>
      </Box>
      <Transition>
        <Center display="flex" flexDirection={"column"}>
          <Flex flexDirection={flexDirection} minH={minH} m={m}>
            <Box
              backgroundImage={`url(/svg/services.svg)`}
              objectFit="contain"
              backgroundRepeat="no-repeat"
              backgroundSize="100% 100%"
              flex="2"
            />
            <Flex flex="1" margin="auto 0">
              <Text
                textAlign="center"
                justifyContent="center"
                fontSize={fontSize}
              >
                {t("Services description")}
              </Text>
            </Flex>
          </Flex>
        </Center>
        <Divider />
      </Transition>
    </Box>
  );
};

export default Services;
