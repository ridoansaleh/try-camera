import { useState } from "react";
import { Button, Image, Modal } from "semantic-ui-react";
import Camera from "./components/camera";
import Crop from "./components/crop";
import Preview from "./components/preview";
import { Container } from "./_appStyle";

function App() {
  const [open, setOpen] = useState(false);
  const [step, setStep] = useState(1);
  const [capturedImage, setCapturedImage] = useState(null);
  const [croppedImage, setCroppedImage] = useState(null);

  const handleCaptureImage = (dataUri) => {
    setCapturedImage(dataUri);
    setStep(2);
  };

  const handleSubmitClick = () => {
    setStep(1);
    setCapturedImage(null);
    setOpen(false);
  };

  return (
    <Container>
      <Button content="Open Camera" primary onClick={() => setOpen(true)} />
      <Image src={croppedImage} size="large" />
      <Modal
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
        open={open}
      >
        <Modal.Header>Capture Image</Modal.Header>
        <Modal.Content>
          {step === 1 && <Camera onSetCapturedImage={handleCaptureImage} />}
          {step === 2 && (
            <Crop
              image={capturedImage}
              onSetStep={setStep}
              onSetCroppedImage={setCroppedImage}
            />
          )}
          {step === 3 && (
            <Preview
              image={croppedImage}
              handleSubmitClick={handleSubmitClick}
            />
          )}
        </Modal.Content>
      </Modal>
    </Container>
  );
}

export default App;
