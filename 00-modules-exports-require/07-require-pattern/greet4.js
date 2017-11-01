function Greet() {
    this.message = 'Hello!!!!';
    this.fire = function () {
        console.log(this.message);
    }
}

module.exports = Greet;