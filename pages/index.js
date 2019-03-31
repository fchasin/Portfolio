import ScrollableAnchor from 'react-scrollable-anchor';
import Project from '../components/Project';
import Layout from '../components/Layout';
import Footer from '../components/Footer';

const Index = () => (
  <div id="index">
    <Layout>
      <div className="daBod">
        <div>
          <h1>Hi, I'm Fred,</h1>
          <h2>
            and I work as a full-stack{' '}
            <a href="https://github.com/fchasin">developer</a> in NodeJS and
            React for <a href="http://foodedrop.herokuapp.com">FED</a>.
          </h2>
        </div>
        <div id="projects">
          <h3>Projects</h3>
          <div>
            <Project
              className="list"
              name="College List Project"
              address="https://uscollegelist.herokuapp.com/"
              img={'fas fa-university'}
            />
          </div>
          <div>
            <Project
              className="list"
              name="FoodEDrop"
              address="https://foodedrop.herokuapp.com"
              img={'fas fa-utensils'}
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
      p {
      }
      a {
        text-decoration: none;
        color: #ff2353;
      }
      #projects {
        text-align: center;
      }
      #header {
        text-align: right;
      }
      #footer {
        text-align: center;
      }
      .list {
        width: 25%;
        height: 25%;
        text-align: center;
        position: relative;
      }
      .cv {
        margin: 0.5rem;
      }
    `}</style>
  </div>
);

export default Index;
