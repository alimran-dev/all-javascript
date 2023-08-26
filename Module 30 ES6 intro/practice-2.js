const friends = ['Anna', 'Bob', 'Charlie', 'David', 'Ella', 'Frank', 'Grace', 'Helen', 'Isaac', 'Jack', 'Kelly','mack','pori','kholil'];
const evenFriends = friends => {
    const result = [];
    for (const friend of friends) {
        friend.length % 2 === 0 ? result.push(friend):'';
        /* if (friend.length % 2 === 0) {
            result.push(friend);
        } */
    }
    return result;
}
console.log(evenFriends(friends));

// Alternative

const evenFilter = friends.filter(friend => friend.length % 2 === 0);
console.log(evenFilter);