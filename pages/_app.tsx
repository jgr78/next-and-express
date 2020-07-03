import { Provider } from 'react-redux'
import App, { AppContext } from 'next/app'
import withReduxStore from '../lib/with-redux-store'
import * as Sentry from '@sentry/browser'
import { SENTRY_DSN } from '../constants/sentry'

Sentry.init({ dsn: SENTRY_DSN })

interface Props {
  store: any
}

class MyApp extends App<Props> {

  static async getInitialProps({ Component, ctx }: AppContext) {
    return {
      pageProps: (Component.getInitialProps
        ? await Component.getInitialProps(ctx)
        : {}),
    }
  }

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
