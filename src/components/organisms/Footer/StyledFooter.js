import { styled } from "styled-components";

const StyledFooter = styled.footer`
    background-color: #001122;
    color: #b6b6b6;
    padding: 20px 20px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    .topFooter {
        width: 80%;
        display: flex;
        justify-content: space-between;
        align-items: start;
    }
    #logoDiv{
        h2 {
            margin: 0;
            margin-bottom: 5px;
            letter-spacing: 2px;
        }
        p {
            letter-spacing: 1px;
            font-weight: 500;
        }
    }
    hr{
        width: 80%;
        border: none;
        height: 1px;
        background-color: #5c5c5c;
        margin: 60px 0;
    }
    #footerIcons {
        width: 20%;
        min-width: 220px;
        margin-bottom: 60px;
        display: flex;
        justify-content: space-between;
        a{
            width: 36px;
            height: 36px;
            border: 1px solid #b6b6b6;
            border-radius: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            i {
                font-size: 16px;
            }
        }
    }
    p {
        margin: 0;
    }
    ul{
        margin: 0;
    }
    li {
        list-style-type: none;
    }
    a {
        text-decoration: none;
        color: #b6b6b6;
    }
`;

export default StyledFooter;