import React, { memo, useMemo } from "react";
import { get } from "lodash";
import Layout from "#containers/layouts/Layout";
import CameraRollScreen from "./camera-roll/CameraRollScreen";
import InspectorScreen from "./inspect/InspectorScreen";
import ChooserScreen from "./chooser/ChooserScreen";
import ModalNavigator from "./navigator/ModalNavigator";
import { CAMERA_ROLL, CHOOSER, INSPECT, ROUTE_PARAMS_PATH } from "#navigation/navigators";
import { colors } from "#styles";

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
      <ModalNavigator {...props} params={modalParams} />
      <Container {...props} params={modalParams} />
    </Layout>
  );
});
