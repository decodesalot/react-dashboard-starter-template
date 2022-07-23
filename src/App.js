import { useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import './App.scss';
import Dashboard from './views/Dashboard';
import Login from './views/Login';
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  const handleLogin = () =>
    {
      setUser({
        id: "1",
        name: "Derrick",
      });
      navigate("/admin");
    }

  return (
    <>
      <Routes>
        <Route path="/" element={<Login handleLogin={handleLogin} />} />
        <Route element={<ProtectedRoute user={user} />}>
          <Route path="/admin" element={<Dashboard />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
