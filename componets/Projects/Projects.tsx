import React from "react";
import MaxWidthWrapper from "../MaxWidthWrapper/MaxWidthWrapper";
import { Box, Text, Image, Button } from "@chakra-ui/react";
import {AiFillGithub} from "react-icons/ai"
import {BsBoxArrowInUpRight} from "react-icons/bs"
import Link from "next/link";
import ProjectCart from "./ProjectCart";
function Projects() {
    return (
        <Box
            mt="90px"
        >
            <MaxWidthWrapper>
            <Text
                fontSize="25px"
                fontWeight="bold"
                lineHeight="40px"
            >
                Projects
            </Text>
            <Box>
                <ProjectCart/>
            </Box>
            </MaxWidthWrapper>
        </Box>
    )
}
export default Projects;