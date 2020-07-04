import React, { memo, useMemo } from "react";
import { get } from "lodash";
import { Layout } from "#containers";
import { colors } from "#styles";
import CameraRollScreen from "./camera-roll/CameraRollScreen";
import Inspector from "./inspect/Inspector";
import { INSPECT, ROUTE_PARAMS_PATH, CAMERA_ROLL } from "#navigation";

const modalRouter = modalType => {
  switch (modalType) {
    case INSPECT:
      return Inspector;
    case CAMERA_ROLL:
      return CameraRollScreen;
    default:
      return CameraRollScreen;
  }
};

const Modal = props => {
  const modalParams = useMemo(() => get(props, ROUTE_PARAMS_PATH, {}), [props]);

  const Container = useMemo(() => modalRouter(modalParams.type), [modalParams]);

  return (
    <Layout style={{ backgroundColor: colors.modalViewBackground }}>
      <Container {...props} params={modalParams} />
    </Layout>
  );
};

export default memo(Modal);
