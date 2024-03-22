import { useNavigate } from "react-router-dom";
import { useWithdrawMutation } from "../app/api/user";
import { selectBalance, selectCurrentAmount } from "../app/data/amount";
import { useAppSelector } from "../app/data/store";
import { useState } from "react";

export const Denomination = () => {
  const navigate = useNavigate();
  const currAmount = useAppSelector(selectCurrentAmount);
  const currBalance = useAppSelector(selectBalance);
  const [withdraw] = useWithdrawMutation();

  const [demoniationError, setDenominationError] = useState(false);

  const [denomination, setDenomination] = useState<"200" | "500" | "1000">();

  function isDecimal(number: number) {
    return Number(number) === number && number % 1 !== 0;
  }

  const handleWithdrawal = async () => {
    if (!denomination) {
      setDenominationError(true);
      return;
    }
    if (currAmount.amount > currBalance) {
      alert("Insufficient funds");
      navigate("/thankyou");
      return;
    }
    try {
      await withdraw({ amount: currAmount.amount }).unwrap();
      navigate("/thankyou");
    } catch (err: any) {
      // Handle error
      // {statusCode: 401, message: "Wrong credentials", error: "Unauthorized"}
      // console.log(err.data.message)
      console.log("ERROR");
    }
  };

  return (
    <div className="flex min-h-screen">
      <div className="bg-[#e34d00] w-full flex flex-col justify-around">
        <div className="px-20">
          <div className="flex items-center justify-center my-10 space-x-6">
            <h1 className="mb-4 text-5xl font-semibold text-white ">
              Choose Preffered Denomination for ₦{currAmount.amount} withdrawal
            </h1>
            <img
              className="border-2 border-white"
              src="/GTBank_logo.svg.webp"
              alt=""
            />
          </div>
          <div className="flex justify-center space-x-10">
            {isDecimal(currAmount.amount / 200) ? (
              <>
                <img
                  src="/500.jpg"
                  onClick={() => setDenomination("500")}
                  className={`${
                    denomination === "500"
                      ? "p-1 bg-gray-600 cursor-pointer w-72"
                      : "cursor-pointer w-72"
                  }`}
                />
                <img
                  src="/1000.webp"
                  onClick={() => setDenomination("1000")}
                  className={`${
                    denomination === "1000"
                      ? "p-1 bg-gray-600 cursor-pointer w-72"
                      : "cursor-pointer w-72"
                  }`}
                />
              </>
            ) : (
              <>
                <img
                  src="/200.jpg"
                  onClick={() => setDenomination("200")}
                  className={`${
                    denomination === "200"
                      ? "p-1 bg-gray-600 cursor-pointer w-72"
                      : "cursor-pointer w-72"
                  }`}
                />
                <img
                  src="/500.jpg"
                  onClick={() => setDenomination("500")}
                  className={`${
                    denomination === "500"
                      ? "p-1 bg-gray-600 cursor-pointer w-72"
                      : "cursor-pointer w-72"
                  }`}
                />
                <img
                  src="/1000.webp"
                  onClick={() => setDenomination("1000")}
                  className={`${
                    denomination === "1000"
                      ? "p-1 bg-gray-600 cursor-pointer w-72"
                      : "cursor-pointer w-72"
                  }`}
                />
              </>
            )}
          </div>
          {demoniationError && (
            <h1 className="mt-4 text-3xl font-semibold text-center text-white">
              Select A Denomination
            </h1>
          )}
        </div>
        <div className="flex flex-col items-end justify-end">
          <div className="bg-[#903000] flex rounded-sm">
            <button
              className="px-20 py-4 text-lg font-semibold text-white"
              onClick={handleWithdrawal}
            >
              Withdraw
            </button>
            <div className="w-2 bg-white"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
