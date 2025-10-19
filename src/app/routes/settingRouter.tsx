import {
  NickNamesPage,
  ProfileEditPage,
  ProfilePage,
  SettingLayout,
  SettingPage,
} from "../constants/lazyload";

const settingRouter = [
  {
    path: "/settings",
    element: <SettingLayout />,
    children: [
      {
        index: true,
        element: <SettingPage />,
      },
      {
        path: "profile",
        element: <ProfilePage />,
      },
      {
        path: "profile/edit",
        element: <ProfileEditPage />,
      },
      {
        path: "nicknames",
        element: <NickNamesPage />,
      },
    ],
  },
];

export default settingRouter;
