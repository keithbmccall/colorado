import React, { memo, useMemo } from "react";
import { get } from "lodash";
import { Layout } from "#containers";
import { colors } from "#styles";
import CameraRollScreen from "./camera-roll/CameraRollScreen";
import InspectorScreen from "./inspect/InspectorScreen";
import ChooserScreen from "./chooser/ChooserScreen";
import { INSPECT, ROUTE_PARAMS_PATH, CAMERA_ROLL, CHOOSER } from "#navigation";

const modalRouter = modalType => {
  switch (modalType) {
    case INSPECT:
      return InspectorScreen;
    case CAMERA_ROLL:
      return CameraRollScreen;
    case CHOOSER:
      return ChooserScreen;
    default:
      return CameraRollScreen;
  }
};

export const Modal = memo(props => {
  const modalParams = useMemo(() => get(props, ROUTE_PARAMS_PATH, {}), [props]);

  const Container = useMemo(() => modalRouter(modalParams.type), [modalParams]);

  return (
    <Layout style={{ backgroundColor: colors.modalViewBackground }}>
      <Container {...props} params={modalParams} />
    </Layout>
  );
});
