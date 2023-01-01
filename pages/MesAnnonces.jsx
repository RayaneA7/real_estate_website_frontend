import MesAnnoncesList from "../components/MesAnnoncesComponents/MesAnnoncesList";

const MesAnnonces = () => {
  return (
    <div className="flex flex-col justify-center  mx-4 sm:mx-10 md:mx-[7vw] lg:mx-[11vw]">
      <div className="border-b-2 min-h-[120px] bg-center flex flex-col justify-end">
        <div className="  min-h-[120px]">
          {" "}
          <div className="max-w-[1920px] mx-auto flex justify-center pt-8">
            <h1 className="font-bold text-[48px] text-black ml-4 text-left border-purple pl ">
              Toutes les annonces
            </h1>{" "}
          </div>
        </div>
      </div>
      <div className="overflow-x-auto w-full px-4 py-6 min-h-[400px]">
        <MesAnnoncesList />
      </div>
    </div>
  );
};

export default MesAnnonces;
