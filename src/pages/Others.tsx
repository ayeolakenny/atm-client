import { useState } from "react";
import { useAppDispatch } from "../app/data/store";
import { useNavigate } from "react-router-dom";
import { setAmount } from "../app/data/amount";
import { useGetUserBalanceQuery } from "../app/api/user";

export const Others = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const { data: balance } = useGetUserBalanceQuery({});

  const [otherAmount, setOtherAmount] = useState("");

  const handleSetAmount = () => {
    if (balance && +otherAmount > balance.balance) {
      alert("Insufficient balance");
      return;
    }

    if (!otherAmount) {
      alert("Please enter amount");
      return;
    }

    if (+otherAmount < 1000) {
      alert("Cannot withdraw less than 1000");
      return;
    }
    dispatch(setAmount({ amount: otherAmount }));
    navigate("/denomination");
  };
  return (
    <div className="flex min-h-screen">
      <div className="bg-[#e34d00] w-full flex flex-col justify-around">
        <div className="px-20">
          <div className="flex items-center justify-center my-10 space-x-6">
            <h1 className="mb-4 text-5xl font-semibold text-white ">
              Please Enter amount to withdraw
            </h1>
            <img
              className="border-2 border-white"
              src="/GTBank_logo.svg.webp"
              alt=""
            />
          </div>
          <div>
            <div className="flex justify-center">
              <div className="flex flex-col items-center space-y-2">
                <label className="text-3xl font-semibold text-white">
                  Amount
                </label>
                <input
                  type="tel"
                  className="bg-[#903000] py-5 px-6  text-white font-semibold text-3xl rounded-md"
                  onChange={(e) => setOtherAmount(e.target.value)}
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
