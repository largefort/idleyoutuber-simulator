let channelName = "";
let subscribers = 0;
let views = 0;
let earnings = 0;

const botComments = [
    "Nice video, " + channelName + "! Keep up the good work!",
    "I love your content, " + channelName + ". It's so entertaining!",
    "This video by " + channelName + " is amazing! I can't stop watching it!",
    "Meh, this video is just average.",
    "You could improve on your editing skills, " + channelName + ".",
    "Sorry, but this video by " + channelName + " didn't impress me.",
];

function getRandomComment() {
    const randomComment = botComments[Math.floor(Math.random() * botComments.length)];
    return randomComment.replace(channelName, "<span class='channel-name'>" + channelName + "</span>");
}

function updateStats() {
    document.getElementById("channel").innerHTML = channelName;
    document.getElementById("subscribers").textContent = subscribers;
    document.getElementById("views").textContent = views;
    document.getElementById("earnings").textContent = earnings.toFixed(2);
}

function speakText(text) {
    const speech = new SpeechSynthesisUtterance(text);
    speechSynthesis.speak(speech);
}

function createChannel() {
    const input = document.getElementById("channelName");
    channelName = input.value;
    input.value = "";

    // Show the game section and hide the channel creation section
    document.getElementById("gameSection").style.display = "block";
    document.getElementsByClassName("channel-section")[0].style.display = "none";

    updateStats();
    speakText("Welcome to your channel, " + channelName);

    // Enable automatic monetization and promotion
    setInterval(monetize, 5000); // Monetize every 5 seconds
    setInterval(promoteVideo, 10000); // Promote video every 10 seconds
    setInterval(addComment, 3000); // Add a comment every 3 seconds
}

function uploadVideo() {
    subscribers += Math.floor(Math.random() * 1000) + 1;
    views += Math.floor(Math.random() * 10000) + 1;
    updateStats();
}

function addComment() {
    const commentList = document.getElementById("commentList");
    const newComment = document.createElement("li");
    const commentText = getRandomComment();
    newComment.innerHTML = commentText;
    commentList.appendChild(newComment);
    speakText(commentText);
}

function promoteVideo() {
    views += Math.floor(Math.random() * 1000) + 1;
    updateStats();
}

// ...

function monetize() {
    earnings += subscribers / 1000; // Update the calculation based on subscribers
    updateStats();
}

// ...

}

updateStats();
