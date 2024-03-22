import { useNavigate } from "react-router-dom";
import { useGetAuthUserQuery, useLogoutMutation } from "../app/api/auth";
import { useGetUserBalanceQuery } from "../app/api/user";
import { AUTH_STORAGE_KEY, TOKEN_STORAGE_KEY } from "../app/index";

export const Balance = () => {
  const navigate = useNavigate();

  const { data: user } = useGetAuthUserQuery({});
  const { data: userWallet } = useGetUserBalanceQuery({});

  const [logout] = useLogoutMutation();

  const onLogout = async () => {
    logout();
    localStorage.removeItem(AUTH_STORAGE_KEY);
    localStorage.removeItem(TOKEN_STORAGE_KEY);
    navigate(0);
  };

  return (
    <div className="flex min-h-screen">
      <div className="bg-[#e34d00] w-full flex flex-col justify-around">
        <div className="px-20">
          <div className="flex items-center justify-center my-10 space-x-6">
            <h1 className="mb-4 text-5xl font-semibold text-white ">
              Hello {user.name}, Your Balance
            </h1>
            <img
              className="border-2 border-white"
              src="/GTBank_logo.svg.webp"
              alt=""
            />
          </div>
          <div className="flex justify-center space-x-10">
            <h1 className="mb-4 text-5xl font-semibold text-white ">
              N{userWallet?.balance}
            </h1>
          </div>
        </div>
        <div className="flex flex-col items-end justify-end space-y-4">
          <div className="bg-[#903000] flex rounded-sm">
            <button
              onClick={() => navigate("/action")}
              className="px-20 py-4 text-lg font-semibold text-white "
            >
              Perform Another Transaction
            </button>
            <div className="w-2 bg-white"></div>
          </div>
          <div className="bg-[#903000] flex rounded-sm">
            <button
              className="px-20 py-4 text-lg font-semibold text-white"
              onClick={onLogout}
            >
              End
            </button>
            <div className="w-2 bg-white"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
