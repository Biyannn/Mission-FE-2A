import { useState } from "react";

const ProfileNoApi = () => {
  // data awal user
  const [user, setUser] = useState({
    name: "Jennie Ruby Jane",
    email: "rubyjane@gmail.com",
  });

  const [formData, setFormData] = useState({
    name: user.name,
    email: user.email,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSave = () => {
    // Update data user langsung di state
    setUser({
      ...user,
      name: formData.name,
      email: formData.email,
    });
    alert("Data profil berhasil diperbarui (tanpa API)!");
  };

  return (
    <>
      <div className="py-16 px-28 justify-between md:flex grid grid-cols-auto-fill max-md:space-y-2">
        {/* Left Section start */}
        <div className="flex flex-col my-2">
          <div className="justify-start items-start flex flex-col ">
            <h3 className="text-xl font-semibold py-2">Ubah Profil</h3>
            <p className="text-base font-normal pb-6">Ubah data diri anda</p>
          </div>
          <div className="flex flex-col bg-white p-6 border-2 border-[#3A35411F] rounded-lg">
            <p className="flex hover:bg-[#FFBD3A] hover:bg-opacity-20 hover:text-[#FFBD3A] hover:border-[#FFBD3A] hover:border-2 hover:rounded-md text-center p-3 text-lg font-bold text-[#3A354161]">
              <img src="./icons/Person.png" alt="" className="w-9 mr-2" />
              Profil Saya
            </p>
            <p className="flex hover:bg-[#FFBD3A] hover:bg-opacity-20 hover:text-[#FFBD3A] hover:border-[#FFBD3A] hover:border-2 hover:rounded-md text-center p-3 text-lg font-bold text-[#3A354161]">
              <img src="./icons/Book.png" alt="" className="w-9 mr-2" />
              Kelas Saya
            </p>
            <p className="flex hover:bg-[#FFBD3A] hover:bg-opacity-20 hover:text-[#FFBD3A] hover:border-[#FFBD3A] hover:border-2 hover:rounded-md text-center p-3 text-lg font-bold text-[#3A354161]">
              <img src="./icons/Keranjang.png" alt="" className="w-9 mr-2" />
              Pesanan Saya
            </p>
          </div>
        </div>
        {/* Left Section end */}

        {/* Right Section Start  */}
        <div className="bg-white p-6 border-2 border-[#3A35411F] rounded-lg max-md:space-x-2">
          <div className="flex">
            <img
              src="./Avatar/profile layout.png"
              alt=""
              className="w-24 h-24"
            />
            <div className="flex flex-col px-4 space-y-2">
              <p className="text-xl font-semibold text-[#222325]">
                {user.name}
              </p>
              <p className="text-base font-normal text-[#222325] max-md:pr-2">
                {user.email}
              </p>
              <a href="#" className="text-[#F64920] text-base font-semibold">
                Ganti Foto Profile
              </a>
            </div>
          </div>
          {/* Right Section End */}
          <img
            src="./icons/Horizontal"
            alt=""
            className="w-11/12 justify-center items-center text-center my-10 bg-[#3A35411F] border-2 border-[#3A35411F] flex"
          />
          {/* Form Input Start */}
          <div className="flex md:space-x-6 max-md:space-y-2 justify-center max-md:flex-col">
            <label className="flex flex-col text-sm font-normal  hover:text-[#3ECF4C]">
              Nama Lengkap
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="text-base font-normal text-[#222325] py-3 px-3 border-2 rounded-xl hover:border-[#3ECF4C]"
              />
            </label>

            <label className="flex flex-col text-sm font-normal  hover:text-[#3ECF4C]">
              E-mail
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="text-base font-normal text-[#222325] py-3 px-3 border-2 rounded-xl hover:border-[#3ECF4C]"
              />
            </label>
            <div className="md:flex max-md:flex space-x-2">
            <select
              name=""
              id=""
              className="text-base font-normal text-[#222325] border-2 rounded-xl hover:border-[#3ECF4C] h-12 self-end w-20 px-3 flex max-md:flex-col bg-white"
            >
              <option value="" className="">
                +62
              </option>
            </select>
            <label className="flex flex-col text-sm font-normal  hover:text-[#3ECF4C]">
              No Hp
              <input
                type="text"
                className="text-base font-normal text-[#222325] px-3 py-3 border-2 rounded-xl hover:border-[#3ECF4C]"
              />
            </label>
            </div>
          </div>
          <div className="justify-end text-end">
            <button
              onClick={handleSave}
              className="bg-[#3ECF4C] text-white py-2 px-7 text-base font-bold rounded-xl  mt-6"
            >
              Simpan
            </button>
          </div>
        </div>
        {/* Form Input End */}
      </div>
    </>
  );
};

export default ProfileNoApi;
