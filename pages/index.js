import Project from '../components/Project';
import Link from 'next/link';
import Header from '../components/Header';
import Layout from '../components/Layout';

const PostLink = props => (
  <li>
    <Link href={`/post?title=${props.title}`}>
      <a>{props.title}</a>
    </Link>
  </li>
);

const Index = () => (
  <div>
    <Layout>
      <p>Hello Next.js</p>
      <Project name={'first'} />
      <Link href="/cv" as="curriculum+vitae">
        <a style={{ fontSize: 20 }}>
          <p>My CV</p>
        </a>
      </Link>
      <div>
        <h1>My Blog</h1>
        <ul>
          <PostLink title="Hello Next.js" />
          <PostLink title="Learn Next.js is awesome" />
          <PostLink title="Deploy apps with Zeit" />
        </ul>
      </div>
    </Layout>
  </div>
);

export default Index;
