import create from "zustand";

const useStore = create((set) => ({
  theme: "initial",
  searchTerm: "",

  darkTheme: () =>
    set((state) => ({
      theme: "dark",
    })),
  lightTheme: () =>
    set((state) => ({
      theme: "light",
    })),
  handleSearchTermChange: (event) =>
    set((state) => ({
      searchTerm: event.target.value,
    })),

  initialSearchTerm: () =>
    set((state) => ({
      searchTerm: "",
    })),
}));
export default useStore;
