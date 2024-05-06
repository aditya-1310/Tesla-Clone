import styled from 'styled-components'
import { useEffect, useState } from 'react'

export const Video = ({video, mobileVideo}) => {
    const [desktop, setDesktop] = useState(window.innerWidth > 600)
    useEffect(() => {
        const onResize = (e) => {
            window.innerWidth <= 600 ? setDesktop(false) : setDesktop(true)
        };
        window.addEventListener("resize", onResize)
        return () => {
            window.removeEventListener('scroll', onResize);
        }
    }, [])

    const VideoSource = (props) => {
        if(!props.mobileVideo){
            return (
                <VideoContainer src={props.video} loop autoPlay muted>
                </VideoContainer>
            )
        }else if(desktop){
            return (
                <VideoContainer src={props.video} loop autoPlay muted>
                </VideoContainer>
            )
        }
        return(
            <VideoContainer src={props.mobileVideo} loop autoPlay muted>
            </VideoContainer>
        )
    }

    return (
    <VideoSource video={video} mobileVideo={mobileVideo} />
  )
}

const VideoContainer = styled.video`
    position: absolute;
    top: 0px;
    right: 0px;
    bottom: 0px;
    left: 0px;
    max-height: 500px;
    max-width: 100%;
    source{
        width: 100%;
    }
`
