import { Image, Button } from "semantic-ui-react";
import { Container, ButtonWrapper } from "./_previewStyle";

function Preview(props) {
  return (
    <Container>
      <Image src={props.image} size="large" />
      <ButtonWrapper>
        <Button
          content="Submit"
          primary
          fluid
          onClick={props.handleSubmitClick}
        />
      </ButtonWrapper>
    </Container>
  );
}

export default Preview;
