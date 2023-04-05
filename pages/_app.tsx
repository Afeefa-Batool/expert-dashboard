import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Script from 'next/script'

export default function App({ Component, pageProps }: AppProps) {
  return( 
    <>
    <Script id="1"  strategy='lazyOnload' src={`https://code.jquery.com/jquery-3.3.1.slim.min.js`}  />
    <Script id="1"  strategy='lazyOnload' src={`https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js`}  />
    <Script id="1"  strategy='lazyOnload' src={`https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js`}  />
    <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js"></Script>
  <Component {...pageProps} />
  </>
  ) 
}
