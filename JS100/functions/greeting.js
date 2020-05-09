let greetingMessage = 'Good morning!';

function greetPeople() {
    console.log(greetingMessage);
}

function changeGreetingMessage(newMessage) {
    greetingMessage = newMessage;
}

changeGreetingMessage('Good Evening');
greetPeople();