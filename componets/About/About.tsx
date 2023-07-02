import React from "react"
import MaxWidthWrapper from "../MaxWidthWrapper/MaxWidthWrapper";
import { Box, Image, Text } from "@chakra-ui/react";


function About() {
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
        <Box mb="40px">
            <MaxWidthWrapper>
                <Box
                    display="flex"
                    alignItems="center"
                >
                    <Box>
                        <Text
                            fontWeight="bold"
                            color="#2d2e32"
                            fontSize="1.5rem"
                        >Tech Stack</Text>
                    </Box>
                    <Box
                        width="2px"
                        height="40px"
                        bg="#2d2e32"
                        ml="30px"
                    >
                    </Box>
                    <Box
                        ml="50px"
                        display="flex"
                        alignItems="center"
                        gap="15px"
                    >
                        {
                            IMAGE_URL.map((item) => (
                                <Box
                                    width="3.5rem"
                                    height="3.5rem"
                                    display="flex"
                                    alignItems="center"
                                    justifyContent="center"
                                    boxShadow="0 0 10px rgba(0,0,0,.09)"
                                    rounded="50%"
                                    key={item.label}
                                >
                                    <Image 
                                        src={item.src}
                                        width="1.4rem"
                                        height="1.4rem"
                                    />
                                </Box>

                            ))
                        }
                    </Box>
                </Box>
                <Box
                    display="flex"
                    // alignItems="center"
                    mt="40px"
                >
                    <Box>
                        <Image 
                            src="/images/about.jpg"
                            width="35rem"
                            rounded="1.7rem"
                            height="30rem"
                        />
                    </Box>
                    <Box
                        display="flex"
                        flexDirection="column"
                        ml="40px"
                    >
                        <Box
                            display="flex"
                            alignItems="center"
                            justifyContent="center"
                            width="120px"
                            height="60px"
                            rounded="100px"
                            boxShadow="0 0 10px rgba(0,0,0,.09)"

                        >
                            <Text
                                fontWeight="bold"
                            >About Me</Text>
                        </Box>
                        <Box mt="40px">
                            <Text
                                fontWeight="bold"
                                color="#2d2e32"
                                fontSize="1.5rem"
                            >
                                A dedicated Front-end Developer
                                based in Egypt
                            </Text>
                            <Text 
                                mt="15px"
                                fontSize="1rem"
                                fontWeight="500"
                                lineHeight="1.4"
                                fontFamily="Mulish,sans-serif"
                                color="#767676"
                            >
            As a Junior Front-End Developer with 1 year experience, I possess an impressive arsenal of skills in 
            HTML, CSS, JavaScript, React, Next, Node, Express, MongoDb, Tailwind, and SCSS. I excel in designing and maintaining 
            responsive websites that offer a smooth user experience. My expertise lies in crafting 
            dynamic, engaging interfaces through writing clean and optimized code and utilizing 
            cutting-edge development tools and techniques. I am also a team player who thrives in 
            collaborating with cross-functional teams to produce outstanding web applications.
            <strong>Currently</strong> I am working as a <strong>front-end developer</strong> at <strong>Shopless</strong>, building exceptional websites and apps. I spend my free time working on a new side project and reading about software patterns and architectures such as Clean Architecture.
                            </Text>
                        </Box>
                    </Box>

                </Box>
            </MaxWidthWrapper>

        </Box>
    )
}
export default About;