//0<本次抽奖随机数<=1，表示抽中一等奖
//1<本次抽奖随机数<=5, 表示抽中二等奖
//5<本次抽奖随机数<=20,表示抽中三等奖
//本次抽奖随机数>20，表示未中奖

let rates = [1,5,20,74];
let weightSum = 0;
for(let item of rates){
    weightSum += item; 
}
let random = Math.random()*weightSum;
switch(random){
    case 0<random<=1 : console.log('一等奖');
                        return;
    case 1<random<=5 : console.log('二等奖');
                        return;   
    case 5<random<=20 : console.log('三等奖');
                        return;
    case 20<random<=1 : console.log('未中奖');
                        return;
}
