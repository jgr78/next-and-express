import React, { useState } from 'react'
import PropTypes from "prop-types"
import styled from 'styled-components'
import { DEFAULT_IMG } from '../../constants/properties'
import { colors } from '../../constants/styles'
import { CLOSE, FIND_OUT_MORE } from '../../constants/content'
import { Element } from '../../interfaces'

type Props = {
  element?: Element
}

function Card({ element }: Props) {
  if (!element) return <></>
  const [open, openCard] = useState(false)

  const getImage = (v) => {
    return (
      <Img
        src={v}
        onError={(e) => {
          e.target.onerror = null
          e.target.src = DEFAULT_IMG
        }}
      />
    )
  }
  const getShowMore = (v) => {
    if (!v) return <></>
    return (
      <ShowMore className="showMore" onClick={() => openCard(!open)}>
        {textButton}
      </ShowMore>
    )
  }
  const classInfoName = open ? 'open' : 'close'
  const textButton = open ? CLOSE : FIND_OUT_MORE
  return (
    <Block>
      {getImage(element.image || DEFAULT_IMG)}
      <H2>{element.label || ''}</H2>
      <Snippet className={`snippet ${classInfoName}`}>
        {element.snippet || ''}
      </Snippet>
      {getShowMore(element.snippet)}
    </Block>
  )
}

const Block = styled.div`
  margin-bottom: 40px;
`
const Img = styled.img`
  width: 100%;
  border: 1px solid black;
  background: url(${DEFAULT_IMG}) no-repeat center center;
  background-size: cover;
  min-height: 200px;
`
const H2 = styled.h2`
  font-weight: bold;
  font-size: 20px;
  margin: 10px 0 20px;
`
const Snippet = styled.div`
  width: 100%;
  white-space: ${(props) =>
    props.className.includes('open') ? 'unset' : 'nowrap'};
  overflow: ${(props) =>
    props.className.includes('open') ? 'auto' : 'hidden'};
  text-overflow: ${(props) =>
    props.className.includes('open') ? 'unset' : 'ellipsis'};
  text-align: justify;
`

const ShowMore = styled.div`
  cursor: pointer;
  color: ${colors.green};
  font-weight: bold;
  margin-top: 10px;
`

Card.propTypes = {
  element: PropTypes.object,
}

Card.defaultProps = {
  element: {},
}

export default Card
