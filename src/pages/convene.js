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
          <h1>Convene</h1>
         
    <div style={{}}>
          <p style={{textAlign: 'justify'}}>Convene was built with the intention of mimicking the core functionality of Meetup.com. My team and I built Convene using Django, Python, and S3 for image uploading. As lead developer and github manager, I was responsible for resolving merge conflicts, as well and implimenting complex buisiness logic and creating data models.  </p>
          </div>
          <div style={{paddingTop: '20px'}}>
          <a style={{marginRight: '20px'}} href="https://github.com/Code-With-Jon/Convene-2">GitHub</a>
          <a href="https://convenemeetupapp.herokuapp.com/">Go to Convene</a>

          </div>
         
</div>
</div>
     </Layout>
    </div>
)

export default ProjectDescription