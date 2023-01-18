import Carousel from "./Carousel"
import {Link} from "react-router-dom"

const mensData=[
    {
        "image":"https://img1.junaroad.com//assets/images/mobileNotif/img-1628498908811.jpg",
        "name":"MY FEED"
    },
    {
        "image":"https://img0.junaroad.com/images/icons/men/winter.png",
        "name":"WINTER"
    },
    {
        "image":"https://img0.junaroad.com/images/icons/men/tshirts.png",
        "name":"T-SHIRT"
    },
    {
        "image":"https://img0.junaroad.com/images/icons/men/shirts.png",
        "name":"SHIRT"
    },
    {
        "image":"https://img0.junaroad.com/images/icons/men/jeans.png",
        "name":"JEANS"
    },
    {
        "image":"https://img0.junaroad.com/images/icons/men/trousers.png",
        "name":"TROUSERS"
    },
    {
        "image":"https://img0.junaroad.com/images/icons/men/ethnicsets.png",
        "name":"ETHNIC SETS"
    },
    {
        "image":"https://img0.junaroad.com/images/icons/men/footwear.png",
        "name":"FOOTWEAR"
    },
    {
        "image":"https://img0.junaroad.com/images/icons/men/kids.png",
        "name":"KIDS"
    },
    {
        "image":"https://img0.junaroad.com/images/icons/women/home.png",
        "name":"HOME"
    },
    {
        "image":"https://img0.junaroad.com/images/icons/men/accessory.png",
        "name":"ACCESSORY"
    },

]

const mensDivData=[
    {
        image:"https://img0.junaroad.com/stories/story_p_63b7eacecc8b5e081af9847b-1673860623.jpeg",
        name:"By Kanika. Crystal",
        smallImage:"https://img0.junaroad.com/user_profile/mid_profile_5e0dd26e6f4a945d2dad2652-1577965834.png",
        desc:"TAP HERE TO SNAG IT",
        like:"29K Followers"
    },
    {
        image:"https://img2.junaroad.com/stories/story_p_63ad546af47b70082aa07d72-1672997440.jpeg",
        name:"By Kanika. Crystal",
        smallImage:"https://img0.junaroad.com/user_profile/mid_profile_5e0dd26e6f4a945d2dad2652-1577965834.png",
        desc:"CASUAL YET COOL",
        like:"29K Followers"
    },
    {
        image:"https://img2.junaroad.com/stories/story_p_63a93669adb8b82d0e16324b-1673619073.jpeg",
        name:"By Kanika. Crystal",
        smallImage:"https://img0.junaroad.com/user_profile/mid_profile_5e0dd26e6f4a945d2dad2652-1577965834.png",
        desc:"LOOK STORY | #CONTEMPORARY",
        like:"29K Followers"
    },
    {
        image:"https://img0.junaroad.com/stories/story_p_63a2e1cdfd1d3c31f5d60c49-1672779403.jpeg",
        name:"By Kanika. Crystal",
        smallImage:"https://img0.junaroad.com/user_profile/mid_profile_5e0dd26e6f4a945d2dad2652-1577965834.png",
        desc:"#CHECKMATE | EXPLORE PRINTS",
        like:"29K Followers"
    },
    {
        image:"https://img2.junaroad.com/stories/story_p_63998523f47b70081c6226e9-1671626716.jpeg",
        name:"By Kanika. Crystal",
        smallImage:"https://img0.junaroad.com/user_profile/mid_profile_5e0dd26e6f4a945d2dad2652-1577965834.png",
        desc:"#OOTDHAUL | HOODIES + JEANS",
        like:"29K Followers"
    },
    {
        image:"https://img3.junaroad.com/stories/story_p_6396cb5df3805708176fc0cf-1671709749.jpeg",
        name:"By Kanika. Crystal",
        smallImage:"https://img0.junaroad.com/user_profile/mid_profile_5e0dd26e6f4a945d2dad2652-1577965834.png",
        desc:"LET'S #GETGRAPHIC",
        like:"29K Followers"
    },
    {
        image:"https://img0.junaroad.com/stories/story_p_6391b3d8b388b008226edd17-1670575074.jpeg",
        name:"By Kanika. Crystal",
        smallImage:"https://img0.junaroad.com/user_profile/mid_profile_5e0dd26e6f4a945d2dad2652-1577965834.png",
        desc:"COP THE CELEB OUTFIT",
        like:"29K Followers"
    },
    {
        image:"https://img2.junaroad.com/stories/story_p_637e0495cc8b5e08167759c7-1669898559.jpeg",
        name:"By Kanika. Crystal",
        smallImage:"https://img0.junaroad.com/user_profile/mid_profile_5e0dd26e6f4a945d2dad2652-1577965834.png",
        desc:"APT FOR DAILY USE",
        like:"29K Followers"
    },
    {
        image:"https://img3.junaroad.com/stories/story_p_637b293ab388b0081d6784e0-1672738253.jpeg",
        name:"By Kanika. Crystal",
        smallImage:"https://img0.junaroad.com/user_profile/mid_profile_5e0dd26e6f4a945d2dad2652-1577965834.png",
        desc:"SWEATSHIRTS FOR WINTER DAYS",
        like:"29K Followers"
    },
    {
        image:"https://img0.junaroad.com/stories/story_p_6373684813cb38080a054482-1669357033.jpeg",
        name:"By Kanika. Crystal",
        smallImage:"https://img0.junaroad.com/user_profile/mid_profile_5e0dd26e6f4a945d2dad2652-1577965834.png",
        desc:"EXPLORE SOME QUIRKY PICKS",
        like:"29K Followers"
    },
    {
        image:"https://img2.junaroad.com/stories/story_p_637dfe59f3805708206b0f21-1673738401.jpeg",
        name:"By Kanika. Crystal",
        smallImage:"https://img0.junaroad.com/user_profile/mid_profile_5e0dd26e6f4a945d2dad2652-1577965834.png",
        desc:"SUPER WARM, SUPER STYLISH",
        like:"29K Followers"
    },
    {
        image:"https://img3.junaroad.com/stories/story_p_6358e531cc8b5e08187e08b6-1668587198.jpeg",
        name:"By Kanika. Crystal",
        smallImage:"https://img0.junaroad.com/user_profile/mid_profile_5e0dd26e6f4a945d2dad2652-1577965834.png",
        desc:"HOP ON THE TREND | FLORAL",
        like:"29K Followers"
    },
]

