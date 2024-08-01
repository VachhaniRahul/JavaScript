// static = keyword that defines properties or methods that belong
//          to a class itself rather than the objects created
//          from that class 

class User{
    static UserCount = 0;
    
    constructor(username){
        this.username = username;
        User.UserCount++;
    }
}

const user1 = new User('Rahul');

console.log(user1.username);
console.log(User.UserCount);


const user2 = new User('amit');

console.log(User.UserCount);

