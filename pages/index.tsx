import MaxWidthWrapper from "@/componets/MaxWidthWrapper/MaxWidthWrapper"
import NavBar from "@/componets/Nav/NabBar"
import Head from "next/head"
import React from "react"
import HomeSection from "@/componets/HomeSection/HomeSection"
import About from "@/componets/About/About"
import Projects from "@/componets/Projects/Projects"
import { Box } from "@chakra-ui/react"
import { useMediaQuery } from '@chakra-ui/react'
import MobileNavBar from "@/componets/Nav/MobileNavBar"
import HomeSectionMobile from "@/componets/HomeSection/HomeSectionMobile"
import AboutMobile from "@/componets/About/AboutMobile"
import Contact from "@/componets/Contact/Contact"
import ContactMobile from "@/componets/Contact/ContactMobile"
import Footer from "@/componets/Footer/Footer"


export default function Home() {
  const [isLargerThan798] = useMediaQuery('(min-width: 798px)')
  return (
    <Box
      display="flex"
      flexDirection="column"
    >
      <Head>
        <title>@devAbdullah</title>
      </Head>
      <Box >
        {isLargerThan798 ? <NavBar /> : <MobileNavBar />}
      </Box>
      <Box
        mt="70px"
      >
        {
          isLargerThan798 ? <HomeSection /> : <HomeSectionMobile />
        }
      </Box>
      <Box mt="40px">
        {
          isLargerThan798 ? <About /> : <AboutMobile />
        }
      </Box>
      <Box>
        <Projects />
      </Box>
      <Box mt="70px">
        {
          isLargerThan798 ? <Contact /> : <ContactMobile />
        }

      </Box>
    </Box>

  )
}
