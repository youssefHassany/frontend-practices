import { Card as CardType } from "../types/Card";

const Card = ({ logo, title, isConnected }: CardType) => {
  return (
    <div className="w-64 h-48 rounded p-[1px] bg-gradient-to-r from-[#3C8BD9] to-[#FFE400]">
      <div className="bg-black rounded w-full h-full flex flex-col items-center gap-4 p-4">
        <>{logo}</>
        <p>{title}</p>

        {isConnected === true && (
          <button className="py-1 px-3 rounded-full bg-zinc-900">
            Connected
          </button>
        )}
        {!isConnected && (
          <button className="py-1 px-3 rounded-full bg-zinc-900">
            Connect
          </button>
        )}
        {isConnected === "pending" && (
          <button className="py-1 px-3 rounded-full bg-zinc-900">
            Connecting
          </button>
        )}
      </div>
    </div>
  );
};

export default Card;