function Men(){
    return(
        <div>
            <div style={{display:"flex",justifyContent:"space-evenly",alignItems:"center"}}>
                {mensData.map((el)=>(
                    <div>
                        <img style={{width:"90%"}} src={el.image} alt={el.name} />
                        <p style={{fontSize:"13px"}}>{el.name}</p> 
                    </div>
                ))}
            </div>
            <br />
            <div style={{display:"flex",gap:"15px",alignItems:"center",backgroundColor:"#E7F3FD",borderTop:" 4px solid #5DAEF2",padding:"10px"}}>
                <img style={{width:"5%"}} src="https://img0.junaroad.com/assets/images/blue_annoucement.png" alt="ano" />
                <p>Get FLAT 10% OFF on your purchase on payment via Paytm/ GPay/ PhonePe/ Net Banking/ Any Credit or Debit Card</p>
            </div>
            <div>
                <Carousel/>
            </div>
            <br />
            <div style={{display:"grid", gridTemplateColumns:"repeat(3,1fr)",gap:"20px"}}>
                {mensDivData.map((el)=>(
                    <Link to="/mens"><div style={{backgroundColor:"white",textAlign:"left",padding:"15px"}}>
                        <p>{el.desc}</p>
                        <img src={el.image} alt="" />
                        <div style={{display:"flex",alignItems:"center",gap:"20px"}}>
                            <img style={{width:"10%",borderRadius:"50px"}} src={el.smallImage} alt="" />
                            <div>
                                <h6>{el.name}</h6>
                                <h6>{el.like}</h6>
                            </div>
                        </div>
                    </div></Link>
                ))}
            </div>
        </div>
    )
    
}
export default Men