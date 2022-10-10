import * as React from "react";
import { Box, Text, Link, VStack, Code, Grid } from "@chakra-ui/react";
import { ColorModeSwitcher } from "../../ColorModeSwitcher";
import { Logo } from "../../Logo";
import DashboardLayout from "../../layouts/dashboardLayout";

// https://rapidapi.com/category/Music //TODO MUSIC API

export const Home = () => {
  return (
    <DashboardLayout>
      <Box textAlign="center" fontSize="xl">
        <Grid minH="100vh" p={3}>
          <ColorModeSwitcher justifySelf="flex-end" />
          <VStack spacing={8}>
            <Logo h="40vmin" pointerEvents="none" />
            <Text>
              Edit <Code fontSize="xl">src/App.tsx</Code> and save to reload.
            </Text>
            <Link
              color="teal.500"
              href="https://chakra-ui.com"
              fontSize="2xl"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn Chakra
            </Link>
          </VStack>
        </Grid>
      </Box>
    </DashboardLayout>
  );
};

export default Home;
