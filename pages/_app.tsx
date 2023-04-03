import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import {setupStore} from "@/store/state";
import {Provider} from "react-redux";
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import {useAppDispatch} from "@/store/hooks/redux";
config.autoAddCss = false

const store = setupStore();

export default function App({ Component, pageProps }: AppProps) {
    console.log = function(){}
  return (
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>

  )
}
