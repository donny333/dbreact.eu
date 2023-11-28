import StyledFooter from "./StyledFooter";

const Footer = ( { folded } ) => {
    return ( 
        <StyledFooter
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
            <h2>This is a footer. Also very beautiful</h2>
        </StyledFooter>
    );
}
 
export default Footer;