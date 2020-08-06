import React from "react";
import {useParams} from "react-router-dom"
import {gql} from "apollo-boost"
import {useQuery} from "@apollo/react-hooks"
import styled from "styled-components";
import { Link } from "react-router-dom";


const GET_MOVIE = gql`
    query getMovie($id: Int!){
        movie(id: $id){
            title
            medium_cover_image
            language
            rating
            description_intro
            genres
        }
    }
`;

const Container = styled.div`
  height: 100vh;
  background-image: linear-gradient(-45deg, #d754ab, #fd723a);
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  color: white;
`;

const Column = styled.div`
  margin-left: 10px;
  width: 50%;
  
`;

const Title = styled.h1`
  font-size: 65px;
  margin-bottom: 15px;
`;

const Subtitle = styled.h4`
  font-size: 35px;
`;

const Description = styled.p`
  font-size: 28px;
`;

const Poster = styled.div`
  width: 25%;
  height: 60%;
  background-color: transparent;
  background-image: url(${props => props.bg});
  background-size: cover;
  background-position: center center;
`;

const Header = styled.header``

const h1 = styled.h1`
font-size: 30px
text-decoration:none
`
const StyledLink = styled(Link)`
text-decoration: none;

&:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
    }
color:white;

`




export default () => {
    let { id } = useParams();
    id = parseInt(id);
    const { loading, data} = useQuery(GET_MOVIE, {
        variables: { id }
    });
    return (
        <Container>
            <Header>
                <StyledLink to={`/`}>
                    <h1> My movies app</h1>
                </StyledLink>
            </Header>
          <Column>
          <Title>{loading ? "Loading..." : data.movie.title}</Title>
            <Subtitle>
                Lang : {data?.movie?.language}
            </Subtitle>
            <Subtitle>
                IMDB Rating : {data?.movie?.rating}
            </Subtitle>
            <Subtitle>
                Genre : {data?.movie?.genres}
            </Subtitle>
            
            
            <Description>{data?.movie?.description_intro}</Description>
  
          </Column>
          <Poster bg = {data?.movie?.medium_cover_image }></Poster>
        </Container>
      );
}