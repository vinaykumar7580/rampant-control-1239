import Navbar from "../Components/Navbar"
import Footer from "../Components/Footer"
import {background, Box,Flex,Grid} from "@chakra-ui/react"
import React,{useState,useEffect} from "react"
import {AlertDialog,AlertDialogOverlay,AlertDialogContent,AlertDialogHeader,AlertDialogBody,AlertDialogFooter} from "@chakra-ui/react"
import {Input,Text,Stack,Radio,RadioGroup, Button, useDisclosure} from "@chakra-ui/react"
import { useToast } from '@chakra-ui/react'
import style from "../Style/cart.module.css"

function Cart(){
    const [quantity,setQuantity]=useState(1)
    const { isOpen, onOpen, onClose } = useDisclosure()
    const cancelRef = React.useRef()
    const toast = useToast()

    let cart=JSON.parse(localStorage.getItem("cart"))

    const handleClick=()=>{
        toast({
            title: 'Order Conform!',
            description: "Your Order Deliver Within 3 Days!",
            status: 'success',
            duration: 4000,
            isClosable: true,
          })
        onClose()
    }

    let arr=cart.reduce((acc,el)=>{
        return acc+el.price*quantity
    },0)

    return (
        <div>
            <Box>
                <Navbar/>
            </Box>
            <br />
            <Box style={{width:"60%",margin:"auto"}}>
                <h1 style={{color:"#f2439d",fontSize:"35px"}}>Shopping Cart : {cart.length}</h1>
                <br />
                <hr />
                <Box className={style.boxparent}>
                    <Box className={style.boxchild1}>
                        {cart?.map((el)=>(
                            <Flex gap={6} justifyContent={"space-between"} className={style.flexchild}>
                              <img style={{width:"25%"}} src={el.src} alt="" />
                              <Grid textAlign={"left"}>
                                <h1>By {el.name}</h1>
                                <h3>Size: XL</h3>
                                <Flex gap={3}>
                                    <Button onClick={()=>setQuantity(quantity-1)}>-</Button>
                                    <Button>{quantity}</Button>
                                    <Button onClick={()=>setQuantity(quantity+1)}>+</Button>
                                </Flex>
                              </Grid>
                              <Grid>
                                <h1 style={{fontSize:"18px"}}>₹ {el.price}</h1>
                                <h1 style={{textDecoration:"line-through"}}>₹ {el.sprice}</h1>
                                <h3 className={style.free}>Buy 2 get 1 free</h3>
                              </Grid>
                            </Flex>  
                        ))}
                        
                    </Box>
                    <Box className={style.boxchild2}>
                        <Flex>
                            <Box>
                                <img style={{width:"45%"}} src="https://img0.junaroad.com/images/icons/coupon_icon_v2.png" alt="png" />
                            </Box>
                            <Box>
                                <h1 style={{fontSize:"16px"}}>APPLY COUPON CODE</h1>
                                <h4>Login To Find Coupons</h4>
                            </Box>
                        </Flex>
                        <br />
                        <h1 style={{fontSize:"22px"}}>SUMMARY</h1>
                        <br />
                        <Flex justifyContent={"space-between"}>
                            <h1>Total Price</h1>
                            <h1>₹ {arr}</h1>
                        </Flex>
                        <br />
                        <Flex justifyContent={"space-between"}>
                            <h1>Shipping Charges</h1>
                            <h1>FREE</h1>
                        </Flex>
                        <br />
                        <Flex justifyContent={"space-between"}>
                            <h1>Applicable Tax And Charges ⓘ</h1>
                            <h1>+ ₹ 120</h1>
                        </Flex>
                        <br />
                        <hr />
                        <Flex justifyContent={"space-between"}>
                            <h1 style={{fontSize:"22px",color:"#f2439d"}}>Amount Payable</h1>
                            <h1 style={{fontSize:"22px",color:"#f2439d"}}>₹ {arr+120}</h1>
                        </Flex>
                    </Box>
                </Box>
                <br />
                <hr />
                <Box>
                    <br />
                        <Button style={{padding:"20px 50px"}} colorScheme='pink' onClick={onOpen}>
                          Buy Now
                        </Button>

                        <AlertDialog
                         isOpen={isOpen}
                         leastDestructiveRef={cancelRef}
                         onClose={onClose}
                         >
                         <AlertDialogOverlay>
                           <AlertDialogContent>
                              <AlertDialogHeader fontSize='lg' fontWeight='bold'>
                                Customer Details
                              </AlertDialogHeader>

                              <AlertDialogBody>
                                <Text>Enter Name</Text>
                                <Input placeholder="Full Name"/>
                                <br />
                                <br />
                                <Text>Enter Address</Text>
                                <Input placeholder="Adress"/>
                                <br />
                                <br />
                                <Text>Enter Pin Number</Text>
                                <Input placeholder="Pin Number"/>
                                <br />
                                <br />
                                <Text>Enter Card Number</Text>
                                <Input placeholder="Card Number"/>
                                <br />
                                <br />
                                <Text>Enter CVV</Text>
                                <Input placeholder="CVV"/>
                              </AlertDialogBody>

                              <AlertDialogFooter>
                                <Button ref={cancelRef} onClick={onClose}>
                                    Cancel
                                </Button>
                                <Button colorScheme='red' onClick={handleClick} ml={3}>
                                    Placed Order!
                                </Button>
                             </AlertDialogFooter>
                         </AlertDialogContent>
                      </AlertDialogOverlay>
                    </AlertDialog>

                </Box>
                <br />
                <hr />
                <br />
            </Box>
            <br />
            <Box>
                <Footer/>
            </Box>
        </div>
    )
   
}
export default Cart