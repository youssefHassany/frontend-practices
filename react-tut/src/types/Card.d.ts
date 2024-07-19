export interface Card {
  logo: JSX.Element;
  title: string;
  isConnected: boolean | "pending";
}
