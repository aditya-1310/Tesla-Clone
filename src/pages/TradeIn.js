import styled from "styled-components"
import { Link } from "react-router-dom"
import { useEffect } from "react"
import { Image } from "../components/Image"

export const TradeIn = ({ setNavbarColor, setBlur, setMore, setNavbarPosition }) => {
  useEffect(() => {
    setNavbarColor("#f4f4f4")
    setBlur("")
    setMore("back")
    setNavbarPosition("fixed")
  }, [setBlur, setMore, setNavbarColor, setNavbarPosition])
  return (
    <TradeInContainer>
      <Image image="/TIN-section1-image-desktop.avif" mobileImage="/TIN-section1-image-mobile.avif" altText="Trade-In" />
      <article>
        <h1>Trade-in</h1>
        <p>
          Current delivery lead time for custom orders exceeds the validity period of our pre-order trade-in offers.
          You will be able to request an estimate once your order is placed and is approaching delivery.
          For quicker delivery, purchase an inventory vehicle.
        </p>
        <Link to ="/tradein">View Existing Inventory</Link>
        {/* <TeslaButton
          content = "View Existing Inventory"
          background = "transparent"
          border = "#171a20"
          color = "#171a20"
        /> */}
      </article>
    </TradeInContainer>
  )
}

const TradeInContainer = styled.div`
  picture{
    height: 160px;
    img{
        height: 160px;
    }
  }
  article{
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding: 16px 24px 0 24px;
    h1{
      padding: 32px 0 8px 0;
      font-size: 45px;
      font-weight: bold;
    }
    p{
      font-size: 16px;
      line-height: 21px;
      letter-spacing: 1px;
    }
    a{
      text-transform: uppercase;
      border: 3px solid #171a20;
      background-color: transparent;
      width: 100%;
      font-size: 14px;
      font-weight: 500;
      padding: 10px 40px;
      margin: 40px 8px 8px 8px;
      border-radius: 100px;
      :hover{
        background-color: #171a20;
        color: #fff;
      }
    }
  }
  @media only screen and (min-width: 600px){
    picture{
      height: 400px;
      img{
        height: 400px;
      }
    }
    article{
      align-items: center;
      p{
        max-width: 75ch;
      }
      a{
        width: max-content
      }
    }
  }
`
