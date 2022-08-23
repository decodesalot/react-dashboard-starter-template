import { Navigate, Outlet } from "react-router-dom";
import Layout from "./Layout";
const ProtectedRoute = ({ user, redirectPath = "/", children }) => {
  if (!user) {
    return <Navigate to={redirectPath} replace />;
  }

  return children ? (
    children
  ) : (
    <Layout>
      <Outlet />
    </Layout>
  );
};

export default ProtectedRoute;
