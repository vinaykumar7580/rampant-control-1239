import Navbar from "../Components/Navbar"
import Footer from "../Components/Footer"
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import Men from "../Components/Men"
import Women from "../Components/Women"

function Home(){
    return(
        <div>
            <div>
              <Navbar/>
            </div>
            <div style={{backgroundColor:"whitesmoke"}}>
            <div style={{width:"70%",margin:"auto"}}>
              <Tabs>
                 <TabList>
                   <Tab>WOMEN</Tab>
                   <Tab>MEN</Tab>
                 </TabList>
                <TabPanels>
                   <TabPanel>
                    <Women/>
                   </TabPanel>
                   <TabPanel>
                     <Men/>
                   </TabPanel>
                </TabPanels>
              </Tabs>
            </div>
            </div>
            <div>
              <Footer/>
            </div>
        </div>
    )

}
export default Home