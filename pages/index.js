import Project from '../components/Project';
import Link from 'next/link';
import Layout from '../components/Layout';

const Index = () => (
  <div>
    <Layout>
      <p>Hello Next.js</p>
      <Project name={'first'} />
      <Link href="/cv">
        <a style={{ fontSize: 20 }}>
          <p>My CV</p>
        </a>
      </Link>
    </Layout>
  </div>
);

export default Index;
