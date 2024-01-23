import styled, { keyframes } from "styled-components";

const Button = styled.button`
    outline: none;
    padding: 20px;
    border:1px ${props => props.theme.primary} solid;
    font-size: 20px;
    background-color: ${(props) => props.color ? 'red' : 'green'};
    display: block;
    margin: 20px auto;
    border-radius: 5px;
    &:hover{
        background-color: transparent;
        border:1px black solid;
    }
`
Button.defaultProps = {
    theme: {
        primary: "#3498db"
    }
}
// extend
const FancyButton = styled(Button)`
   background: rgb(34,193,195);
   background: linear-gradient(0deg, rgba(34,193,195,1) 0%, rgba(253,187,45,1) 100%);
`

const SubmitButton = styled(Button).attrs({
    type: "submit"
})`
    background-color:lightsalmon;
`

const flash = keyframes`
    from{
        transform: scale(1.3);
    }
    to{
        transform: scale(0.8);
    }
`
const FlashBtn = styled(Button)`
    background: lavender;
    animation: 1s infinite ${flash} alternate-reverse linear;
`

export { Button, FancyButton, SubmitButton, FlashBtn };