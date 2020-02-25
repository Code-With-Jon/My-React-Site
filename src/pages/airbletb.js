import React from 'react';
import Header from '../components/header';
import Layout from '../components/layout';

const ProjectDescription = props => (
    <div >
     <Header />
     <Layout>
     
     <div className='Hero' >
        <div className="HeroGroup" style={{maxWidth: '65vw'}}>
          <h1>AirBLetB</h1>
         
    <div style={{}}>
          <p style={{textAlign: 'justify'}}>AirBLetB is a spin off of AirB&B. The core functionality of AirBLetB consists of OAuth, Displaying a list of available rentals, reserving a rental, posting a rental, and displaying a list of reserved rentals. AirBLetB is written using Express, Node, MongoDb, HTML, and CSS.   </p>
          </div>
          <div style={{paddingTop: '20px'}}>
          <a style={{marginRight: '20px'}} href="https://github.com/Code-With-Jon/AirB-LetB">GitHub</a>
          <a href="https://airbletb.herokuapp.com/">Go to AirBLetB</a>

          </div>
         
</div>
</div>
     </Layout>
    </div>
)

export default ProjectDescription