// Check if the visitor count exists in local storage
if (localStorage.getItem('visitCount')) {
    // If it exists, retrieve the count and increment it by 1
    let count = parseInt(localStorage.getItem('visitCount'));
    count++;
    // Update the HTML with the new count
    document.getElementById('visitCount').textContent = count;
    // Store the updated count back to local storage
    localStorage.setItem('visitCount', count);
} else {
    // If it doesn't exist, set the count to 1 and store it in local storage
    localStorage.setItem('visitCount', 1);
}
