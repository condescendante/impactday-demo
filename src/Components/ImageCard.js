import React from 'react'
import {
    CardBody,
    Text,
    Image,
    Stack,
    Divider,
    Card,
    Heading,
} from '@chakra-ui/react';
import gunimage from '../gun.jpeg';

const ImageCard = () => {
  return (
    <Card maxW='lg'>
        <CardBody>
            <Image 
                boxSize='lg' 
                objectFit='cover' 
                borderRadius='10px'
                src={gunimage}
            />
            <Stack mt='6' spacing='3'>
            <Heading size='md'>Threat Detected</Heading>
            <Text>
                This threat is very very very very very very scary!!!
            </Text>
            <Text color='blue.600' fontSize='2xl'>
                It's a GUN!!!
            </Text>
            </Stack>
        </CardBody>
    </Card>
  )
}

export default ImageCard