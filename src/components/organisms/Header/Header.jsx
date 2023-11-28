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
            <ul>
                <li><a href="">Home</a></li>
                <li><a href="">About us</a></li>
                <li><a href="">Projects</a></li>
                <li><a href="">Contacts</a></li>
            </ul>
        </StyledHeader>
     );
}
 
export default Header;