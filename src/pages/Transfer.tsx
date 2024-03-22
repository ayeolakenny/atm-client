import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { selectBalance } from "../app/data/amount";
import { useAppSelector } from "../app/data/store";

export const Transfer = () => {
  const navigate = useNavigate();

  const [transferAmount, setTransferAmount] = useState("");
  const [account, setAccount] = useState("");

  const currBalance = useAppSelector(selectBalance);

  const handleSetAmount = () => {
    if (!transferAmount || !account) {
      alert("Please fill all fields");
      return;
    }
    if (account.length < 10) {
      alert("Please enter a valid account number");
      return;
    }
    if (+transferAmount < 1000) {
      alert("Cannot transfer less than 1000");
      return;
    }
    if (+transferAmount > currBalance) {
      alert("Insufficient funds");
      navigate("/thankyou");
      return;
    }
    localStorage.setItem("transferAmount", transferAmount);
    localStorage.setItem("transferAccount", account);
    navigate("/confirm");
  };
  return (
    <div className="flex min-h-screen">
      <div className="bg-[#e34d00] w-full flex flex-col justify-around">
        <div className="px-20">
          <div className="flex items-center justify-center my-10 space-x-6">
            <h1 className="mb-4 text-5xl font-semibold text-white ">
              Please Enter amount to transfer
            </h1>
            <img
              className="border-2 border-white"
              src="/GTBank_logo.svg.webp"
              alt=""
            />
          </div>
          <div>
            <div className="flex flex-col justify-center space-y-4">
              <div className="flex flex-col items-center space-y-2">
                <label className="text-3xl font-semibold text-white">
                  Account Number
                </label>
                <input
                  type="tel"
                  className="bg-[#903000] py-5 px-6  text-white font-semibold text-3xl rounded-md"
                  onChange={(e) => setAccount(e.target.value)}
                />
              </div>
              <div className="flex flex-col items-center space-y-2">
                <label className="text-3xl font-semibold text-white">
                  Amount
                </label>
                <input
                  type="tel"
                  className="bg-[#903000] py-5 px-6  text-white font-semibold text-3xl rounded-md"
                  onChange={(e) => setTransferAmount(e.target.value)}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-end justify-end">
          <div className="bg-[#903000] flex rounded-sm">
            <button
              onClick={handleSetAmount}
              className="px-20 py-4 text-lg font-semibold text-white "
            >
              Proceed
            </button>
            <div className="w-2 bg-white"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
