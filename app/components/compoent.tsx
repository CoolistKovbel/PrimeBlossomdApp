"use client";

const PBEds = () => {
  const PBBeds = [
    {
      pbbedName: "Auto-Compound",
      pbbedApy: "12",
      totalAmountStaked: 0,
    },
    {
      pbbedName: "Compound",
      pbbedApy: "24",
      totalAmountStaked: 0,
    },
  ];


  const handleClick = () => {
    try {
        console.log(PBBeds)
    } catch (error) {
        console.log(error)
    }
  }

  return (
    <div className="flex items-center flex-col gap-4 w-full">
      {PBBeds.map((item) => (
        <div key={crypto.randomUUID()} className="bg-[#222] w-full ">
          <div className="w-full p-4 bg-[#222]">
            <h2>Vault: {item.pbbedName}</h2>
            <h2>APY: {item.pbbedApy}</h2>
            <p>Total Staked: {item.totalAmountStaked}</p>
          </div>

          <div className="w-full p-4 bg-[#222]">
            {/* deposit */}
            <div className=" bg-[#111] p-4">
                
                <div className="flex items-center justify-between">
                    <h2 className="text-2xl font-bold mb-2">Deposite</h2>
                    <p className="p-2 bg-[#222] rounded-lg">slow</p>
                </div>

              <input type="amount" placeholder="enter deposit" className="p-2 rounded-lg" />
              <button onClick={handleClick} className="p-2 bg-[#444] ml-2 rounded-lg">Submit</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PBEds;
