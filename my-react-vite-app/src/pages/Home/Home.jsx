import React from 'react';
import Layout from "../../components/Layout/Layout";
import  "../../styles/Homestyles.css";
import Sections1 from './Sections1';
import Sections2 from './Sections2';
import Sections3 from './Sections3';
import Sections4 from './Sections4';
import Sections5 from './Sections5';
import Sections6 from './Sections6';
import Sections7 from './Sections7';

  function Home() {
  return (
    <>
        <Layout>
            {/* Home section hero banner  */}

            <Sections1 />

            {/* About section */}
            <Sections2/>

            {/* menu section */}
            <Sections3/>

            {/* home sectios promotion */}
            <Sections4/>

            {/* home barnd ,shop */}
            <Sections5/>

            {/* home section blog */}
            <Sections6/>

            {/* home section contact */}
            <Sections7/>
        </Layout>
    </>
  )
}
export default Home;