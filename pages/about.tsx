import React from "react";
import { Box } from "@chakra-ui/react"
import { useMediaQuery } from '@chakra-ui/react'
import About from "@/componets/About/About"
import AboutMobile from "@/componets/About/AboutMobile"

function AboutPage () {
      const [isLargerThan798] = useMediaQuery('(min-width: 798px)')
    return (
        <>
        <Box>
        {
          isLargerThan798 ? <About/> : <AboutMobile/>
        }
      </Box> 
        </>
    )
}
export default AboutPage;