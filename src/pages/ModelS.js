import { useEffect} from 'react'
import { ImgStatTxt } from '../components/ImgStatTxt'
import { Image } from '../components/Image'
// import { Carousel } from '../components/Carousel'
import styled from 'styled-components'

export const ModelS = ({ setNavbarColor, setBlur, setMore, setNavbarPosition }) => {
    useEffect(() => {
      setNavbarColor("#171a20")
      setBlur("")
      setMore("back")
      setNavbarPosition("fixed")
    }, [setBlur, setMore, setNavbarColor, setNavbarPosition])

    return (
        <ModelSContainer>
            <Section1
                image="/MS-section1-image-desktop.jpg"
                mobileImage="/MS-section1-image-mobile.jpg"
                altText="Model S Plaid"
                title="Model S"
                description="Plaid"
            />
            <Section2>
                <h2>Interior of the Future</h2>
                <Image image="/MS-section3-image-desktop.jpg" mobileImage="/MS-section3-image-mobile.jpg" altText="Model S section 2" />
            </Section2>
            {/* <Section3 /> */}
        </ModelSContainer>
    )
}
const ModelSContainer = styled.div`
    width: 100%;
`

const Section1 = styled(ImgStatTxt)``

const Section2 = styled.section`
    padding: 40px 0 0;
    background-color: #000;
    display: flex;
    flex-direction: column;
    align-items: center;
    h2{
        position: relative;
        width: 100%;
        color: #fff;
        padding: 32px 0 32px;
        font-size: 32px;
        text-align: center;
        :before, :after{
            content: "";
            display: block;
            position: absolute;
            height: 150px;
            width: 100%;
        }
        :before{
            top: -190px;
            background: linear-gradient(transparent, black);
        }
        :after{
            bottom: -150px;
            background: linear-gradient(black, transparent);
        }
    }
    picture{
        height: 100vh;
        img{
            height: 100vh;
        }
    }
`

// const Section3 = styled(Carousel)`
//     background-color: #000;
// `