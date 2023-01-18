import Navbar from "../Components/Navbar"
import Footer from "../Components/Footer"
import {useState,useEffect} from "react"
import {useParams,Link} from "react-router-dom"
import axios from "axios"
import style from "../Style/checkout.module.css"
//import {getsingleData} from "../Components/api"
import {Box,Breadcrumb,BreadcrumbItem,BreadcrumbLink,Flex,Img,Text,Button,Radio} from "@chakra-ui/react";
import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
  } from '@chakra-ui/react'
import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
  } from '@chakra-ui/react'
  
  import { useToast } from '@chakra-ui/react'



function Checkout(){
    const [sdata, setSdata]=useState({})
    const [cart,setCart]=useState([])

    const toast = useToast()

    const handleClick=()=>{
        setCart([...cart,sdata])
        toast({
            title: 'Add to Cart',
            description: "Your Product Added in Cart!.",
            status: 'success',
            duration: 2000,
            isClosable: true,
          })
          localStorage.setItem(("cart"),JSON.stringify(cart))

    }

    const type=JSON.parse(localStorage.getItem("type"))
    const {id}=useParams()
    console.log(type)
    

    useEffect(()=>{
        
        axios.get(`https://busy-jade-starfish-cape.cyclic.app/${type}/${id}`)
        .then((res)=>{
            setSdata(res.data)
            console.log(res.data)
        })
        .catch((err)=>{
            console.log(err)
        })

    },[type])

    return(
        <Box>
            <Box>
                <Navbar/>
            </Box>
            <br />
            <Box style={{width:"70%",margin:"auto"}}>
            <Box >
            <Breadcrumb>
               <BreadcrumbItem>
                  <BreadcrumbLink href='#'>Home</BreadcrumbLink>
               </BreadcrumbItem>
               <BreadcrumbItem>
                  <BreadcrumbLink href='#'>{type}</BreadcrumbLink>
               </BreadcrumbItem>
              
               <BreadcrumbItem isCurrentPage style={{color:"#f2439d"}}>
                   <BreadcrumbLink href='#'>{sdata.name}</BreadcrumbLink>
               </BreadcrumbItem>
             </Breadcrumb>
            </Box>
            <br />
             <Box className={style.parentdiv}>
                <Box className={style.childdiv1}>
                    <img src={sdata.src} alt="image" />
                </Box>
                <Box className={style.childdiv2}>
                    <h1 style={{fontSize:"30px"}}>Brand {sdata.name}</h1>
                    <h3>Select Size</h3>
                    <br />
                    <Flex gap={6}>
                        <p className={style.childp}>38</p>
                        <p className={style.childp}>40</p>
                        <p className={style.childp}>42</p>
                        <p className={style.childp}>46</p>
                    </Flex>
                    <br />
                    <Box>
                        <Flex gap={8}>
                            <h1>M.R.P</h1>
                            <h1>: ₹ {sdata.sprice}</h1>
                        </Flex>
                        <Flex gap={9}>
                            <h1>Price</h1>
                            <h1>: ₹ {sdata.price}</h1>
                        </Flex>
                        <Flex gap={2}>
                            <h1>You Save</h1>
                            <h1>: ₹ {sdata.sprice-sdata.price}</h1>
                        </Flex>
                    </Box>
                    <br />
                    <p>M.R.P. inclusive of all taxes</p>
                    <br />
                    <button onClick={handleClick} className={style.childbutton}>Add To Cart</button>
                    <br />
                    <br />
                    <Box>
                        <Table>
                            <Thead>
                                <Tr>
                                    <Td>STANDARD</Td>
                                    <Td>S</Td>
                                    <Td>M</Td>
                                    <Td>L</Td>
                                    <Td>XL</Td>
                                </Tr>
                            </Thead>
                            <Tbody>
                                <Tr>
                                    <Th>brand size</Th>
                                    <Th>S</Th>
                                    <Th>M</Th>
                                    <Th>L</Th>
                                    <Th>Xl</Th>
                                </Tr>
                                <Tr>
                                    <Th>Chest (In)</Th>
                                    <Th>39.5</Th>
                                    <Th>41.5</Th>
                                    <Th>43.5</Th>
                                    <Th>45.5</Th>
                                </Tr>
                                <Tr>
                                    <Th>length (in)</Th>
                                    <Th>25</Th>
                                    <Th>26</Th>
                                    <Th>27</Th>
                                    <Th>28</Th>
                                </Tr>
                            </Tbody>
                        </Table>
                    </Box>
                    <br />
                    <h1 style={{fontWeight:"bolder"}}>DELIVERY & RETURN</h1>
                    <h3>metros :</h3>
                    <p>3-5 working days</p>
                    <br />
                    <h3>other cities :</h3>
                    <p>5-7 working days</p>
                    <br />
                    <h3>areas serviceable only by speed post :</h3>
                    <p>15 working days</p>
                </Box>
             </Box>
            </Box>
            <br />
            <hr />
            <br />
            <Box>
                <Footer/>
            </Box>
        </Box>
    )
}
export default Checkout