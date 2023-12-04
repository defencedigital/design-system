import styled from 'styled-components'
import { selectors } from '@royalnavy/design-tokens'

const { color, spacing } = selectors

export const StyledIconRight = styled.div`
  display: inline-flex;
  justify-content: center;
  align-items: center;

  svg {
    color: ${color('neutral', '400')};
    overflow: visible;
    margin-left: ${spacing('6')};
  }
`
