/**
 * A school system needs to send a notification to a student
 * after an important event occurs.
 *
 * The notification system itself should not know what kind
 * of notification will be sent.
 * Instead, the notification action is provided by another function.
 */

function registerStudent(
    studentName: string,
    callback: (name: string) => void
): void {
    console.log(`Registering ${studentName}...`);

    callback(studentName);
}

/** The school provides the callback */
function showRegistrationMessage(name: string): void {
    console.log(`${name} successfully registered.`);
}

/** Show registration message */
registerStudent(`John Cena`, showRegistrationMessage);

/**
 * TASK:
 * Create another function that displays a welcoming message
 * for the entire student.
 * Don't forget to implement the callback function.
 */

/** Welcome message callback */
function showWelcomeMessage(name: string): void {
    console.log(`Welcome to our school, ${name}!`);
}

/** Show welcome message */
registerStudent(`John Cena`, showWelcomeMessage);