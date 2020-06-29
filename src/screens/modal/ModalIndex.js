import React, { memo } from "react";
import { get } from "lodash";
import { Layout } from "#containers";
import { colors } from "#styles";
import CameraRollScreen from "./camera-roll/CameraRollScreen";
import Inspector from "./inspect/Inspector";
import { INSPECT, ROUTE_PARAMS_PATH } from "#navigation";

const ModalIndex = props => {
  const modalParams = get(props, ROUTE_PARAMS_PATH, {});

  const modalContent = modalType => {
    if (modalType === INSPECT) {
      return <Inspector {...props} params={modalParams} />;
    }

    return <CameraRollScreen {...props} params={modalParams} />;
  };

  return (
    <Layout style={{ backgroundColor: colors.modalViewBackground }}>
      {modalContent(modalParams.type)}
    </Layout>
  );
};

export default memo(ModalIndex);
