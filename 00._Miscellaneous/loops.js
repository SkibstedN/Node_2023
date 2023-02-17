const rocks = [
    {name: "Sveske", age: 2},
    {name: "Led Zeppelin", age: 53},
    {name: "Dwayne", age: 40},
    {name: "Neptune", age: 60000000000}]

// assignment make all the rocks one year older and save the value to rocksAgedOneYear

//const rocksAgedOneYear = undefined

// loop methods: map, filter, find, reduce, sort, forEach

console.log( {...rocks[0]} );

/*  Using a regular function instead of an arrow function: 

    const rocksAgedOneYear = rocks.map(function(rock) {
    return { name: rock.name, age: rock.age + 1 };
});           */

/*    Using the Object.assign() method to create the new objects: 

const rocksAgedOneYear = rocks.map(rock => Object.assign({}, rock, { age: rock.age + 1 }));
 */

/*  Using the spread operator to create the new objects:

const rocksAgedOneYear = rocks.map(rock => ({ ...rock, age: rock.age + 1 }));
 */

const rocksAgedOneYear = rocks.map(rock => {rock.age++
    return { ...rock, age: rock.age+1};
});

//const rocksAgedOneYear = rocks.map(({ name, age }) => ({ name, age: age + 1 }));

console.log(rocksAgedOneYear)

//assignment give me the rocks that have even ages

const evenAgedRocks = rocks.filter(rock => rock.age % 2 === 0);
console.log(evenAgedRocks);
