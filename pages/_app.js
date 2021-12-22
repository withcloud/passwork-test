import '../style/globals.css'

const MyApp = ({ Component, pageProps }) => {
  console.log(666)
  return (
    <Component {...pageProps} />
  )
}
export default MyApp
