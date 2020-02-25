import React from 'react';
import Header from '../components/header';
import Layout from '../components/layout';

const ProjectDescription = props => (
    <div >
     <Header />
     <Layout>
     
     <div className='Hero' >
        <div className="HeroGroup" style={{maxWidth: '65vw'}}>
          <h1>Shopping Cart</h1>
         
    <div style={{}}>
          <p style={{textAlign: 'justify'}}>Shopping Cart functionality provides functionality for adding items to a cart, and tracking total dollar amount of the shopping cart. </p>
          </div>
          <div style={{paddingTop: '20px'}}>
          <a style={{marginRight: '20px'}} href="https://github.com/Code-With-Jon/Java-Shopping-Cart">GitHub</a>

          </div>
         
</div>
</div>
     </Layout>
    </div>
)

export default ProjectDescription