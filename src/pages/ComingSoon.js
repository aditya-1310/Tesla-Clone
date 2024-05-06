import { useEffect} from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { Image } from '../components/Image'

export const ComingSoon = ({ setNavbarColor, setBlur, setMore, setNavbarPosition }) => {
    useEffect(() => {
      setNavbarColor("#171a20")
      setBlur("")
      setMore("back")
      setNavbarPosition("fixed")
    }, [setBlur, setMore, setNavbarColor, setNavbarPosition])

    return (
        <ComingSoonContainer>
            <div>
                <h1>Coming Soon</h1>
                <p>
                    Uh oh! Looks like Tomiwa isn't done with this page.
                </p>
                <p>Go to <Link to="/">Home Page</Link>?</p>
            </div>
            <Image image="/TDE-section-image2.avif" altText="Coming Soon!" />
        </ComingSoonContainer>
    )
}

const ComingSoonContainer = styled.div`
    max-width: 1200px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 auto;
    padding: 64px 16px 0 16px;
    
    div{
        width: 100%;
        @media screen and (min-width: 600px){
            display: flex;
            flex-direction: column;
            align-items: center;
        }
        h1{
            padding: 32px 0 8px 0;
            font-size: 32px;
            transition: font-size ease-in 0.3s;
            @media screen and (min-width: 600px){
                font-size: 48px;
            }
            font-weight: bold;
        }
        p{
            font-size: 18px;
            line-height: 28px;
            letter-spacing: 0.8px;
            a{
                color: blue;
            }
        }
    }
    picture{
        height: calc(100vh - 220px);
        img{
            object-fit: contain;
        }
    }
`