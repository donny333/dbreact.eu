import styled from "styled-components";

const StyledHeader = styled.header`
    position: sticky;
    top: 0;
    background-color: #ffffffff;
    > ul {
        margin: 0;
        padding: 15px 50px;
        display: flex;
        justify-content: end;
        align-items: center;
        gap: 20px;
        > li{
            list-style-type: none;
            > a {
                text-decoration: none;
            }
        }
    }

`;

export default StyledHeader;