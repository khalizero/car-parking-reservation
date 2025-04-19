import React, { useState, useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SplashScreen from "./components/SplashScreen";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import FullPageSection from "./components/AnimWrapper/FullPageSection";
import { DarkModeProvider } from "./components/darkmode/DarkModeContext";

// Import Pages
import HeroSection from "./components/HeroSection";
import Feature from "./components/FeaturesSection";
import AboutUs from "./components/about";
import AuthPage from "./components/login/AuthPage";
import AdminPage from "./components/admin/admin";
import UsersPage from "./components/admin/UserPage";
import NotificationsPage from "./components/admin/NotificationsPage";
import PaymentDetailsPage from "./components/admin/PaymentDetail";
import RemoveUserPage from "./components/admin/RemoveUser";
import ChangeStatusPage from "./components/admin/ChangeStatus";
import SettingsPage from "./components/admin/Setting";
import { PaymentPlans } from "./components/payment/PaymentPlan";
import BookNow from "./components/payment/bookNow";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <Navbar />
          <FullPageSection>
            <HeroSection />
          </FullPageSection>
          <AboutUs />
          <Footer />
        </>
      ),
    },
    {
      path: "/login",
      element: <AuthPage />,
    },
    {
      path: "/signup",
      element: <AuthPage isSignUp />,
    },
    {
      path: "/dashboard",
      element: (
        <>
          <Navbar />
          <FullPageSection>
            <HeroSection />
          </FullPageSection>
          <Feature />
          <PaymentPlans />
          <AboutUs />
          <Footer />
        </>
      ),
    },
    {
      path: "/admin",
      element: (
        <>
          <Navbar />
            <AdminPage />
        </>
      ),
    },
    {
      path: "/admin/users",
      element: (
        <>
          <Navbar />
            <UsersPage />
        </>
      ),
    },
    {
      path: "/admin/notifications",
      element: (
        <>
          <Navbar />
            <NotificationsPage />
        </>
      ),
    },
    {
      path: "/admin/payment-details",
      element: (
        <>
          <Navbar />
            <PaymentDetailsPage />
        </>
      ),
    },
    {
      path: "/admin/remove-user",
      element: (
        <>
          <Navbar />
            <RemoveUserPage />
        </>
      ),
    },
    {
      path: "/admin/change-status",
      element: (
        <>
          <Navbar />
            <ChangeStatusPage />
        </>
      ),
    },
    {
      path: "/admin/settings",
      element: (
        <>
          <Navbar />
            <SettingsPage />
        </>
      ),
    },
    {
      path: "/booknow",
      element: (
        <>
          <Navbar />
          <FullPageSection>
            <BookNow />
            </FullPageSection>
          <FullPageSection>
          <Footer />
          </FullPageSection>
        </>
      ),
    },
  ]);

  return (
    <DarkModeProvider >
      <div className="bg-gray-100 text-gray-800 dark:bg-primary dark:text-white transition bg-center bg-cover bg-no-repeat min-h-screen" style={{
        backgroundImage: "url('./pngegg.png')", // Replace with your background image path
      }}>
        {isLoading ? <SplashScreen /> : <RouterProvider router={router} />}
      </div>
    </DarkModeProvider>
  );
}

export default App;
