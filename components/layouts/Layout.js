import  Head  from "next/head";
import Navbar from "../ui/Navbar";

export const  Layout = ({ children, title }) => {
  return (
    <>
      <Head>
        <title>{title || 'Pokemon app'}</title>
        <meta name="author" content="Omar Rendón" />
        <meta name="description" content={`Información sobre el ${title}`}/>
        <meta name="keywords" content={`pokemon, ${title}, pokedex` }/>
      </Head>
      <Navbar />
      <main style={{
        padding: '0px 20px'
      }}>
        {children}
      </main>
    </>
  )
}
