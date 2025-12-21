const chatToggle = document.getElementById("chatbox");
const chatContainer = document.getElementById("chat");
const closeChat = document.getElementById("fermerChat");
const sendBtn = document.getElementById("send-btn");

let intentsData = [];

chatToggle.addEventListener("click", () => {
    chatContainer.classList.toggle("hidden");
});

closeChat.addEventListener("click", () => {
    chatContainer.classList.add("hidden");
});


class ChatHistory {
    constructor() {
        this.messages = [];
    }
    addMessage(message) {
        this.messages.push(message);
    }
    getHistory() {
        return this.messages;
    }
}

const historyMessages = new ChatHistory();

function saveMessages() {
    localStorage.setItem("chatHistory", JSON.stringify(historyMessages.getHistory()));
}

function loadMessages() {
    const saved = JSON.parse(localStorage.getItem("chatHistory"));
    if (saved) {
        saved.forEach(msg => {
            showMessage(msg.message, msg.type, false);
        });
    }
}

window.addEventListener("beforeunload", saveMessages);
window.addEventListener("DOMContentLoaded", loadMessages);

fetch("../json/chatbox.json")
    .then(res => res.json())
    .then(data => {
        intentsData = data.intents;
    });


function showMessage(message, type, save = true) {
    const chatBox = document.getElementById("chat-box");

    const div = document.createElement("div");
    div.classList.add("message", type);
    div.textContent = message;

    chatBox.appendChild(div);
    chatBox.scrollTop = chatBox.scrollHeight;

    if (save) {
        historyMessages.addMessage({ message, type });
    }
}

function processMessage(intents, message) {
    let response = null;

    intents.forEach(intent => {
        intent.patterns.forEach(pattern => {
            if (message.toLowerCase().includes(pattern.toLowerCase())) {
                response = intent.responses[Math.floor(Math.random() * intent.responses.length)];
            }
        });
    });

    return response || "Je ne peux pas vous aider sur ce sujet. Consultez la page Contact.";
}

function sendMessage() {
    const input = document.getElementById("userZone");
    const userMessage = input.value.trim();
    if (!userMessage) return;

    showMessage(userMessage, "user");

    const botResponse = processMessage(intentsData, userMessage);
    showMessage(botResponse, "bot");

    input.value = "";
}


sendBtn.addEventListener("click", sendMessage);

document.getElementById("userZone").addEventListener("keypress", e => {
    if (e.key === "Enter") sendMessage();
});
