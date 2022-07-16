// let alea = [12, 45, 4891, 48, 12, 8491, "caca", "zezette"]
// function getRandomInt(max) {
//     return Math.floor(Math.random() * max);
// }
// console.log(alea[getRandomInt(alea.length)]);
// console.log(" ");

// pour miner en js 
// comprendre les merkle rootes https://blogchaincafe.com/merkle-roots-et-merkle-trees-expliques
// voir les hashes https://www.blockchain.com/explorer?view=btc
// calcul de hash (bitcoin)
// chiffre au azzard (c1827f30)
// la difficulter (170b8b)
// cela donne en ligne linux : echo "c1827f30""170b8b"
let numberof = 8;
function mdpCrack(numberOfCharacters) {
   let randomValues = '';
   let stringValues = 'abcdefghijklmnopqrstuvwxyz0123456789012345678901234567890123456789';  
   let sizeOfCharacter = stringValues.length;  
   for (let i = 0; i < numberOfCharacters; i++) {
      randomValues = randomValues + stringValues.charAt(Math.floor(Math.random() * sizeOfCharacter));
   }
   return randomValues;
}
function reverseString(str) {
   return mdp;
}
// console.log(mdpCrack(numberof));
for (let i = 0; i < 90000; i++) {

let chiffreAzzard = mdpCrack(numberof); // a mettre reelement au azzard 8 "c1827f35"
let difficulter = "170b8b";
console.log(chiffreAzzard);
// ajouter la date en timstamp
let datum1 = Math.round(new Date().getTime()/1000);
// conaitre la date en ligne linux = date
// en ligne linux pour un timestamp exemple = date -d "22-01-16 22:06:25" +%s
// le mettre en exa decimal = printf "%x" $(date -d "22-01-16 22:06:25" +%s)
// echo "c1827f30""170b8b"(printf "%x" $(date -d "22-01-16 22:06:25" +%s))
// prendre le merkel root
let merkelRoot = "e320b6c2fffc8d750423db8b1eb942ae710e951ed797f7affc8892b0f1fc122b";
let precChain = "00000000000000001e8d6829a8a21adc5d38d0a473b144b6765798e61f98bd1d";
let version = "01000000";
console.log(merkelRoot);
console.log(precChain);
console.log(version);
function reverseString(str) {
   var splitString = str.split(""); // var splitString = "hello".split("");
   var reverseArray = splitString.reverse(); // var reverseArray = ["h", "e", "l", "l", "o"].reverse();
   var joinArray = reverseArray.join(""); // var joinArray = ["o", "l", "l", "e", "h"].join("");
   return joinArray; // "olleh"
}
let resultConcate = reverseString(chiffreAzzard + difficulter + datum1 + merkelRoot + precChain + version);
function text2Binary(string) {
   return string.split('').map(function (char) {
       return char.charCodeAt(0).toString(2);
   }).join(' ');
}
let binair = text2Binary(resultConcate);
console.log(binair);

var sha256 = function sha256(ascii) {
   function rightRotate(value, amount) {
       return (value>>>amount) | (value<<(32 - amount));
   };
   var mathPow = Math.pow;
   var maxWord = mathPow(2, 32);
   var lengthProperty = 'length'
   var i, j; // Used as a counter across the whole file
   var result = ''
   var words = [];
   var asciiBitLength = ascii[lengthProperty]*8;
   var hash = sha256.h = sha256.h || [];
   var k = sha256.k = sha256.k || [];
   var primeCounter = k[lengthProperty];
   var isComposite = {};
   for (var candidate = 2; primeCounter < 64; candidate++) {
       if (!isComposite[candidate]) {
           for (i = 0; i < 313; i += candidate) {
               isComposite[i] = candidate;
           }
           hash[primeCounter] = (mathPow(candidate, .5)*maxWord)|0;
           k[primeCounter++] = (mathPow(candidate, 1/3)*maxWord)|0;
       }
   }
   ascii += '\x80' // Append Ƈ' bit (plus zero padding)
   while (ascii[lengthProperty]%64 - 56) ascii += '\x00' // More zero padding
   for (i = 0; i < ascii[lengthProperty]; i++) {
       j = ascii.charCodeAt(i);
       if (j>>8) return; // ASCII check: only accept characters in range 0-255
       words[i>>2] |= j << ((3 - i)%4)*8;
   }
   words[words[lengthProperty]] = ((asciiBitLength/maxWord)|0);
   words[words[lengthProperty]] = (asciiBitLength)
   for (j = 0; j < words[lengthProperty];) {
       var w = words.slice(j, j += 16); // The message is expanded into 64 words as part of the iteration
       var oldHash = hash;
       hash = hash.slice(0, 8);
       
       for (i = 0; i < 64; i++) {
           var i2 = i + j;
           var w15 = w[i - 15], w2 = w[i - 2];
           var a = hash[0], e = hash[4];
           var temp1 = hash[7]
               + (rightRotate(e, 6) ^ rightRotate(e, 11) ^ rightRotate(e, 25)) // S1
               + ((e&hash[5])^((~e)&hash[6])) // ch
               + k[i]
               + (w[i] = (i < 16) ? w[i] : (
                       w[i - 16]
                       + (rightRotate(w15, 7) ^ rightRotate(w15, 18) ^ (w15>>>3)) // s0
                       + w[i - 7]
                       + (rightRotate(w2, 17) ^ rightRotate(w2, 19) ^ (w2>>>10)) // s1
                   )|0
               );
           var temp2 = (rightRotate(a, 2) ^ rightRotate(a, 13) ^ rightRotate(a, 22)) // S0
               + ((a&hash[1])^(a&hash[2])^(hash[1]&hash[2])); // maj
           hash = [(temp1 + temp2)|0].concat(hash); // We don't bother trimming off the extra ones, they're harmless as long as we're truncating when we do the slice()
           hash[4] = (hash[4] + temp1)|0;
       }
       for (i = 0; i < 8; i++) {
           hash[i] = (hash[i] + oldHash[i])|0;
       }
   }
   for (i = 0; i < 8; i++) {
       for (j = 3; j + 1; j--) {
           var b = (hash[i]>>(j*8))&255;
           result += ((b < 16) ? 0 : '') + b.toString(16);
       }
   }
   return result;
};
let resultBinair2 = sha256(binair);
console.log(resultBinair2);

function text2Binary(string) {
   return string.split('').map(function (char) {
       return char.charCodeAt(0).toString(2);
   }).join(' ');
}
let binair2 = text2Binary(resultBinair2);
console.log(binair2)
let resultfin = reverseString(sha256(binair2));
console.log(resultfin);

if (resultfin[0] === 0 && resultfin[1] === 0 && resultfin[2] === 0) {
   break;
}

console.log(" ")
console.log(" ")
console.log(" ")
console.log(" ")
}
// function love(max) {
//     return Math.floor(Math.random() * max);
// }
// let nom = "axel";
// let nom2 = "eva";
// console.log(nom + " " + "+" + " " + nom2 + " " + "s'aiment a" + " " + love(101) + "%");


