// Function to handle plagiarism checking when the button is clicked
function checkPlagiarism() {
    // Get the texts entered in the textareas
    let text1 = document.getElementById('text1').value;
    let text2 = document.getElementById('text2').value;

    // Get the result div to display the output
    const resultDiv = document.getElementById('result');

    // Check if both texts are provided
    if (!text1 || !text2) {
        resultDiv.innerHTML = 'Please enter both texts.';
        return;
    }

    // Remove punctuation, convert to lowercase, and normalize spaces
    text1 = text1.toLowerCase().replace(/[^\w\s]/g, '').replace(/\s+/g, ' ').trim();
    text2 = text2.toLowerCase().replace(/[^\w\s]/g, '').replace(/\s+/g, ' ').trim();
    
    // Split the text into words
    const words1 = text1.split(' ');
    const words2 = text2.split(' ');

    // Create a Set for fast lookup of words in text2
    const words2Set = new Set(words2);

    // Calculate the total number of unique words
    const totalWords = new Set([...words1, ...words2]).size;

    // Count the number of common words
    let commonWords = 0;
    words1.forEach(word => {
        if (words2Set.has(word)) {
            commonWords++;
        }
    });

    // Calculate the similarity percentage
    const similarity = (commonWords / totalWords) * 100;

    // Display the result in the result div
    resultDiv.innerHTML = `The similarity between the texts is ${similarity.toFixed(2)}%.`;
}
