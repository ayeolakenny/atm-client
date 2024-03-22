import { useNavigate } from "react-router-dom";
import { useGetUserByAccountQuery, useTransferMutation } from "../app/api/user";

export const ConfirmTransfer = () => {
  const navigate = useNavigate();

  const transferAccount = localStorage.getItem("transferAccount");
  const transferAmount = localStorage.getItem("transferAmount");

  const { data: account, isLoading } = useGetUserByAccountQuery({
    accountNumber: transferAccount,
  });

  const [transfer] = useTransferMutation();

  const handleTransfer = () => {
    try {
      transfer({
        amount: transferAmount,
        accountNumber: transferAccount,
      }).unwrap();
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
              Transfer
            </h1>
            <img
              className="border-2 border-white"
              src="/GTBank_logo.svg.webp"
              alt=""
            />
          </div>
          <div className="flex justify-center space-x-10">
            {!isLoading && account ? (
              <h1 className="mb-4 text-5xl font-semibold text-center text-white ">
                You are about to transfer N{transferAmount} to <br />{" "}
                {account?.user?.name}
              </h1>
            ) : (
              <h1 className="mb-4 text-5xl font-semibold text-center text-white ">
                Account Not Found
              </h1>
            )}
          </div>
        </div>
        <div className="flex flex-col items-end justify-end space-y-4">
          {!isLoading && account && (
            <div className="bg-[#903000] flex rounded-sm">
              <button
                onClick={handleTransfer}
                className="px-20 py-4 text-lg font-semibold text-white "
              >
                Proceed
              </button>
              <div className="w-2 bg-white"></div>
            </div>
          )}
          <div className="bg-[#903000] flex rounded-sm">
            <button
              className="px-20 py-4 text-lg font-semibold text-white"
              onClick={() => navigate("/thankyou")}
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
