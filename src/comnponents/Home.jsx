import styled from "styled-components"
import bg from "../static/images/bg.png"
import DocIcon from "../static/images/DocIcon.png"
import MapPinIcon from "../static/images/PinIcon.png"
import WishlishIcon from "../static/images/WishlistIcon.png"
import HomeIcon from "../static/images/HomeIcon.png"
import HomeBundleIcon from "../static/images/HomeBundleIcon.png"
import PossitiveTickerIcon from "../static/images/PossitiveTickerIcon.png"
import NegativeTickerIcon from "../static/images/NegativeTickerIcon.png"
import NeutralTickerIcon from "../static/images/NeutralTickerIcon.png"
import HomePathIcon from "../static/images/HomePathIcon.png"


const MainContainer = styled.div`
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

const TopNav = styled.div`
    width: 100vw;
    height: 16.6vh;
    min-height: 200px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 0 100px;
    background-color: rgba(255, 255, 255, 0.85);
`;

const Image = styled.img`
    height: ${props => props.height};
    width: ${props => props.width};
`;

const NavItem = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const HeaderSmall = styled.p`
    font-weight: 200;
    font-size: 18px;
`;

const HeaderBig = styled.p`
    font-style: normal;
    font-weight: 300;
    font-size: 46px;
    line-height: 69px;
    text-align: center;
    letter-spacing: 2px;

`;

const BottomNav = styled.div`
    width: 100vw;
    height: 60px;
    display: flex;
    align-items: center;
`;

const WhiteNav = styled.div`
    width: 20vw;
    height: 100%;
    display: flex;
    background-color: #FFFFFF;
`;

const WhiteNavItems = styled.div`
    flex: 1;
    display: flex;
    justify-content: center;
    flex-direction: column;
    padding: 5px 20px;
`;

const BottomNavTitle = styled.p`
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 19px;
    letter-spacing: 0.782609px;
    color:${props => !props.status ? "#171518" : props.status === "negative" ? "#E91C1C" : props.status === "possitive" ? "#00EB3E" : "#8F8F8F"};
`;

const HighOpacityNav = styled.div`
    flex: 1;
    height: 100%;
    display: flex;
    background-color:rgba(255, 255, 255, 0.5);
    justify-content: space-around;
    align-items: center;

`;

const HighOpacityNavItems = styled.div`
    flex:1;
    display: flex;
    gap: 5px;
    justify-content: center;
`;

const ImageWrapper = styled.div`
    height: 100%;
    width: fit-content;
`;

const ThinNavText = styled.p`
    font-style: normal;
    font-weight: 200;
    font-size: 18px;
    line-height: 19px;
    letter-spacing: 0.782609px;
    color: #484848;
`;

const TextWrapper = styled.div`   
    display: flex;
    flex-direction: column;
`;

const PriceWrapper = styled.div`
    width: 100%;
    display: flex;
    gap: 23px;
    align-items: center;
`;

const DisplayContainer = styled.div`
    flex:1;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const HalfCircle = styled.div`
    height: 248px;
    width: 248px;
    position: absolute;
    background-color: white;
    border-radius: 248px;
    left: ${props => props.pos === "left" ? "-208px" : "calc(100vw - 40px)"};
    cursor: pointer;
    &:hover{
        transform: scale(1.3);
    }
`;

const NeighborText = styled.p`
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


const FlagContainer = styled.div`
    height: 381.88px;
    width: 375px;
    position: relative;
    align-items: center;
`;

const FlagTitleContainer = styled.div`
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

const FlagTitleText = styled.p`
    font-size: 23px;
    line-height: 34.5px;
    font-weight: 300;
    letter-spacing: 1px;
    text-align: center;
    flex:1;
`;

const FlagVertical = styled.div`
    height: 100%;
    border: 4px solid #052DEA;
    position: absolute;
    right: 347px;
`;
const FlagHorizontal = styled.div`
     width: 102%;
     left: -2%;
    border: 4px solid #052DEA;
    position: absolute;
    top: 33px;
`;

const FlagDetailsContainer = styled.div`
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

const FlagMarketValueText = styled.p`
    font-weight: 300;
    font-size: 21px;
    line-height: 31px;

    text-align: center;
    letter-spacing: 2.33333px;

    color: #171518;
`;

const FlagReserveBidText = styled.p`
    font-style: normal;
    font-weight: 200;
    font-size: 14.4px;
    line-height: 22px;
    text-align: center;
    letter-spacing: 1.6px;
    color: #171518;
`;

const FlagMiddleWrapper = styled.div`
    display: flex;
    flex-direction: column;
`;
const FlagMiddleStreetAddress = styled.p`
    font-weight: 200;
    font-size: 22px;
    line-height: 33px;
    letter-spacing: 1.83px;
    text-align: center;
`;

const FlagMiddleAddress = styled.p`
    font-weight: 200;
    font-size: 15px;
    line-height: 18px;
    letter-spacing: 2px;
    text-align: center;
