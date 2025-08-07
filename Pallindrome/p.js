function checkpalindrome (number) {
    check = prompt("Kiska palindrome check krna h :-  ");
    let palindrome = check.split("").reverse().join("");
    
    if (palindrome === check) {
        console.log(`${check} is a palindrome.`)
    }
    else {
        console.log(`${check} is not a palindrome.`)
    };
};
let check;
checkpalindrome(check);