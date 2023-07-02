import React from "react";
import { Box } from "@chakra-ui/react"
import { useMediaQuery } from '@chakra-ui/react'
import Projects from "@/componets/Projects/Projects"
import NavBar from "@/componets/Nav/NabBar"
import MobileNavBar from "@/componets/Nav/MobileNavBar"

function ProjectsPage () {
      const [isLargerThan798] = useMediaQuery('(min-width: 798px)')
    return (
    <>
        <Box>
            <Projects/>
        </Box> 
    </>
    )
}
export default ProjectsPage;