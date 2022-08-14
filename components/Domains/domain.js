import { useState } from "react";

export default function Domain(props) {
  const {domain} = props
  const [buy, setBuy] = useState(false)
  const [card, setCard] = useState(false)

  const handleBuy = () => {
    setBuy(false)
    setCard(true)
  }
  const handleCard = () => {
    setCard(false)
  }
  return (
    <>
      <div className={`${buy ? "flex w-[23%] justify-between items-center relative" : "flex w-[23%] justify-between items-center"}`}>
        <p className="cursor-pointer" onClick={() => setBuy(true)}>{domain}.me</p>
        <span className="cursor-pointer text-[#0070F3]" onClick={() => setBuy(true)}>$20</span>

        <div className={`${buy ? "block absolute top-4 w-full border border-gray-700 rounded-md bg-transparent text-black h-auto" : "hidden absolute top-4 w-full border border-gray-700 rounded-md bg-transparent text-black h-auto"}`}>
            <div className="flex justify-between px-4 py-1 items-center rounded-t-md bg-white">
                <p>{domain}.me</p>
                <p className="text-sm font-semibold">$20 (1yr)</p>
            </div>
            <div className="bg-transparent text-center px-4 py-8 text-sm font-light text-white">
            We cant find a billing source, please add a payment method.
            </div>
            <div className="border-t border-gray-600 rounded-b-md flex justify-between items-center">
                <button className="py-2 px-4 text-gray-100 hover:text-white hover:font-medium text-sm font-thin w-[50%]" onClick={() => setBuy(false)}>CANCEL</button>
                <button className="py-2 px-4 text-gray-100 hover:text-white hover:font-medium text-sm font-thin border-l border-gray-600 w-[50%]" onClick={handleBuy}>ADD CARD</button>
            </div>
        </div>

        <div className={`${card ? "block absolute top-[430px] left-1/2 transform -translate-x-1/2 -translate-y-[200px] border border-gray-400 rounded-md z-10 bg-black" : "hidden border border-gray-400 rounded-md"}`}>
            <h3 className="bg-black text-center py-8 text-2xl font-bold rounded-md w-full">Add a Card</h3>
            <div className="flex flex-col gap-8 p-8 bg-[#181818] border-t border-gray-400">
                <p>Add a payment method for</p>
                <div>
                    <p className="font-medium text-gray-600">CARD NUMBER</p>
                    <div className="flex items-center gap-4 p-2 rounded-md bg-black border border-gray-600">
                    <svg className="text-gray-200" data-testid="geist-icon" fill="none" height="18" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="18" ><rect x="1" y="4" width="22" height="16" rx="2" ry="2"></rect><path d="M1 10h22"></path></svg>
                    <input type='text' placeholder="1234 1234 1234 1234" className="bg-transparent outline-none"/>
                    </div>
                </div>

                <div className="flex items-center w-full gap-8">
                <div className="flex flex-col w-[48%] gap-2">
                    <p className="font-medium text-gray-600">EXPIRES</p>
                    <input type='text' placeholder="1234 1234 1234 1234" className="p-2 rounded-md bg-black border border-gray-600 outline-none"/> 
                </div>
                <div className="flex flex-col w-[48%] gap-2">
                    <p className="font-medium text-gray-600">CVC</p>
                    <input type='text' placeholder="1234 1234 1234 1234" className="p-2 rounded-md bg-black border border-gray-600 outline-none"/> 
                </div>
                </div>
            </div>
            <div className="border-t border-gray-600 rounded-b-md flex justify-between items-center">
                <button className="p-4 text-gray-100 hover:text-white hover:font-medium text-lg font-thin w-[50%]" onClick={() => setCard(false)}>CANCEL</button>
                <button className="p-4 text-gray-100 hover:text-white hover:font-medium text-lg font-thin border-l border-gray-600 w-[50%]" onClick={handleCard}>ADD CARD</button>
            </div>
        </div>
      </div>
    </>
  );
}
