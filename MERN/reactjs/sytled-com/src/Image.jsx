import styled, { keyframes } from "styled-components";


const StyledImg = styled.img`
    border-radius: 10px;
    margin: 5px;
`

const Rotate = keyframes`
    from{
        transform: rotate(180deg);
    }
    to{
        transform: rotate(0deg);
    }
`

const AniamtedImg = styled(StyledImg)`
    animation: 3s infinite ${Rotate} alternate;
`
export { StyledImg, AniamtedImg }