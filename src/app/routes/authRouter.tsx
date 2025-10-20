import LoginPage from "@/features/auth/pages/LoginPage";
import RegisterPage from "@/features/auth/pages/RegisterPage";
import TopPage from "@/features/auth/pages/TopPage"; // your create/login button screen

const authRouter = [
  {
    path: "auth",
    children: [
      {
        path: "", // This is "/auth"
        element: <TopPage />,
      },
      {
        path: "login",
        element: <LoginPage />,
      },
      {
        path: "register",
        element: <RegisterPage />,
      },
    ],
  },
];

export default authRouter;
