const friends = ['Abdul', 'Halim', 'Kalam', 'Momen', "modu", 'nodi'];

const evenLength = (friends) => {
    const evenLengthFriends = [];
    for (const friend of friends) {
        if (friend.length % 2 === 0) {
            evenLengthFriends.push(friend);
        }
    }
    return evenLengthFriends;
}

console.log(evenLength(friends));