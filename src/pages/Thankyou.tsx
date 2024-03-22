import { useNavigate } from "react-router-dom";
import { useLogoutMutation } from "../app/api/auth";
import { AUTH_STORAGE_KEY } from "../app/index";
import { TOKEN_STORAGE_KEY } from "../app/index";

export const Thankyou = () => {
  const navigate = useNavigate();

  const [logout] = useLogoutMutation();

  const onLogout = async () => {
    logout();
    localStorage.removeItem(AUTH_STORAGE_KEY);
    localStorage.removeItem(TOKEN_STORAGE_KEY);
    navigate("/");
  };

  return (
    <div className="flex min-h-screen">
      {/* Left */}
      <img src="/ad2.jpg" alt="" className="max-h-screen" />
      {/* Right */}
      <div className="bg-[#e34d00] w-full flex flex-col justify-between py-4">
        <div className="px-20">
          <div className="flex my-10 space-x-6">
            <h1 className="mb-4 text-4xl font-semibold text-left text-white ">
              Thank You For Banking With Us
            </h1>
            <img
              className="border-2 border-white"
              src="/GTBank_logo.svg.webp"
              alt=""
            />
          </div>
          <div>
            <h1 className="mb-4 text-4xl font-semibold text-center text-white ">
              Take Your Card
            </h1>
          </div>
        </div>
        <div className="flex flex-col items-end space-y-4">
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
              onClick={onLogout}
              className="px-20 py-4 text-lg font-semibold text-white "
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
