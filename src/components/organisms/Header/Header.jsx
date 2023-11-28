import StyledHeader from "./StyledHeader";

const Header = ({folded}) => {
    return ( 
        <StyledHeader
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
            <h1>This is a Header very beautiful</h1>
        </StyledHeader>
     );
}
 
export default Header;