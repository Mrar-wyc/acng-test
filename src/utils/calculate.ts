export function calculateResult(answers: Record<number, string>): string {
  // We need to know which dimension each question belongs to.
  // Instead of passing the whole question array, we can just hardcode or export a map.
  // But wait, answers object is Record<questionId, answerValue (e.g. 'T')>
  // Actually, we can just count the values directly because 'T'/'I' only belongs to D1.

  const counts: Record<string, number> = {
    T: 0, I: 0,
    S: 0, X: 0,
    P: 0, R: 0,
    L: 0, M: 0
  };

  Object.values(answers).forEach(val => {
    if (counts[val] !== undefined) {
      counts[val]++;
    }
  });

  const d1 = counts['T'] >= 3 ? 'T' : 'I';
  const d2 = counts['S'] >= 3 ? 'S' : 'X';
  const d3 = counts['P'] >= 3 ? 'P' : 'R';
  const d4 = counts['L'] >= 3 ? 'L' : 'M';

  return `${d1}${d2}${d3}${d4}`;
}
