import styled from 'styled-components'

const PictureSource = (props) => {
    if(props.mobileImage){
        return (
            <Picture>
                <source media="(min-width: 600px)" srcSet={props.image}/>
                <source srcSet={props.mobileImage} />
                <img src={props.image} alt={props.altText} />
            </Picture>
        )
    }
    else{
        return(
            <Picture>
                <img src={props.image} alt={props.altText} />
            </Picture>
        )
    }
} 

export const Image = ({image, mobileImage, altText}) => {
  return (
    <PictureSource image={image} mobileImage={mobileImage} altText={altText}/>
  )
}

const Picture = styled.picture`
    width: 100%;
    height: 100%;
    img{
        object-fit: cover;
        width: 100%;
        height: 100%;
    }
`
