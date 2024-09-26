// filter selects elements based on a condition and returns an array with the elements that fulfilled the condition.
const numbers = [1, 3, 4, 58, 4];
const players = [75,63,69,73,55];
// const selected = players.filter(p => p > 70);
// const selected = players.filter(p => p > 80);
// const selected = players.filter(p => p > 50);
const selected = players.filter(p => p %2 === 1)
console.log(selected);


const friends = ['Tom', 'John', 'Micheal', 'Oliver', 'Tim'];
const oddFriends = friends.filter(friend => friend.length > 4)
console.log(oddFriends);