import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useChangePinMutation } from "../app/api/user";
import { useLogoutMutation } from "../app/api/auth";
import { AUTH_STORAGE_KEY } from "../app/index";
import { TOKEN_STORAGE_KEY } from "../app/index";

export const ChangePin = () => {
  const navigate = useNavigate();

  const [oldPin, setOldPin] = useState("");
  const [newPin, setNewPin] = useState("");

  const [changePin] = useChangePinMutation();

  const [logout] = useLogoutMutation();

  const onLogout = async () => {
    logout();
    localStorage.removeItem(AUTH_STORAGE_KEY);
    localStorage.removeItem(TOKEN_STORAGE_KEY);
    navigate("/login");
  };

  const handleSetAmount = async () => {
    if (newPin.length !== 4 || oldPin.length !== 4) {
      alert("Pin must be 4 digits");
      return;
    }
    if (newPin.length > 4 || oldPin.length > 4) {
      alert("Pin must be 4 digits");
      return;
    }
    try {
      await changePin({ oldPin, newPin }).unwrap();
      alert("Successfully changed pin, login again");
      onLogout();
      navigate("/login");
    } catch {
      alert("Incorrect Pin");
    }
  };

  return (
    <div className="flex min-h-screen">
      <div className="bg-[#e34d00] w-full flex flex-col justify-around">
        <div className="px-20">
          <div className="flex items-center justify-center my-10 space-x-6">
            <h1 className="mb-4 text-5xl font-semibold text-white ">
              Change Pin
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
                  Old Pin
                </label>
                <input
                  type="password"
                  className="bg-[#903000] py-5 px-6  text-white font-semibold text-3xl rounded-md"
                  onChange={(e) => setOldPin(e.target.value)}
                />
              </div>
              <div className="flex flex-col items-center space-y-2">
                <label className="text-3xl font-semibold text-white">
                  New Pin
                </label>
                <input
                  type="password"
                  className="bg-[#903000] py-5 px-6  text-white font-semibold text-3xl rounded-md"
                  onChange={(e) => setNewPin(e.target.value)}
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
