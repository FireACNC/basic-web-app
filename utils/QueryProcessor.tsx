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

  if (query.toLowerCase().includes("following numbers is the smallest")) {
    const numbersString = query.toLowerCase().split(':')[1].trim();
    const numbersArray = numbersString.split(',').map(num => parseInt(num.trim()));

    if (numbersArray.length === 0) {
        throw new Error("No numbers found in the input string.");
    }

    return Math.min(...numbersArray).toString();
  }

  const pattern0 = /^What is \d+ multiplied by \d+\?$/;
    
  // Check if the query matches the pattern
  if (pattern0.test(query)) {
      // Extract numbers from the query string
      const numbers = query.match(/\d+/g);

      // Ensure that exactly two numbers are extracted
      if (numbers && numbers.length === 2) {
          const num1 = parseInt(numbers[0]);
          const num2 = parseInt(numbers[1]);
          const result = num1 * num2;
          return result.toString();
      }
  }

  const pattern1 = /^What is \d+ plus \d+\?$/;
  if (pattern1.test(query)) {
    const numbers = query.match(/\d+/g);

    if (numbers && numbers.length >= 2) {
        const num1 = parseInt(numbers[0]);
        const num2 = parseInt(numbers[1]);
        const result = num1 + num2;
        return result.toString();
    }
  }

  if (query.toLowerCase().includes("which of the following numbers is both a square and a cube")) {
    return findSquareAndCubeFromString(query);
  }

  const pattern2 = /^What is \d+ divided by \d+\?$/;

  if (pattern2.test(query)) {
      const numbers = query.match(/\d+/g);
      if (numbers && numbers.length === 2) {
          const num1 = parseInt(numbers[0]);
          const num2 = parseInt(numbers[1]);
          if (num2 !== 0) { // Prevent division by zero
              const result = Math.floor(num1 / num2); // Integer division
              return result.toString();
          }
      }
  }

  const pattern3 = /^What is \d+ minus \d+\?$/;

  if (pattern3.test(query)) {
      const numbers = query.match(/\d+/g);
      if (numbers && numbers.length === 2) {
          const num1 = parseInt(numbers[0]);
          const num2 = parseInt(numbers[1]);
          const result = num1 - num2;
          return result.toString();
      }
  }

  const pattern4 = /^What is (\d+) to the power of (\d+)\?$/;

  // Check if the query matches the pattern
  const match = query.match(pattern4);
  if (match) {
      // Extract the base and exponent from the matched groups
      const base = parseInt(match[1]);
      const exponent = parseInt(match[2]);

      // Calculate the power
      const result = Math.pow(base, exponent);

      // Return the result as a string
      return result.toString();
  }
  
  if (query.toLowerCase().includes("which of the following numbers are prime")) {
    // Extract numbers from the query string
    const numbers = query.match(/\d+/g);

    if (numbers) {
        const primes: number[] = [];
        for (const numStr of numbers) {
            const num = parseInt(numStr);
            if (isPrime(num)) {
                primes.push(num);
            }
        }
        if (primes.length > 0) {
            return primes.join(" ");
        } else {
            return "None of the given numbers are primes.";
        }
    } else {
        return "No numbers found in the query.";
    }
  }
  // git add . ; git commit -m “startup”; git push;
  return "";
}
function isSquareAndCube(num: number): boolean {
  // Check if the number is a perfect square
  const squareRoot = Math.sqrt(num);
  if (Number.isInteger(squareRoot)) {
      // Check if the square root is also a perfect cube
      const cubeRoot = Math.cbrt(num);
      if (Number.isInteger(cubeRoot)) {
          return true;
      }
  }
  return false;
}

function findSquareAndCubeFromString(input: string): string {
  // Extract numbers from the input string
  const numbers = input.match(/\d+/g);

  if (numbers) {
      for (const numStr of numbers) {
          const num = parseInt(numStr);
          if (isSquareAndCube(num)) {
              return num.toString();
          }
      }
  }
  return "";
}

function isPrime(num: number): boolean {
  if (num <= 1) {
      return false;
  }
  for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
          return false;
      }
  }
  return true;
}
