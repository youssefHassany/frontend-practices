import GoogleIcon from "../assets/icons/GoogleIcon";
import MetaIcon from "../assets/icons/MetaIcon";
import SnapchatIcon from "../assets/icons/SnapchatIcon";
import TikTokIcon from "../assets/icons/TikTokIcon";
import TwitterIcon from "../assets/icons/TwitterIcon";
import { Card } from "../types/Card";

export const adTrackingPlatforms: Card[] = [
  {
    logo: <MetaIcon />,
    title: "Meta",
    isConnected: true,
  },
  {
    logo: <GoogleIcon />,
    title: "Google Ads",
    isConnected: false,
  },
  {
    logo: <TikTokIcon />,
    title: "TikTok",
    isConnected: false,
  },
  {
    logo: <TwitterIcon />,
    title: "X",
    isConnected: "pending",
  },
  {
    logo: <SnapchatIcon />,
    title: "Snapchat",
    isConnected: "pending",
  },
];
