import Head from 'next/head'

const Header = () => {
return (
    <div>
      <Head>
        <title>My Next App</title>
        <meta property="og:title" content="My page title" key="title" />
      </Head>
      <Head>
        <meta property="og:title" content="My new title" key="title" />
      </Head>
    </div>
)
}
export default Header;