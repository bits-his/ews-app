import React from "react";
import { useRoutes } from "react-router-dom";
import LogIn from "../Auth/LogIn";
import AppIndex from "./AppIndex";

 

function AppNavigation() {
  let element = useRoutes([
    {
      path: "/",
      element: <LogIn />,
      children: [{ index: true }],
    },
    {
      element: <AppIndex />,
      children: [
        { index: true, element: <LogIn /> },

        {
          path: "/messages",
          element: <Overview />,
        },
        {
          path: "/registered-drugs",
          element: <ViewRegisteredDrugs />,
        },
        {
          path: "/register-new-drug",
          element: <RegisterNewDrug />,
        },
        {
          path: "/notifications",
          element: <Notifications />,
        },
        {
          path: "/account",
          element: <Account />,
        },
        {
          path: "/profile",
          element: <Profile />,
        },
        {
          path: "/QRCode",
          element: <QRCodePage />,
        },
        {
          path: "/GetHelp",
          element: <Gethelp />,
        },
        {
          path: "/sole-agents",
          element: <SoleAgent />,
        },
        {
          path: "/create-sole-agent",
          element: <CreateMarketer/>,
        },
        {
          path: "/marketers",
          element: <Marketers />,
        },
        {
          path: "/create-marketer",
          element: <CreateMarketer />,
        }
      ],
    },
    {
      path: "/KYC",
      element: <KYC />,
    },
    {
      path: "/KYCApproval",
      element: <KYCApproval />,
    },
    {
      path: "/view-KYC-approval",
      element: <ViewKYCApproval />,
    },
    {
      path: "/register",
      element: <Register />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/account/passphrass",
      element: <Passphrase />,
    },
    
    {
      path: '/recorver-passphrase',
      element: <RecPassphrase />
    },
    {
      path: '/claim-token',
      element: <ClaimToken />
    },
    {
      path: '*',
      element: <Page404 />
    }
  ]);
  return element;
}
export default AppNavigation;
