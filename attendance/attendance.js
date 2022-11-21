// trainer = [{ "firstName": "Alla", "lastName": "Ammaira", "Email": "alaa@gmail.com", "confirmEmail": "alaa@gmail.com", "mobile": "0778899665", "Password": "Aa@123456789", "confirmPassword": "Aa@123456789", "last_taken_atten":"21/11/2022"}]
// const today = new Date();
// const yyyy = today.getFullYear();
// let mm = today.getMonth() + 1; // Months start at 0!
// let dd = today.getDate();

// if (dd < 10) dd = '0' + dd;
// if (mm < 10) mm = '0' + mm;

// const formattedToday = dd + '/' + mm + '/' + yyyy;
// document.getElementById("daily_date").innerHTML = formattedToday
// trainer.forEach(element,i => {
//     console.log(element['last_taken_atten'])
//     if (element.last_taken_atten == formattedToday) {
//         document.getElementById("daily_attendance_situ").innerHTML =" DAILY ATTENDANCE NOT TAKEN YET "
//     }else if ((i == trainer.length-1)) {
//         document.getElementById("daily_attendance_situ").innerHTML =" DAILY ATTENDANCE TAKEN " 
//     }
// })
// });
// localStorage.clear()
// test data
let tranie1 = {"ID" : 25,
"Name" : "Talab yaseen",
"Tasks(accomplished/missed)" : "50/50",
"absence_days" : 100,
"all_days":100,

}
let tranie2 = {"ID" : 26,
"Name" : "Karam hatem",
"Tasks(accomplished/missed)" : "50/4",
"absence_days" : 5,
"all_days":100,

}
let tranie3 = {"ID" : 27,
"Name" : "Hanen",
"Tasks(accomplished/missed)" : "50/2",
"absence_days" : 4,
"all_days":100,

 }
 let tranie4 = {"ID" : 28,
"Name" : "Asem yaseen",
"Tasks(accomplished/missed)" : "50/1",
"absence_days" : 1,
"all_days":100,

 }
 let tranie5 = {"ID" : 29,
"Name" : "baraa abumatiq",
"Tasks(accomplished/missed)" : "50/0",
"absence_days" : 0,
"all_days":100,
 }
