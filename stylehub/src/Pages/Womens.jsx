
import Navbar from "../Components/Navbar"
import {useState,useEffect} from "react"
import {Grid,Checkbox,Input,Box,Breadcrumb,BreadcrumbItem,BreadcrumbLink,Flex,Img,Text,Button} from "@chakra-ui/react";
import {Link} from "react-router-dom"
import Footer from "../Components/Footer"
import style from "../Style/mens.module.css"
import axios from "axios"

function Womens(){
    const [data,setData]=useState([])
    const [category,setCategory]=useState("New")
    const [order,setOrder]=useState("asc")
    const [type,setType]=useState("womens")

    useEffect(()=>{
       axios.get(`https://busy-jade-starfish-cape.cyclic.app/${type}?category=${category}&_sort=price&_order=${order}`)
       .then((res)=>{
        setData(res.data)
        localStorage.setItem(("type"),JSON.stringify(type))
       })
       .catch((err)=>{
        console.log(err)
       })

    },[category,order])
   
    return(
        <div>
            <Box>
                <Navbar/>
            </Box>
            <div style={{width:"93%", margin:"auto"}}>
            <br />
            <Box className={style.sidebar}>
                <Box className={style.first}>
                    <h3>Mens Fashion - T Shirts, Suits, Blazers & Jeans 55065 products</h3>
                </Box>
                <br />
                <Box>
                    <h1>Filter & Sort</h1>
                    <br />
                    <p>Sort By</p>
                    <Grid>
                        <Checkbox onChange={()=>setCategory("Trending")}>Trending</Checkbox>
                        <Checkbox onChange={()=>setCategory("New")}>New</Checkbox>
                        <Checkbox onChange={()=>setCategory("Discount")}>Discount</Checkbox>
                        <Checkbox onChange={()=>setOrder("desc")}>High Price</Checkbox>
                        <Checkbox onChange={()=>setOrder("asc")}>Low Price</Checkbox>
                    </Grid>
                </Box>
                <br />
                <Grid>
                    <Flex justifyContent={"space-between"}>
                        <p>Price</p>
                        <p>+</p>
                    </Flex>
                    <hr />
                    <Flex justifyContent={"space-between"}>
                        <p>Discount</p>
                        <p>+</p>
                    </Flex>
                    <hr />
                    <Flex justifyContent={"space-between"}>
                        <p>Color</p>
                        <p>+</p>
                    </Flex>
                    <hr />
                    <Flex justifyContent={"space-between"}>
                        <p>Size</p>
                        <p>+</p>
                    </Flex>
                    <hr />
                    <Flex justifyContent={"space-between"}>
                        <p>Brand</p>
                        <p>+</p>
                    </Flex>
                    <hr />
                    <Flex justifyContent={"space-between"}>
                        <p>Category</p>
                        <p>+</p>
                    </Flex>
                    <hr />
                    <Flex justifyContent={"space-between"}>
                        <p>Type</p>
                        <p>+</p>
                    </Flex>
                    <hr />
                    <Flex justifyContent={"space-between"}>
                        <p>Ocassion</p>
                        <p>+</p>
                    </Flex>
                    <hr />
                    <Flex justifyContent={"space-between"}>
                        <p>Prints & Pattern</p>
                        <p>+</p>
                    </Flex>
                    <hr />
                    <Flex justifyContent={"space-between"}>
                        <p>Offers</p>
                        <p>+</p>
                    </Flex>
                    <hr />
                    <Flex justifyContent={"space-between"}>
                        <p>More....</p>
                        <p>+</p>
                    </Flex>

                </Grid>

            </Box>
            <Box className={style.main}>
            <Box>
            <Breadcrumb>
               <BreadcrumbItem>
                  <BreadcrumbLink href='#'>Home</BreadcrumbLink>
               </BreadcrumbItem>
               <BreadcrumbItem>
                  <BreadcrumbLink href='#'>{type}</BreadcrumbLink>
               </BreadcrumbItem>
              
               <BreadcrumbItem isCurrentPage style={{color:"#f2439d"}}>
                   <BreadcrumbLink href='#'>Clothing</BreadcrumbLink>
               </BreadcrumbItem>
             </Breadcrumb>
            </Box>
            <br />
            <br />
            <Box className={style.child}>
                {data.map((el)=>(
                    <Box key={el.id} className={style.loop}>
                        <Link to={`/checkout/${el.id}`}><Box>
                            <Img src={el.src} alt={el.name} />
                            <Flex gap={4}>
                                <p>₹ {el.price}</p>
                                <p style={{textDecoration:"line-through"}}>₹ {el.sprice}</p>
                                <p>{el.offer}</p>
                            </Flex>
                            <h6 style={{textAlign:"left"}}>{el.category}</h6>
                            <h3 style={{textAlign:"left"}}>By {el.name}</h3>
                            
                        </Box></Link>
                    </Box>
                ))}
            </Box>
            </Box>
            <br />
            <br />
            <Box>
                <Footer/>
            </Box>

        </div>
        </div>
    )
}
export default Womens