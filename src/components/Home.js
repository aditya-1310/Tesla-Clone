import styled from "styled-components"
import { TeslaButton } from "./TeslaButton"
import { Image } from "./Image"
import { Text } from "./Text"
import { useEffect, useRef } from "react"
import gsap from "gsap"


export const HomeComponent = ({mobileImage, desktopImage, altText, title, leftButtonText, rightButtonText, description, buttonBackground, button}) => {
    const BlockRef = useRef()
    const HeaderRef = useRef()
    const TextRef = useRef()
    const leftButtonRef = useRef()
    const rightButtonRef = useRef()
    useEffect(() => {
        const animateBlock = () => {
            if(BlockRef.current.getBoundingClientRect().top < window.innerHeight){
                gsap.to(BlockRef.current.children[1], { 
                    zIndex: 1,
                    opacity: 1 - Math.min(1, 2 * Math.abs(BlockRef.current.getBoundingClientRect().top / window.innerHeight))
                })
            } else{
                gsap.to(BlockRef.current.children[1], {
                    zIndex: 0,
                    opacity: 0
                })
            }
        }
        animateBlock()

        let tl = gsap.timeline()

        tl.from(HeaderRef.current, {
            duration: 0.7,
            opacity: 0,
            y: 36
        })
        tl.from(TextRef.current, {
            duration: 0.7,
            opacity: 0,
            y: 36
        })
        tl.from(leftButtonRef.current, {
            duration: 0.7,
            opacity: 0,
            x: -36
        }, "-=0.3")
        rightButtonText &&
            tl.from(rightButtonRef.current, {
                duration: 0.7,
                opacity: 0,
                x: 36
            }, "-=0.7")

        window.addEventListener("resize", animateBlock)
        window.addEventListener("scroll", animateBlock)
        return () => {
            window.removeEventListener("scroll", animateBlock)
            window.removeEventListener("resize", animateBlock)
        }
    }, [rightButtonText])
    return (
        <HomeComponentContainer ref={BlockRef}>
            <Image image={desktopImage} mobileImage={mobileImage} altText={altText} />
            <HomeStatic>
                <Text
                title={title}
                bigger= {true}
                description={description}
                HeaderRef={HeaderRef}
                TextRef={TextRef}
                />
                <ul>
                    { leftButtonText && 
                        <li ref={leftButtonRef}>
                            <TeslaButton 
                                content = { leftButtonText}
                                background = {buttonBackground ? buttonBackground : "#171a20cc"}
                                border = "transparent"
                                color = "#fff"
                            />
                        </li>
                    }
                    { rightButtonText &&
                        <li ref={rightButtonRef}>
                            <TeslaButton 
                                    content = {rightButtonText}
                                    background = "#f4f4f4a6"
                                    border = "transparent"
                                    color = "#393c41"
                            />
                        </li>
                    }
                </ul>
                <p></p>
                <button>
                    { button && 
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M0 16.67l2.829 2.83 9.175-9.339 9.167 9.339 2.829-2.83-11.996-12.17z"/></svg>
                    }
                </button>
            </HomeStatic>
        </HomeComponentContainer>
    )
}

const HomeComponentContainer = styled.div`
    height: 100vh;
    position: relative;
    overflow: hidden;
`

const HomeStatic = styled.div`
    position: fixed;
    opacity: 0;
    bottom: 0;
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 24px;
    align-items: center;
    div{
        flex: 1;
        display: flex;
        flex-direction: column;
        align-items: center;
        h1{
            margin-top: calc(18vh - 52px);
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
            }
        }
    }
    ul{
        padding: 16px 0;
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 16px;
        li{
            width: 100%;
            height: 40px;
            display: flex;
            flex-direction: row;
        }
    }
    @media only screen and (min-width: 600px){
        ul{
            flex-direction: row;
            align-items: center;
            justify-content: center;
            gap: 24px;
            li{
                width: 264px;
            }
        }
    }
    ul + p {
        font-size: 14px;
        line-height: 18px;
        height: 30px;
        width: 100%;
        padding: 0 24px 12px 24px;
    }
    @keyframes example {
        from{
            -webkit-transform:translateY(0);
            transform:translateY(0) rotate(180deg)
        }
        40%{-webkit-transform:translateY(-5px);transform:translateY(-5px) rotate(180deg)}
        60%{-webkit-transform:translateY(-3px);transform:translateY(-3px) rotate(180deg)}
        to{-webkit-transform:translateY(0);transform:translateY(0) rotate(180deg)}
    }
    button {
        height: 24px;
        width: 24px;
        animation: example 2s infinite cubic-bezier(0,-0.2,1,1.46);
        svg{
            width: 14px;
        }
    }
`
