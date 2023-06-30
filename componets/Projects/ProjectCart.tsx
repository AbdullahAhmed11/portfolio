import React from "react";
import { Box, Text, Image, Button, List, ListItem } from "@chakra-ui/react";
import {AiFillGithub} from "react-icons/ai"
import {BsBoxArrowInUpRight} from "react-icons/bs"

import Link from "next/link";
interface Project {
    imgUrl: string;
    title: string;
    desc: string;
    stack: string[];
    demoText: string;
    demoIcon: string
    codeText: string;
    codeIcon: string
}
function ProjectCart() {

    const PROJECT_PROPS = [
        {
            imgUrl: "/images/bithub.png",
            title: "BITHUB - Simplest Way To Build A Landing Page",
            desc: " Create professional landing pages,increase conversions and drive sales in minutes,Sharing Your Online Pages, Contacts Or Location Has Never Been Easier Highlight your most important links, articles, photos, videos, products, music, website. Share your Landing Page wherever your audience is: Instagram, YouTube, TikTok, WhatsApp, in messengers, via SMS – wherever you’re online.",
            stack: ["NextJs", "TypeScript", "chakra-ui"],
            demoText: "Live Demo",
            demoIcon: <BsBoxArrowInUpRight/>,
            codeText: "Code",
            codeIcon: <AiFillGithub/>,
            haveCode: false,

        },

            {
            imgUrl: "/images/Foodyman.png",
            title: "Foodyman",
            desc: "At Foodyman, we believe that good food should be accessible to everyone, regardless of time constraints or culinary expertise. Our mission is to connect you with a wide range of delicious meals from your favorite local restaurants and deliver them straight to your doorstep.",
            stack: ["NextJs", "TypeScript", "chakra-ui"],
            demoText: "Live Demo",
            demoIcon: <BsBoxArrowInUpRight/>,
            codeText: "Code",
            codeIcon: <AiFillGithub/>,
            haveCode: false

        },
                {
            imgUrl: "/images/Biznes.png",
            title: "Biznes Clinics",
            desc: "The Ultimate Startup Growth Platform, The Ultimate Startup Growth Platform ",
            stack: ["NextJs", "TypeScript", "chakra-ui"],
            demoText: "Live Demo",
            demoIcon: <BsBoxArrowInUpRight/>,
            codeText: "Code",
            codeIcon: <AiFillGithub/>,
            haveCode: false

        },
        {
            imgUrl: "/images/Biznes.png",
            title: "Biznes Clinics",
            desc: "The Ultimate Startup Growth Platform, The Ultimate Startup Growth Platform ",
            stack: ["NextJs", "TypeScript", "chakra-ui"],
            demoText: "Live Demo",
            demoIcon: <BsBoxArrowInUpRight/>,
            codeText: "Code",
            codeIcon: <AiFillGithub/>,
            haveCode: false

        },

    ]

    return (
        <Box>
                    {
        PROJECT_PROPS.map((item) => (
            <Box 
                key={item.title}                     
                mb="40px"
            >
                <Box
                    display="flex"
                    flexDirection={{base: "column", lg:"row"}}
                    alignItems="center"
                    justifyContent="center"
                >
                      {/* boxImg */}
                    <Box>
                    <Image
                            width="300px"
                            height="300px"
                            src={item.imgUrl}
                    />
                    </Box>
                    {/* boxText */}
                    <Box
                        alignItems="center"
                        textAlign="center"
                        display="flex"
                        justifyContent="center"
                        ml="100px"
                    >

                        <Box
                            // display="flex"
                            // flexDirection="column"
                            // alignItems="center"
                            // textAlign="center"
                            alignItems="center"
                            textAlign="center"
                        >
                            <Text
                                fontSize="20px"
                                fontWeight="bold"
                            >
                                {item.title}
                            </Text>
                            <Text>
                                {item.desc}
                            </Text>
                            <List
                                display="flex"
                                alignItems="center"
                                justifyContent="center"
                                textAlign="center"
                            >
                                <ListItem
                                    fontSize="15px"
                                    fontWeight="bold"
                                >{item.stack.join(' | ')}</ListItem>
                            </List>
                            <Box
                                        alignItems="center"
                                        textAlign="center"
                                        display="flex"
                                        justifyContent="center"                            
                                        // gap="20px"
                            >
                                {
                                    item.haveCode ?  (
                                        <>
                                            <Box
                                        alignItems="center"
                                        textAlign="center"
                                        display="flex"
                                        justifyContent="center" 
                                            >
                                                <Link 
                                                    passHref 
                                                    href="https://the-bithub.com/"
                                                    target="_blank"
                                                >
                                                    <Button
                                                        bg="#000"
                                                        color="#fff"
                                                        border="none"
                                                        cursor="pointer"
                                                        width="150px"
                                                        height="40px"
                                                        rounded="100px"
                                                    > 
                                                        <Text 
                                                            mr="10px"
                                                            fontWeight="600"
                                                        >{item.demoText}</Text>
                                                        <Text fontSize="15px">
                                                            {item.demoIcon}
                                                        </Text>
                                                    </Button>
                                                </Link>
                                            </Box>
                                            <Box


                                            >
                                                <Link 
                                                    passHref 
                                                    href="https://the-bithub.com/"
                                                    target="_blank"
                                                >
                                                    <Button
                                                        bg="#000"
                                                        color="#fff"
                                                        border="none"
                                                        cursor="pointer"
                                                        width="150px"
                                                        height="40px"
                                                        rounded="100px"
                                                    > 
                                                        <Text 
                                                            mr="10px"
                                                            fontWeight="600"
                                                        >{item.codeText}</Text>
                                                        <Text fontSize="15px">
                                                            {item.codeIcon}
                                                        </Text>
                                                    </Button>
                                                </Link>
                                            </Box>
                                        </>
                                    ) : (
                                        <Box
                                                                                alignItems="center"
                                        textAlign="center"
                                        display="flex"
                                        justifyContent="center" 
                                        >
                                        <Link 
                                            passHref 
                                            href="https://the-bithub.com/"
                                            target="_blank"
                                        >
                                            <Button
                                                bg="#000"
                                                color="#fff"
                                                border="none"
                                                cursor="pointer"
                                                width="150px"
                                                height="40px"
                                                rounded="100px"
                                            > 
                                                <Text 
                                                    mr="10px"
                                                    fontWeight="600"
                                                >{item.demoText}</Text>
                                                {item.demoIcon}
                                            </Button>
                                        </Link>
                                    </Box>
                                    )
                                }

                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Box>
                        ))
                    }
        </Box>
    )
}
export default ProjectCart;