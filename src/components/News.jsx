import React from 'react'

import {
    Box,
    Heading,
    Container,
    Text,
    Button,
    Stack,
    Icon,
    useColorModeValue,
    createIcon,
    Image
  } from '@chakra-ui/react';

export default function News() {
    
  return (
    <div>
    <Box 
    position='relative'
    top="100px"
    display='flex'
    alignItems='center'
    justifyContent='space-around'
    flexWrap={'wrap'}
    
    // border={"1px solid red"}
    
    >
    <Box 
    display='flex'
    flexDirection='column'
    alignItems='center'
    justifyContent='space-between'
    
    >
            <Box bg="#3B70E4"
                padding={"50px"}
                borderRadius={20}
            
              
            >
                <Heading color="white" >
                    6000+ Students Currently<br/>

                        Enrolled<br/>
                        94% Placement Rate*
                        
                </Heading>
                <Text fontWeight={600} color="white">*for students who have graduated from Masai School and are Masai accredited</Text>
                
            </Box>
            <Box 
                display={'flex'}
                alignItems="center"
                justifyContent='space-between'
                // border="2px solid red"
                width={'100%'}
                mt={10}
                
            >
                <Box
                padding="80px"
                borderRadius={20}
                fontSize={20}
                color="white"
                fontWeight={900}
                wordspacing={5}
                bg="#6FBDCD">
                ₹7.2 LPA<br/> Average<br/> Salary
                </Box>
                <Box bg="#6FCD9E"
                padding="80px"
               borderRadius={20}
               fontSize={20}
               color="white"
               fontWeight={900}
               wordspacing={5}
                >
                ₹36 LPA <br/> Highest <br/> Salary
                </Box>

            </Box>

    </Box>

    <Box 
        display='flex'
        alignItems='center'
        flexDir={'column'}
        justifyContent='center'
        bg="#6E71CC"
        borderRadius={30}
        

    >
        <Image mt="50px" mb="50px" src='https://www.masaischool.com/img/homepage/media.png' />
        <Heading color="white" mb="40px" >
        Masai In The News
        </Heading>

                <Button mb="20px" border="1px solid white" colorScheme='white' size='md'>
            KNOW MORE
        </Button>

    </Box>


    </Box>

    </div>
  )
}
