import styled from "styled-components"
import bg from "../static/images/bg.png"

export const MainContainer = styled.div`
    height: 100vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
    background: url(${bg});
    background-repeat:no-repeat;
    background-size: cover;
    overflow-y:auto;
    overflow-x: hidden;
`;

export const TopNav = styled.div`
    width: 100vw;
    height: 16.6vh;
    min-height: 240px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 0 100px;
    background-color: rgba(255, 255, 255, 0.85);
`;

export const Image = styled.img`
    height: ${props => props.height};
    width: ${props => props.width};
`;

export const NavItem = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const HeaderSmall = styled.p`
    font-weight: 200;
    font-size: 18px;
    line-height: 27px;
    text-align: center;
    letter-spacing: 2px;
    color: #484848;
`;

export const HeaderBig = styled.p`
    font-style: normal;
    font-weight: 300;
    font-size: 46px;
    line-height: 69px;
    text-align: center;
    letter-spacing: 2px;
    color: #171518;
`;

export const BottomNav = styled.div`
    width: 100vw;
    height: 60px;
    display: flex;
    align-items: center;
`;

export const WhiteNav = styled.div`
    width: 20vw;
    height: 100%;
    display: flex;
    background-color: #FFFFFF;
`;

export const WhiteNavItems = styled.div`
    flex: 1;
    display: flex;
    justify-content: center;
    flex-direction: column;
    padding: 5px 20px;
`;

export const BottomNavTitle = styled.p`
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 19px;
    letter-spacing: 0.782609px;
    color:${props => !props.status ? "#171518" : props.status === "negative" ? "#E91C1C" : props.status === "possitive" ? "#00EB3E" : "#8F8F8F"};
`;

export const HighOpacityNav = styled.div`
    flex: 1;
    height: 100%;
    display: flex;
    background-color:rgba(255, 255, 255, 0.5);
    justify-content: space-between;
    align-items: center;
`;

export const HighOpacityNavItems = styled.div`
    flex:1;
    display: flex;
    gap: 5px;
    justify-content: center;
`;

export const ImageWrapper = styled.div`
    height: 100%;
    width: fit-content;
`;

export const ThinNavText = styled.p`
    font-style: normal;
    font-weight: 200;
    font-size: 18px;
    line-height: 19px;
    letter-spacing: 0.782609px;
    color: #484848;
`;

export const TextWrapper = styled.div`   
    display: flex;
    flex-direction: column;
`;

export const PriceWrapper = styled.div`
    width: 100%;
    display: flex;
    gap: 23px;
    align-items: center;
`;

export const DisplayContainer = styled.div`
    flex:1;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const HalfCircle = styled.div`
    height: 248px;
    width: 248px;
    position: absolute;
    background-color: white;
    border-radius: 248px;
    left: ${props => props.pos === "left" ? "-208px" : "calc(100vw - 40px)"};
    bottom: 595.65px;
    cursor: pointer;
    &:hover{
        transform: scale(1.3);
    }
`;

export const NeighborText = styled.p`
    position: absolute;
    height: 27px;
    left: 446px;
    bottom: 603px;
    font-weight: 500;
    font-size: 18px;
    line-height: 27px;

    text-align: center;
    letter-spacing: 2px;

    color: #6AC1FF;
`;


export const FlagContainer = styled.div`
    height: 381.88px;
    width: 375px;
    position: relative;
    align-items: center;
`;

export const FlagTitleContainer = styled.div`
    position: absolute;
    right: 0;
    top: 0;
    width: 347px;
    height: 33px;
    background: rgba(255, 255, 255, 0.66);
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 10px;
`;

export const FlagTitleText = styled.p`
    font-size: 23px;
    line-height: 34.5px;
    font-weight: 300;
    letter-spacing: 1px;
    text-align: center;
    flex:1;
`;

export const FlagVertical = styled.div`
    height: 100%;
    border: 4px solid #052DEA;
    position: absolute;
    right: 347px;
`;
export const FlagHorizontal = styled.div`
     width: 102%;
     left: -2%;
    border: 4px solid #052DEA;
    position: absolute;
    top: 33px;
`;

export const FlagDetailsContainer = styled.div`
    height: 181.5px;
    width: 330.5px;
    position: absolute;
    right: 0;
    top: 13.59%;
    background: rgba(255, 255, 255, 0.86);
    border: 4.416px solid #052DEA;
    border-radius: 17.664px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 20px;
    gap: 15px;
`;

export const FlagMarketValueText = styled.p`
    font-weight: 300;
    font-size: 21px;
    line-height: 31px;
    text-align: center;
    letter-spacing: 2.33333px;
    color: #171518;
`;

export const FlagReserveBidText = styled.p`
    font-style: normal;
    font-weight: 200;
    font-size: 14.4px;
    line-height: 22px;
    text-align: center;
    letter-spacing: 1.6px;
    color: #171518;
`;

export const FlagMiddleWrapper = styled.div`
    display: flex;
    flex-direction: column;
`;
export const FlagMiddleStreetAddress = styled.p`
    font-weight: 200;
    font-size: 22px;
    line-height: 33px;
    letter-spacing: 1.83px;
    text-align: center;
    color: #171518;
`;

export const FlagMiddleAddress = styled.p`
    font-weight: 200;
    font-size: 15px;
    line-height: 18px;
    letter-spacing: 2px;
    text-align: center;
    color: #171518;
`;