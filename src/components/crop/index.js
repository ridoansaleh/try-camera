import { useState } from "react";
import Cropper from "react-cropper";
import { Button } from "semantic-ui-react";
import "cropperjs/dist/cropper.css";
import { Container, ButtonWrapper } from "./_cropStyle";

function Crop(props) {
  const [cropper, setCropper] = useState();

  const getCropData = () => {
    if (typeof cropper !== "undefined") {
      props.onSetCroppedImage(cropper.getCroppedCanvas().toDataURL());
    }
  };

  const handleRetakeClick = () => {
    props.onSetStep(1);
  };

  const handleDoneClick = () => {
    getCropData();
    props.onSetStep(3);
  };

  return (
    <Container>
      <Cropper
        initialAspectRatio={1}
        src={props.image}
        viewMode={1}
        guides={true}
        minCropBoxHeight={10}
        minCropBoxWidth={10}
        background={false}
        responsive={true}
        checkOrientation={false}
        onInitialized={(instance) => {
          setCropper(instance);
        }}
      />
      <ButtonWrapper>
        <Button content="Retake" onClick={handleRetakeClick} />
        <Button content="Done" primary onClick={handleDoneClick} />
      </ButtonWrapper>
    </Container>
  );
}

export default Crop;
