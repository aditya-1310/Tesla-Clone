import {useEffect, useRef} from 'react'
import { Video } from './Video';
import styled from 'styled-components';

export const Carousel = () => {
    const list = useRef()
    const position = useRef(0)
    const updatePosition = () => {
        if(list.current){
            list.current.children[position.current].classList = ["in-active"]
            list.current.children[(position.current + 1) % 5].classList = ["active"]
            position.current = ((position.current + 1) % 5)
        }
    }

    useEffect(() => {
      const carouselInterval = setInterval(updatePosition, 6000);
      return () => {
        clearInterval(carouselInterval)
      }
    }, [])
    
    return (
        <CarouselContainer>
            <CarouselMedia>
                
                <ul ref={list}>
                    <li className="active">
                        <Video video="/MS-section4-video1-desktop.mp4" mobileVideo="/MS-section4-video1-mobile.mp4" />
                    </li>
                    <li className="in-active">
                        <Video video="/MS-section4-video2-desktop.mp4" mobileVideo="/MS-section4-video2-mobile.mp4" />
                    </li>
                    <li className="in-active">
                        <Video video="/MS-section4-video3-desktop.mp4" mobileVideo="/MS-section4-video3-mobile.mp4" />
                    </li>
                    <li className="in-active">
                        <Video video="/MS-section4-video4-desktop.mp4" mobileVideo="/MS-section4-video4-mobile.mp4" />
                    </li>
                    <li className="in-active">
                        <Video video="/MS-section4-video5-desktop.mp4" mobileVideo="/MS-section4-video5-mobile.mp4" />
                    </li>
                </ul>
                <ul>
                    <li>
                        <button></button>
                    </li>
                    <li>
                        <button></button>
                    </li>
                    <li>
                        <button></button>
                    </li>
                    <li>
                        <button></button>
                    </li>
                    <li>
                        <button></button>
                    </li>
                </ul>
            </CarouselMedia>
        </CarouselContainer>
    )
}

const CarouselContainer = styled.section`
    padding: 20px;
    background-color: #000;
`

const CarouselMedia = styled.div`
    width: 100%;
    height: 100vh;
    overflow: hidden;
    ul:nth-of-type(1){
        display: flex;
        flex-direction: row;
        width: 100%;
        position: relative;
        padding: 20px 20px 0 20px;
        li{
            position: absolute;
            transition: 0.7s opacity;
            width: 100%;
        }
        li.active{
            opacity: 1;
        }
        li.in-active{
            opacity: 0;
        }
    }
    ul{
        display: flex;
        flex-direction: row;
        width: 100%;
        height: max-content;
        gap: 8px;
        li{
            height: max-content;
            button{
                width: 12px;
                height: 12px;
                background-color: #8e8e8e;
                border-radius: 50%;
            }
        }
    }
`
