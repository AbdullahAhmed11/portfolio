import React from "react";
import { Box, Text } from "@chakra-ui/react"
import { useMediaQuery } from '@chakra-ui/react'
import MaxWidthWrapper from "@/componets/MaxWidthWrapper/MaxWidthWrapper";
import Head from "next/head";
import Contact from "@/componets/Contact/Contact";
import ContactMobile from "@/componets/Contact/ContactMobile";

function ContactPage () {
    const [isLargerThan798] = useMediaQuery('(min-width: 798px)')

    return (
        <>
        <Head>
            <title>@devAbdullah | Contact</title>
        </Head>
        <MaxWidthWrapper>

            <Box
                mt="40px"
                display="flex"
                gap="10px"
                ml="20px"
            >
                <Text>Back to</Text>
                    <Text
                        as="a"
                        textDecorationLine="none"
                        fontWeight="bold"
                        href="/"
                        color="#000"
                    >Home</Text>
            </Box>
        </MaxWidthWrapper>
        <Box mt="50px">
            {
                isLargerThan798 ? <Contact/> : <ContactMobile/>
            }
        </Box>

        </>
    )
}
export default ContactPage;