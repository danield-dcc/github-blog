import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  max-width: 416px;
  width: 100%;

  background-color: ${(props) => props.theme.basePost};
  border-radius: 10px;
  padding: 32px;
  margin-bottom: 32px;
  cursor: pointer;
`

export const CardHeader = styled.div`
  display: flex;
`
export const HeaderTittle = styled.p`
  max-width: 283px;
  font-size: ${(props) => props.theme.font.fontSize.xl};
  font-weight: ${(props) => props.theme.font.fontWeight.bold};
  line-height: ${(props) => props.theme.font.lineHeight.default};
  color: ${(props) => props.theme.baseTitle};
`

export const HeaderTime = styled.time`
  margin-top: 5px;
  p {
    font-size: ${(props) => props.theme.font.fontSize.s};
    font-weight: ${(props) => props.theme.font.fontWeight.regular};
    line-height: ${(props) => props.theme.font.lineHeight.default};
    color: ${(props) => props.theme.baseSpan};
  }
`

export const CardContent = styled.p`
  max-height: 112px;
  margin-top: 20px;
  overflow: hidden;

  font-size: ${(props) => props.theme.font.fontSize.m};
  font-weight: ${(props) => props.theme.font.fontWeight.regular};
  line-height: ${(props) => props.theme.font.lineHeight.default};
  color: ${(props) => props.theme.baseText};
`
