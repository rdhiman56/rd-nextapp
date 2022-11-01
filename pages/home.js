import React from 'react';
import NavBar from "../components/NavBar";
import styles from '../styles/home.module.css';
import Image from 'next/image';

const home = () => {
  return (<>
    <NavBar />
    <h1 className={styles.homeWrapper}>home</h1>
    {/* <Image 
      src="/logo.png"
      width="300"
      height="100"
    ></Image> */}
      <Image 
      src="https://dmeo.gov.in/sites/default/files/inline-images/dmeo-logo.png"
      width="300"
      height="100"
    ></Image>
    
  </>
  
  )
}

export default home