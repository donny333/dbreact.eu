import StyledHome from "./StyledHome";

const Home = ( { folded } ) => {
    return ( 
        <StyledHome
        style={
            !folded ? 
            {width:"calc(100% - 200px)", marginLeft:"200px"} :
            {width:"100%"}
        }
        className={!folded ?
            "contentTransitionRight" :
            "contentTransitionLeft"
        }
        >
            <img src="https://res.cloudinary.com/g5-assets-cld/image/upload/x_12,y_81,h_983,w_1787,c_crop/q_auto,f_auto,fl_lossy,g_center,h_1100,w_2000/g5/g5-c-i7yxybw5-mission-rock-single/g5-cl-iap27qrg-mountain-view-apartment-homes/uploads/GettyImages-621365612_pvphnb.jpg" alt="" />
        </StyledHome>
    );
}
 
export default Home;