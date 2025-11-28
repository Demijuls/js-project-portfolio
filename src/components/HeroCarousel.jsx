import styled from "styled-components";
import { media } from "../media";
import portrait from "../Assets/avatar.JPG";
import leftPic from "../Assets/codepicture.JPG";
import rightPic from "../Assets/wordspicture.jpg";

const CarouselWrapper = styled.div`
  position: relative;
  width: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover img {
    transition: all 0.6s ease;
  }

  ${media.tablet} {
    height: auto;
  }

  ${media.mobile} {
    flex-direction: column;
    gap: 20px;
  }
`;

const ImgBase = styled.img`
  position: relative;
  border-radius: 12px;
  margin: 16px auto;
  width: 358px;
  height: 382px;
  object-fit: cover;
  transition: 0.4ms ease;
`;

const ImgCenter = styled(ImgBase)`
  z-index: 4;

  ${CarouselWrapper}:hover & {
    transform: rotate(8deg) scale(1.1);
  }

  ${media.mobile} {
    margin: 0;
    width: 200px;
    height: 210px;
  }
`;

const ImgLeft = styled(ImgBase)`
  transform: rotate(-8deg);
  left: 80px;
  z-index: 1;

  ${CarouselWrapper}:hover & {
    transform: rotate(8deg) scale(0.9);
  }

  ${media.mobile} {
    margin: 0;
    transform: none;
    left: 0;
    width: 200px;
    height: 210px;
  }
`;

const ImgRight = styled(ImgBase)`
  transform: rotate(8deg);
  right: 80px;
  z-index: 2;

  ${CarouselWrapper}:hover & {
    transform: rotate(-8deg) scale(0.9);
  }

  ${media.mobile} {
    margin: 0;
    transform: none;
    right: 0;
    width: 200px;
    height: 210px;
  }
`;

const HeroCarousel = () => {
  return (
    <CarouselWrapper>
      <ImgLeft src={leftPic} alt="picture of a black screen with code lines" />
      <ImgCenter src={portrait} alt="Julia's portrait" />
      <ImgRight
        src={rightPic}
        alt="picture of a neon words saying eat sleep code repeat"
      />
    </CarouselWrapper>
  );
};

export default HeroCarousel;
