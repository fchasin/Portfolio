import { Card, CardImg, CardText, CardTitle } from 'reactstrap';

export default props => (
  <div>
    <a href={props.address}>
      <div className="card">
        <Card>
          <CardImg top width="100%" src={props.img} />
          <CardTitle>{props.name}</CardTitle>
          <div className="card_text">
            <CardText>{props.text}</CardText>
          </div>
        </Card>
      </div>
    </a>
    <style jsx>
      {`
        .card {
          border-radius: 40px;
          cursor: pointer;
          transition: 0.2s;
          padding: 10px;
          width: inherit;
          height: inherit;
        }
        .card .card_text {
          border-radius: 0px 0px 40px 40px;
          font-weight: bold;
          height: 40px;
          font-color: #1c1c1c;
        }
        .card:hover {
          transform: scale(0.9, 0.9);
          box-shadow: 5px 5px 30px 15px rgba(0, 0, 0, 0.25),
            -5px -5px 30px 15px rgba(0, 0, 0, 0.22);
        }
      `}
    </style>
  </div>
);
