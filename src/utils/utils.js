const getCSSVarValue = (value) => {
  if (!value) return "";

  const parts = value.split(" ");

  const processedParts = parts.map((part) =>
    part.startsWith("--") ? `var(${part})` : part,
  );

  return processedParts.join(" ");
};

const shuffleArray = (array) => {
  const shuffledArray = [...array];
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }
  return shuffledArray;
};

export { getCSSVarValue, shuffleArray };
