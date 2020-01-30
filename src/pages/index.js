import React from "react"
import { Link, navigate } from "gatsby"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Card from "../components/Card"

const IndexPage = () => (
  <div>
    <Layout>
      <div className='Hero'>
        <div className="HeroGroup">
          <h1>Code With Jon</h1>
          <p>Where Concepts Become Creations.</p>
          <p>Now Let's Build Something Great.</p>
          <Link to="/aboutme/">Get To Know Me</Link>
          <div className="Logos">
              <img alt='' src={require("../images/logo-sketch.png")} width="50px" />
              <img alt='' src={require("../images/logo-figma.png")} width="50px" />
              <img alt='' src={require("../images/logo-studio.png")} width="50px" />
              <img alt='' src={require("../images/logo-framer.png")} width="50px" />
              <img alt='' src={require("../images/logo-react.png")} width="50px" />
              <img alt='' src={require("../images/logo-swift.png")} width="50px" />
          </div>
          <svg width="100%" height="172" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill="white">
              <animate repeatCount="indefinite" fill="freeze" attributeName="d" dur="10s" values="M0 25.9086C277 84.5821 433 65.736 720 25.9086C934.818 -3.9019 1214.06 -5.23669 1442 8.06597C2079 45.2421 2208 63.5007 2560 25.9088V171.91L0 171.91V25.9086Z;

              M0 86.3149C316 86.315 444 159.155 884 51.1554C1324 -56.8446 1320.29 34.1214 1538 70.4063C1814 116.407 2156 188.408 2560 86.315V232.317L0 232.316V86.3149Z;

              M0 53.6584C158 11.0001 213 0 363 0C513 0 855.555 115.001 1154 115.001C1440 115.001 1626 -38.0004 2560 53.6585V199.66L0 199.66V53.6584Z;
              
              M0 25.9086C277 84.5821 433 65.736 720 25.9086C934.818 -3.9019 1214.06 -5.23669 1442 8.06597C2079 45.2421 2208 63.5007 2560 25.9088V171.91L0 171.91V25.9086Z
              "
              />
              </path>
          </svg>
        </div>
      </div>
    </Layout>
    <div className="Cards" id="projects">
      <h2> Projects</h2>
      <div className="CardGroup" >
            <Card title="Steady"
            text="React | Express | MongoDb | Node "
            image={require("../images/wallpaper.jpg")
            }
           nav={'../steady'}
            />

            <Card title="AirBLetB"
            text="MongoDB | Express | Node"
            image={require("../images/wallpaper3.jpg")}
            nav={'../airbletb'}/>

            <Card title="Convene"
            text="Python | Jdango | AWS"
            image={require("../images/wallpaper4.jpg")}
            nav={'../convene'}
            />

            <Card title="Minesweeper"
            text="Vanilla JS | CSS | HTML"
            image={require("../images/wallpaper4.jpg")}
            nav={'../minesweeper'}
            />

            <Card title="Train Cart"
            text="Java"
            image={require("../images/wallpaper2.jpg")}
            nav={'../traincart'}/>

            <Card title="Shortest Path Matrix"
            text="Java"
            image={require("../images/wallpaper2.jpg")}
            nav={'../matrix'}/>

            <Card title="Shopping Cart"
            text="Java"
            image={require("../images/wallpaper2.jpg")}
            nav={'../shoppingCart'}/>
      </div>
    </div>
    <footer>
          © Jonathan Fink {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://github.com/Code-With-Jon">Love</a>
        </footer>
  </div>
);

export default IndexPage
