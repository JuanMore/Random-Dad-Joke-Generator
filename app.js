// create a variable for our random joke button
const jokeButton = document.querySelector('#new-joke');
const myRequest = new Request('https://icanhazdadjoke.com/', {
    method: 'GET',
    headers: {'Accept': 'application/json'},
})

// create a click event to detect a click on our joke button
// function to invoke when click event is triggered on our 'jokeButton'

jokeButton.addEventListener('click', getJoke);

async function getJoke() {
    try {
        const response = await fetch(myRequest);
        headers: {
            'Content-Type'; 'application/json'
            // 'Content-Type': 'application/x-www-form-urlencoded',
          }
        if (!response.ok) {
            throw Error(response.statusText)
        }
        const json = await response.json();
        displayJoke(json.joke);
    } catch(err) {
        console.log(err)
        alert("Sorry, failed to fetch new quote!")
    }
}

let displayJoke = newJoke => {
    const jokeText = document.querySelector('#randJoke');
    jokeText.textContent = newJoke;
}

 
