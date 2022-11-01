import React from 'react'
import NavBar from "../../components/NavBar";
import Link from "next/link";

export const getStaticProps = async() => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await res.json();

  return {
    props: {
      data: data
    }
  }
}

const blog = ({data}) => {
  return (
  <>
  <NavBar/>
 {
   data.slice(0,5).map((currElement) => {
     return(
      <div key={currElement.id} className="ssr-styles">
        <h1>{currElement.id}</h1>
        <Link href={`/blog/${currElement.id}`}><h1>{currElement.title}</h1></Link>
        
      </div>
     )
   
   })
 }
  </>
  
  )
}

export default blog