import React from 'react'
import {
    Box,
    Button,
} from '@chakra-ui/react'
export default function Topheader() {
  return (
    <div>
        <Box 
        display='flex'
        mr={'auto'}
        justifyContent='space-around'
        alignItems='center'
        width='100%'
        fontWeight={600} position="fixed" bg='red.100' w='100%' p={4}   color='black'>
            <Box 
            
            >

        Still Studying? If yes, launch yourself ahead of the pack with our Career Accelerator Program
        <Button ml="20px" colorScheme='red' size='sm'>
                KNOW MORE
            </Button>
            </Box>
  </Box></div>
  )
}
