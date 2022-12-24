import { useState, ChangeEvent, FormEvent, FC } from "react";
import { useAppDispatch, useAppSelector } from "../store/storeHooks";
import { addNewUser } from "../store/userReducer";

export const FormUser: FC = () => {
  const dispatch = useAppDispatch();
  const [name, setName] = useState<string>("");
  const [username, setUsername] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [city, setCity] = useState<string>("");
  const [street, setStreet] = useState<string>("");
  const [zipcode, setZipcode] = useState<string>("");
  const login = useAppSelector((state) => state.login.login);

  const handleName = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleNick = (e: ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };

  const handleEmail = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleCity = (e: ChangeEvent<HTMLInputElement>) => {
    setCity(e.target.value);
  };

  const handleStreet = (e: ChangeEvent<HTMLInputElement>) => {
    setStreet(e.target.value);
  };

  const handleZip = (e: ChangeEvent<HTMLInputElement>) => {
    setZipcode(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(
      addNewUser({ name, username, email, city, street, zipcode, id: "1" })
    );
    setName("");
    setUsername("");
    setEmail("");
    setCity("");
    setStreet("");
    setZipcode("");
  };

  const poles = [];
  ["name", "username", "email"].forEach((p) => {
    poles.push(
      <div className="flex">
        <label className="text-2xl pr-4" htmlFor={p}>
          {p}
        </label>
        <input
          className="bg-transparent border-b border-teal-400 py-3 text-1xl outline-none"
          type="text"
          id={p}
        />
      </div>
    );
  });

  if (login === "formUser") {
    return (
      <div className="w-full h-full bg-purple-900 text-teal-400 flex border border-red-500">
        <form className="flex flex-col w-2/3 mx-auto" onSubmit={handleSubmit}>
          <h1 className="text-5xl text-center py-8">Create new user!</h1>
          <div className="flex justify-center">
            <label className="text-2xl pr-4 px-4" htmlFor="name">
              Name
            </label>
            <input
              className="bg-transparent border-b border-teal-400 py-3 text-1xl outline-none w-2/3"
              type="text"
              id="name"
              value={name}
              onChange={(e) => handleName(e)}
            />
          </div>
          <div className="flex justify-center">
            <label className="text-2xl pr-4 px-4" htmlFor="nickName">
              NickName
            </label>
            <input
              className="bg-transparent border-b border-teal-400 py-3 text-1xl outline-none w-2/3"
              type="text"
              id="nickName"
              value={username}
              onChange={(e) => handleNick(e)}
            />
          </div>
          <div className="flex justify-center">
            <label className="text-2xl pr-4 px-4" htmlFor="email">
              Email
            </label>
            <input
              className="bg-transparent border-b border-teal-400 py-3 text-1xl outline-none w-2/3"
              type="email"
              id="email"
              value={email}
              onChange={(e) => handleEmail(e)}
            />
          </div>
          <div className="flex justify-center">
            <label className="text-2xl pr-4 px-4" htmlFor="city">
              City
            </label>
            <input
              className="bg-transparent border-b border-teal-400 py-3 text-1xl outline-none w-2/3"
              type="text"
              id="city"
              value={city}
              onChange={(e) => handleCity(e)}
            />
          </div>
          <div className="flex justify-center">
            <label className="text-2xl pr-4 px-4" htmlFor="street">
              Street
            </label>
            <input
              className="bg-transparent border-b border-teal-400 py-3 text-1xl outline-none w-2/3"
              type="text"
              id="street"
              value={street}
              onChange={(e) => handleStreet(e)}
            />
          </div>
          <div className="flex justify-center">
            <label className="text-2xl pr-4 px-4" htmlFor="zipcode">
              Zipcode
            </label>
            <input
              className="bg-transparent border-b border-teal-400 py-3 text-1xl outline-none w-2/3"
              type="text"
              id="zipcode"
              value={zipcode}
              onChange={(e) => handleZip(e)}
            />
          </div>
          <input className="bg-teal-400 rounded-full px-6 py-3 my-8 text-purple-900 w-60 mx-auto" type="submit" value="add" />
        </form>
      </div>
    );
  }
};
