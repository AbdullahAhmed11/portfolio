import React from "react";
import { Box,Text } from "@chakra-ui/react"
import { useMediaQuery } from '@chakra-ui/react'
import Projects from "@/componets/Projects/Projects"
import NavBar from "@/componets/Nav/NabBar"
import MobileNavBar from "@/componets/Nav/MobileNavBar"
import Head from "next/head";
import MaxWidthWrapper from "@/componets/MaxWidthWrapper";

function ProjectsPage () {
      const [isLargerThan798] = useMediaQuery('(min-width: 798px)')
    return (
    <>
        <Head>
            <title>@devAbdullah | Projects</title>
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
        <Box>
            <Projects/>
        </Box> 
    </>
    )
}
export default ProjectsPage;