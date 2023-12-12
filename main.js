// Set the min attribute for date input fields to the current date
document.getElementById("check-in").min = new Date().toISOString().split("T")[0];
document.getElementById("check-out").min = new Date().toISOString().split("T")[0];

const dateInput = document.getElementById("date");
// Set the min attribute to the current date
dateInput.min = new Date().toISOString().split("T")[0];

// Set the min attribute for time input fields to the current time
document.getElementById("check-in-time").min = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
document.getElementById("check-out-time").min = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

function validateHotelSelection(event) {
    // Check if any hotel is selected
    var citrushotelSelected = document.getElementsByName("hotel").checked;
    var citrusvillaSelected = document.getElementsByName("villa").checked;

    if (!citrushotelSelected && !citrusvilla-Selected) {
        // Display an alert message
        alert("Please select the hotel you stay in.");
    } 
    else {
        console.log("Hotel selection is valid.");
    }
}
function hotelselectionwas(){
    var waskaduwa = "Waskaduwa";
    localStorage.setItem("selectedhotel", waskaduwa);
}

function hotelselectionhik(){
    var hikkaduwa = "Hikkaduwa";
    localStorage.setItem("selectedhotel", hikkaduwa);
}

function hotelselectionstu(){
    var stu = "Steuart";
    localStorage.setItem("selectedhotel", stu);
}

function selectvilavic(){
    var vic = "Victoria";
    localStorage.setItem("selectedvilla", vic);
}

function selectvilaamb(){
    var amb = "Labugolla";
    localStorage.setItem("selectedvilla", amb);
}
function validateCardNumber() {
    // Get the value of the card number input
    var cardNumber = document.getElementById("cardnum").value;

    // Check if the card number is empty
    if (cardNumber.trim() === "") {
        // Display an alert message
        alert("Please fill in the Card info in the field.");
    } else {
        console.log("Card number is valid:", cardNumber);
    }
}
//save check in time and date to local storage
function checkindate(){
    var checkin = document.getElementById("check-in").value;
    localStorage.setItem("checkin", checkin);
}
function checkintime(){
    var checkintime = document.getElementById("check-in-time").value;
    localStorage.setItem("checkintime", checkintime);
}
//save check out time and date to local storage
function checkoutdate(){
    var checkout = document.getElementById("check-out").value;
    localStorage.setItem("checkout", checkout);
    var findate =localStorage.getItem("checkin");
    document.getElementById("visit").innerHTML=findate,checkout;
}
function checkouttime(){
    var checkouttime = document.getElementById("check-out-time").value;
    localStorage.setItem("checkouttime", checkouttime);
}
//save the room type to local storage
function roomtype(){
    var roomtype = document.getElementById("roomType").value;
    localStorage.setItem("roomtype", roomtype);
}

//save the number of rooms to local storage
function roomnumber(){
    var roomnumber = document.getElementById("numberofr").value;
    localStorage.setItem("roomnumber", roomnumber);
}
function adultnumber(){
    var adultnumber = document.getElementById("adults").value;
    localStorage.setItem("adultnumber", adultnumber);
}
function childnumber(){
    var childnumber = document.getElementById("child").value;
    localStorage.setItem("childnumber", childnumber);
}
function bedyes(){
var bed="Yes";
localStorage.setItem("bed", bed);
}
//calculations

function ref(){
var adultnumber = document.getElementById("adults").value;
    localStorage.setItem("adultnumber", adultnumber);
var cliename = document.getElementById("cliename").value;
    localStorage.setItem("cliename", cliename);
var roomtype = document.getElementById("roomType").value;
    localStorage.setItem("roomtype", roomtype);
var roomnumber = document.getElementById("numberofr").value;
    localStorage.setItem("roomnumber", roomnumber);
var roomtypes =localStorage.getItem("roomtype");
var number =localStorage.getItem("roomnumber");

var extrabed =localStorage.getItem("bed");
    if(roomtypes == "Single"){
        if(extrabed == "Yes"){
            var costs= 25000*number+8000;
        }else{
            var costs= 25000*number;
        }
    }else if(roomtypes == "Double"){
        if(extrabed == "Yes"){
            var costs= 35000*number+8000;
        }else{
            var costs= 35000*number;
        }
    }else if(roomtypes == "Triple"){
        if(extrabed == "Yes"){
            var costs= 45000*number+8000;
        }else{
            var costs= 45000*number;
        }
    }                          
    localStorage.setItem("Cost", costs);
    var curroom =number;
    document.getElementById("currentBooking").innerHTML=curroom;
    document.getElementById("currentCost").innerHTML=costs;
}

function promo(){
    var code=document.getElementById("promoCode").value;
    localStorage.setItem("code", code);
    var finalcost=localStorage.getItem("Cost");
    if(code == "Promo123"){
        var costwithdis=finalcost*0.05;
        var final=finalcost-costwithdis;
        localStorage.setItem("finalcostwithdis", final);
        document.getElementById("overallCost").innerHTML=final;
    }else{
        document.getElementById("overallCost").innerHTML=finalcost;
    }
    
}
function guidyes(){
    var guid="Yes";
    localStorage.setItem("guid", guid);
}
function adventurecheck(){
    var nationality=document.getElementById("Country").value;
    localStorage.setItem("Nationality", nationality);
    var advenadults =localStorage.getItem("adultnumber");
    var advenchild =localStorage.getItem("childnumber");
    var adventure = document.getElementById("divID").value;
    localStorage.setItem("adventure", adventure);
    var guidcheck =localStorage.getItem("guid");
    if(adventure == "Diving"){
        if(guidcheck == "Yes"){
            if(nationality == "SRI LANKAN"){
                var divadult =5000*advenadults+1000;
                var divchild =2000*advenchild+500;
            }else{
                var divadult =10000*advenadults+1000;
                var divchild =5000*advenchild+500;
            }
        }else{
            if(nationality == "SRI LANKAN"){
                var divadult =5000*advenadults;
                var divchild =2000*advenchild;
            }else{
                var divadult =10000*advenadults;
                var divchild =5000*advenchild;
            }
        }
    }else{

    }
    localStorage.setItem("divadult", divadult);
    localStorage.setItem("divchild", divchild);

    var advencost =divadult+divchild;
    var finalcostt=parseInt(localStorage.getItem("Cost"))+advencost;
    
    localStorage.setItem("endcost", finalcostt);
    
    document.getElementById("currentCost").innerHTML='';
    document.getElementById("currentCost").innerHTML=finalcostt;  
}
function conf(){
window.location.href="Confirmpage.html";
}
function display(){
document.getElementById("cliename").innerHTML = localStorage.getItem("cliename");
document.getElementById("date").innerHTML = localStorage.getItem("checkin");
document.getElementById("out").innerHTML = localStorage.getItem("checkout");
document.getElementById("type").innerHTML = localStorage.getItem("roomtype");
document.getElementById("rooms").innerHTML = localStorage.getItem("roomnumber");
document.getElementById("adults").innerHTML = localStorage.getItem("adultnumber");
document.getElementById("childrens").innerHTML = localStorage.getItem("childnumber");
document.getElementById("price").innerHTML ="LKR "+localStorage.getItem("endcost")+".00";
localStorage.clear();
}

