import React from 'react'
import Header from '../components/header'
import Layout from '../components/layout'
import {Link} from 'gatsby'

export default class AboutMe extends React.Component{


    render(){
        return(
            <div>
                <Layout>
            <Header />
      <div className='Hero'>
        <div className="HeroGroup">
          <h1>About Me</h1>
          <p>Bio:</p>
          <p>

I am a Software Engineer who has spent the last seven years working in Business and Operations. Well versed in full-stack javascript, and React. I am known for my strong work ethic in both team and individual settings. I continue to expand my abilities as a full-stack developer, and push myself by building user facing projects.
</p>
          <p>Now Let's Build Something Great.</p>
          <Link to="/aboutme/">Resume</Link>
          </div>
          </div>
            </Layout>
            </div>
        )
    }
}