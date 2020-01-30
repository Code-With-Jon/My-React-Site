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
          <h1>Train Cart</h1>
         
    <div style={{}}>
          <p style={{textAlign: 'justify'}}>Train Cart simulates the ability to track trains, carts of a train, and the passengers abord the train. This projects was written solely in Java, and implimented getters and setters, methods to add and remove train carts, and passengers.  </p>
          </div>
          <div style={{paddingTop: '20px'}}>
          <a style={{marginRight: '20px'}} href="https://github.com/Code-With-Jon/Java-TrainCart">GitHub</a>

          </div>
         
</div>
</div>
     </Layout>
    </div>
)

export default ProjectDescription