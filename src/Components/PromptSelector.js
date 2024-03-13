import {React, useState} from 'react'
import {Select, 
        Text, 
        Container,
        Divider,
        VStack,
        Card,
        CardBody,
      } from '@chakra-ui/react';

const PromptSelector = () => {
  const [value, setValue] = useState('option1')
  let prompt1 = "This gun very very scary This gun very very scary This gun very very scary This gun very very scary This gun very very scary This gun very very scary This gun very very scary This gun very very scary This gun very very scary This gun very very scary"
  let prompt2 = "This knife super super scary"
  let prompt3 = "This thing crazy crazy scary"

  // Handle dropdown change  
  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <Container>
      <VStack spacing={4}>
      <Select 
        size='lg' 
        bg='white' 
        variant='outline' 
        placeholder='Select prompt'
        value={value}
        onChange={handleChange}
      >
          <option value={prompt1}>This is a gun?</option>
          <option value={prompt2}>This is a knife?</option>
          <option value={prompt3}>What's this thing?</option>
      </Select>
      <Divider orientation="horizontal" />   
      <Card>
        <CardBody>
            <Text>
              {value}
            </Text>
        </CardBody>
    </Card>
    </VStack>
    </Container>
  )
}

export default PromptSelector