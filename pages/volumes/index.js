import { introduction } from "../../lib/data";
import Link from "next/link";
import { volumes } from "../../lib/data";
import { useRouter } from "next/router";
import styled from "styled-components";
import Head from "next/head";
import Image from "next/image";

export default function Volumes() {
  const router = useRouter();

  function handleSubmit() {
    const newDirectory = getRandomElement(volumes);
    console.log(newDirectory);
    router.push(`/volumes/${newDirectory.slug}`);
  }

  function getRandomElement(array) {
    return array[Math.floor(Math.random() * array.length)];
  }

  return (
    <>
    <Head>
    {" "}
        <title>The Lord of The Rings</title>
    </Head>
    <StyledBody>
    <StyledMain>
      <StyledTitle>Lord of the Rings</StyledTitle>
      <StyledIntro>{introduction}</StyledIntro>
      <StyledSubtitle>All Volumes</StyledSubtitle>
      <StyledList>
        {volumes.map(({ slug, title }) => {
          return (
            <StyledListItem key={slug}>
              <StyledLink href={`/volumes/${slug}`}>
              <StyledImage
                  src={`/images/${slug}.png`}
                  width={140}
                  height={230}
                  alt="The return of the king"
                />
                 <StyledUndertitle>{title}</StyledUndertitle>
             
              </StyledLink>
            </StyledListItem>
          );
        })}
      </StyledList>
      <button onClick={handleSubmit}>Random Detail Page</button>
      </StyledMain>
      </StyledBody>
    </>
  );
}
const StyledBody = styled.body`
margin: 0;
  background-color: grey;
  width: 100%;
  height: 100vh;
`


const StyledMain = styled.main`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;`

const StyledTitle = styled.h1`
color: white;
font-family: cursive;
`

const StyledIntro = styled.p`
color: white;
font-family: serif;

`
const StyledSubtitle = styled.h2`
color: white;
font-family: Garamond, serif;`

const StyledList = styled.ul`
display: flex;
flex-direction: row;
justify-content: center;

gap: 30px;
list-style: none;
`
const StyledImage = styled(Image)`
  height: auto;
  width: 80px;
  box-shadow: var(--box-shadow-book);
  &:hover {
    box-shadow: var(--box-shadow-book--hover);
  }
  margin-bottom: 1rem;
`;

const StyledListItem = styled.li`
display: flex;
flex-direction: row;
margin-bottom: 1rem;



`
const StyledLink = styled(Link)`
text-decoration: none;
color: var(--color-earth);
`;
const StyledUndertitle = styled.h3`
color: white;
  font-family: Garamond, serif;
  margin-top: 0.5rem;
  font-size: 1rem;

`




