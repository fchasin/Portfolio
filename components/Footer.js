import SiteLink from './SiteLink';

export default () => (
  <div>
    <SiteLink
      name="LinkedIn"
      link="https://linkedin.com/in/fred-chasin-99460151/"
    />
    {' || '}
    <SiteLink
      name="Email"
      link="mailto:
    fchasin52@gmail.com"
    />
    {' || '}
    <SiteLink name="Github" link="https://github.com/fchasin" />
    {' || '}
    <a
      href="https://dl1.volafile.org/get/CGV6vsQ5yttEk/Fred%20Chasin%20Resume%203-30.pdf"
      download
    >
      My CV
    </a>
  </div>
);
