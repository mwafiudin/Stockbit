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

//import dashboard menu//
import ScreeningListPage from "./pages/ScreeningList/ScreeningListPage";
import OrderListPage from "./pages/OrderList/OrderListPage";
import PortfolioPage from "./pages/Portfolio/PortfolioPage";
//end import dashboard menu//

function App() {
  return (
    <div className="App select-none">
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
