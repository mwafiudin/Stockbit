import "./App.css";
import { Route, Routes } from "react-router-dom";

//import main//
import HomePage from "./pages/Home/HomeScreenPage";
import AboutUsPage from "./pages/AboutUs/AboutUsPage";
//end import main//

//import user//
import UserSettingsPage from "./pages/UserSettings/UserSettingsPage";
import UserProfilePage from "./pages/UserProfile/UserProfilePage";
import UserSignInPage from "./pages/UserSignIn/UserSignInPage";
import UserSignUpPage from "./pages/UserSignUp/UserSignUpPage";
//end import user//

//import securities product//
import SecuritiesProductOptionPage from "./pages/SecuritiesProductOption/SecuritiesProductOptionPage";
import SecuritiesProductDetailPage from "./pages/SecuritiesProductDetail/SecuritiesProductDetailPage";
//end import securities product//

function App() {
  return (
    <div className="App">
      <Routes>
        {/* route main-------------------------------------------------------- */}
        <Route path="/" element={<HomePage />} />
        <Route path="/about-us" element={<AboutUsPage />} />
        {/* end route main-------------------------------------------------------- */}

        {/* route user-------------------------------------------------------- */}
        <Route path="/user/settings" element={<UserSettingsPage />} />
        <Route path="/user/profile" element={<UserProfilePage />} />
        <Route path="/user/signin" element={<UserSignInPage />} />
        <Route path="/user/signup" element={<UserSignUpPage />} />
        {/* end route user-------------------------------------------------------- */}

        {/* route securities-------------------------------------------------------- */}
        <Route path="/securities/product" element={<SecuritiesProductOptionPage />} />
        <Route path="/securities/detail" element={<SecuritiesProductDetailPage />} />
        {/* end route securities-------------------------------------------------------- */}
      </Routes>
    </div>
  );
}

export default App;
