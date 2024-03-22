import { useState } from "react";
import { useLoginMutation } from "../app/api/auth";
import { useAppDispatch } from "../app/data/store";
import { setCredentials } from "../app/data/auth";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const [login] = useLoginMutation();
  const [accountNumber, setAccountNumber] = useState("");
  const [pin, setPin] = useState("");
  const [showError, setShowError] = useState(false);

  const handleLogin = async () => {
    if (!accountNumber || !pin) {
      alert("Fill all fields");
      return;
    }

    try {
      const res = await login({ accountNumber, pin }).unwrap();
      console.log(res);
      dispatch(setCredentials({ ...res }));
      navigate("/action");
    } catch (err: any) {
      setShowError(true);
      // Handle error
      // {statusCode: 401, message: "Wrong credentials", error: "Unauthorized"}
      // console.log(err.data.message)
      console.log("ERROR");
    }
  };

  return (
    <div className="flex min-h-screen">
      {/* Left */}
      <img src="/GTBANK-737.jpg" alt="" className="max-h-screen" />
      {/* Right */}
      <div className="bg-[#e34d00] w-full">
        <div className="px-20">
          <div className="flex my-10 space-x-6">
            <h1 className="mb-4 text-5xl font-semibold text-left text-white ">
              Please Enter your account number and pin
            </h1>
            <img
              className="border-2 border-white"
              src="/GTBank_logo.svg.webp"
              alt=""
            />
          </div>
          <div>
            <div className="flex">
              <div className="flex flex-col space-y-4">
                <div className="flex flex-col space-y-2">
                  <label className="text-3xl font-semibold text-white">
                    Account Number
                  </label>
                  <input
                    type="tel"
                    maxLength={10}
                    className="bg-[#903000] py-5 px-2  text-white font-semibold text-3xl rounded-md"
                    onChange={(e) => setAccountNumber(e.target.value)}
                    value={accountNumber}
                  />
                </div>
                <div className="flex flex-col space-y-2">
                  <label className="text-3xl font-semibold text-white">
                    Pin
                  </label>
                  <input
                    type="password"
                    maxLength={4}
                    className="bg-[#903000] py-5 px-2  text-white font-semibold text-3xl rounded-md"
                    onChange={(e) => setPin(e.target.value)}
                    value={pin}
                  />
                </div>
                {showError && (
                  <h1 className="text-2xl font-semibold text-center text-white">
                    Wrong Credentials
                  </h1>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-end space-y-4">
          <div className="bg-[#903000] flex rounded-sm">
            <button
              onClick={handleLogin}
              className="px-20 py-4 text-lg font-semibold text-white "
            >
              Proceed
            </button>
            <div className="w-2 bg-white"></div>
          </div>
          <div className="bg-[#903000] flex rounded-sm">
            <button className="px-20 py-4 text-lg font-semibold text-white ">
              Cancel
            </button>
            <div className="w-2 bg-white"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
