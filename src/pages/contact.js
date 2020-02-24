import React from 'react';
import Header from '../components/header';
import Layout from '../components/layout';
import { Link, navigate } from "gatsby"

const ProjectDescription = props => (
    <div >
     <Header />
     <Layout>
     
     <div className='Hero' >
        <div className="HeroGroup" style={{maxWidth: '65vw'}}>
          <h1>Contact</h1>
         
    <div style={{}}>
          <p style={{textAlign: 'center', marginTop: '4%'}}> collegepulsemag@gmail.com </p>
          </div>
          <div style={{paddingTop: '20px'}}>
        {/* <a style={{marginRight: '20px'}} href="https://github.com/Code-With-Jon/Steady-Site">GitHub</a>
          <a href="https://steady-site.herokuapp.com/">Go to Steady</a>   */}

          </div>
         
</div>
</div>
     </Layout>
    </div>
)

export default ProjectDescription