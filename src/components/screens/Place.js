import styled from 'styled-components';
import React, {useState, useEffect} from 'react';
import axios from 'axios';   
import { useParams } from 'react-router-dom';
import location from '../../assets/images/place.svg'

export default function Place() {
    const [place, setPlace] = useState([]);
    const [miniplace, setMiniplace] = useState([])
    const {id} = useParams();

    useEffect(() => {
        axios.get(`https://traveller.talrop.works/api/v1/places/view/${id}`, {
        })
        .then(function (response) {
            setMiniplace(response.data.data.gallery);
            setPlace(response.data.data)
            
        })
        .catch(function (error) {
            console.log(error);
        });
    },[id]); 
    return (
        <>
            <Location>
                <LocationWrapper className = "wrapper">
                    <LocationTop>
                        <LocationTopHeading>{place.name}</LocationTopHeading>
                        <LocationTopCover>
                            <LocationTopSmall>{place.category_name}</LocationTopSmall>
                            <LocationTopSpan>
                                <LocationTopSpanImg src = {location} />
                            </LocationTopSpan>
                            <LocationTopSmallHeading>{place.location}</LocationTopSmallHeading>
                        </LocationTopCover>
                    </LocationTop>
                    <LocationMiddle>
                        <LocationMiddleLeft>
                            <LocationMiddleLeftImg src = {place.image}/>
                        </LocationMiddleLeft>
                        <LocationMiddleRight>
                            <LocationMiddleRightCover>
                                {
                                    miniplace.map((image) => (
                                        <LocationMiddleRightList key = {image.id}>
                                            <LocationMiddleRightListImgContainer>
                                                <LocationMiddleRightListImgContainerImg src = {image.image} alt = "Image"/>
                                             </LocationMiddleRightListImgContainer>
                                        </LocationMiddleRightList>
                                    ))
                                }
                            </LocationMiddleRightCover>
                        </LocationMiddleRight>
                    </LocationMiddle>
                    <LocationBottom>
                        <LocationBottomHeading>Place Detailes</LocationBottomHeading>
                        <LocationBottomParag>{place.description}</LocationBottomParag>

                    </LocationBottom>
                </LocationWrapper>
            </Location>
        </>
    );
}

const Location = styled.section`
    padding: 5% 0;
`
const LocationWrapper = styled.section`
    
`
const LocationTop = styled.div`

`
const LocationTopHeading = styled.h2`
    font-size: 40px;
    font-weight: 600;
    color: #000;
    margin-bottom: 20px;
`
const LocationTopCover = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 20px;
`
const LocationTopSmall = styled.small`
    display: inline-block;
    border: 1px solid #afafaf;
    padding:6px 12px;
    font-size: 15px;
    border-radius: 30px;
    color: #afafaf;
    margin-right: 20px;
    cursor: pointer;
`
const LocationTopSpan = styled.span`
    width: 1%;
    cursor: pointer;
    margin-right: 5px;
`
const LocationTopSpanImg = styled.img`
    display: block;
    width: 100%;
`
const LocationTopSmallHeading = styled.h5`
    font-weight: 100;
    cursor: pointer;
`
const LocationMiddle = styled.div`
    display: flex;
    justify-content: space-between;
`
const LocationMiddleLeft = styled.div`
    width: 48%;
    cursor: zoom-in;

`
const LocationMiddleLeftImg = styled.img`
    display: block;
    width: 100%;
`
const LocationMiddleRight = styled.div`
    width: 48%;
`
const LocationMiddleRightCover = styled.ul`
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    cursor: zoom-in;
`   
const LocationMiddleRightList = styled.li`
    width: 48%;
    margin-bottom: 30px;
    overflow: hidden;
    &:nth-child(2) {
        border-top-right-radius: 30px;
    }
    &:nth-child(4) {
        border-bottom-right-radius: 30px;
    }
`
const LocationMiddleRightListImgContainer = styled.div`
    width: 100%;
   
`   
const LocationMiddleRightListImgContainerImg = styled.img`
    display: block;
    width: 100%;
`
const LocationBottom = styled.div`

`
const LocationBottomHeading = styled.h3`
    font-size: 30px;
    margin-bottom: 30px;
`
const LocationBottomParag = styled.p`
    font-size: 18px;
`


