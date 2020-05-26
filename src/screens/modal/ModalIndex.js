import React, { memo } from "react";
import { Layout } from "#containers";
import { colors } from "#styles";
import CameraRollScreen from "./camera-roll/CameraRollScreen";

const ModalIndex = props => {
  const modalContent = <CameraRollScreen navigation={props.navigation} />;

  return <Layout style={{ backgroundColor: colors.modalViewBackground }}>{modalContent}</Layout>;
};
export default memo(ModalIndex);
