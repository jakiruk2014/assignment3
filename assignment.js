// assignment 1 kilomiterToMeter

var kilometer = 200
var meter = kilometer*1000;
//console.log(meter)
function kilometerToMeter(kilometer){
    var meter = kilometer*1000;
    return meter;
}
var result = meter;


//assignment 2 hotelCost
function hotelCost(day){
    var hotelday = 0;
    if(day<=10){
        hotelday = day*100 
    }
    else if(day<=20){
        var styFirst10day = 10 * 100;
        var previousday = day - 10;
        var stySecond20day = previousday * 80;
        var styFirst10day = 10 * 100;
        hotelday = styFirst10day + stySecond20day;

    }else{
        var styFirst10day = 10 * 100;
        var stySecond20day = 10 * 80;
        var previousday = day - 20;
        var styafter20day = previousday * 50;
        hotel= styFirst10day + stySecond20day + styafter20day;
    }
   }   return hotel;

   // assignment megafriend

   var friendList = [kamal,jamal ,hussain]
   function megafriend(friendlist){
       var bigName = friendlist[0]
       for(i = 0; i<friendlist.length;i++){
           result = bigName ;
       } 
   }
  // console.log(Name)
