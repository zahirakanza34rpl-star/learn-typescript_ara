/**
 * A programming competition stores participants' scores in the following array.
 * 
 * 
 * Competition Rules
 * Gold Medal : score ≥ 95
 * Silver Medal : score 85–94
 * Bronze Medal : score 75–84
 * No Medal : below 75
 * 
 * 
 * Student Tasks
 * Using a loop, calculate:
 * - Number of Gold Medal winners
 * - Number of Silver Medal winners
 * - Number of Bronze Medal winners
 * - Number of students without medals
 * - Average competition score
 */

const scores: number[] = [
    98, 76, 85, 62, 91,
    73, 88, 59, 100, 81,
    67, 79, 94, 83, 71,
    96, 65, 87, 74, 90
];

let totalScore: number = 0;
let goldCount: number = 0;
let silverCount: number = 0;
let bronzeCount: number = 0;
let noMedalCount: number = 0;

for (let i: number = 0; i < scores.length; i++) {
    const currentScore: number = scores[i];
    
    totalScore += currentScore;

    if (currentScore >= 95) {
        goldCount++; 
    } else if (currentScore >= 85 && currentScore <= 94) {
        silverCount++; 
    } else if (currentScore >= 75 && currentScore <= 84) {
        bronzeCount++; 
    } else {
        noMedalCount++; 
    }
}

const averageScore: number = totalScore / scores.length;

console.log(`=== COMPETITION RESULTS SUMMARY ===`);
console.log(`Gold Medal Winners   : ${goldCount} students`);
console.log(`Silver Medal Winners : ${silverCount} students`);
console.log(`Bronze Medal Winners : ${bronzeCount} students`);
console.log(`No Medal             : ${noMedalCount} students`);
console.log(`Average Score        : ${averageScore.toFixed(2)}`);
