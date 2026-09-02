import { prependListener } from "node:cluster";

/**
 * Teacher has list of student score:
 */
const scores = [85, 72, 91, 64, 88];

/**
 * The teacher wants to process the scores in different ways.
 * One report should simply display each score:
 * 
 * Score: 85
 * Score: 72
 * Score: 91
 * ...
 * 
 * Second report should determine whether each student passed.
 * Third report should determine grade of score with rules below.
 * | Score | Grade |
 * | ----- | ----- |
 * | ≥ 90  | A     |
 * | ≥ 80  | B     |
 * | ≥ 70  | C     |
 * | < 70  | D     |

 * Instead of creating different looping functions, create one reusable 
 * function that receives the processing logic as a callback.
 */

function processScores(
    scores: number[],
    callback: (score: number) => void
): void {
    for (const score of scores){
        callback(score)
    }
}

function printScore(score: number) {
    console.log(`Score: ${score}`)
}

function showPassed(score: number) {
    if (score >= 70){
        console.log(`${score}: Passed`)
    } else {
        console.log(`${score}: Failed`)
    }
}

function showGrade(score: number){5
    if (score >= 90){
        console.log(`${score}: Grade A`)
    } else if (score >= 80){
        console.log(`${score}: Grade B`)
    } else if (score >= 70){
        console.log(`${score}: Grade C`)
    } else {
        console.log(`${score}: Grade D`)
    }
}


processScores(scores,printScore)

console.log("---Passes Report---")
processScores(scores,showPassed)

console.log("---Grade Report---")
processScores(scores,showGrade)