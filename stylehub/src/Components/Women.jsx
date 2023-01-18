
import Carousel from "./Carousel"
import {Link} from "react-router-dom"

const womensData=[
    {
        "image":"https://img1.junaroad.com//assets/images/mobileNotif/img-1628498908811.jpg",
        "name":"MY FEED"
    },
    {
        "image":"https://img0.junaroad.com/images/icons/women/winter.png",
        "name":"WINTER"
    },
    {
        "image":"https://img0.junaroad.com/images/icons/women/kurtas.png",
        "name":"KURTAS"
    },
    {
        "image":"https://img0.junaroad.com/images/icons/women/tops.png",
        "name":"TOPS"
    },
    {
        "image":"https://img0.junaroad.com/images/icons/women/dresses.png",
        "name":"DRESSES"
    },
    {
        "image":"https://img0.junaroad.com/images/icons/women/sarees.png",
        "name":"SAREES"
    },
    {
        "image":"https://img0.junaroad.com/images/icons/women/suits.png",
        "name":"SUITS"
    },
    {
        "image":"https://img0.junaroad.com/images/icons/women/ethnicsets.png",
        "name":"ETHNIC SETS"
    },
    {
        "image":"https://img0.junaroad.com/images/icons/women/bottoms.png",
        "name":"BOTTOMS"
    },
    {
        "image":"https://img0.junaroad.com/images/icons/women/bags.png",
        "name":"BAGS"
    },
    {
        "image":"https://img0.junaroad.com/images/icons/women/footwear.png",
        "name":"FOOTWEAR"
    },

]

const womensDivData=[
    {
        image:"https://img0.junaroad.com/stories/story_p_63bbe920adb8b86e86a1ae05-1673353135.jpeg",
        name:"By Ankita",
        smallImage:"https://img0.junaroad.com/user_profile/26.jpg",
        desc:"PUFFER JACKETS IN METALLIC",
        like:"2K Followers"
    },
    {
        image:"https://img2.junaroad.com/stories/story_p_63bbfb0813cb3808195e503e-1673428460.jpeg",
        name:"By Ankita",
        smallImage:"https://img0.junaroad.com/user_profile/26.jpg",
        desc:"NEW ARRIVALS TO CART RN",
        like:"2K Followers"
    },
    {
        image:"https://img2.junaroad.com/stories/story_p_63b547b0f47b70082502acce-1672898091.jpeg",
        name:"By Ankita",
        smallImage:"https://img0.junaroad.com/user_profile/26.jpg",
        desc:"TIME TO BUY ONE RIGHT AWAY",
        like:"2K Followers"
    },
    {
        image:"https://img0.junaroad.com/stories/story_p_6398421eb388b0081f7e9d9a-1672118447.jpeg",
        name:"By Ankita",
        smallImage:"https://img0.junaroad.com/user_profile/26.jpg",
        desc:"VARSITY AND BOMBER JACKETS",
        like:"2K Followers"
    },
    {
        image:"https://img2.junaroad.com/stories/story_p_63b437e1f47b7008215508d0-1673802494.jpeg",
        name:"By Ankita",
        smallImage:"https://img0.junaroad.com/user_profile/26.jpg",
        desc:"AS CHILL AS IT CAN GET",
        like:"2K Followers"
    },
    {
        image:"https://img0.junaroad.com/stories/story_p_63aeb0d8adb8b84ef73dd11f-1673191486.jpeg",
        name:"By Ankita",
        smallImage:"https://img0.junaroad.com/user_profile/26.jpg",
        desc:"THEY ARE A STEAL",
        like:"2K Followers"
    },
    {
        image:"https://img2.junaroad.com/stories/story_p_63ad3cd6adb8b84ef73be715-1673940904.jpeg",
        name:"By Ankita",
        smallImage:"https://img0.junaroad.com/user_profile/26.jpg",
        desc:"YOUR GO-TO VACAY OUTFIT",
        like:"2K Followers"
    },
    {
        image:"https://img3.junaroad.com/stories/story_p_63ac2dacf47b70082c3f7c47-1672295597.jpeg",
        name:"By Ankita",
        smallImage:"https://img0.junaroad.com/user_profile/26.jpg",
        desc:"THEY ARE MAKING A COMEBACK",
        like:"2K Followers"
    },
    {
        image:"https://img0.junaroad.com/stories/story_p_63a54a1513cb38081ba13a0d-1673195507.jpeg",
        name:"By Ankita",
        smallImage:"https://img0.junaroad.com/user_profile/26.jpg",
        desc:"PUFFER PERFECTION | JACKETS",
        like:"2K Followers"
    },
    {
        image:"https://img2.junaroad.com/stories/story_p_63aaf01813cb38685001a1fe-1672148516.jpeg",
        name:"By Ankita",
        smallImage:"https://img0.junaroad.com/user_profile/26.jpg",
        desc:"NEW ARRIVALS | CAMPUS SUTRA",
        like:"2K Followers"
    },
    {
        image:"https://img3.junaroad.com/stories/story_p_63aada4713cb38085b143c27-1673693560.jpeg",
        name:"By Ankita",
        smallImage:"https://img0.junaroad.com/user_profile/26.jpg",
        desc:"STYLISH AND WARM IN ONE!",
        like:"2K Followers"
    },
    {
        image:"https://img0.junaroad.com/stories/story_p_63ad8866adb8b84ef73c6b6b-1673238461.jpeg",
        name:"By Ankita",
        smallImage:"https://img0.junaroad.com/user_profile/26.jpg",
        desc:"BOSS LADY VIBES GUARANTEED",
        like:"2K Followers"
    },
]

function Women(){
    return(
        <div>
            <div style={{display:"flex",justifyContent:"space-evenly",alignItems:"center"}}>
                {womensData.map((el)=>(
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
                {womensDivData.map((el)=>(
                    <Link to="/womens"><div style={{backgroundColor:"white",textAlign:"left",padding:"15px"}}>
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
export default Women