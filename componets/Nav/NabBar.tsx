import React from "react";
import MaxWidthWrapper from "../MaxWidthWrapper/MaxWidthWrapper";
import { Box, Text, Button } from "@chakra-ui/react";
const PDF_FILE_URL = "https://drive.google.com/file/d/1Kma0D8-u53iVojeVv5fQ3QcSuckasFS_/view"
import { downloadButton } from "../Download/DownoladButton";

function NavBar() {
    const  NAV_LINKS = 
    [
        {
            label: "Home",
            link: "/"
        },
        {
            label: "About",
            link: "/about"
        },
        {
            label: "Projects",
            link: "/projects"
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
            bg="#fff"
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
                            as="a"
                            href={item.link}
                            textDecorationLine="none"
                        >
                            {item.label}
                        </Text>
                    ))
                }
            </Box>
            <Box

            >
                <Button
                        width="8rem"
                        height="2rem"
                        rounded="100px"
                        bg="#fff"
                        boxShadow="0 0 10px rgba(0,0,0,.09)"
                        onClick={() => {
                            downloadButton(PDF_FILE_URL);
                        }} 
                        cursor="pointer" 
                >Download resume</Button>
            </Box>
        </Box>
  

        </>
    )
}
export default NavBar;