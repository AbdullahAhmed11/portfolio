import React from "react";
import MaxWidthWrapper from "../MaxWidthWrapper/MaxWidthWrapper";
import { Box, Text, Image, Button } from "@chakra-ui/react";
import {AiFillGithub} from "react-icons/ai"
import {BsBoxArrowInUpRight} from "react-icons/bs"
import Link from "next/link";
import ProjectCart from "./ProjectCart";
import { useMediaQuery } from '@chakra-ui/react'
import ProjectCartMobile from "./ProjectCartMobile";

function Projects() {
    const [isLargerThan798] = useMediaQuery('(min-width: 798px)')
    return (
        <Box
            mt="40px"
            width="100%"
            bg="#f9f9f9"
        >
            <MaxWidthWrapper>
                <Box p="20px">
                    <Box
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                        width="120px"
                        height="60px"
                        rounded="100px"
                        boxShadow="0 0 10px rgba(0,0,0,.09)"
                        bg="#fff"
                        >
                            <Text
                                fontWeight="bold"
                            >PORTFOLIO</Text>
                        </Box>
                        <Box mt="20px">
                            <Text
                                fontSize="1.3rem"
                                fontWeight="bold"
                            >
                                 Each project is a unique piece of development 🧩
                            </Text>
                        </Box>
                        <Box mt="30px">
                            {
                                isLargerThan798 ? <ProjectCart/> : <ProjectCartMobile/>
                            }
                            
                        </Box>
                </Box>
            </MaxWidthWrapper>
        </Box>
    )
}
export default Projects;