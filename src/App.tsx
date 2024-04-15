import { AnimatePresence } from "framer-motion";
import PersistentDrawerLeft from "./components/muiDrawer/MuiDrawer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import MailPage from "./pages/Mail";
import ProfilePage from "./pages/Profile";
import ErrorPage from "./pages/page404";
import SelectPage from "./pages/SelectPage";

const App = () => {
  return (
    <>
      <Router>
        <AnimatePresence>
          <PersistentDrawerLeft />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/select" element={<SelectPage />} />
            <Route path="/mail" element={<MailPage />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/page404" element={<ErrorPage />} />
          </Routes>
        </AnimatePresence>
      </Router>

      {/* <SelectComponent /> */}
    </>
  );
};

export default App;
