import { Link, useNavigate } from "react-router-dom";
import { setAmount } from "../app/data/amount";
import { useAppDispatch } from "../app/data/store";
import { useGetUserBalanceQuery } from "../app/api/user";

export const Amount = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const { data: balance } = useGetUserBalanceQuery({});

  const handleSetAmount = (amount: string) => {
    if (balance && parseInt(amount) > balance.balance) {
      alert("Insufficient balance");
      return;
    }
    dispatch(setAmount({ amount }));
    navigate("/denomination");
  };

  return (
    <div className="flex flex-col justify-center space-y-5 bg-[#e34d00] min-h-screen">
      <div className="flex items-center justify-center w-full space-x-10">
        <div>
          <h1 className="text-5xl font-bold text-center text-white">
            Hello, how much would you like to <br /> withdraw on this ATM
          </h1>
        </div>
        <img
          className="border-2 border-white"
          src="/GTBank_logo.svg.webp"
          alt=""
        />
      </div>
      <div className="flex flex-col space-y-16">
        <div className="flex justify-between w-full">
          <div className="bg-[#903000] flex rounded-sm">
            <div className="w-2 bg-white"></div>
            <button
              onClick={() => handleSetAmount("1000")}
              className="px-8 py-4 text-2xl font-semibold text-white "
            >
              ₦ 1000
            </button>
          </div>
          <div className="bg-[#903000] flex rounded-sm">
            <button
              onClick={() => handleSetAmount("10000")}
              className="px-8 py-4 text-2xl font-semibold text-white "
            >
              ₦ 10000
            </button>
            <div className="w-2 bg-white"></div>
          </div>
        </div>
        <div className="flex justify-between w-full">
          <div className="bg-[#903000] flex rounded-sm">
            <div className="w-2 bg-white"></div>
            <button
              onClick={() => handleSetAmount("2000")}
              className="px-8 py-4 text-2xl font-semibold text-white "
            >
              ₦ 2000
            </button>
          </div>
          <div className="bg-[#903000] flex rounded-sm">
            <button
              onClick={() => handleSetAmount("15000")}
              className="px-8 py-4 text-2xl font-semibold text-white "
            >
              ₦ 15000
            </button>
            <div className="w-2 bg-white"></div>
          </div>
        </div>
        <div className="flex justify-between w-full">
          <div className="bg-[#903000] flex rounded-sm">
            <div className="w-2 bg-white"></div>
            <button
              onClick={() => handleSetAmount("3000")}
              className="px-8 py-4 text-2xl font-semibold text-white "
            >
              ₦ 3000
            </button>
          </div>
          <div className="bg-[#903000] flex rounded-sm">
            <button
              onClick={() => handleSetAmount("20000")}
              className="px-8 py-4 text-2xl font-semibold text-white "
            >
              ₦ 20000
            </button>
            <div className="w-2 bg-white"></div>
          </div>
        </div>
        <div className="flex justify-between w-full">
          <div className="bg-[#903000] flex rounded-sm">
            <div className="w-2 bg-white"></div>
            <button
              onClick={() => handleSetAmount("5000")}
              className="px-8 py-4 text-2xl font-semibold text-white "
            >
              ₦ 5000
            </button>
          </div>
          <div className="bg-[#903000] flex rounded-sm">
            <Link to="/others">
              <button className="px-8 py-4 text-2xl font-semibold text-white ">
                Others
              </button>
            </Link>
            <div className="w-2 bg-white"></div>
          </div>
        </div>
      </div>
      <h3 className="text-lg font-normal text-center text-white">
        Press CANCEL to end Transaction
      </h3>
    </div>
  );
};
