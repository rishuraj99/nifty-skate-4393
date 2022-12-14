import React from 'react';
import { Box, Button, ButtonGroup, Flex, Heading, Spacer } from '@chakra-ui/react';

const Navbar=()=>{
    return(
        <>

<Flex p="15px" minWidth='max-content' alignItems='center' gap='2'>
  <Box p='2'>
    <Heading size='md'>My-Glamm</Heading>
  </Box>
  <Spacer />
  <ButtonGroup gap='2'>
    <Button colorScheme='teal'>Sign Up</Button>
    <Button colorScheme='teal'>Log in</Button>
  </ButtonGroup>
</Flex>
<hr />
        
        </>
    )
}

export default Navbar;