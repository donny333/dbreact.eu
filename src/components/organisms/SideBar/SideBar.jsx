import { useState } from "react";
import StyledSideBar from "./StyledSideBar";
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';


const SideBar = ( { sideBarWidthChange } ) => {
    
    const [folded, setFolded] = useState(true)
    
    const sidebarFold = () => {
        if(folded){
            setFolded(false)
            sideBarWidthChange(false)
        } else {
            setFolded(true)
            sideBarWidthChange(true)
        }
    }

    return ( 
        <StyledSideBar
        style={!folded ? 
            {width:'200px', height:'100vh'} :
            {width:'24px', height: '24px'}
        }
        className={!folded ? "sideHorizontalTransitionRight" : "sideHorizontalTransitionLeft"}
        >
            <div
                style={folded ? {backgroundColor:'black'}: {}}
                className={!folded ? "iconBgToTransparent" : 'iconBgToBlack'}
            >
                {
                    !folded ?
                    <KeyboardDoubleArrowLeftIcon
                    onClick={sidebarFold}
                    /> :
                    <KeyboardDoubleArrowRightIcon 
                    onClick={sidebarFold}
                    />
                    
                }
            </div>
            <ul>
                <li>1</li>
                <li>1</li>
                <li>1</li>
                <li>1</li>
                <li>1</li>
                <li>1</li>
                <li>1</li>
                <li>1</li>
                <li>1</li>
                <li>1</li>
                <li>1</li>
                <li>1</li>
                <li>1</li>
            </ul>
        </StyledSideBar>
    );
}
 
export default SideBar;