// // function onclick(){
//     function password(max) {
//         return Math.floor(Math.random() * max);
//     }
//     let pass = ["/",")","A","Z","E","R","T","Y","U","I","O","P","Q","S","D","F","G","H","J","K","L","M","W","X","C","V","B","N","a","z","e","r","t","y","u","i","o","p","q","s","d","f","g","h","j","k","l","m","w","x","c","v","b","n",1,2,3,4,5,6,7,8,9,0,1,2,3,4,5,6,7,8,9,0]
//     for(let i = 0 ; i < 11 ; i++){
//         let number = pass[password(pass.length)];
//         console.log(number)
//         // document.getElementsByClassName('d').innerHTML = number;
//     }
// // }


// let mdp = "Y2b";
// function generateRandomNumber(numberOfCharacters) {
//    let randomValues = '';
//    let stringValues = 'ABCDEFGHIJKLMNOabcdefghijklmnopqrstuvwxyzPQRSTUVWXYZ01234567890123456789)/!';  
//    let sizeOfCharacter = stringValues.length;  
//    for (let i = 0; i < numberOfCharacters; i++) {
//       randomValues = randomValues + stringValues.charAt(Math.floor(Math.random() * sizeOfCharacter));
//    }
//    return randomValues;
// }

// function reverseString(str) {
//    return mdp;
// }

// console.log("crackage de mdp en cours");
// for(let i = 0 ; mdp != generateRandomNumber(3) ; i++){
//    let aleamdp = generateRandomNumber(3);
//    if(mdp == aleamdp){
//       console.log("mdp crack." + " " + mdp + " " + "==" + " " + aleamdp);
//       break;
//    }else{
//    }
// }
