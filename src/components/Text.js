import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Text = ({ title, description, bigger = false, TextRef, HeaderRef}) => {
  return (
    <TextContainer>
        <h1 className={bigger ? "bigger" : "normal" } ref={HeaderRef}>{title}</h1>
        {
            typeof description === "string" ?
            <p ref={TextRef}>{description}</p> :
            <p ref={TextRef}>Order Online for <Link to="'/'">touchless delivery</Link></p>
        }

    </TextContainer>
  )
}

const TextContainer = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    h1{
        margin-top: calc(19vh - 52px);
        transition: font-size ease-in 0.3s;
    }
    h1.bigger{
        font-size: 36px;
        letter-spacing: 1px;
    }
    h1 + p{
        padding: 6px 0 0 0;
        a{
            text-transform: capitalize;
            border-bottom: 1px solid black;
            color: inherit;
        }
    }
`
