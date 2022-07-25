import React, {useState,useEffect} from 'react';
import styled from 'styled-components';
import axios from 'axios'
import { Link } from 'react-router-dom';
import location from '../../assets/images/place.svg'


export default function Places() {
    const  [places, setPlaces] = useState([]);

    useEffect(() => {
        axios.get('https://traveller.talrop.works/api/v1/places/', {
        })
        .then(function (response) {
            setPlaces(response.data.data)
        })
        .catch(function (error) {
            console.log(error);
        });
    },[]);

    const renderItems = () => (
        places.map((place) => (
            <SpotlightBottomList key = {place.id} >
                 <Link to = {`/place/${place.id}`}>
                    <SpotlightBottomImageContainer>
                        <SpotlightBottomImg src = {place.image} />
                    </SpotlightBottomImageContainer>
                    <SpotlightBottomContentContainer>
                        <SpotlightBottomContentContainerHeading>{place.name}</SpotlightBottomContentContainerHeading>
                        <SpotlightBottomContentContainerCover>
                            <SpotlightBottomContentContainerCoverSpan>
                                <SpotlightBottomContentContainerCoverSpanImg src ={location}/>
                            </SpotlightBottomContentContainerCoverSpan>
                            <SpotlightBottomContentContainerCoverHeading>{place.name}</SpotlightBottomContentContainerCoverHeading>
                        </SpotlightBottomContentContainerCover>
                    </SpotlightBottomContentContainer>
                </Link>
            </SpotlightBottomList>
        ))
    )
    return (
        <>
            <SpotlightMain>
                <SpotlightWrapper className = "wrapper">
                    <SpotlightSectionTop>
                        <SpotlightTopHeading>Welcome</SpotlightTopHeading>
                        <SpotlightTopParag>Explore the world around you</SpotlightTopParag>
                    </SpotlightSectionTop>
                    <SpotlightSectionBottom>
                        <SpotlightBottomCover>
                            {renderItems()}
                        </SpotlightBottomCover>
                    </SpotlightSectionBottom>
                </SpotlightWrapper>
            </SpotlightMain>
        </>
    )
}

const SpotlightMain = styled.section`
    padding: 5% 0;
`
const SpotlightWrapper = styled.section`

`
const SpotlightSectionTop = styled.div`

`
const SpotlightSectionBottom = styled.div`

`
const SpotlightTopHeading = styled.h3`
    font-size: 35px;
    font-weight: 600;
    color: #000;
    margin-bottom: 20px;
`
const SpotlightTopParag = styled.p`
    color: #e3e3e3;
    font-size: 25px;
    margin-bottom: 50px;
`
const SpotlightBottomCover= styled.ul`
    display: flex;
    flex-wrap: wrap;
    list-style: none;
    justify-content: flex-start;
`
const SpotlightBottomList = styled.li`
    width: 23%;
    margin-right: 45px;
    &:nth-child(4n) {
        margin-right: 0;
    }
`
const SpotlightBottomImageContainer = styled.div`
    width: 100%;
    overflow: hidden;
    height: 250px;
    border-top-left-radius: 15px;
    border-top-right-radius: 15px;
    margin-bottom: 10px;
`
const SpotlightBottomImg = styled.img`
    width: 100%;
    display: block;
    height: 100%;
`
const SpotlightBottomContentContainer = styled.div`
    margin-bottom: 20px;
`
const SpotlightBottomContentContainerHeading = styled.h5`
    font-size: 20px;
    margin-bottom: 5px;
    color: #000;
`
const SpotlightBottomContentContainerCover = styled.div`
    display: flex;
    align-items: center;
`
const SpotlightBottomContentContainerCoverSpan = styled.span`
    display: inline-block;
    width: 5%;
    margin-right: 10px;
`
const SpotlightBottomContentContainerCoverSpanImg = styled.img`
    width: 100%;
    display: block;
`
const SpotlightBottomContentContainerCoverHeading = styled.h6`
    font-size: 15px;
    font-weight: 100;
    color: #000;
`






