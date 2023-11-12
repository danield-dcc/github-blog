import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 864px;
  width: 100%;
  background-color: ${(props) => props.theme.baseProfile};
  padding: 32px 40px;
  border-radius: 10px;
  margin-top: -90px;
`

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`

export const GoBack = styled.div`
  display: flex;
  align-items: center;
  gap: 3.5px;
  cursor: pointer;
  svg {
    color: ${(props) => props.theme.blue};
    width: 12px;
    height: 12px;
  }
`
export const HeaderText = styled.p`
  font-size: ${(props) => props.theme.font.fontSize.xs};
  font-weight: ${(props) => props.theme.font.fontWeight.bold};
  line-height: ${(props) => props.theme.font.lineHeight.default};
  color: ${(props) => props.theme.blue};
`

export const GoToGithub = styled(Link)`
  display: flex;
  align-items: center;
  gap: 3.5px;
  cursor: pointer;
  text-decoration: none;

  svg {
    color: ${(props) => props.theme.blue};
    width: 12px;
    height: 12px;
  }
`

export const Tittle = styled.p`
  margin-top: 20px;
  font-size: ${(props) => props.theme.font.fontSize.xxl};
  font-weight: ${(props) => props.theme.font.fontWeight.bold};
  line-height: ${(props) => props.theme.font.lineHeight.normal};
  color: ${(props) => props.theme.baseTitle};
`

export const Footer = styled.div`
  display: flex;
  margin-top: 24px;
  gap: 24px;

  span {
    display: flex;
    gap: 4px;

    p {
      font-size: ${(props) => props.theme.font.fontSize.m};
      font-weight: ${(props) => props.theme.font.fontWeight.regular};
      line-height: ${(props) => props.theme.font.lineHeight.default};
      color: ${(props) => props.theme.baseSubtitle};
    }
  }
`
