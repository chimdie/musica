import React from "react";
import { NavLink as ReactLink } from "react-router-dom";
import { Box, Link, Icon } from "@chakra-ui/react";
import { sideToplinks } from "../links";

const BottomNaviagtion = (): JSX.Element => {
  return (
    <Box
      as="section"
      position="fixed"
      textAlign="center"
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      flexShrink="0"
      color="#fFF"
      width="100%"
      height="60px"
      padding="2rem"
      left="0"
      bottom="0"
      boxShadow="rgb(158 158 158 / 20%) 0px -2px 12px 0px"
    >
      {/* {links.map((link) => {
        return (
          <Link
            as={ReactLink}
            to={link.url}
            key={link.title}
            color="#375d86"
            _activeLink={{ color: "#0085FF" }}
          >
            <Box display="grid" placeItems="center">
              <Icon
                as={link.icon}
                w={9}
                h={9}
                padding=".4rem"
                color="inherit"
                _activeLink={{ color: "inherit" }}
              />
            </Box>
            <Box fontSize="9px" fontWeight="bold">
              {link.title}
            </Box>
          </Link>
        );
      })} */}
    </Box>
  );
};

export default BottomNaviagtion;
