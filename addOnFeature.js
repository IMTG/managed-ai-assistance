const chatHeader = document.querySelector('.chat-header');
if (chatHeader) {
    const feedbackLink = document.createElement('a');
    feedbackLink.href = 'https://languagehub.citsolutions.edu.au/ai-assistant-feedback-form-page/';
    feedbackLink.textContent = 'Give us Feedback';
    feedbackLink.target = '_blank';
    chatHeader.appendChild(feedbackLink);
    console.log('Feedback link added to chat-header.');
} else {
    console.warn('chat-header element not found.');
}