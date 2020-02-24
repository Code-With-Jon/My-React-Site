import React from 'react'
import Header from '../components/header'
import Layout from '../components/layout'
import {Link} from 'gatsby'
import resume from '../Resume.pdf'

export default class AboutMe extends React.Component{


    render(){
        return(
            <div>
                <Layout>
            <Header />
      <div className='Hero'>
        <div className="HeroGroup" style={{maxWidth: '65vw'}}>
          <h1>About Me</h1>
          <p>
            I am a Software Engineer who has spent the last seven years working in Business and Operations. Well versed in full-stack Javascript, I am capable of creating web and mobile apps in a timely manner. I have experience working with frontend languages such as React, backend languages including express, and databases consisting of Firebase, MongoDB, and others . I am known for my strong work ethic in both team and individual settings. I continue to expand my abilities as a full-stack developer, and push myself by building user facing projects.
        </p>
          <p>Now Let's Build Something Great.</p>
          <Link style={{marginRight: '30px'}} to="../viewResume">View Resume</Link>
          <a href={resume} download>Download Resume</a>
          </div>
          </div>
        </Layout>
        </div>
        )
    }
}