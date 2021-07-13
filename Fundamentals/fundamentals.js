const weather = {
    "sky": "sunny",
    "high": 85,
    "low": 74
}

// const {sky, ...temps} = weather;
const tomorrow = {
    ...weather,
    "precip": 2,
    "sky": "stormy"
}

// let faveFlavors = ["mint chocolate chip", "sherbert", "cookies and cream", "coffee", "salted caramel"];

// faveFlavors = ["pistachio", ...faveFlavors];

console.log(tomorrow);