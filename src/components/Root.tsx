import { Outlet } from "react-router-dom";

export default function Root() {
  return (
    <h1>
      Im root
      {/* 랜더링 Outlet */}
      <Outlet />
    </h1>
  );
}
