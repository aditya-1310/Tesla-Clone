import styled from "styled-components"
import { Image } from "./Image"
import { Text } from "./Text"

export const ImgStatTxt = ({image, mobileImage, altText, title, description}) => {
  return (
    <ImgStatTxtContainer>
        <Image image={image} mobileImage={mobileImage} altText={altText} />
        <ImgStatTxtSticky>
            <Text
                title={title}
                bigger= {true}
                description={description}
            />
            <ul>
                <li>
                    <h2>396 mi</h2>
                    <span>Range &#40;EPA est.&#41;</span>
                </li>
                <li>
                    <h2>1.99s</h2>
                    <span>0-60 mph*</span>
                </li>
                <li>
                    <h2>200mph</h2>
                    <span>Top Speed†</span>
                </li>
                <li>
                    <h2>1,020 hp</h2>
                    <span>Peak Power</span>
                </li>
                <li>
                    <button>Order Now</button>
                </li>
            </ul>
        </ImgStatTxtSticky>
    </ImgStatTxtContainer>
  )
}

const ImgStatTxtContainer = styled.section`
    height: 100vh;
    position: relative;
    overflow: hidden;
`

const ImgStatTxtSticky = styled.div`
    position: absolute;
    bottom: 0;
    top: 0;
    left: 0;
    right: 0;
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 24px;
    align-items: center;
    ul{
        max-width: 327px;
        padding: 16px 0;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        flex-direction: column;
        grid-gap: 24px 6px;
        z-index: 1;
        li{
            display: flex;
            flex-direction: column;
            align-items: center;
            h2{
                font-size: 22px;
                color: #f4f4f4;
                line-height: 30px;
                letter-spacing: 0.5px;
                margin-bottom: 6px;
            }
            span{
                font-size: 12px;
                color: #f4f4f4;
            }
        }
        li:nth-last-of-type(1){
            grid-column: 1 / span 3;
            button{
                text-transform: uppercase;
                border: 3px solid #fff;
                color: #fff;
                background-color: transparent;
                width: 100%;
                font-size: 14px;
                font-weight: 500;
                padding: 9px 24px;
                border-radius: 100px;
            }
        }
        li:nth-of-type(4){
            display: none;
        }
        @media screen and (min-width: 600px){
            width: 540px;
            max-width: 900px;
            padding: 16px 24px;
            li {
                h2{
                    font-size: 30px;
                }
                span{
                    font-size: 16px;
                }
                button{
                    max-width: 327px;
                    font-size: 13px;
                }
            }
        }
        @media screen and (min-width: 900px){
            width: 100%;
            padding: 16px 0 32px 0;
            max-width: 950px;
            grid-template-columns: repeat(4, 1fr) 205px;
            grid-column-gap: 24px;
            li{
                :nth-last-of-type(1){
                    grid-column: span 1;
                }
                :nth-of-type(4){
                    display: flex;
                }

            }
        }
    }
`