`;



export default function Home() {


    return (
        <MainContainer>
            <TopNav>
                <NavItem>
                    <Image src={DocIcon} height="93.85px" width="70.91px" />
                </NavItem>
                <NavItem>
                    <HeaderSmall>Own</HeaderSmall>
                    <HeaderBig>14 Flood St.</HeaderBig>
                    <HeaderSmall>New Orleans, LA 70122</HeaderSmall>
                    <Image src={HomeBundleIcon} height="20px" width="64px" />
                </NavItem>
                <NavItem>
                    <Image src={MapPinIcon} height="88.5px" width="59.64px" />
                </NavItem>
                <NavItem>
                    <HeaderSmall>To</HeaderSmall>
                    <HeaderBig>Start</HeaderBig>
                    <HeaderSmall>Place Deposit</HeaderSmall>
                </NavItem>
                <NavItem>
                    <Image src={WishlishIcon} height="90px" width="46px" />
                </NavItem>
                <NavItem>
                    <HeaderSmall>Market $40,000</HeaderSmall>
                    <HeaderBig>$5,000</HeaderBig>
                    <HeaderSmall>Reserve Price</HeaderSmall>
                </NavItem>
                <NavItem>
                    <Image src={HomeIcon} height="89.56px" width="75.81px" />
                </NavItem>
            </TopNav>
            <BottomNav>
                <WhiteNav>
                    <WhiteNavItems>
                        <BottomNavTitle>Outbid</BottomNavTitle>
                        <BottomNavTitle status="negative">12</BottomNavTitle>
                    </WhiteNavItems>
                    <WhiteNavItems>
                        <BottomNavTitle>Active</BottomNavTitle>
                        <BottomNavTitle status="neutral">24</BottomNavTitle>
                    </WhiteNavItems>
                    <WhiteNavItems>
                        <BottomNavTitle>Winning</BottomNavTitle>
                        <BottomNavTitle status="possitive">12</BottomNavTitle>
                    </WhiteNavItems>
                </WhiteNav>

                <HighOpacityNav>
                    <HighOpacityNavItems>
                        <ImageWrapper>
                            <Image src={PossitiveTickerIcon} />
                        </ImageWrapper>
                        <TextWrapper>
                            <BottomNavTitle>14 Flood St.</BottomNavTitle>
                            <PriceWrapper>
                                <BottomNavTitle status="possitive">+$100</BottomNavTitle>
                                <ThinNavText>$5,000</ThinNavText>
                            </PriceWrapper>
                        </TextWrapper>
                    </HighOpacityNavItems>
                    <HighOpacityNavItems>
                        <ImageWrapper>
                            <Image src={NegativeTickerIcon} />
                        </ImageWrapper>
                        <TextWrapper>
                            <BottomNavTitle>24 Washington Ave.</BottomNavTitle>
                            <PriceWrapper>
                                <BottomNavTitle status="negative">-$100</BottomNavTitle>
                                <ThinNavText>$5,200</ThinNavText>
                            </PriceWrapper>
                        </TextWrapper>
                    </HighOpacityNavItems>
                    <HighOpacityNavItems>
                        <ImageWrapper>
                            <Image src={NeutralTickerIcon} />
                        </ImageWrapper>
                        <TextWrapper>
                            <BottomNavTitle>289 Hempstead St.</BottomNavTitle>
                            <PriceWrapper>
                                <BottomNavTitle status=""></BottomNavTitle>
                                <ThinNavText>$5,000</ThinNavText>
                            </PriceWrapper>
                        </TextWrapper>
                    </HighOpacityNavItems>
                    <HighOpacityNavItems>
                        <ImageWrapper>
                            <Image src={PossitiveTickerIcon} />
                        </ImageWrapper>
                        <TextWrapper>
                            <BottomNavTitle>57 West Ave G.</BottomNavTitle>
                            <PriceWrapper>
                                <BottomNavTitle status="possitive">$</BottomNavTitle>
                                <ThinNavText>$5,200</ThinNavText>
                            </PriceWrapper>
                        </TextWrapper>
                    </HighOpacityNavItems>

                </HighOpacityNav>

                <WhiteNav>
                    <WhiteNavItems>
                        <BottomNavTitle>Winning</BottomNavTitle>
                        <BottomNavTitle status="negative">$100,000</BottomNavTitle>
                    </WhiteNavItems>
                    <WhiteNavItems>
                        <BottomNavTitle>Winning</BottomNavTitle>
                        <BottomNavTitle status="neutral">$100,000</BottomNavTitle>
                    </WhiteNavItems>
                    <WhiteNavItems>
                        <BottomNavTitle>Winning</BottomNavTitle>
                        <BottomNavTitle status="possitive">$100,000</BottomNavTitle>
                    </WhiteNavItems>
                </WhiteNav>
            </BottomNav>

            <DisplayContainer>
                <HalfCircle pos="left" />
                <NeighborText>Neighbor?</NeighborText>
                <FlagContainer >
                    <FlagVertical />
                    <FlagHorizontal />
                    <FlagTitleContainer>
                        <Image src={HomePathIcon} height="15px" width="14px" />
                        <FlagTitleText>Public Auction</FlagTitleText>
                    </FlagTitleContainer>
                    <FlagDetailsContainer>
                        <FlagMarketValueText>
                            Market Value $40,000
                        </FlagMarketValueText>
                        
                        <FlagMiddleWrapper>
                            <FlagMiddleStreetAddress>
                                14 Flood St.
                            </FlagMiddleStreetAddress>
                            <FlagMiddleAddress>
                                New Orleans, LA 70122
                            </FlagMiddleAddress>
                        </FlagMiddleWrapper>

                        <FlagReserveBidText>
                            Reserve Bid $5,000
                        </FlagReserveBidText>
                    </FlagDetailsContainer>
                </FlagContainer>

                <HalfCircle pos="right" />
            </DisplayContainer>

        </MainContainer>
    )
}