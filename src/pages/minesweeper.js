import React from 'react';
import Header from '../components/header';
import Layout from '../components/layout';

const ProjectDescription = props => (
    <div >
     <Header />
     <Layout>
     
     <div className='Hero' >
        <div className="HeroGroup" style={{maxWidth: '65vw'}}>
          <h1>MineSweeper</h1>
         
    <div style={{}}>
          <p style={{textAlign: 'justify'}}>MineSweeper is a classic game joining luck and logic in order to win. The premise of the game is to avoid hitting a bomb while exploring a grid. As as user, you are able to mark the cells of the grid which the user believes is a bomb by right clicking on a cell. In order to build MineSweeper, I used vanilla JS, and incorperated a recursive search to traverse the grid if there aren't any neighboring bombs to the cell the user clicked on. I also implimented local storage in order to track previous play times.  </p>
          </div>
          <div style={{paddingTop: '20px'}}>
          <a style={{marginRight: '20px'}} href="https://github.com/Code-With-Jon/MineSweeper/blob/master/README.md">GitHub</a>
          <a href="https://code-with-jon.github.io/MineSweeper/">Go to MineSweeper</a>

          </div>
         
</div>
</div>
     </Layout>
    </div>
)

export default ProjectDescription