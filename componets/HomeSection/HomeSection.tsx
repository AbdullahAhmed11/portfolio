import React from "react";
import { Box, Text, Image, Button, useBreakpointValue, Flex } from "@chakra-ui/react";
import MaxWidthWrapper from "../MaxWidthWrapper/MaxWidthWrapper";
import { MdOutlineWavingHand } from "react-icons/md"
import { AiTwotonePushpin, AiFillLinkedin } from "react-icons/ai"
import { FaGithubSquare } from "react-icons/fa"
import Link from "next/link";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { GiSpiralLollipop } from "react-icons/gi"
function HomeSection() {



    return (
        <Box
            width="100%"
            bg="#f9f9f9"
            zIndex="-1"
        >
            <MaxWidthWrapper>
                <Flex
                    display="flex"
                    alignItems="center"
                >
                    {/* descBox  */}
                    <Box
                        mt="100px"
                        width="700px"
                        mb="100px"
                    >
                        <Text
                            fontWeight="bold"
                            color="#2d2e32"
                            fontSize="3.5rem"
                            lineHeight="1.2"
                        >Front-End | Mern-Stack Developer
                            <Image
                                src="/images/wave.png"
                                width="3rem"
                                height="3rem"
                                position="absolute"
                                mt="10px"
                                ml="10px"
                            />
                        </Text>
                        <Text
                            fontSize="1.4rem"
                            color="#555"
                            lineHeight="1.6"
                            fontFamily="Mulish,sans-serif"

                        >
                            Hi, I'm Abdullah Ahmed. A passionate Front-end React Developer based in Egypt. <GiSpiralLollipop color="red" />
                        </Text>
                        <Box
                            display="flex"
                            gap="20px"
                            mt="10px"
                        >
                            <Link
                                passHref
                                href="https://www.linkedin.com/in/abdullah-ahmed-a52a801b2/"
                                target="_blank"
                            >
                                <Text
                                    fontSize="35px"
                                    color="#000"
                                ><AiFillLinkedin /></Text>
                            </Link>
                            <Link
                                passHref
                                href="https://github.com/AbdullahAhmed11"
                                target="_blank"
                            >
                                <Text
                                    fontSize="35px"
                                    color="#000"
                                ><FaGithubSquare /></Text>
                            </Link>
                        </Box>
                    </Box>
                    {/* imgBox */}
                    <Box
                        width="300px"
                        height="300px"
                        border="1px solid #000"
                    >
                        <Image
                            src="/images/abdullah.jpg"
                            width="100%"
                            height="100%"
                            ml="20px"
                            mt="20px"
                        />
                    </Box>
                </Flex>
            </MaxWidthWrapper>
        </Box>

    )
}
export default HomeSection;