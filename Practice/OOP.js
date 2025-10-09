class Cat{//name names always uppercase
    //always define the constructor 1st
    constructor(hairColor, temperment){
        this.hairColor = hairColor;
        this.temperment = temperment;
    }
}

cat1 = new Cat('yellow','angry');
console.log(cat1);

cat2 = new Cat('black','lazy');
console.log(cat2);