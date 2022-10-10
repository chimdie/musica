import React from "react";
import { NavLink as ReactLink } from "react-router-dom";
import { Box, Link, Icon } from "@chakra-ui/react";
import { sideToplinks, sideBottomlinks } from "../links";
import { ReactComponent as Logo } from "../../../assets/sidebar/logo.svg";

export default function MainSidebar(): JSX.Element {
  return (
    <Box
      as="aside"
      className="fixed flex flex-col items-start gap-6 top-0 left-0 w-24 h-screen"
    >
      <Box
        as="section"
        className="flex flex-col items-center justify-around p-6 w-full"
      >
        <Box as="section" py="2rem">
          <Logo />
        </Box>
        <Box
          as="section"
          bg="#1A1E1F"
          borderRadius="32px"
          className="py-4 my-4"
        >
          {sideToplinks.map((link, i) => {
            return (
              <Link
                as={ReactLink}
                key={link.url + i}
                to={link.url}
                fontWeight="bold"
                transition="background 0.2s"
                _hover={{ color: "#FACD66", opacity: 1 }}
                _activeLink={{ color: "#FACD66", opacity: 1 }}
                className="flex items-center gap-4 py-4 px-3 my-3 rounded-xl"
              >
                <Icon
                  as={link.icon}
                  w={6}
                  h={6}
                  color="#EFEEE0"
                  opacity={0.4}
                  transition="background 0.2s"
                  _hover={{ color: "#FACD66", opacity: 1 }}
                  _activeLink={{ color: "#FACD66", opacity: "inherit" }}
                />
              </Link>
            );
          })}
        </Box>

        <Box
          as="section"
          my="1rem"
          bg="#1A1E1F"
          borderRadius="32px"
          opacity={1}
        >
          {sideBottomlinks.map((link, i) => {
            return (
              <Link
                as={ReactLink}
                key={link.url + i}
                to={link.url}
                fontWeight="bold"
                transition="background 0.2s"
                _hover={{ color: "#FACD66", opacity: 1 }}
                _activeLink={{ color: "#FACD66", opacity: "inherit" }}
                className="flex items-center gap-4 py-4 px-3 my-3 rounded-xl"
              >
                <Icon
                  as={link.icon}
                  w={6}
                  h={6}
                  color="#EFEEE0"
                  opacity={0.4}
                  _hover={{ color: "#FACD66", opacity: 1 }}
                  _activeLink={{ color: "inherit", opacity: "inherit" }}
                />
              </Link>
            );
          })}
        </Box>
      </Box>
    </Box>
  );
}
