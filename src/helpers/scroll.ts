export const to = (top: number) => {
  return window.scrollTo({
    top: top,
    behavior: "smooth",
  });
};
