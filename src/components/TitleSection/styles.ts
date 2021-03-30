import styled from 'styled-components'

export const TitleSection = styled.h1`
  width: fit-content;
  margin: 2rem auto 1.8rem auto;
  text-align: center;
  font-weight: 900;
  color: #7f1d1d;
  font-size: 2rem;

  &:after {
    content: '';
    display: block;
    height: 5px;
    width: 30%;
    background-color: #34d399;
    margin: 20px auto 0 auto;
    border-radius: 10px;
  }
`
