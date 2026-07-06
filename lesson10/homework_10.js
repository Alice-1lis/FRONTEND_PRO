/*let company = {
    sales: [{ name: "John", salary: 1000 }, { name: "Alice", salary: 600 }],
    development: {
        web: [{ name: "Peter", salary: 2000 }, { name: "Alex", salary: 1800 }],
        internals: [{ name: "Jack", salary: 1300 }]
    }
};



function sumSalaries(group) {
    if (Array.isArray(group)) {
        return group.reduce((prev, current) => prev + current.salary, 0);

    }
    let sum = 0;
    for (let subGroup of Object.values(group)) {
        sum += sumSalaries(subGroup);
    }
    return sum;

}

console.log(sumSalaries(company));*/