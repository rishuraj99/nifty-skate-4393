import React from 'react'
import '../App.css';
import { 
    Flex,
    Box,
    Spacer,
    Heading,
    Text,
    VStack,
} from '@chakra-ui/react'
import { ChevronDownIcon } from '@chakra-ui/icons'
import HairCareCards from './HairCareCards';
import SanitizerCareCards from './SanitizerCareCards';
import CollectionCards from './CollectionCards';
import {Link as RouteLink} from 'react-router-dom';






export const MenuBar = () => {
  return (
    <Flex width='70%' margin='auto' >

        <Box fontFamily="Roboto" className="dropdown">
            <RouteLink to={"/"} ><Box className="dropbtn"> HOME </Box></RouteLink>
            {/* <Box className="dropdown-content" > </Box> */}
        </Box>
        <Spacer/>  

        {/* 2      */}
        <Box className="dropdown">
            <RouteLink to={"/product/makeup"} > <Box fontFamily="Roboto" className="dropbtn">MAKEUP</Box></RouteLink>
            <Box className="dropdown-content" marginLeft='-60px' > 

                <Box width='1200px' >

                    <Box  width='800px'  >    

                        <Flex>
                        <VStack 
                        fontFamily="Roboto" 
                        display='flex' flexDirection='column' 
                        justifyContent='start' 
                        alignItems='flex-start' 
                        ml='20px' 
                        lineHeight='19px' 
                        gap='0px'

                        >
                        <Heading fontSize='14px' color='rgb(255,183,161)' >LIPS</Heading>
                            <Text>Lips</Text>
                            <Text>Liquid Lipstick</Text>
                            <Text>Hi-Shine Lipstick</Text>
                            <Text>Matte Lipstick</Text>
                            <Text>Lip Gloss</Text>
                            <Text>Lip Liner</Text>
                            <Text>Lip balm</Text>
                            <Text>Lip Glitter</Text>
                            <Text>Lip Stain</Text>
                            <Text>Lipstick Set</Text>
                            <Text>Lip Kit</Text>
                            <Text>Find Your Lipstick</Text>  
                        </VStack>
                        <Spacer/>

                        <VStack 
                        fontFamily="Roboto" 
                        display='flex' flexDirection='column' 
                        justifyContent='start' 
                        alignItems='flex-start' 
                        ml='20px' 
                        lineHeight='19px' 
                        gap='0px'
                        >
                        <Heading fontSize='14px' color='rgb(255,183,161)' >FACE</Heading>
                          
                            <Text>Sindoor</Text>
                            <Text>Highlighter</Text>
                            <Text>Blush</Text>
                            <Text>Bronzer</Text>  
                            <Text>Cheek Stain</Text>  
                        </VStack>
                        <Spacer/>
                        
                       
                       
                        
                        <VStack 
                        fontFamily="Roboto" 
                         
                        display='flex' flexDirection='column' 
                        justifyContent='start' 
                        alignItems='flex-start' 
                        ml='20px' 
                        lineHeight='19px' 
                        gap='0px'
                        >
                        <Heading fontSize='14px' color='rgb(255,183,161)' >NAILS</Heading>
                            <Text>Gel</Text>
                            <Text>Matte Nail Enamel</Text>
                            <Text>Matte Nail Polish</Text>
                            <Text>Matte Lipstick</Text>
                            <Text>Glossy Nail Enamel</Text>

                            <Heading fontSize='14px' color='rgb(255,183,161)' >KITS AND COMBOS</Heading>
                            <Text>Makeup Kits</Text>
                            <Text>Bridal Makeup Kits</Text>
                            <Text>Makeup Gift Sets</Text>

                            <Heading fontSize='14px' color='rgb(255,183,161)' >MAKEUP ACCESSORIES</Heading>
                            <Text>Makeup Brushes</Text>
                            <Text>Eyeshadow Brushes</Text>  
                        </VStack>

                        <Spacer/>
                        </Flex>

                    </Box>  

                </Box>

            </Box>
        </Box>
        <Spacer/>
{/* 3 */}
       
{/* 4 */}
        <Box className="dropdown">
            <RouteLink to={"/product/skincare"} ><Box fontFamily="Roboto" className="dropbtn">SKINCARE</Box></RouteLink>
            <Box className="dropdown-content" marginLeft='-298px' > 

            <Box width='1200px'  >
                    <Flex >
                    <VStack 
                    fontFamily="Roboto" 
                     
                    display='flex' flexDirection='column' 
                    justifyContent='start' 
                    alignItems='flex-start' 
                    ml='20px' 
                    lineHeight='19px' 
                    gap='0px'
                    width='300px'
                     >
                    <Text>Moisturizer</Text>
                    <Text>Night Cream</Text>
                    <Text>Eye Cream</Text>
                    <Text>Body Lotion</Text>
                    <Text>Serum</Text>
                    <Text>Sunscreen</Text>
                    <Text>Skincare Kits</Text> 

                    <Heading fontSize='14px' color='rgb(255,183,161)' >CLEANSING PRODUCTS</Heading>
                    <Text>Cleanser</Text>
                    <Text>Face Wash</Text>
                    <Text>Exfoliator & Scrub</Text>
                    
                    <Heading fontSize='14px' color='rgb(255,183,161)' >MASK</Heading>
                    <Text>Sheet Mask</Text>
                    <Text>Face Wash</Text>
                    <Text>Face Pack</Text>
                    </VStack>
                    <Spacer/>

                    <Flex display='flex' flexDirection='row' justifyContent='space-between'  width='100%' >
                
                    </Flex>
                    
                    </Flex>
                </Box>

            </Box>
        </Box>
        <Spacer/>
  
{/* 6                */}
        <Box className="dropdown">
           <Box fontFamily="Roboto" className="dropbtn">COLLECTION</Box>
            <Box className="dropdown-content" marginLeft='-600px' > 

            <Box width='1200px'  >
                    <Flex >
                    <VStack 
                    fontFamily="Roboto" 
                     
                    display='flex' flexDirection='column' 
                    justifyContent='start' 
                    alignItems='flex-start' 
                    ml='20px' 
                    lineHeight='19px' 
                    gap='0px'
                     width='300px'
                     >
                    <Heading fontSize='14px' color='rgb(255,183,161)' > SHOP BY COLLECTION</Heading>
                    <Text>MyGlamm</Text>
                    <Text>SUPERFOODS</Text>
                    <Text>Treat Love Care</Text>
                    <Text>Clean Beauty</Text>
                    <Text>POPxo</Text>
                    <Text>WIPEOUT</Text>
                    <Text>GLOW Iridescent Brightening Skincare</Text>
                    <Text>Manish Malhotra</Text>
                    <Text>YOUTHfull</Text>
                    <Text>LIT Collection</Text>
                    <Text>POSE</Text>
                    <Text>K.Play</Text>
                    <Text>Just Dropped</Text>
                    </VStack>

                   
                    <Spacer/>

                    <Flex display='flex' flexDirection='row' justifyContent='space-between'  width='60%' >
                        <Box><CollectionCards name={"Manish Malhotra 9 in 1 Eyeshado"} image={'https://files.myglamm.com/site-images/400x400/Soiree-(1).jpg'} /></Box>
                        <Box><CollectionCards name={"Glow to Glamour Shimmer .."} image={'https://files.myglamm.com/site-images/400x400/GGM-(1).jpg'} /></Box>
                        <Box><CollectionCards name={"MyGlamm LIT Creamy Matte Lipst.."} image={'https://files.myglamm.com/site-images/400x400/Tom-Collins_6.jpg'} /></Box>
                         
                    </Flex>
                    
                    </Flex>
                </Box>

            </Box>
        </Box> 
        <Spacer/>       

{/* 8                */}
        <Box className="dropdown">
            <Box fontFamily="Roboto" className="dropbtn">MYGLAMM STUDIO</Box>
            <Box className="dropdown-content" marginLeft='-890px' > 

            <Box width='1200px'  >
                    <Flex>
                    <VStack  display='flex' flexDirection='column' justifyContent='start' alignItems='flex-start' ml='20px' lineHeight='19px' gap='0px' >
                    <Heading fontSize='14px' color='rgb(255,183,161)' >Studio</Heading>
                        <Text>Blogs</Text>
                          
                    </VStack>
                    <Spacer/>                   
                    </Flex>
                </Box>

            </Box>
        </Box>
        <Spacer/>        
{/* 9                */}
        <Box className="dropdown">
            <Box fontFamily="Roboto" className="dropbtn">OFFERS</Box>
            <Box className="dropdown-content" marginLeft='-1090px' > 
        </Box>        
        </Box>        
    </Flex>
  )
}


