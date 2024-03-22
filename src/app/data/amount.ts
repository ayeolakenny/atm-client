import { createSlice } from "@reduxjs/toolkit";

const amount = createSlice({
  name: "amount",
  initialState: {
    amount: 0,
    balance: 0,
    transferAmount: 0,
    transferAccount: "",
  },

  reducers: {
    setAmount: (state, action) => {
      const { amount } = action.payload;
      state.amount = amount;
    },
    setBalance: (state, action) => {
      const { balance } = action.payload;
      state.balance = balance;
    },

    setTransferDetails: (state, action) => {
      console.log(action.payload);
      const { transferAccount, transferAmount } = action.payload;
      state.transferAccount = transferAccount;
      state.transferAmount = transferAmount;
    },
  },
});

export const { setAmount, setBalance, setTransferDetails } = amount.actions;

export default amount.reducer;

export const selectCurrentAmount = (state: any) => state.amount;
export const selectBalance = (state: any) => state.balance;
export const selectTransferAmount = (state: any) => state.transferAmount;
export const selectTransferAccount = (state: any) => state.transferAccount;
