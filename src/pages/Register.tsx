import { useState } from "react";
import { useCreateUserMutation } from "../app/api/user";

export const Register = () => {
  const [register] = useCreateUserMutation();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleRegister = async () => {
    if (!name || !email) {
      alert("Name and email are required");
      return;
    }

    await register({ name, email }).unwrap();
    alert("User registered successfully");
  };

  return (
    <div className="flex flex-col text-center">
      <div>Register</div>
      <br />
      <div>
        <label htmlFor="">Name</label>
        <input
          onChange={(e) => setName(e.target.value)}
          type="text"
          className="border-2 border-black"
        />
        <br />
        <br />
        <label htmlFor="">Email</label>
        <input
          onChange={(e) => setEmail(e.target.value)}
          type="text"
          className="border-2 border-black"
        />
      </div>
      <a className="underline cursor-pointer" onClick={handleRegister}>
        REGISTER
      </a>
    </div>
  );
};
