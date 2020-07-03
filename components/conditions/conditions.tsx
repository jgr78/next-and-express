import PropTypes from 'prop-types'
import Card from './card'
import { Element } from '../../interfaces'

type Props = {
  data?: Element[]
}

function Conditions({ data }: Props) {
  if (!data || !data.length) return <></>
  const wrapper = data.map((item, index) => (
    <Card element={item} key={`conditions_${index}`} />
  ))
  return <>{wrapper}</>
}

Conditions.propTypes = {
  data: PropTypes.array,
}

Conditions.defaultProps = {
  data: [],
}

export default Conditions
