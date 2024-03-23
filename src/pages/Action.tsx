import { Link } from "react-router-dom";
import { useGetAuthUserQuery } from "../app/api/auth";
import { useGetUserBalanceQuery } from "../app/api/user";
import { useEffect } from "react";
import { useAppDispatch } from "../app/data/store";
import { setBalance } from "../app/data/amount";

export const Action = () => {
  const dispatch = useAppDispatch();

  const { data: user } = useGetAuthUserQuery({});
  const { data: userWallet } = useGetUserBalanceQuery({});

  useEffect(() => {
    dispatch(setBalance({ balance: userWallet?.balance }));
  }, [userWallet]);

  return (
    <div className="flex flex-col justify-center space-y-5 bg-[#e34d00] min-h-screen">
      <div className="flex items-center justify-center w-full space-x-10">
        <div>
          <h1 className="mb-4 text-2xl font-semibold text-center text-white">
            Welcome {user && user.name}
          </h1>
          <h1 className="text-5xl font-bold text-center text-white">
            What would you like to do?
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
            <Link to="/change-pin">
              <button className="px-8 py-4 text-lg font-semibold text-white ">
                Select / Change Pin
              </button>
            </Link>
          </div>
          <div className="bg-[#903000] flex rounded-sm">
            <Link to="/amount">
              <button className="px-8 py-4 text-lg font-semibold text-white ">
                Withdraw Cash
              </button>
            </Link>
            <div className="w-2 bg-white"></div>
          </div>
        </div>
        <div className="flex justify-between w-full">
          <div className="bg-[#903000] flex rounded-sm">
            <div className="w-2 bg-white"></div>
            <Link to="/transfer">
              <button className="px-8 py-4 text-lg font-semibold text-white ">
                Fund Transfer
              </button>
            </Link>
          </div>
          <div className="bg-[#903000] flex rounded-sm">
            <Link to="/balance">
              <button className="px-8 py-4 text-lg font-semibold text-white ">
                Balance
              </button>
            </Link>
            <div className="w-2 bg-white"></div>
          </div>
        </div>
        <div className="flex justify-between w-full">
          <div className="bg-[#903000] flex rounded-sm">
            <div className="w-2 bg-white"></div>
            <button className="px-8 py-4 text-lg font-semibold text-white ">
              Buy Airtime
            </button>
          </div>
          <div className="bg-[#903000] flex rounded-sm">
            <button className="px-8 py-4 text-lg font-semibold text-white ">
              QuickCredit
            </button>
            <div className="w-2 bg-white"></div>
          </div>
        </div>
        <div className="flex justify-between w-full">
          <div className="bg-[#903000] flex rounded-sm">
            <div className="w-2 bg-white"></div>
            <button className="px-8 py-4 text-lg font-semibold text-white ">
              More Services...
            </button>
          </div>
          <div className="bg-[#903000] flex rounded-sm">
            <button className="px-8 py-4 text-lg font-semibold text-white ">
              Pay Arena / Quickteller
            </button>
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
