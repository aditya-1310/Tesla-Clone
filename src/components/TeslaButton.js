import styled from "styled-components"
import { Link } from "react-router-dom"

export const TeslaButton = ({ content, background = "transparent", border = "#f4f4f4", to = "/", color ="inherit"}) => {
  return (
    <TeslaButtonContainer to={to} background={background} border={border} color={color}>
        {content}
    </TeslaButtonContainer>
  )
}

const TeslaButtonContainer = styled(Link)`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    font-weight: 600;
    font-size: 13px;
    color: ${props => props.color}!important;
    padding: 4px 24px;
    height: 40px;
    border : ${props => `3px solid ${props.border}`};
    background-color: ${props => props.background};
    backdrop-filter: blur(8px);
    border-radius: 20px;
    text-transform: uppercase;
`