import React from "react";
import ReduxStoreWrapper from "../ReduxStoreWrapper";
import {
  ModalController,
  ModalProvider,
} from "../../services/ModalControl/index";
import AppWrapper from "../AppWrapper/index";
import "../../styles/reset.css";

const RootWrapper = ({ children }: { children?: React.ReactNode }) => {
  return (
    <ReduxStoreWrapper>
      <ModalProvider>
        <AppWrapper />
        <ModalController />
        {/* TODO: ADD other Global controllers */}
      </ModalProvider>
    </ReduxStoreWrapper>
  );
};

export default RootWrapper;
