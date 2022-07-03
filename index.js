//KnowledgeHut Task 1 to 4

//Check wether the string is palindrom or not
function check_palindrom() {
    let str = prompt("Enter the string in Upper case:");
    let count = 0;
    for(let i = 0; i < str.length; i = i + 1) {
        if(str[i] == str[str.length-1-i]) {
            count = count + 1;
        }
    }
    if(count == str.length) {
        alert("String is Palindrom.");
    } else {
        alert("String is not Palindrom.");
    }
}

//Find and print the most occured character in string
function most_occured_char() {
    let str = prompt("Enter the string in upper case:");
    let count = 0;
    let max = 0;
    let max_char = str[0];
    for(let i = 0; i < str.length; i = i + 1) {
        for(let j = 0; j < str.length && i != j; j = j + 1) {
            if(str[i] == str[j]) {
                count = count + 1;
            }   
        if(count > max) {
            max = count;
            max_char = str[i];
        }
        }
    }
    alert(max_char);
}

//Print the factorial of the entered number
function factorial() {
    let str = prompt("Enter the number:");
    let num = parseInt(str);
    let fact = 1;
    for(let i = num; i > 0; i = i -1) {
        fact = fact * i; 
    }
    alert(fact);
}

//Print the number of consonent in string
function consonent() {
    let str = prompt("Enter the string in Upper Case:");
    let count = 0;
    for(let i = 0; i < str.length; i = i + 1) {
        switch(str[i]) {
            case 'A':
            case 'E':
            case 'I':
            case 'O':
            case 'U':
            case 'a':
            case 'e':
            case 'i':
            case 'o':
            case 'u':
                break;
            default:
                count = count + 1;
                break;
        }
    }
    alert(count);
}