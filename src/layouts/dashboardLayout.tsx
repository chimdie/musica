import {
  Box,
  useBreakpointValue,
  // Text,
  // FormControl,
  // Input,
} from "@chakra-ui/react";
import {
  BottomNaviagtion,
  SideBar,
  DeskTopBottomNaviagtion,
} from "../components/Navigation";

const smVariant = { navigation: "mobileNav", navigationButton: true };
const mdVariant = { navigation: "sidebar", navigationButton: false };

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  const variants = useBreakpointValue({ base: smVariant, md: mdVariant });

  return (
    <Box as="main" height="100%" width="100%" bg="#1E1E1E">
      {variants?.navigation === "mobileNav" ? (
        <>
          <Box as="section" className="flex flex-col h-full w-full">
            <Box
              as="main"
              className="flex flex-col justify-center items-center flex-1"
            >
              {children}
            </Box>
          </Box>
          <BottomNaviagtion />
        </>
      ) : (
        <Box as="section">
          <SideBar />
          {/* <Box>
            <FormControl>
              <Input type="search" />
            </FormControl>
          </Box> */}
          <Box
            as="section"
            className="flex flex-col justify-between h-full min-h-screen pl-24"
          >
            <Box as="section">
              <Box as="main" px={{ base: 4, md: 10, xl: 8 }} py="1rem">
                {children}
              </Box>
            </Box>
          </Box>
          <DeskTopBottomNaviagtion />
        </Box>
      )}
    </Box>
  );
}
