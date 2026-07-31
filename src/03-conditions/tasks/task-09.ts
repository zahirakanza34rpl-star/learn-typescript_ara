/**
 * A manufacturing company monitors production machines continuously.

Business Rules

If the machine is powered off:

Display Machine Offline.

Otherwise, check its operating condition.

If the machine temperature exceeds 90°C:

If vibration level is High, display:
Emergency Shutdown
Otherwise:
Cooling Required

If the temperature is 90°C or below:

If production speed is below 80%, display:
Performance Warning
Otherwise:
Machine Operating Normally

Today's machine status:
| Information      | Value |
| ---------------- | ----- |
| Powered On       | Yes   |
| Temperature      | 95    |
| High Vibration   | No    |
| Production Speed | 92    |

Student Tasks
- Declare all variables.
- Translate every business rule into conditional statements.
- Display the final machine status.
 */

const isPower: boolean = true
const Temperature: number = 95
const isVibration: boolean = false
const ProductionSpeed: number = 92

let machineStatus: string = ""

if (isPower) {
    machineStatus = "Machine Offline"
} else {
    if (Temperature > 90) {
        if (isVibration) {
            machineStatus = "Emergency Shutdown"
        } else {
            machineStatus = "Cooling Required"
        }
    } else {
        if (ProductionSpeed < 80) {
            machineStatus = "Performance Warning"
        } else {
            machineStatus = "Machine Operating Normally"
        }
    }
}

console.log(`Machine Status: ${machineStatus}`)