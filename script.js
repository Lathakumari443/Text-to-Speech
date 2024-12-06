function textToAudio() {
    // Correctly select the textarea and retrieve its value
    let msg = document.querySelector('.text').value;

    // Create a new SpeechSynthesisUtterance object
    let speech = new SpeechSynthesisUtterance();

    // Set the properties of the speech object
    speech.lang = "en-US";
    speech.text = msg; // Set the text to be spoken
    speech.volume = 7; // Volume (0 to 1)
    speech.rate = 1; // Rate of speech
    speech.pitch = 1; // Pitch (0 to 2)

    // Use the speechSynthesis API to speak the text
    speechSynthesis.speak(speech);
}
