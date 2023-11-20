import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  max-width: 864px;
  width: 100%;
  background-color: ${(props) => props.theme.baseProfile};
  padding: 32px 40px;
  gap: 32px;
  border-radius: 10px;
  margin-top: -90px;
`

export const ImageCard = styled.img`
  width: 148px;
  height: 148px;
  border-radius: 8px;
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 8px;
`

export const CardTop = styled.div`
  display: flex;
  justify-content: space-between;
`

export const Tittle = styled.p`
  font-size: ${(props) => props.theme.font.fontSize.xxl};
  font-weight: ${(props) => props.theme.font.fontWeight.bold};
  line-height: 130%;
  color: ${(props) => props.theme.baseTitle};
`

export const TittleLink = styled(Link)`
  display: flex;
  align-items: center;
  gap: 6px;
  border-bottom: 1px solid ${(props) => props.theme.baseProfile};
  cursor: pointer;
  text-decoration: none;

  p {
    font-size: ${(props) => props.theme.font.fontSize.xs};
    font-weight: ${(props) => props.theme.font.fontWeight.regular};
    line-height: ${(props) => props.theme.font.lineHeight.default};
    color: ${(props) => props.theme.blue};
  }

  img {
    width: 12px;
    height: 12px;
  }

  &:hover {
    border-bottom: 1px solid ${(props) => props.theme.blue};
  }
`

export const Description = styled.div`
  height: 52px;
  overflow: hidden;
  margin-top: 8px;

  p {
    font-size: ${(props) => props.theme.font.fontSize.m};
    font-weight: ${(props) => props.theme.font.fontWeight.regular};
    line-height: ${(props) => props.theme.font.lineHeight.default};
    color: ${(props) => props.theme.baseText};
  }
`

export const CardFooter = styled.div`
  margin-top: 24px;
  display: flex;
  gap: 24px;

  span {
    display: flex;
    gap: 4px;
    max-width: 123px;
    width: 100%;

    p {
      font-size: ${(props) => props.theme.font.fontSize.m};
      font-weight: ${(props) => props.theme.font.fontWeight.regular};
      line-height: ${(props) => props.theme.font.lineHeight.default};
      color: ${(props) => props.theme.baseSubtitle};
    }
  }
`
