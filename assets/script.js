const topics = ["HTML", "CSS", "Git", "JavaScript"];

function listTopics() {
    for (const topic of topics) {
        console.log(topic);
    }
}

function selectTopic() {
    const randomTopic = topics[Math.floor(Math.random() * topics.length)];
    console.log(`Let's study ${randomTopic}!`);
}

console.log("Here are the topics we've studied through prework");
listTopics();
console.log("Which topic should we study next?");
selectTopic();