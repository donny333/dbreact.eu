import { styled } from "styled-components";

const StyledSideBar = styled.aside`
    background-color: antiquewhite;
    position: fixed;
    top: 0;
    left: 0;
    overflow: hidden;
    background-image: url('https://media.discordapp.net/attachments/1101881824378097738/1129394748461940736/side_wave.png?width=234&height=1170');
    background-color: white;
    > div{
        width: 100%;
        height: 24px;
        display: flex;
        justify-content: end;
        color: white;
    }
    svg {
        cursor: pointer;
    }

    li {
        color: white;
    }
    `;

export default StyledSideBar;