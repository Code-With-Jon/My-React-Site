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
          <h1>Steady</h1>
         
    <div style={{}}>
          <p style={{textAlign: 'justify'}}>Steady was built as a supporting resource for the Steady mobile dating app. Steady was built using React for frontend, and Express, Node, and MongoDB for the backend. The overall concept is to engage user's by playing a simple logic compatibility game which compares the current users answers to all previous responses. I also incorperated a basic virtual assistant chatbot which responds differently to a users input.  </p>
          </div>
          <div style={{paddingTop: '20px'}}>
          <a style={{marginRight: '20px'}} href="https://github.com/Code-With-Jon/Steady-Site">GitHub</a>
          <a href="https://steady-site.herokuapp.com/">Go to Steady</a>

          </div>
         
</div>
</div>
     </Layout>
    </div>
)

export default ProjectDescription