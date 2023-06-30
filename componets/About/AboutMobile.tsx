import React from "react"
import MaxWidthWrapper from "../MaxWidthWrapper/MaxWidthWrapper";
import { Box, Grid, Image, Text } from "@chakra-ui/react";


function AboutMobile() {
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
                    flexDirection="column"
                    gap="15px"
                >
                    <Box>
                        <Text
                            fontWeight="bold"
                            color="#2d2e32"
                            fontSize="1.5rem"
                        >Tech Stack</Text>
                    </Box>
                    <Box
                        height="2px"
                        width="40px"
                        bg="#2d2e32"
                        ml="30px"
                    >
                    </Box>
                    <Grid
                        alignItems="center"
                        gap="15px"
                        templateColumns='repeat(3, 1fr)'
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
                    </Grid>
                </Box>
                <Box
                    display="flex"
                    alignItems="center"
                    mt="40px"
                    textAlign="center"
                    flexDirection="column"
                >
                    <Box>
                        <Image 
                            src="/images/about.jpg"
                            width="20rem"
                            rounded="1.7rem"
                            height="30rem"
                        />
                    </Box>
                    <Box
                        display="flex"
                        flexDirection="column"
                        textAlign="center"
                        alignItems="center"
                        mt="20px"
                        gap="15px"
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
                        <Box >
                            <Text
                                fontWeight="bold"
                                color="#2d2e32"
                                fontSize="1rem"
                            >
                                A dedicated Front-end Developer
                                based in Egypt
                            </Text>
                            <Text 
                                mt="15px"
                                fontSize="0.8rem"
                                fontWeight="500"
                                // lineHeight="1.4"
                                fontFamily="Mulish,sans-serif"
                                color="#767676"
                                p="10px"
                            >
            As a Junior Front-End Developer width 1 year experience, I possess an impressive arsenal of skills in 
            HTML, CSS, JavaScript, React, Next, Node, Express, MongoDb, Tailwind, and SCSS. I excel in designing and maintaining 
            responsive websites that offer a smooth user experience. My expertise lies in crafting 
            dynamic, engaging interfaces through writing clean and optimized code and utilizing 
            cutting-edge development tools and techniques. I am also a team player who thrives in 
            collaborating with cross-functional teams to produce outstanding web applications.
                            </Text>
                        </Box>
                    </Box>

                </Box>
            </MaxWidthWrapper>

        </Box>
    )
}
export default AboutMobile;