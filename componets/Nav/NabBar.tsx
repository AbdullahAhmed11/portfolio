import React from "react";
import MaxWidthWrapper from "../MaxWidthWrapper/MaxWidthWrapper";
import { Box, Text } from "@chakra-ui/react";

function NavBar() {

    const  NAV_LINKS = [
        {
            label: "Home",
            link: "/"
        },
        {
            label: "About",
            link: "/about"
        },
        {
            label: "Project",
            link: "/project"
        },
        {
            label: "Contact",
            link: "/contact"
        },
    ]

    return (
        <>
        <Box
            width="100%"
            boxShadow="0 0 10px rgba(0,0,0,.09)"
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            position="fixed"
            p="20px"
            as="nav"
        >
            <Box>
                <Text
                    fontWeight="bold"
                    fontSize="1.2rem"
                    color="#2d2e32"
                    cursor="pointer"
                >
                    DevAbdullah
                </Text>
                    
            </Box>
            <Box
                display="flex"
                alignItems="center"
                gap="20px"
                mr="40px"
            >
                {
                    NAV_LINKS.map((item) => (
                        <Text 
                            key={item.label}
                            fontWeight="bold"
                            fontSize="1.2rem"
                            color="#2d2e32"
                            cursor="pointer"
                        >
                            {item.label}
                        </Text>
                    ))
                }
            </Box>
        </Box>
  

        </>
    )
}
export default NavBar;