import { adTrackingPlatforms } from "../constants/data";
import Card from "./Card";

const CardsContainer = () => {
  return (
    <div>
      <h1 className="font-semibold p-4 text-lg">Ad Tracking Platforms</h1>
      <div className="p-4 grid grid-cols-4 gap-4">
        {adTrackingPlatforms.map((card, index) => (
          <Card
            key={index}
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
