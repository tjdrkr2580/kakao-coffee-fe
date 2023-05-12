export type beverageType = {
  beverageId: number;
  beverageName: string;
  beverageCost: number;
};

export type PopularBeverageType = {
  beverageId: number;
  beverageName: string;
  saleCount: number;
};

export interface homeProps {
  beverages: beverageType[];
  popularBeverages: PopularBeverageType[];
}
