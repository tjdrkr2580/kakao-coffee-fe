type beverageType = {
  beverageId: number;
  beverageName: string;
  beverageCost: number;
};

type PopularBeverageType = {
  beverageId: number;
  beverageName: string;
  saleCount: number;
};

export interface homeProps {
  beverages: beverageType;
  popularBeverages: PopularBeverageType;
}
