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
            <div className="topFooter">
                <div id="logoDiv">
                    <h2>LOGO</h2>
                    <p>SLOGAN COMPANY</p>
                </div>
                <div>
                    <ul>
                        <li><a href="">WEEBLY THEMES</a></li>
                        <li><a href="">PRE - SALE FAQS</a></li>
                        <li><a href="">SUBMIT A TICKET</a></li>
                    </ul>
                </div>
                <div>
                    <ul>
                        <li><a href="">SERVICES</a></li>
                        <li><a href="">THEME TWEAKS</a></li>
                    </ul>
                </div>
                <div>
                    <ul>
                        <li><a href="">SHOWCASE</a></li>
                        <li><a href="">WIDGET KIT</a></li>
                        <li><a href="">SUPPOR</a></li>
                    </ul>
                </div>
                <div>
                    <ul>
                        <li><a href="">ABOUT US</a></li>
                        <li><a href="">CONTACT US</a></li>
                        <li><a href="">AFFILIATES</a></li>
                        <li><a href="">RESOURCES</a></li>
                    </ul>
                </div>
            </div>
            <hr />
            <div id="footerIcons">
                <a href=""><i className="fa-brands fa-facebook"></i></a>
                <a href=""><i className="fa-brands fa-twitter"></i></a>
                <a href=""><i className="fa-solid fa-wifi"></i></a>
                <a href=""><i className="fa-brands fa-linkedin-in"></i></a>
                <a href=""><i className="fa-brands fa-instagram"></i></a>
            </div>
            <p>
                ©Copyright. All rights reserved
            </p>
        </StyledFooter>
    );
}
 
export default Footer;