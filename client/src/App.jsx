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

  //cleaning url path string for pathname
  let currentPathname = location.pathname.match(/\/[^&=?]*|\/$/);
  let resultPathname;
  if (currentPathname) {
    resultPathname = currentPathname[0];
  }

  //conditional rendering for floatNav
  const isFloatNav = resultPathname === "/" || resultPathname === "/automation" || resultPathname === "/activity";

  //conditional props for activeTab in floatNav
  let currentFloatNav;
  switch (resultPathname) {
    case "/":
      currentFloatNav = "Home";
      break;
    case "/automation":
      currentFloatNav = "Automation";
      break;
    case "/activity":
      currentFloatNav = "Activity";
      break;

    default:
      break;
  }
  return (
    <div className="App select-none">
      {/* float navbar-------------------------------------------------------- */}
      {isFloatNav && <FloatNavbar currentFloatNav={currentFloatNav} />}
      {/* end float navbar-------------------------------------------------------- */}

      <Routes>
        {/* route main-------------------------------------------------------- */}
        <Route path="/" element={<HomePage />} />
        <Route path="/about-us" element={<AboutUsPage />} />
        <Route path="/automation" element={<AutomationPage />} />
        <Route path="/activity" element={<ActivityPage />} />
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
