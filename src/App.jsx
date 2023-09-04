import React, { useState, useEffect } from "react";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import LeftColumn from "./components/LeftColumn";
import RightColumn from "./components/RightColumn";
import Login from "./components/Login";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  const handleLogout = () => {
    setUser(null);
  };

  if (!user) {
    return <Login />;
  }

  return (
    <main className="flex">
      <Sidebar onLogout={handleLogout} />
      <div className="flex flex-col flex-1 relative">
        <Navbar />
        <div className="grid md:grid-cols-3 grid-cols-1 w-full">
          <div className="col-span-2">
            <LeftColumn />
          </div>
          <div className="w-full">
            <RightColumn user={user} />
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
