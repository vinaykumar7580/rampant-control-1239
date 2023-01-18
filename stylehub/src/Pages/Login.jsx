import Navbar from "../Components/Navbar"
import {
    Button,
    Flex,
    FormControl,
    FormLabel,
    Heading,
    Input,
    Stack,
    useColorModeValue,
   
  } from '@chakra-ui/react';
  import {useState,useEffect} from "react"
  import {useContext} from "react"
  import { AuthContext } from "../Context/AuthContextProvider";
  import {useNavigate} from "react-router-dom"
  
  export default function Login(){
    const [formState,setFormState]=useState({
        name:"",
        email:"",
        password:""
    })
    const navigate=useNavigate()
    const {login}=useContext(AuthContext)

    const handleChange=(e)=>{
        const {name,value}=e.target;

        setFormState({...formState, [name]:value})
    }

    const handleSubmit=(e)=>{
        e.preventDefault()
        console.log(formState)
        if(formState.email!="" && formState.name!="" && formState.password!=""){
            login(formState.name)
            alert("Login Successful")
            navigate("/")
        }else{
            alert("Please fill correct details")
        }
    }

    const {name,email,password}=formState
    return (
        <div>
            <Navbar/>
            <div>
             <Flex
               minH={'20vh'}
               align={'center'}
               justify={'center'}
               bg={useColorModeValue('gray.50', 'gray.800')}>
               <Stack
                 spacing={4}
                 w={'full'}
                 maxW={'md'}
                 bg={useColorModeValue('white', 'gray.700')}
                 rounded={'xl'}
                 boxShadow={'lg'}
                 p={6}
                 my={12}>
                 <Heading lineHeight={1.1} fontSize={{ base: '2xl', sm: '3xl' }}>
                   User Login
                 </Heading>
                
                 <FormControl id="userName" isRequired>
                   <FormLabel>User name</FormLabel>
                   <Input
                    placeholder="UserName"
                    _placeholder={{ color: 'gray.500' }}
                    type="text"
                    name="name"
                    value={name}
                    onChange={handleChange}
                    />
                   </FormControl>
                   <FormControl id="email" isRequired>
                   <FormLabel>Email address</FormLabel>
                   <Input
                   placeholder="email@example.com"
                   _placeholder={{ color: 'gray.500' }}
                   type="email"
                   name="email"
                   value={email}
                   onChange={handleChange}
                    />
                   </FormControl>
                   <FormControl id="password" isRequired>
                   <FormLabel>Password</FormLabel>
                   <Input
                   placeholder="password"
                   _placeholder={{ color: 'gray.500' }}
                   type="password"
                   name="password"
                   value={password}
                   onChange={handleChange}
                   />
                   </FormControl>
                  <Stack spacing={6} direction={['column', 'row']}>
                   <Button
                      bg={'red.400'}
                      color={'white'}
                      w="full"
                      _hover={{
                     bg: 'red.500',
                     }}>
                     Cancel
                     </Button>
                     <Button
                       bg={'blue.400'}
                       color={'white'}
                         w="full"
                       _hover={{
                       bg: 'blue.500',
                      }}
                      onClick={handleSubmit}>
                       Submit
                     </Button>
                     </Stack>
                    </Stack>
                </Flex>
            </div>
        </div>
      
    );
  }