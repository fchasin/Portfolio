export default props => (
  <div>
    <a href={props.address}>
      <h4>
        <i class={props.img} className="icon" />
        {'  '}
        {props.name}
      </h4>
    </a>
    <style jsx>
      {`
        .icon {
          font-size: 2rem;
        }
      `}
    </style>
  </div>
);
