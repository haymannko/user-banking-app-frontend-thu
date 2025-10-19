import {
  Confirmation,
  TransferAccount,
  TransferLayout,
  TransferPage,
} from "../constants/lazyload";

const transferRouter = [
  {
    path: "transfer",
    element: <TransferLayout />,
    children: [
      { index: true, element: <TransferPage /> },
      { path: "recipient", element: <TransferAccount /> },
      { path: "confirmation", element: <Confirmation /> },
    ],
  },
];

export default transferRouter;
