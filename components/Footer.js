import SiteLink from './SiteLink';

export default () => (
  <div>
    <SiteLink
      name="LinkedIn"
      link="https://linkedin.com/in/fred-chasin-99460151/"
    />
    {' || '}
    <SiteLink name="Email" link="fchasin52@gmail.com" />
    {' || '}
    <SiteLink name="Github" link="https://github.com/fchasin" />
    {' || '}
    <a href="../FredChasinResume.pdf" download>
      My CV
    </a>
  </div>
);
