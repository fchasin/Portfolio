import ScrollableAnchor from 'react-scrollable-anchor';
import Project from '../components/Project';
import Layout from '../components/Layout';
import Footer from '../components/Footer';

const Index = () => (
  <div id="index">
    <Layout>
      <div className="daBod">
        <div id="header">
          <h1>Hi, I'm Fred,</h1>
          <h2>
            and I work as a full-stack{' '}
            <a href="https://github.com/fchasin">developer</a> in NodeJS and
            React for <a href="http://foodedrop.herokuapp.com">FED</a>.
          </h2>
        </div>
        <div id="projects">
          <h3>Projects</h3>
          <div className="list">
            <Project
              address="https://uscollegelist.herokuapp.com/"
              img={'fas fa-university'}
              text="Easily-navigable search system for US universities using open-source US Gov data."
            />
          </div>
          <div className="list">
            <Project
              address="https://foodedrop.herokuapp.com"
              img="..\static\transparent-logo.png"
              text="Solutions for large-scale food delivery to locations in the greater Baton Rouge area."
            />
          </div>
        </div>
        <div id="footer">
          <div className="contact">
            <Footer id="contact" />
          </div>
        </div>
      </div>
    </Layout>
    <style jsx>{`
      #index {
        display: grid;
        font-family: 'Lato', sans-serif;
        color: #1c1c1c;
      }
      a {
        text-decoration: none;
        color: #ff2353;
      }
      #projects {
        text-align: center;
      }
      #header {
        text-align: left;
        margin: 0 auto;
        width: 60%;
      }
      #footer {
        text-align: center;
      }
      #footer a {
        color: #ff2353;
      }
      .list {
        margin: 2rem auto;
        width: 60%;
        height: 25%;
        align-items: center;
      }
      .cv {
        margin: 0.5rem;
      }
    `}</style>
  </div>
);

export default Index;
