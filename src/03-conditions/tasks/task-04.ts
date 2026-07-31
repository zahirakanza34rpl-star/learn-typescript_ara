/**
 * A hotel determines room availability using the following rules.
 * First, the system checks whether rooms are still available.
 * If rooms are available:
 * - Premium members receive a free room upgrade.
 * - Regular customers receive the reserved room only.
 * 
 * If no rooms are available:
 * - Premium members are placed on the priority waiting list.
 * - Regular customers are informed that no rooms are available.
 * 
 * Today's reservation:
 * | Information    | Value       |
 * | -------------- | ----------- |
 * | Customer Name  | Nadia Putri |
 * | Premium Member | Yes         |
 * | Room Available | No          |
 * 
 * The system should display the appropriate message.
 * Student Tasks: 
 * 1. Declare all variables.
 * 2. Implement the logic using nested if statements.
 * 3. Display the reservation result.
 */

const customerName: string = "Nadia Putri";
const isPremiumMember: boolean = true;
const isRoomAvailable: boolean = false;

if (isRoomAvailable) {
    if (isPremiumMember) {
        console.log("Room is available. You receive a free room upgrade!");
    } else {
        console.log("Room is available. You receive the reserved room.");
    }
} else {
    if (isPremiumMember) {
        console.log("No rooms available. You are placed on the priority waiting list.");
    } else {
        console.log("No rooms available. We are sorry, no rooms are available at the moment.");
    }
}
