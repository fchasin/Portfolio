import Link from 'next/link';

import Project from '../components/Project';
import Layout from '../components/Layout';
import Footer from '../components/Footer';

const Index = () => (
  <div id="index">
    <Layout>
      <div>
        I'm Fred Chasin, and I work as a{' '}
        <a href="https://github.com/fchasin">developer</a> in NodeJS and React,
        currently living in New Orleans.
      </div>
      <Project name={'first'} />
      
        <a download="../FredChasinResume.pdf" style={{ fontSize: 20 }}>My CV</a>
      <Footer />
    </Layout>
    <style jsx>{`
      #index {
        display: grid;
      }
      p {
        font-family: 'Lato', sans-serif;
        font-size: 10rem;
      }
      a {
        text-decoration: none;
        color: black;
      }
    `}</style>
  </div>
);

export default Index;
