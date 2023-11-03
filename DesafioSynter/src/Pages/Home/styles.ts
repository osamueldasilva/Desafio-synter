import styled from "styled-components";

export const Content = styled.section`
display: flex;
flex-direction: column;
width: 100vw;
`

export const Header = styled.header`

width: 100%;
display: flex;
justify-content: center;
`
export const Container = styled.main`
padding: 1rem;
width: 100%;
display: flex;
justify-content: center;

.actions {
    display: flex;
    gap: 1rem;
}

input {
    padding: 0.5rem;

    border: 1px solid #5993D8;
    width: 25rem;
    border-radius: 0.5rem;
    outline: none;
}



button {
background-color: #5993D8;
border: none;
border-radius: 0.5rem;
cursor: pointer;
}
`

export const ResultsSearch = styled.div`
padding: 1rem;
display: flex;
align-items: center;
gap: 1rem;

img {
    height: 10rem;
    width: 10rem;

    border-radius: 50%;
}
`

export const CardsRepos = styled.div`
width: 100%;

display: flex;
justify-content: center;
flex-wrap: wrap;

gap: 1rem;
padding: 1rem;
`

export const Card = styled.div`
max-width: 15rem;
height: auto;

padding: 1rem;
display: flex;
flex-direction: column;
border-radius: 0.5rem;


background-color: #f8f8f8;

.icons {
    display: flex;
    align-items: center;

    gap: 1rem;

    div {
        display: flex;
        align-items: center;
    }
}
`