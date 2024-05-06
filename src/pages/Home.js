import styled from "styled-components"
import { HomeComponent } from "../components/Home"
import { useEffect } from "react"

export const Home = ({ setNavbarColor, setBlur, setMore, setNavbarPosition }) => {
  useEffect(() => {
    setNavbarColor("#171a20")
    setBlur("")
    setMore("back")
    setNavbarPosition("fixed")
  }, [setBlur, setMore, setNavbarColor, setNavbarPosition])
  return (
    <HomeContainer>
        <HomeComponent
          mobileImage = "/M3-Homepage-Mobile.jpg"
          desktopImage = "/M3-Homepage-Desktop.jpg"
          altText = "Model 3"
          title = "Model 3"
          leftButtonText = "Custom Order"
          rightButtonText = "Existing Inventory"
          button = {true}
        />
        <HomeComponent
          mobileImage = "/MY-Homepage-Mobile.jpg"
          desktopImage = "/MY-Homepage-Desktop.jpg"
          altText = "Model Y"
          title = "Model Y"
          leftButtonText = "Custom Order"
          rightButtonText = "Existing Inventory"
        />
        <HomeComponent
          mobileImage = "/MX-Homepage-Mobile.jpg"
          desktopImage = "/MX-Homepage-Desktop.jpg"
          altText = "Model X"
          title = "Model X"
          leftButtonText = "Custom Order"
          rightButtonText = "Existing Inventory"
        />
        <HomeComponent
          mobileImage = "/MS-Homepage-Mobile.jpg"
          desktopImage = "/MS-Homepage-Desktop.jpg"
          altText = "Model S"
          title = "Model S"
          leftButtonText = "Custom Order"
          rightButtonText = "Existing Inventory"
        />
        <HomeComponent
          mobileImage = "/SP-Homepage-Mobile.jpg"
          desktopImage = "/SP-Homepage-Desktop.jpg"
          altText = "Solar Panels"
          title = "Solar Panels"
          leftButtonText = "Order Now"
          rightButtonText = "Learn More"
          description = "Lowest Cost Solar Panels in America"
        />
        <HomeComponent
          mobileImage = "/SR-Homepage-Mobile.jpg"
          desktopImage = "/SR-Homepage-Desktop.jpg"
          altText = "Solar Roof"
          title = "Solar Roof"
          leftButtonText = "Order Now"
          rightButtonText = "Learn More"
          description = "Produce Clean Energy From Your Roof"
        />
        <HomeComponent
          mobileImage = "/AS-Homepage-Mobile.jpg"
          desktopImage = "/AS-Homepage-Desktop.jpg"
          altText = "Accessories"
          title = "Accessories"
          leftButtonText = "Shop Now"
          description = ""
          buttonBackground = "#171a20"
        />
    </HomeContainer>
  )
}

const HomeContainer = styled.div`

`