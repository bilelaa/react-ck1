import Name from "./Name";
import Price from "./Price";
import Description from "./Description";
import Image from "./Image";
import Card from "react-bootstrap/Card";
function Template({ product }) {
  return (
    <Card style={{ width: "18rem" }}>
      <Image image={product.imageURL} />
      <Card.Body>
        <Card.Title>
          <Name name={product.name} />
        </Card.Title>
        <Card.Text>
          <Description description={product.description} />
        </Card.Text>
        <Card.Text>
          {" "}
          <Price price={product.price} />
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default Template;
