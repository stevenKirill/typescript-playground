// cant instantiate abstract class
abstract class MyFavClass {
    abstract greet(): void;
    abstract goodbye(): void;
};

class LOL extends MyFavClass {
    greet() {
        console.log('hello');
    };

    goodbye() {
        console.log('goodbye');
    };
};