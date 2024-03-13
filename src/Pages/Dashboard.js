import {
    Container,
    Box,
    Image,
    Center,
    Divider,
    VStack,
    GridItem,
    Grid,
    Heading,
} from '@chakra-ui/react';
import PromptSelector from '../Components/PromptSelector';
import ImageCard from '../Components/ImageCard';
import ncsrhlogo from '../ncs_rh_logo.jpg';
import React from 'react'

const Dashboard = () => {
  return (
    <Container maxW="8xl" centerContent>
    
        <Center p={3} w="100%" m="40px 0 15px 0">
            <Image objectFit='cover' src={ncsrhlogo} />  
        </Center>

        <Divider orientation="horizontal" />

        <Box m="20px"></Box>
        
        <Heading size='lg'>Threat Detection Dashboard</Heading>

        <Center>
            <Grid
              templateColumns="repeat(2, 1fr)"
              templateRows="repeat(1, 1fr)"
              gap={6}
              p={3}
              w="300%"
              bgColor="#eff7fa"
              m="40px 0 15px 0"
              borderRadius="lg"
              borderWidth="1px"
            >
                <GridItem colSpan={1} rowSpan={1}>
                    <Center>
                        <ImageCard/>
                    </Center>
                </GridItem>

                <GridItem colSpan={1} rowSpan={1}>
                    <VStack spacing={4}>
                        <PromptSelector/>      
                    </VStack>
                </GridItem>   
            </Grid>
          </Center>
        </Container>
  )
}

export default Dashboard