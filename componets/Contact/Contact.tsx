import React from "react";
import MaxWidthWrapper from "../MaxWidthWrapper/MaxWidthWrapper";
import { Box, Text, Flex } from "@chakra-ui/react";
import {GrMapLocation} from "react-icons/gr"
import {AiOutlineMail} from "react-icons/ai"


function Contact() {

    const CONTACT_ARR = [
        {
            iconContact: <GrMapLocation/>,
            titleContact: "Location",
            descContact: "Egypt",
            href:""

        },
        {
            iconContact: <AiOutlineMail/>,
            titleContact: "Mail",
            descContact: "abdullah77zzx@gmail.com",
            href:"mailto:abdullah77zzx@gmail.com"
        },
    ]

    return (
        <>
            <MaxWidthWrapper>
                <Box mb="70px">
                    <Flex
                        flexDirection="column"
                        gap="20px"
                    >
                        <Text 
                            textTransform="uppercase"
                            fontWeight="Bold"
                        >
                            Contact
                        </Text>
                        <Text
                            fontWeight="bold"
                            fontSize="2rem"
                        >Don't be shy! Hit me up! 👇</Text>
                    </Flex>
                    <Box
                        mt="50px"
                        display="flex"
                        gap="30px"
                    >
                        {
                            CONTACT_ARR.map((item) => (
                                <Box
                                    display="flex"
                                    alignItems="center"
                                    gap="20px"
                                    key={item.descContact}
                                >
                                    <Box
                                        bg="#fff"
                                        rounded="50%"
                                        boxShadow="0 0 10px rgba(0,0,0,.1)"
                                        width="4rem"
                                        height="4rem"
                                        display="flex"
                                        alignItems="center"
                                        justifyContent="center"
                                        fontSize="1.5rem"
                                    >
                                        {item.iconContact}
                                    </Box>
                                    <Flex
                                        flexDirection="column"
                                        gap="5px"
                                    >
                                        <Text fontWeight="bold" color="#000">{item.titleContact}</Text>
                                        <Text 
                                            color="#767676"
                                            cursor="pointer"
                                            fontSize="1rem"
                                            as="a"
                                            href={item.href}
                                            textDecorationLine="none"
                                        >{item.descContact}</Text>
                                    </Flex>
                                </Box>

                            ))
                        }
                    </Box>
                </Box>
            </MaxWidthWrapper>
        </>
    )
}
export default Contact;