var dictionary = {//creating object
    key: "value",//creating key:value pairs
    // key: 6,
    dog:"Luna"

}

delete dictionary.key // deletes kvp
function writeDict(){ //creates function
    document.getElementById('dict').innerHTML =  dictionary.key // changes text in element to value of dictionary.key
}