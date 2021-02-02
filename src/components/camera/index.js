import DeviceCamera from "react-html5-camera-photo";
import "react-html5-camera-photo/build/css/index.css";

function Camera(props) {
  return <DeviceCamera onTakePhoto={props.onSetCapturedImage} />;
}

export default Camera;
