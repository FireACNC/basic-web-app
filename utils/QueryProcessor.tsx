export default function QueryProcessor(query: string): string {
  if (query.toLowerCase().includes("shakespeare")) {
    return (
      "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
      "English poet, playwright, and actor, widely regarded as the greatest " +
      "writer in the English language and the world's pre-eminent dramatist."
    );
  }

  if (query.toLowerCase().includes("andrew id")) {
    return (
      "rhuo"
    );
  }

  if (query.toLowerCase().includes("what is your name")) {
    return (
      "FireACNC"
    );
  }

  if (query.toLowerCase().includes("following numbers is the largest")) {
    const numbersString = query.toLowerCase().split(':')[1].trim();
    const numbersArray = numbersString.split(',').map(num => parseInt(num.trim()));

    if (numbersArray.length === 0) {
        throw new Error("No numbers found in the input string.");
    }

    return Math.max(...numbersArray).toString();
  }

  // git add . ; git commit -m “startup”; git push;
  return "";
}
