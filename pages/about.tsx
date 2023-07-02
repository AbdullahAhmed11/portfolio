import NavBar from "@/componets/Nav/NabBar";
import React from "react";
import { Box, Text } from "@chakra-ui/react"
import About from "@/componets/About/About"
import AboutMobile from "@/componets/About/AboutMobile"
import { useMediaQuery } from '@chakra-ui/react'
import MaxWidthWrapper from "@/componets/MaxWidthWrapper/MaxWidthWrapper";
import Link from "next/link";
import Head from "next/head";

function AboutPage () {
    const [isLargerThan798] = useMediaQuery('(min-width: 798px)')

    return (
        <>
        <Head>
            <title>@devAbdullah | About</title>
        </Head>
        <MaxWidthWrapper>

            <Box
                mt="40px"
                display="flex"
                gap="10px"
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

            <Box mt="40px">
                {
                isLargerThan798 ? <About/> : <AboutMobile/>
                }
            </Box>
        </>
    )
}
export default AboutPage;