import React, { createContext, useContext, useState } from "react";
import LoginModal from "../../components/common/modals/auth/login/index";
import ThankYouModal from "../../components/common/modals/auth/login/ThankYouModal";
import WheelModal from "../../components/common/modals/auth/login/WheelModal";

interface ModalContextType {
  openLogin: boolean;
  setOpenLogin: (value: boolean) => void;

  openThankYou: boolean;
  setOpenThankYou: (value: boolean) => void;

  openWheelModal: boolean;
  setOpenWheelModal: (value: boolean) => void;
}

// Create Context with Default Values
const ModalContext = createContext<ModalContextType>({
  openLogin: false,
  setOpenLogin: () => {},

  openThankYou: false,
  setOpenThankYou: () => {},

  openWheelModal: false,
  setOpenWheelModal: () => {},
});

// Custom Hook to Use Modal Context
export const useModal = () => useContext(ModalContext);

// Modal Controller Component
export const ModalController = () => {
  const {
    openLogin,
    setOpenLogin,
    openThankYou,
    setOpenThankYou,
    openWheelModal,
    setOpenWheelModal,
  } = useModal();

  return (
    <>
      <LoginModal open={openLogin} onClose={() => setOpenLogin(false)} />
      <ThankYouModal
        open={openThankYou}
        onClose={() => setOpenThankYou(false)}
      />
      <WheelModal
        open={openWheelModal}
        onClose={() => setOpenWheelModal(false)}
      />
    </>
  );
};

// Modal Provider Component
export const ModalProvider = ({ children }: { children: React.ReactNode }) => {
  const [openLogin, setOpenLogin] = useState(false);
  const [openThankYou, setOpenThankYou] = useState(false);
  const [openWheelModal, setOpenWheelModal] = useState(false);

  return (
    <ModalContext.Provider
      value={{
        openLogin,
        setOpenLogin,
        openThankYou,
        setOpenThankYou,
        openWheelModal,
        setOpenWheelModal,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};
