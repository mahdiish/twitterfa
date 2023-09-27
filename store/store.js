import create from "zustand";
const useStore = create((set) => ({
  theme: "initial",

  darkTheme: () =>
    set((state) => ({
      theme: "dark",
    })),
  lightTheme: () =>
    set((state) => ({
      theme: "light",
    })),
}));
export default useStore;
