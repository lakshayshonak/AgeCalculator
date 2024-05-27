function calculateAge() {
    // Get the input values
    const day = parseInt(document.getElementById('day').value);
    const month = parseInt(document.getElementById('month').value) - 1; // Months are 0-based in JavaScript
    const year = parseInt(document.getElementById('year').value);

    // Validate the date
    if (!day || !month || !year) {
        document.getElementById('result').textContent = "Please enter a valid date.";
        return;
    }

    // Get today's date
    const today = new Date();
    const birthDate = new Date(year, month, day);

    // Calculate the age
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDifference = today.getMonth() - birthDate.getMonth();
    const dayDifference = today.getDate() - birthDate.getDate();
    console.log(monthDifference,dayDifference)

    // Adjust the age if the birthdate hasn't occurred yet this year
    if (monthDifference < 0 || (monthDifference === 0 && dayDifference < 0)) {
        age--;
    }

    // Display the result
    document.getElementById('result').textContent = `Your age is ${age} years ${monthDifference} months ${dayDifference} days.`;
}
5