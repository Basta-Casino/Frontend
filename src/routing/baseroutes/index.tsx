import CheckEmail from "../../layouts/AppWrapper/CheckEmail";
import PasswordReset from "../../layouts/AppWrapper/Passwordreset";
import PasswordResetNew from "../../layouts/AppWrapper/PasswordresetNew";
import PasswordResetScreen from "../../layouts/AppWrapper/PasswordResetScreen";
import RegistrationPage from "../../layouts/AppWrapper/RegistrationForm";
import lazyLoad from "../../layouts/lazyLoader";
import NotFound from "../../layouts/AppWrapper/NotFound";
import VerifyEmail from "../../layouts/AppWrapper/VerifyEmail";

// Dynamic Modules for efficient package loading
const HomePage = lazyLoad(() => import("../../pages/home/page"));

export const route1 = [
  { path: "home", element: <HomePage />, label: "home" },

  { path: "register", element: <RegistrationPage />, label: "Register" },
  {
    path: "reset-password",
    element: <PasswordReset />,
    label: "reset-password",
  },
  { path: "check-email", element: <CheckEmail />, label: "check-email" },
  {
    path: "password-reset-screen",
    element: <PasswordResetScreen />,
    label: "PasswordResetScreen",
  },
  {
    path: "reset-new-password",
    element: <PasswordResetNew />,
    label: "reset-new-password",
  },
  {
    path: "verify-email",
    element: <VerifyEmail />,
    label: "Verify Email",
  },

  { path: "slots", element: <>slotes</>, label: "Slotes" },
  { path: "live-games", element: <>live games</>, label: "Live Games" },
  { path: "tables", element: <>tables</>, label: "Tables" },
  { path: "events", element: <>Events</>, label: "Events" },
  { path: "setting", element: <>setting</>, label: "Setting" },
];

export const route2 = [
  { path: "help", element: <>help</>, className: "flex-1", label: "Help" },
  { path: "faq", element: <>faq</>, className: "flex-1", label: "Faq" },
  {
    path: "support",
    element: <>Support</>,
    className: "flex-2",
    label: "Supports",
  },
  { path: "blog", element: <>Blogs</>, className: "flex-1", label: "Blogs" },
  {
    path: "rank-system",
    element: <>RankSystem</>,
    className: "flex-1",
    label: "Rank System",
  },
];
export const route3 = [
  {
    path: "terms-and-conditions",
    element: <>Terms and policies</>,
    label: "Terms and conditions",
    className: "",
  },
  {
    path: "privacy-and-conditions",
    element: <>Privacy and policies</>,
    label: "Privacy Policies",
    className: "",
  },
];

export const baseroutes = [
  ...route1.map((route) => ({ path: route.path, element: route.element })),
  ...route2.map((route) => ({ path: route.path, element: route.element })),
  ...route3.map((route) => ({ path: route.path, element: route.element })),
  { path: "*", element: <NotFound /> },
];
