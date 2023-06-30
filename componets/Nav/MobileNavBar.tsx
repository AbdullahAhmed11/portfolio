import React from "react";
import { 
        Box,
        Text, 
        Flex, 
        HStack, 
        IconButton, 
        useDisclosure, 
        useColorModeValue, 
        Stack,
        Button,
        Drawer,
        DrawerOverlay,
        DrawerBody,
        DrawerContent,
        DrawerHeader
    } from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import Link from 'next/link';
import {RxHamburgerMenu} from "react-icons/rx"
import {AiFillCloseCircle} from "react-icons/ai"
function MobileNavBar() {
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
    const [showLinks, setShowLinks] = React.useState(false);


    const handleDisplay = () => {
        setShowLinks(!showLinks)
    }


    return (
        <Box
            display="flex"
            flexDirection="column"
            zIndex="1000"
        >
            <Box
                width="100%"
                boxShadow="0 0 10px rgba(0,0,0,.09)"
                display="flex"
                alignItems="center"
                justifyContent="space-between"
                position="fixed"
                p="20px"
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
            <Box>
                <Text 
                    cursor="pointer"
                    onClick={() => handleDisplay()}
    
                >
                    {

                        showLinks ? 
                         <AiFillCloseCircle fontSize="30px"/> :<RxHamburgerMenu fontSize="30px"/> 
                    }
                </Text>
            </Box>

            </Box> 
            {
                showLinks ? (
                    <Box
                    mt="150px"
                    display="flex"
                    flexDirection="column"
                    justifyContent="center"
                    alignItems="center"
                    gap="20px"
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
                ) : (
                    ""
                )
            }

    </Box>
    )
}
export default MobileNavBar;