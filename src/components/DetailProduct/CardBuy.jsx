const CardBuy = () => {
    return (
      <>
        <div className="p-6 gap-6 border-2 rounded-lg border-[#3A35411F] bg-white justify-center items-center text-center flex flex-col">
          <h2 className="text-lg font-semibold text-[#222325]">
            Gapai Karier Impianmu sebagai Seorang UI/UX Designer & Product
            Manager.
          </h2>
          <div className="flex justify-between space-x-2">
            <p className="text-lg font-semibold tetx-[#3ECF4C] text-[#3ECF4C] hover:line-through hover:text-[#3A354161]">
              Rp 250K{" "}
              <span className="line-through text-[#3A354161]">Rp 500K</span>
            </p>
            <button className="bg-[#FFBD3A] text-white py-1 px-2 text-xs font-normal rounded-lg">
              Diskon 50%
            </button>
          </div>
          <p className="text-[#0980E2] text-sm font-medium">
            Penawaran spesial tersisa 2 hari lagi!
          </p>
          <button className="py-3 px-7 bg-[#3ECF4C] text-white rounded-xl text-base font-bold">
            <a href="">Beli Sekarang</a>
          </button>
  
          <p className="text-sm font-semibold text-[#222325]">
            Kelas Ini Sudah Termasuk
          </p>
  
          <div className="justify-between flex flex-col space-y-2">
            <p className="text-sm font-normal text-[#333333AD] flex">
              <img src="/icons/File_Check.png" alt="" className="w-6 h-6" />
              Ujian Akhir
            </p>
            <p className="text-sm font-normal text-[#333333AD] flex">
              <img src="/icons/book2.png" alt="" className="w-6 h-6" />7 Dokumen
            </p>
            <p className="text-sm font-normal text-[#333333AD] flex">
              <img src="/icons/File_Edit.png" alt="" className="w-6 h-6" />
              Pretest
            </p>
            <p className="text-sm font-normal text-[#333333AD] flex">
              <img src="/icons/recorder.png" alt="" className="w-6 h-6" />
              49 Video
            </p>
            <p className="text-sm font-normal text-[#333333AD] flex">
              <img src="/icons/achievement.png" alt="" className="w-6 h-6" />
              Sertifikat
            </p>
          </div>
  
          <h2 className="text-sm font-semibold text-[#222325]">
            Bahasa Pengantar
          </h2>
          <p className="text-sm font-normal text-[#333333AD] flex">
            <img src="/icons/www.png" alt="" className="w-6 h-6" />
            Sertifikat
          </p>
        </div>
      </>
    );
  };

  export default CardBuy;