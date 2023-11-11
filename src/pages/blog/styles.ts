import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 72px;
`

export const Label = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 12px;
`

export const LabelTittle = styled.p`
  font-size: ${(props) => props.theme.font.fontSize.l};
  font-weight: ${(props) => props.theme.font.fontWeight.bold};
  line-height: ${(props) => props.theme.font.lineHeight.default};
  color: ${(props) => props.theme.baseSubtitle};
`

export const LabelPublications = styled.p`
  font-size: ${(props) => props.theme.font.fontSize.s};
  font-weight: ${(props) => props.theme.font.fontWeight.regular};
  line-height: ${(props) => props.theme.font.lineHeight.default};
  color: ${(props) => props.theme.baseSpan};
`

export const LabelInput = styled.input`
  width: 100%;
  background-color: ${(props) => props.theme.baseInput};
  border: 1px solid ${(props) => props.theme.baseBorder};
  padding: 12px 16px;
  color: ${(props) => props.theme.baseText};
  border-radius: 6px;
  outline: none;
  box-sizing: border-box;

  &:focus {
    border: 1px solid ${(props) => props.theme.blue};
  }

  &::placeholder {
    color: ${(props) => props.theme.baseLabel};
  }
`
export const CardWrapper = styled.div`
  margin-top: 32px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  padding-bottom: 32px;
`
