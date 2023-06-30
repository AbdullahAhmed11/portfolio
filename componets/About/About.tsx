import React from "react"
import MaxWidthWrapper from "../MaxWidthWrapper/MaxWidthWrapper";
import { Box, Image, Text } from "@chakra-ui/react";


function About() {
    return (
        <>
            <MaxWidthWrapper>
                <Box
                    display="flex"
                    alignItems="center"
                    gap="15px"
                    mt="90px"
                    >

                    {/* desc box  */}
                    <Box>
                        <Text
                            fontSize="25px"
                            fontWeight="bold"
                            lineHeight="40px"
                        >
                            About
                        </Text>
                        <Text>
                            I specialize in building web responsive front-end UI applications
                            that connect with API’s and other backend technologies. I’m
                            passionate about learning new technologies and understand there is
                            more than one way to accomplish a task. Though I am most proficient
                            in building front-end applications using HTML, CSS, Javascript, and
                            React, next, node, I am a quick learner and can pick up new tech stacks as
                            needed. I believe that being a great developer is not using one
                            specific language, but choosing the best tool for the job.
                            I love solving problems,  I spend a lot of time solving problems on <strong>Codeforces</strong> I have solved <strong>150</strong> problems
                        </Text>
                        <Text>
                            Currently I am working as a <strong>front-end </strong>developer at <strong>Shopless</strong>, building exceptional websites and apps. I spend my free time working on a new side project and reading about software patterns and architectures and clean code
                        </Text>

                    </Box>
                </Box>
            </MaxWidthWrapper>
        </>
    )
}
export default About;