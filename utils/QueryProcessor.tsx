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
    const s = query.toLowerCase();
    const parts = s.split(',').map(part => part.trim());
    
    // Parse each part as a number and filter out NaN values
    const numbers = parts.map(parseFloat).filter(num => !isNaN(num));

    // Find the maximum number
    const largestNumber = Math.max(...numbers);

    return largestNumber.toString();
  }

  // git add . ; git commit -m “startup”; git push;
  return "";
}
