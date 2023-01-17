function findMatching(drivers, string){
    const findMatching = drivers.filter(drivers =>{
        const lowerCase = drivers.toLowerCase();
        const lowerCaseSearch = string.toLowerCase();
        return lowerCase.includes(lowerCaseSearch);
    })
    return findMatching;
}

function fuzzyMatch(drivers, string){
    return drivers.filter (driver => driver.startsWith(string))
}

function matchName(drivers, string){
    return drivers.filter(driver => driver.name === string);
}