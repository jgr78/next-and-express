import { Provider } from 'react-redux'
import App from 'next/app'
import withReduxStore from '../lib/with-redux-store'
import * as Sentry from '@sentry/browser'
import { SENTRY_DSN } from '../constants/sentry'

Sentry.init({ dsn: SENTRY_DSN })

class MyApp extends App {
  render() {
    const { Component, pageProps, store } = this.props
    return (
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    )
  }
}

export default withReduxStore(MyApp)
