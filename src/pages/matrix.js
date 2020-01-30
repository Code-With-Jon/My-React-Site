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
          <h1>Shortest Path Matrix</h1>
         
    <div style={{}}>
          <p style={{textAlign: 'justify'}}>Shortest Path Matrix is a Java written program which account for nodes on a graph(matrix) and returns the shortest path from the start Node to the end Node.  </p>
          </div>
          <div style={{paddingTop: '20px'}}>
          <a style={{marginRight: '20px'}} href="https://github.com/Code-With-Jon/Java-Matrix">GitHub</a>

          </div>
         
</div>
</div>
     </Layout>
    </div>
)

export default ProjectDescription