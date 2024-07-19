import { useGetCards } from "../hooks/useGetCards";
import Card from "./Card";

const CardsContainer = () => {
  //  fetch cards data
  const cardsData = useGetCards();

  return (
    <div>
      <h1 className="font-semibold p-4 text-lg">Ad Tracking Platforms</h1>
      <div className="p-4 grid grid-cols-4 gap-4">
        {cardsData.map((card) => (
          <Card
            logo={card.logo}
            title={card.title}
            isConnected={card.isConnected}
          />
        ))}
      </div>
    </div>
  );
};

export default CardsContainer;
