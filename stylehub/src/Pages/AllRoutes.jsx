import {Routes,Route} from "react-router-dom"
import Home from "./Home"
import Login from "./Login"
import Mens from "./Mens"
import Womens from "./Womens"
import Checkout from "./Checkout"

function AllRoutes(){
    return(
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/mens" element={<Mens/>}/>
            <Route path="/womens" element={<Womens/>}/>
            <Route path="/checkout/:id" element={<Checkout/>}/>
        </Routes>
    )

}
export default AllRoutes