const playTest = (message) => {
    let speech = new SpeechSynthesisUtterance();
    speech.lang = 'en'
    speech.text = message

    window.speechSynthesis.speak(speech)
}

export default playTest