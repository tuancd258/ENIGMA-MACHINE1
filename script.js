//         ABCDEFGHIJKLMNOPQRSTUVWXYZ
// I     = JEKMFLGDQVZNTOWYHXUSPAIBRC
// II    = AJDKSIRUXBLHWTMCQGZNPYFVOE
// III   = BDFHJLCPRTXVZNYEIWGAKMUSQO
// UKW   = YRUHQSLDPXNGOKMIEBFZCWVJAT
let textContainer = document.querySelector(".textContainer1");
let textContainer1 = document.querySelector(".textContainer2");
let allKey = document.querySelectorAll(".key");
let index1 = 0;
let index2 = 0;
let index3 = 0;
function handleTyping(text) {
  textContainer.innerText += text;
}
function handleTyping1(text) {
  textContainer1.innerText += letters[text];
}
for (let key of allKey) {
  key.addEventListener("click", function () {
  handleTyping(key.innerText);
  enigma(key.innerText);
  });
}
function enigma(key){
  increaseBtn1.click()
  let a1=charToNumber(key);
  console.log(index1)
  let a2=ed1[a1];
  a2=(a2+index1)%26
  let a3=Roto1[a2];
  a3=(a3+index2)%26
  let a4=Roto2[a3];
  a4=(a4+index3)%26
  let a5=Roto3[a4];
  let a6=UKW[a5];
  let a7=Roto3B[a6];
  a7=(a7-index3)%26;
  if(a7<0) a7+=26
  let a8=Roto2B[a7];
  a8=(a8-index2)%26;
  if(a8<0) a8+=26
  let a9=Roto1B[a8];
  a9=(a9-index1)%26;
  if(a9<0) a9+=26
  let a10=ed1[a9];
  handleTyping1(a10);
}

let Roto1=[4, 10, 12, 5, 11, 6, 3, 16, 21, 25, 13, 19, 14, 22, 24, 7, 23, 20, 18, 15, 0, 8, 1, 17, 2, 9]
let Roto1B=[20, 22, 24, 6, 0, 3, 5, 15, 21, 25, 1, 4, 2, 10, 12, 19, 7, 23, 18, 11, 17, 8, 13, 16, 14, 9]
let Roto2=[0, 9, 3, 10, 18, 8, 17, 20, 23, 1, 11, 7, 22, 19, 12, 2, 16, 6, 25, 13, 15, 24, 5, 21, 14, 4]
let Roto2B=[0, 9, 15, 2, 25, 22, 17, 11, 5, 1, 3, 10, 14, 19, 24, 20, 16, 6, 4, 13, 7, 23, 12, 8, 21, 18]
let Roto3=[1, 3, 5, 7, 9, 11, 2, 15, 17, 19, 23, 21, 25, 13, 24, 4, 8, 22, 6, 0, 10, 12, 20, 18, 16, 14]
let Roto3B=[19, 0, 6, 1, 15, 2, 18, 3, 16, 4, 20, 5, 21, 13, 25, 7, 24, 8, 23, 9, 22, 11, 17, 10, 14, 12]
let UKW=[24, 17, 20, 7, 16, 18, 11, 3, 15, 23, 13, 6, 14, 10, 12, 8, 4, 1, 5, 25, 2, 22, 21, 9, 0, 19]

let allKey1 = document.querySelectorAll(".key1");
let re=[]
let re1=[]
let ed=[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25]
let ed1=[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25]
function handleTyping(text) {
  textContainer.innerText += text;
}
 
function Normal(key){
  key.style.backgroundColor= '#ffffff';
  key.innerText=key.innerText.substring(0, 1);
  re.pop();
}
function swap(a,x,y){
  var t=a[x];
  a[x]=a[y];
  a[y]=t;
}
function charToNumber(char) {
  let number=  char.toUpperCase().charCodeAt(0) - 'A'.charCodeAt(0) ;
  return parseInt(number);
}
function link(key,index,index1){
  if(re.length === 0){
    re.push(index);
    re1.push(index1);
  }else{
    allKey1[re].innerText+=key.innerText
    allKey1[index].innerText=allKey1[re].innerText.split('').reverse().join('');
    swap(ed,re,index)
    swap(ed1,re1,index1)
    re.pop();
    re1.pop();
  }
}

allKey1.forEach((key, index) => {
  key.addEventListener("click", function () {
    if( key.style.backgroundColor === 'rgb(255, 0, 0)'&&re.length === 0){
            Normal(allKey1[index]);
            Normal(allKey1[ed[index]]);
            swap(ed,index,ed[index])
          }else if(key.style.backgroundColor === 'rgb(255, 0, 0)'){
            Normal(allKey1[re]);
          }else{
            link(key,index,charToNumber(key.innerText)),
            key.style.backgroundColor = '#FF0000';
          }
  });
});

const decreaseBtn1 = document.querySelector(".decrease-btn1");
const decreaseBtn2 = document.querySelector(".decrease-btn2");
const decreaseBtn3 = document.querySelector(".decrease-btn3");
const increaseBtn1 = document.querySelector(".increase-btn1");
const increaseBtn2 = document.querySelector(".increase-btn2");
const increaseBtn3 = document.querySelector(".increase-btn3");
const indexValueInput1 = document.querySelector(".index-value1");
const indexValueInput2 = document.querySelector(".index-value2");
const indexValueInput3 = document.querySelector(".index-value3");
const letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']; // Thêm hoặc loại bỏ chữ cái theo nhu cầu


indexValueInput1.value = letters[index1];  
decreaseBtn1.addEventListener("click", function() {
  index1--;
  if (index1 < 0) index1 = letters.length - 1;
  indexValueInput1.value = letters[index1];
  console.log(index1);
});

increaseBtn1.addEventListener("click", function() {
  if(index1==16||index1==17){increaseBtn2.click();}
  index1++;
  if (index1 === letters.length) {
    index1 = 0; 
  };
  indexValueInput1.value = letters[index1];
});

indexValueInput2.value = letters[index2];  
decreaseBtn2.addEventListener("click", function() {
  index2--;
  if (index2 < 0) index2 = letters.length - 1;
  indexValueInput2.value = letters[index2];
});

increaseBtn2.addEventListener("click", function() {
  if(index2==4||index2==5){increaseBtn3.click();}
  index2++;
  if (index2 === letters.length) {
    index2 = 0; 
  };
  indexValueInput2.value = letters[index2];
});


indexValueInput3.value = letters[index3];  
decreaseBtn3.addEventListener("click", function() {
  index3--;
  if (index3 < 0) index3 = letters.length - 1;
  indexValueInput3.value = letters[index3];
  console.log(index3);
});

increaseBtn3.addEventListener("click", function() {
  index3++;
  if (index3 === letters.length) index3 = 0;
  indexValueInput3.value = letters[index3];
  console.log(index3);
});
function charToNumber1() {
let number=  indexValueInput1.value.toUpperCase().charCodeAt(0) - 'A'.charCodeAt(0) ;
index1= parseInt(number);
}
function charToNumber2() {
  let number=  indexValueInput2.value.toUpperCase().charCodeAt(0) - 'A'.charCodeAt(0) ;
  index2= parseInt(number);
}
function charToNumber3() {
  let number=  indexValueInput3.value.toUpperCase().charCodeAt(0) - 'A'.charCodeAt(0) ;
  index3= parseInt(number);
}