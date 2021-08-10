import DocIcon from "../static/images/DocIcon.png"
import MapPinIcon from "../static/images/PinIcon.png"
import WishlishIcon from "../static/images/WishlistIcon.png"
import HomeIcon from "../static/images/HomeIcon.png"
import HomeBundleIcon from "../static/images/HomeBundleIcon.png"
import PossitiveTickerIcon from "../static/images/PossitiveTickerIcon.png"
import NegativeTickerIcon from "../static/images/NegativeTickerIcon.png"
import NeutralTickerIcon from "../static/images/NeutralTickerIcon.png"
import HomePathIcon from "../static/images/HomePathIcon.png"
import { MainContainer,TopNav,NavItem, Image, HeaderSmall, HeaderBig, BottomNav, WhiteNav, WhiteNavItems, BottomNavTitle, HighOpacityNav, HighOpacityNavItems, ImageWrapper, TextWrapper, PriceWrapper, ThinNavText, DisplayContainer, HalfCircle, NeighborText, FlagContainer, FlagVertical, FlagHorizontal, FlagTitleContainer, FlagTitleText, FlagDetailsContainer, FlagMarketValueText, FlagMiddleWrapper, FlagMiddleStreetAddress, FlagMiddleAddress, FlagReserveBidText } from "./StyledComponents"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getDataFromAPI } from "../actions/detailsAction"

export default function Home() {
    let dispatch =useDispatch();
    let detailState = useSelector(state=>state.detailState);
    useEffect(()=>{
        dispatch(getDataFromAPI())
        // eslint-disable-next-line
    },[])
    return (
        <MainContainer>
            <TopNav>
                <NavItem>
                    <Image src={DocIcon} height="93.85px" width="70.91px" />
                </NavItem>
                <NavItem>
                    <HeaderSmall>Own</HeaderSmall>
                    <HeaderBig>{detailState.currentData.streetAddress?detailState.currentData.streetAddress:""}</HeaderBig>
                    <HeaderSmall>{detailState.currentData.address?detailState.currentData.address:""}</HeaderSmall>
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
                        <BottomNavTitle status="negative"> {detailState.currentData.outbid?detailState.currentData.outbid:""} </BottomNavTitle>
                    </WhiteNavItems>
                    <WhiteNavItems>
                        <BottomNavTitle>Active</BottomNavTitle>
                        <BottomNavTitle status="neutral">{detailState.currentData.active}</BottomNavTitle>
                    </WhiteNavItems>
                    <WhiteNavItems>
                        <BottomNavTitle>Winning</BottomNavTitle>
                        <BottomNavTitle status="possitive">{detailState.currentData.winning}</BottomNavTitle>
                    </WhiteNavItems>
                </WhiteNav>

                <HighOpacityNav>
                    <HighOpacityNavItems>
                        <ImageWrapper>
                            <Image src={PossitiveTickerIcon} />
                        </ImageWrapper>
                        <TextWrapper>
                            <BottomNavTitle>{detailState.currentData.streetAddress?detailState.currentData.streetAddress:""}</BottomNavTitle>
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
                            <BottomNavTitle>{detailState.otherNearby[0]?detailState.otherNearby[0].streetAddress:""}</BottomNavTitle>
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
                            <BottomNavTitle>{detailState.otherNearby[1]?detailState.otherNearby[1].streetAddress:""}</BottomNavTitle>
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
                            <BottomNavTitle>{detailState.otherNearby[2]?detailState.otherNearby[2].streetAddress:""}</BottomNavTitle>
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
                        <BottomNavTitle>Active</BottomNavTitle>
                        <BottomNavTitle status="neutral">$100,000</BottomNavTitle>
                    </WhiteNavItems>
                    <WhiteNavItems>
                        <BottomNavTitle>Outbid</BottomNavTitle>
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