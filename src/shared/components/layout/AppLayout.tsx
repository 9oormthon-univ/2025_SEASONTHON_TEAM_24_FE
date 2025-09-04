import { type ReactNode } from "react";

type Props = {
  children: ReactNode;
};

function AppLayout({ children }: Props) {
  return (
    <div className="flex justify-center min-h-screen bg-gray-100">
      <div className="app-container bg-white relative px-6">{children}</div>
    </div>
  );
}

export default AppLayout;
