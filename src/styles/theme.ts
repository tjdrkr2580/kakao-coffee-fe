export type themeTypes = {
  coffeeColor: string;
  backgroundColor: string;
  primaryColor: string;
  textColor: string;
};

export const lightTheme: themeTypes = Object.freeze({
  coffeeColor: "#3C2A21",
  backgroundColor: "#1A120B",
  primaryColor: "#D5CEA3",
  textColor: "#FBF8F1",
});

export const darkTheme: themeTypes = Object.freeze({
  coffeeColor: "#3C2A21",
  textColor: "#1A120B",
  primaryColor: "#D5CEA3",
  backgroundColor: "#FBF8F1",
});
