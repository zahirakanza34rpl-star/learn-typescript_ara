/**
 * An LMS stores assignment scores:
 */
const scores = [92, 68, 84, 73, 95, 61, 88];
/**
 * The LMS needs to perform different analyses:
 * 1. Determine whether each student passed. Passing grade is 70.
 * 2. Convert each score into a grade.
 * | Score | Grade |
 * | ----- | ----- |
 * | ≥ 90  | A     |
 * | ≥ 80  | B     |
 * | ≥ 70  | C     |
 * | < 70  | D     |
 * 
 * 3. Calculate a score after adding 5 bonus points.
 * 4. Determine whether the score is considered excellent. 
 * Score with more than 90 will be "Excellent", otherwise "Reguler".
 * 
 * 
 * Instead of creating four separate loops, create a reusable function that receives a callback responsible for transforming a score.
 */

function processScores<T>(
    scores: number[],
    callback: (score: number) => T
): T[] {
    return scores.map(callback);
}

function checkPassed(score: number): string {
    if (score >= 70) {
        return "Passed";
    } else {
        return "Failed";
    }
}

function convertGrade(score: number): string {
    if (score >= 90) {
        return "A";
    } else if (score >= 80) {
        return "B";
    } else if (score >= 70) {
        return "C";
    } else {
        return "D";
    }
}

function addBonus(score: number): number {
    return score + 5
}

function checkExcellent(score: number): string {
    if (score >90){
        return "Excellent"
    } else {
        return "Reguler"
    }
}

console.log("---Passed Status---")
console.log(processScores(scores, checkPassed))

console.log("---Grade Status---")
console.log(processScores(scores, convertGrade))

console.log("---Bonus Score---")
console.log(processScores(scores, addBonus))

console.log("---Performance---")
console.log(processScores(scores,checkExcellent))