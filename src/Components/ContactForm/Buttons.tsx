import { IoChatboxEllipsesOutline, IoCall } from "react-icons/io5";

const Buttons = () => (
  <div className="flex gap-10 ">
    <button
      type="button"
      className="bg-blue-400 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded flex items-center"
    >
      <IoChatboxEllipsesOutline className="mr-2" />
      VIA SUPPORT CHAT
    </button>
    <button
      type="button"
      className="bg-blue-400 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded flex items-center"
    >
      <IoCall className="mr-2" />
      VIA CALL
    </button>
  </div>
);


export default Buttons