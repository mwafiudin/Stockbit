import "./App.css";
import { Route, Routes, useLocation } from "react-router-dom";

//import main//
import HomePage from "./pages/Home/HomeScreenPage";
import AboutUsPage from "./pages/AboutUs/AboutUsPage";
import AutomationPage from "./pages/Automation/AutomationPage";
import ActivityPage from "./pages/Activity/ActivityPage";
//end import main//

//import float navbar//
import FloatNavbar from "./components/FloatNavbar/FloatNavbar";
//end import float navbar//

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

//import dashboard menu//
import ScreeningListPage from "./pages/ScreeningList/ScreeningListPage";
import OrderListPage from "./pages/OrderList/OrderListPage";
import PortfolioPage from "./pages/Portfolio/PortfolioPage";
import UserCurrencyPage from "./pages/UserCurrency/UserCurrencyPage";
import UserLanguagePage from "./pages/UserLanguage/UserLanguagePage";
//end import dashboard menu//

function App() {
  const location = useLocation();
  const isFloatNav =
    location.pathname === "/" || location.pathname === "/automation" || location.pathname === "/activity";
  return (
    <div className="App select-none">
      {/* float navbar-------------------------------------------------------- */}
      {isFloatNav && <FloatNavbar />}
      {/* end float navbar-------------------------------------------------------- */}

      <Routes>
        {/* route main-------------------------------------------------------- */}
        <Route path="/" element={<HomePage />} />
        <Route path="/about-us" element={<AutomationPage />} />
        <Route path="/automation" element={<ActivityPage />} />
        <Route path="/activity" element={<AboutUsPage />} />
        {/* end route main-------------------------------------------------------- */}

        {/* route user-------------------------------------------------------- */}
        <Route path="/user/settings" element={<UserSettingsPage />} />
        <Route path="/user/profile" element={<UserProfilePage />} />
        <Route path="/user/signin" element={<UserSignInPage />} />
        <Route path="/user/signup" element={<UserSignUpPage />} />
        <Route path="/user/currency" element={<UserCurrencyPage />} />
        <Route path="/user/language" element={<UserLanguagePage />} />
        {/* end route user-------------------------------------------------------- */}

        {/* route securities-------------------------------------------------------- */}
        <Route path="/securities/product" element={<SecuritiesProductOptionPage />} />
        <Route path="/securities/detail" element={<SecuritiesProductDetailPage />} />
        {/* end route securities-------------------------------------------------------- */}

        {/* route dashboard menu-------------------------------------------------------- */}
        <Route path="/screening-list" element={<ScreeningListPage />} />
        <Route path="/order-list" element={<OrderListPage />} />
        <Route path="/portfolio" element={<PortfolioPage />} />
        {/* end route dashboard menu-------------------------------------------------------- */}
      </Routes>
    </div>
  );
}

export default App;
