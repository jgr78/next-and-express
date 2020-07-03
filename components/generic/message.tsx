// Generic message component
import PropTypes, { InferProps } from "prop-types"
import styled from 'styled-components'
import { colors } from '../../constants/styles'

export default function Message({ text }: InferProps<typeof Message.propTypes>) {
  if (!text) return
  return <Div> {text} </ Div>
}

const Div = styled.div`
  color: ${colors.red};
  font-weight: bold;
  font-size: 18px;
  width: 100%;
  text-align: center;
`

Message.propTypes = {
  text: PropTypes.string.isRequired,
}
