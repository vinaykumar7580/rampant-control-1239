import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    Button
  } from '@chakra-ui/react'
  import {ChevronDownIcon} from "@chakra-ui/icons"
 import {useContext} from "react"
 import { AuthContext } from '../Context/AuthContextProvider'
 

function Logout(){

    const {isLogin,logout}=useContext(AuthContext)
  
    return(
        <Menu>
          <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
            {isLogin}
          </MenuButton>
         <MenuList>
            <MenuItem>My Account</MenuItem>
            <MenuItem>My Orders</MenuItem>
            <MenuItem onClick={logout}>Logout</MenuItem>
         </MenuList>
        </Menu>
    )

}
export default Logout