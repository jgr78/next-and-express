import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getConditions } from '../redux/actions'
import Message from '../components/generic/message'
import Spinner from '../components/generic/spinner'
import Conditions from '../components/conditions/conditions'
import MainLayout from '../components/layouts/main'
import { ERROR_MESSAGE, INDEX_TITLE } from '../constants/content'

// posts will be populated at build time by getStaticProps()
function Index() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getConditions())
  }, [])
  const conditions = useSelector((state) => state.conditions)
  const error = useSelector((state) => state.error)

  // If there is an error fetching data
  if (error) {
    return <Message text={ERROR_MESSAGE} />
  }
  // If the conditions are not loaded yet
  if (!conditions) {
    return (
      <>
        <Spinner />
      </>
    )
  }

  return (
    <MainLayout title={INDEX_TITLE}>
      <Conditions data={conditions} />
    </MainLayout>
  )
}

export default Index