let tranies = JSON.parse(localStorage.getItem("tranies"))||[tranie1,tranie2,tranie3,tranie4,tranie5]
// git data to local storge
localStorage.setItem("tranies",(JSON.stringify(tranies)))
// build the table 
function read_data(){
//table headers
html =`<table class="table"><thead><tr><th class="hied">#</th><th>ID</th><th>Name</th><th>Task<br><span class="Completed_green">Completed</span> / <span class="missd_red">missd</span></th><th>Attendance<br><span class="missd_red">all days/absence days</span></th><th><td  id="remove_head"></td></th><th><button class="input add_button" id="save_attendance" type="button" onclick="save_attendance()">save attendance</button></th><th></th></tr></thead>`
//build a place to add new_traine and make it invisiable
html+=`<tr><td></td><td class="hied"><input placeholder="New id" class="input hied" type="number"id="new_id"</td><td><input class="input" placeholder="Name"  type="text" id="new_name"</td><td><button class="input add_button" id="add_button" type="button" onclick="Add_traine_final()">+ADD</button></td><td></td><td></td><td></td><td></td></tr>`
//make a loop to get data from the array
storege_tranies = JSON.parse(localStorage.getItem("tranies"))
i = 1 
storege_tranies.map(function(tranie){
html+=`<tr id ="${i}"><td>${i}</td><td class="hied">${tranie.ID}</td><td>${tranie.Name}</td><td>${tranie["Tasks(accomplished/missed)"]}</td><td>${tranie.all_days}/${tranie.absence_days}</td>`
//make a remove button for each traine and make it invisable give it id from traine id
html+=`<td><button class="remove remove_button" id="${tranie.ID}" type="button" onclick="remove_traine_final(${tranie.ID})">-del</button></td>`
//make abssence button
html+=`<td><button class="remove add_button" id="${tranie.ID}_" type="button" onclick="take_attendence_final(${tranie.ID})" onmouseover="change(${tranie.ID})" onmouseleave="change2(${tranie.ID})">attendant</button></td>`
//make a edit button for each traine and make it invisable give it id from traine id
html+=`<td><button class="edite edite_button" id="_${tranie.ID}_" type="button" onclick="edite_traine_final(${i})">edit</button></td>`
i = i+1
}) 
// close the table 
html+=`</table>`
// print the data from the table
document.getElementById("table_container").innerHTML = html;
}
read_data()
// add new triane
function Add_traine(){
    if (document.getElementById("new_id").style.display == "initial"){
    document.getElementById("new_id").style.display = "none";
    document.getElementById("new_name").style.display = "none";
    document.getElementById("add_button").style.display = "none";
}else {
    document.getElementById("new_id").style.display = "initial";
    document.getElementById("new_name").style.display = "initial";
    document.getElementById("add_button").style.display = "initial";
}
    }
    function Add_traine_final(){
        storege_tranies = JSON.parse(localStorage.getItem("tranies"))  
        new_tranie = {"ID":document.getElementById("new_id").value,
        "Name":document.getElementById("new_name").value,
        "Tasks(accomplished/missed)" : 0,
        "absence_days" :0,
        "all_days":0

    }
    storege_tranies.push(new_tranie)
    localStorage.setItem("tranies",(JSON.stringify(storege_tranies)))
    new_feed = {"traine":document.getElementById("new_name").value,
    "feddbacktext":""}
    arr1 = JSON.parse(localStorage.getItem("Salama_feedback"))||[]
    arr2 = JSON.parse(localStorage.getItem("Mona_feedback"))||[]
    arr3 = JSON.parse(localStorage.getItem("hadeel_feedback"))||[]
    arr4 = JSON.parse(localStorage.getItem("Alaa_feedback")) ||[]
    arr1.push(new_feed)
    arr2.push(new_feed)
    arr3.push(new_feed)
    arr4.push(new_feed)
    localStorage.setItem("Salama_feedback",JSON.stringify(arr1))
    localStorage.setItem("Mona_feedback",JSON.stringify(arr2))
    localStorage.setItem("hadeel_feedback",JSON.stringify(arr3))
    localStorage.setItem("Alaa_feedback",JSON.stringify(arr4))



    read_data()

    }
    //to make remove button for each traine diappear or appear
    function remove_traine() {
        if (document.getElementById("remove_head").style.display == "initial"){
        document.getElementById("remove_head").style.display = "none";
        storege_tranies = JSON.parse(localStorage.getItem("tranies")) 
        storege_tranies.map(function(tranie){
        document.getElementById(tranie.ID).style.display = "none"
        console.log(tranie.ID)
    })}
        else {
        document.getElementById("remove_head").style.display = "initial";
        storege_tranies = JSON.parse(localStorage.getItem("tranies")) 
        storege_tranies.map(function(tranie){
        document.getElementById(tranie.ID).style.display = "initial"
        console.log(tranie.ID)})}}
    //to remove a traine id_remove is the button id and its the same of traine id
    function remove_traine_final(id_remove){
        // first get the traine from the local storege
        storege_tranies = JSON.parse(localStorage.getItem("tranies"))
        // make a new array to push all traine in it except the traine you want to remove 
        update_storege_tranies =[]
        // get every traine in the array indivisualy 
        storege_tranies.forEach(element => {
        // if the button has the same id as the traine do nothing
            if(element.ID == id_remove) {}
        // add every other traine to the new array 
            else{update_storege_tranies.push(element) }})
        // store 
        localStorage.setItem("tranies",(JSON.stringify(update_storege_tranies)))
        read_data()}

    function abs_traine() {

        if (document.getElementById("remove_head").style.display == "initial"){
            document.getElementById("remove_head").style.display = "none";
            storege_tranies = JSON.parse(localStorage.getItem("tranies")) 
            storege_tranies.map(function(tranie){
            document.getElementById(tranie.ID+"_").style.display = "none"
            document.getElementById("save_attendance").style.display = "none"
            console.log(tranie.ID)
        })}
            else {
                
            document.getElementById("save_attendance").style.display = "initial"
            document.getElementById("remove_head").style.display = "initial";
            storege_tranies = JSON.parse(localStorage.getItem("tranies")) 
            storege_tranies.map(function(tranie){
            document.getElementById(tranie.ID+"_").style.display = "initial"
            console.log(tranie.ID)})}}
    function take_attendence_final(i){
        storege_tranies = JSON.parse(localStorage.getItem("tranies"))
        console.log(i)
        update_storege_tranies=storege_tranies.map(element => {
            if(element.ID == i) {
                pluse =(Number(element.absence_days)+1);
                element.absence_days = pluse
                // pluse1 =(Number(element.all_days)+1);
                // element.all_days = pluse1
                document.getElementById(`${element.ID}_`).style.display = "none";
                return element
            }else{
                // pluse =(Number(element.all_days)+1);
                // element.all_days = pluse
                return element }
            
        })
        localStorage.setItem("tranies",JSON.stringify(update_storege_tranies) )
        
    }
    // to add new day for all days
    function save_attendance(){
        update_storege_tranies = storege_tranies.map(element => {
                pluse =(Number(element.all_days)+1);
                element.all_days = pluse
                return element})
        localStorage.setItem("tranies",JSON.stringify(update_storege_tranies) )
         read_data()
    }
    // change color for absence
    function change(i){
        console.log(i)
        document.getElementById(`${i}_`).innerHTML = "absensce";
        document.getElementById(`${i}_`).style.backgroundColor = "red";
    }
    function change2(i){
        console.log(i)
        document.getElementById(`${i}_`).innerHTML = "attendant";
        document.getElementById(`${i}_`).style.backgroundColor = "white";
    }
    //
    function edite_traine_final(i){
        edit_row = document.getElementById(`${i}`)
        storege_tranies = JSON.parse(localStorage.getItem("tranies")) 
        console.log(i)
        input_edit_row = `<tr><td>${i}</td><td class="hied"><input class="change" value="${storege_tranies[i-1].ID}"  type="number"id="change_id"></td><td><input class="change" value="${storege_tranies[i-1].Name}"  type="text" id="change_name"</td><td><input class="change" value="${storege_tranies[i-1]["Tasks(accomplished/missed)"]}"  type="text" id="change_task"</td><td><input class="change"  value="${storege_tranies[i-1].absence_days}"type="text" id="change_attendence"</td><td><button class="edite_save save_edite_button" id="s_${i}_" type="button" onclick="edite_traine_final2(${i})">save</button></td></tr>`
        edit_row.innerHTML = input_edit_row
    }
    function edite_traine_final2(i) {
        storege_tranies[i-1] = {"ID":document.getElementById("change_id").value,
        "Name":document.getElementById("change_name").value,
        "Tasks(accomplished/missed)":document.getElementById("change_task").value,
        "absence_days":document.getElementById("change_attendence").value,
        "all_days":storege_tranies[i-1].all_days,
        }
        localStorage.setItem("tranies",(JSON.stringify(storege_tranies)))
        read_data()
    }
    function move(ss){
        if (ss == "home") {
            window.location.href = "../homeAfter/homeAfter.html"
        } else if (ss == "profile") {
            window.location.href = "../Profile/profile.html"
        } else if (ss == "student") {
            window.location.href = "../attendance/attendance.html"
        } else if (ss == "feedback") {
            window.location.href = "../FeedBackSection/index1.html"
        } else if (ss == "out") {
            window.location.href = "../index.html"
        }
    }
    currentuser = JSON.parse(localStorage.getItem("currentuser"))
    switch(currentuser.firstName){
    case "Mona":
    document.getElementById("image1").src = "../img/mona.png"
    break;
    case "Alaa":
    document.getElementById("image1").src = "../img/alaa.png"
    break;
    case "Salama":
    document.getElementById("image1").src = "../img/salama.png"
    break;
    case "hadeel":
    document.getElementById("image1").src = "../img/hadee.png"
    break;
    
}
document.getElementById("namee").innerHTML = currentuser.firstName


    

