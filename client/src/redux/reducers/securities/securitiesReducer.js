import { createSlice } from "@reduxjs/toolkit";
import stockbitLogo from "../../../icons/stockbit-logo.png";
// import stockbitLogoBig from "../../../icons/stockbit-logo-big.png";

export const securitiesSlice = createSlice({
  name: "securities",
  initialState: {
    securitiesItems: [
      {
        to: "/securities/product/stockbit",
        // icon: <StockBitIcon />,
        icon: stockbitLogo,
        //   icon: "a",
        title: "Stockbit",
        idAccSecurity: 1,
        email: "ayam",
        password: "qwerty123",
        pin: 123456,
      },
      {
        to: "/securities/product/other1",
        // icon: "b",
        icon: stockbitLogo,
        title: "{Other Securities 1}",
        idAccSecurity: 2,
        email: "",
        password: "",
        pin: 0,
      },
      {
        to: "/securities/product/other2",
        icon: "c",
        title: "{Other Securities 2}",
        idAccSecurity: 3,
        email: "",
        password: "",
        pin: 0,
      },
    ],
  },
  reducers: {
    setStockbitEmail: (state, action) => {
      state.securitiesItems[0].email = action.payload;
    },
    setStockbitPassword: (state, action) => {
      state.securitiesItems[0].password = action.payload;
    },
    setStockbitPin: (state, action) => {
      state.securitiesItems[0].pin = action.payload;
    },
    setOther1Email: (state, action) => {
      state.securitiesItems[1].email = action.payload;
    },
    setOther1Password: (state, action) => {
      state.securitiesItems[1].password = action.payload;
    },
    setOther1Pin: (state, action) => {
      state.securitiesItems[1].pin = action.payload;
    },
    setOther2Email: (state, action) => {
      state.securitiesItems[2].email = action.payload;
    },
    setOther2Password: (state, action) => {
      state.securitiesItems[2].password = action.payload;
    },
    setOther2Pin: (state, action) => {
      state.securitiesItems[2].pin = action.payload;
    },
  },
});

export const {
  setStockbitEmail,
  setStockbitPassword,
  setStockbitPin,
  setOther1Email,
  setOther1Password,
  setOther1Pin,
  setOther2Email,
  setOther2Password,
  setOther2Pin,
} = securitiesSlice.actions;

export default securitiesSlice.reducer;
