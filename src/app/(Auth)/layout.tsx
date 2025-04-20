// app/auth/layout.tsx

import { ReactNode } from "react";

type AuthLayoutProps = {
  children: ReactNode;
};

const AuthLayout = ({ children }: AuthLayoutProps) => {
  return (
    <div className="flex gap-6 p-4 min-h-screen max-h-screen">
      <div className="flex w-full min-h-full">
        {/* Left Side: Form Area */}
        <div className="p-8 rounded-lg w-full lg:w-1/2">
          <h2 className="py-12 font-semibold text-orange-600 text-4xl text-center">
            Park Buddy 🚗 
          </h2>
          {children}
        </div>

        {/* Right Side: Image Area */}
        <div
          className="hidden lg:block bg-cover bg-center rounded-lg w-1/2"
          style={{ backgroundImage: 'url("/images/slider-bg.jpg")' }}
        ></div>
      </div>
    </div>
  );
};

export default AuthLayout;
