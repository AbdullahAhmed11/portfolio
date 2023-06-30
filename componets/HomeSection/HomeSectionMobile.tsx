import React from "react";
import { Box,Text , Image, Button, useBreakpointValue, Flex} from "@chakra-ui/react";
import MaxWidthWrapper from "../MaxWidthWrapper/MaxWidthWrapper";
import {MdOutlineWavingHand} from "react-icons/md"
import {AiTwotonePushpin, AiFillLinkedin} from "react-icons/ai"
import {FaGithubSquare} from "react-icons/fa"
import Link from "next/link";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {GiSpiralLollipop} from "react-icons/gi"

function HomeSectionMobile() {

    const  IMAGE_URL = [
        {
            src:"/images/html.png",
            label: "html"
        }, 
        {
            src:"/images/css.png",
            label: "css"
        }, 
        {
            src:"/images/javascript.png",
            label: "js"
        }, 
        {
            src:"/images/tailwind.png",
            label: "tailwind"
        }, 
        {
            src:"/images/react.png",
            label: "react"
        }, 
        {
            src:"/images/nextjs.png",
            label: "next"
        }, 
        {
            src:"/images/node.png",
            label: "node"
        }, 
        {
            src:"/images/mongo.png",
            label: "mongo"
        }, 
        {
            src:"/images/firebase.png",
            label: "firebase"
        }, 
        {
            src:"/images/github1.png",
            label: "github1"
        }, 

    ]

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
            flexDirection="column"
        >
            {/* descBox  */}
            <Box 
                mt="70px"
                width="300px"
                mb="30px"
            >
                <Text
                    fontWeight="bold"
                    color="#2d2e32"
                    fontSize="1.5rem"
                    lineHeight="1.2"
                >Front-End | Mern-Stack Developer
                <Image 
                    src="/images/wave.png" 
                    width="2rem" 
                    height="2rem" 
                    position="absolute"
                    // mt="px"
                    ml="10px"
                     />
                </Text>
                <Text
                    fontSize="1.4rem"
                    color="#555"
                    lineHeight="1.6"
                    fontFamily="Mulish,sans-serif"
                    mt="10px"
                >
                    Hi, I'm Abdullah Ahmed. A passionate Front-end React Developer based in Egypt. <GiSpiralLollipop color="red"/>
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
                        ><AiFillLinkedin/></Text>
                </Link>
                <Link
                    passHref
                    href="https://github.com/AbdullahAhmed11"
                    target="_blank"
                >
                    <Text
                        fontSize="35px" 
                        color="#000"
                        ><FaGithubSquare/></Text>
                </Link>
                </Box>
            </Box>
            {/* imgBox */}
            <Box
                width="300px"
                height="300px"
                border="1px solid #000"
                mb="40px"
            >
                <Image
                    src="/images/portfolio-img.jpeg"
                    width="300px"
                    height="300px"
                    ml="20px"
                    mt="20px"
                />
            </Box>
        </Flex>
    </MaxWidthWrapper>
    </Box>

    )
}
export default HomeSectionMobile;