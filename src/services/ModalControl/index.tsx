import React, { createContext, useContext, useEffect, useState } from "react";
import LoginModal from "../../components/common/modals/auth/login/index";
import ThankYouModal from "../../components/common/modals/auth/login/ThankYouModal";
import WheelModal from "../../components/common/modals/auth/login/WheelModal";
import RegistrationFormModal from "../../components/common/modals/auth/login/RegistrationFormModal"; // Import Registration Form Modal

interface ModalContextType {
  openLogin: boolean;
  setOpenLogin: (value: boolean) => void;

  openThankYou: boolean;
  setOpenThankYou: (value: boolean) => void;

  openWheelModal: boolean;
  setOpenWheelModal: (value: boolean) => void;

  openRegistrationForm: boolean;
  setOpenRegistrationForm: (value: boolean) => void;
}

// Create Context with Default Values
const ModalContext = createContext<ModalContextType>({
  openLogin: false,
  setOpenLogin: () => {},

  openThankYou: false,
  setOpenThankYou: () => {},

  openWheelModal: false,
  setOpenWheelModal: () => {},

  openRegistrationForm: false,
  setOpenRegistrationForm: () => {},
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
    openRegistrationForm,
    setOpenRegistrationForm,
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
      <RegistrationFormModal
        open={openRegistrationForm}
        onClose={() => setOpenRegistrationForm(false)}
      />
    </>
  );
};

// Modal Provider Component
export const ModalProvider = ({ children }: { children: React.ReactNode }) => {
  const [openLogin, setOpenLogin] = useState(false);
  const [openThankYou, setOpenThankYou] = useState(false);
  const [openWheelModal, setOpenWheelModal] = useState(false);
  const [openRegistrationForm, setOpenRegistrationForm] = useState(false);

  return (
    <ModalContext.Provider
      value={{
        openLogin,
        setOpenLogin,
        openThankYou,
        setOpenThankYou,
        openWheelModal,
        setOpenWheelModal,
        openRegistrationForm,
        setOpenRegistrationForm,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};
