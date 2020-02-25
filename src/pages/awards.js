import React from 'react'
import Header from '../components/header'
import Layout from '../components/layout'

export default class Awards extends React.Component{


    render(){
        return(
            <div>
                <Layout>
            <Header />
      <div className='Hero'>
        <div className="HeroGroup" style={{maxWidth: '65vw'}}>
          <h1>Awards</h1>
          <li style={{color: 'white', fontSize: 28, paddingTop: '5%'}}>
            First Place - Snapchat & Headspace Diversity Hackathon
        </li>
        
          </div>
          </div>
        </Layout>
        </div>
        )
    }
}