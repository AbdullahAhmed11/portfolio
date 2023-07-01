import React from "react";
import { Box, Text, Image, Button, List, ListItem } from "@chakra-ui/react";
import {AiFillGithub} from "react-icons/ai"
import {BsBoxArrowInUpRight} from "react-icons/bs"
import Link from "next/link";
import MaxWidthWrapper from "../MaxWidthWrapper/MaxWidthWrapper";
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
function ProjectCartMobile() {

    const PROJECT_PROPS = [
        {
            imgUrl: "/images/bithub.png",
            title: "BITHUB",
            desc: "BITHUB - Simplest Way To Build A Landing Page, Create professional landing pages,increase conversions and drive sales in minutes,Sharing Your Online Pages, Contacts Or Location Has Never Been Easier Highlight your most important links, articles, photos, videos, products, music, website. Share your Landing Page wherever your audience is: Instagram, YouTube, TikTok, WhatsApp, in messengers, via SMS – wherever you’re online.",
            stack: [
                {
                    react: "Next Js"
                },
                {
                    react: "Typescript"
                },
                {
                    react: "chakra-ui"
                },
            ],
            demoText: "Live Demo",
            demoIcon: <BsBoxArrowInUpRight/>,
            codeText: "Code",
            codeIcon: <AiFillGithub/>,
            haveCode: false,
            projectUrl: "https://the-bithub.com/"

        },

            {
            imgUrl: "/images/Foodyman.png",
            title: "Foodyman",
            desc: "At Foodyman, we believe that good food should be accessible to everyone, regardless of time constraints or culinary expertise. Our mission is to connect you with a wide range of delicious meals from your favorite local restaurants and deliver them straight to your doorstep.",
            stack: [
                {
                    react: "react"
                },
                {
                    react: "scss"
                },

            ],            
            demoText: "Live Demo",
            demoIcon: <BsBoxArrowInUpRight/>,
            codeText: "Code",
            codeIcon: <AiFillGithub/>,
            haveCode: false,
            projectUrl: "https://foodyman.org/"

        },
                {
            imgUrl: "/images/Biznes.png",
            title: "Biznes Clinics",
            desc: "The Ultimate Startup Growth Platform, The Ultimate Startup Growth Platform ",
            stack: [
                {
                    react: "Next Js"
                },
                {
                    react: "Typescript"
                },
                {
                    react: "chakra-ui"
                },
            ],           
            demoText: "Live Demo",
            demoIcon: <BsBoxArrowInUpRight/>,
            codeText: "Code",
            codeIcon: <AiFillGithub/>,
            haveCode: false,
            projectUrl: "https://bizclinic-2608qwjs0-bith-ub.vercel.app/"

        },
    ]

    return (
            <>
                <MaxWidthWrapper>
                    {
                        PROJECT_PROPS.map((cart) => (
                            <Box
                                bg="#fff"
                                display="flex"
                                flexDirection="column"
                                width="100%"
                                height="45rem"
                                rounded="80px"
                                boxShadow="0 0 10px rgba(0,0,0,.1)"
                                alignItems="center"
                                gap="25px"
                                key={cart.imgUrl}
                                mb="30px"
                            >
                                <Box ml="10px" mt="50px">
                                    <Image
                                        src={cart.imgUrl}
                                        width="20rem"
                                        height="15rem"
                                        rounded="20px"
                                        boxShadow="0 0 10px rgba(0,0,0,.1)"

                                    />
                                </Box>
                                <Box
                                    display="flex"
                                    flexDirection="column"
                                    alignItems="center"
                                    justifyContent="center"
                                    width="20rem"
                                    textAlign="center"
                                    gap="20px"
                                >
                                    <Text
                                        color="#2d2e32"
                                        fontWeight="bold"
                                        fontSize="1.4rem"
                                        textTransform="uppercase"
                                    >{cart.title}</Text>
                                    <Text
                                        color="#767676"
                                        fontSize=".9rem"
                                        fontWeight="500"
                                        p="10px"
                                    >
                                        {cart.desc}
                                    </Text>
                                    <Box
                                        display="flex"
                                        gap="5px"
                                    >
                                        {
                                            cart.stack.map((item) => (
                                        <Box
                                            bg="#fff"
                                            width="100px"
                                            height="50px"
                                            boxShadow="0 0 10px rgba(0,0,0,.1)"
                                            display="flex"
                                            alignItems="center"
                                            justifyContent="center"
                                            key={item.react}
                                        >
                                            <Text fontWeight="bold">{item.react}</Text>
                                        </Box>
                                            ))
                                        }
                                    </Box>
                                    <Box
                                        display="flex"
                                        gap="20px"
                                    >
                                        {
                                            cart.haveCode ? (
                                                <>
                                        <Link 
                                                passHref
                                                href=""
                                                target="_blank" 
                                            >
                                                <Box
                                                    display="flex"
                                                    gap="3px"
                                                    alignItems="center"
                                                    color="#000"
                                                    >
                                                    <Text
                                                        fontWeight="bold"
                                                        fontSize="1.1rem"
                                                    >{cart.codeText}</Text>
                                                    <Text fontSize="1.1rem">{cart.codeIcon}</Text>
                                                </Box>
                                            </Link>
                                        <Link 
                                                passHref
                                                href={cart.projectUrl}
                                                target="_blank" 
                                            >
                                                <Box
                                                    display="flex"
                                                    gap="3px"
                                                    alignItems="center"
                                                    color="#000"
                                                    >
                                                    <Text
                                                        fontWeight="bold"
                                                        fontSize="1.1rem"
                                                    >{cart.demoText}</Text>
                                                    <Text >{cart.demoIcon}</Text>
                                                </Box>
                                            </Link>
                                                </>
                                            ) : (
                                            <Link 
                                                passHref
                                                href={cart.projectUrl}
                                                target="_blank" 
                                            >
                                                <Box
                                                    display="flex"
                                                    gap="3px"
                                                    alignItems="center"
                                                    color="#000"
                                                    >
                                                    <Text
                                                        fontWeight="bold"
                                                        fontSize="1.1rem"
                                                    >{cart.demoText}</Text>
                                                    <Text fontSize="1.1rem">{cart.demoIcon}</Text>
                                                </Box>
                                            </Link>
                                            )
                                        }

            
                                    </Box>
                                </Box>
                            </Box>

                        ))
                    }
                </MaxWidthWrapper>  
            </>
    )
}
export default ProjectCartMobile;