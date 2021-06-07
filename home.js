// var teamsList=localStorage.getItem('team-list') === null ? [] : JSON.parse(localStorage.getItem('team-list'));
// var mainElement=document.getElementById("main-element")
// teamsList.map((item,index)=>{
//     createTeamCard(item,index)
// })

var teamsList=localStorage.getItem('team-list') === null ? [] : JSON.parse(localStorage.getItem('team-list'));
var mainElement=document.getElementById("main-element")


teamsList.map((item,index)=>{
    createTeamCard(item,index)
    var dropdownList= document.getElementById("dropdown");
    
        createOption(item,index)
    
    function createOption(x,y){
        var Opt= document.createElement("option");
        Opt.innerText=x.name;
        Opt.name=x.name;        
        dropdownList.appendChild(Opt)
        console.log(dropdownList)    
       
    }
})
console.log(teamsList.length)
var Button=document.getElementById("btn");
Button.onclick=function(){
  
   // location.assign("./form.html")
   var Form= document.getElementById("aaa");
   Form.classList.toggle("toggleClass"); 
     
}
var Team= document.getElementById("teamForm");
var newForm= document.getElementById("new-form");
var Player= document.getElementById("playerForm");
var PlayerForm=document.getElementById("player-form")
Team.onclick=function(){       
   
        newForm.style.display="block"; 
        PlayerForm.style.display="none" 
    
    
}

Player.onclick=function(){  
      
    newForm.style.display="none";
    PlayerForm.style.display="block"
   

}
var submit1= document.getElementById("Submit1-btn");
var submit2= document.getElementById("Submit2-btn");
submit1.onclick=function(e){
       
    
    var name=document.getElementById("name").value;
    var icon=document.getElementById("icon").value;
    var count=document.getElementById("count").value;
    var batsman=document.getElementById("batsman").value;
    var bowler=document.getElementById("bowler").value;
    var wins=document.getElementById("wins").value;
    
    var mObj={  

        name:name,
        icon:icon,
        count:count,
        batsman:batsman,
        bowler:bowler,
        wins:wins,
    }
    
    var teamsList=localStorage.getItem('team-list') === null ? [] : JSON.parse(localStorage.getItem('team-list'));
     teamsList.push(mObj);
     console.log(teamsList)
      localStorage.setItem("team-list", JSON.stringify(teamsList));
      console.log(mObj)
      alert(name)
    //   var obj=localStorage.getItem(name) === null ? [] : JSON.parse(localStorage.getItem(name));
      
    //   console.log(obj)
    //   obj.push(mObj);
     // localStorage.setItem(name, [])
      createTeamCard(teamsList,count)  
      createOption(name)
    
      function createOption(x){
          var Opt= document.createElement("option");
          Opt.innerText=x;
          Opt.name=x;
          Opt.value=x;      
          dropdownList.appendChild(Opt)
          console.log(dropdownList)    
         
      }  
    
}
submit2.onclick=function(e){
    
        var pName=document.getElementById("pName").value;
        var pimage=document.getElementById("pimage").value;
        var Dropdown=document.getElementById("dropdown")
        var TName=Dropdown.value;
alert(TName)
        // alert(TName)
       // var pid=document.getElementById()
        var cost=document.getElementById("cost").value;
        alert(cost)
        var pchecked1= document.getElementById("playing")
        var pchecked2=document.getElementById("bench")
        if(pchecked1.checked){
            var pStatus=pchecked1.value
        }
        else if(pchecked2.checked){
            var pStatus=pchecked2.value
        }
        var Description1 = document.getElementById("Batsman")
        
        var Description2 = document.getElementById("Bowler")
        var Description3 = document.getElementById("Allrounder")
        if(Description1.checked){
            var Description=Description1.value
        }
        else if(Description2.checked){
            var Description=Description2.value
        }
        else if(Description3.checked){
            var Description=Description3.value
        
         }
        // var DescriptionData=document.getElementsByName("t1")
        //  var Description= DescriptionData.value
        // alert(Description)
        // // alert(TName)
        //var wins=document.getElementById("wins").value;
        // alert(TName)
        var playersList=localStorage.getItem('player-list') === null ? [] : JSON.parse(localStorage.getItem('player-list'));
           var x=playersList.length+1;
        var pObj={
            id:x,
            pName:pName,
            pimage:pimage,
            tname:TName,
            price:cost,
            pStatus:pStatus,
            description:Description,
        }
        
    //     var playersList=localStorage.getItem('player-list') === null ? [] : JSON.parse(localStorage.getItem('player-list'));
    // //    var x=playersList.length;
    //    mObj.id=x;
        playersList.push(pObj);
        console.log(playersList)

         localStorage.setItem("player-list", JSON.stringify(playersList));
        
        console.log(pObj)
    //    var obj= JSON.parse(localStorage.getItem(TName));
        var obj=localStorage.getItem(TName) === null ? [] : JSON.parse(localStorage.getItem(TName));
        alert(obj)
        console.log(obj)
        obj.push(pObj);
        alert(2)
        localStorage.setItem(TName, JSON.stringify(obj));
        if(pObj.name.includes(teamsList.name)){
            alert(teamsList.name)
        }

    }
   

function createTeamCard(teamsList1,id){
    
//   <div id="card">
//     <h2>Mumbai Indians</h2>
//     <img src="https://www.pngfind.com/pngs/m/12-123280_all-team-ipl-logo-hd-png-download.png"/>
//     <p>15</p>
//     <h3>Ishanth Kishan</h3>
//     <h3>Trent Boult</h3>
//     <p>5</p>
//   </div>
    var TeamCard= document.createElement("a");
    TeamCard.className="team-card";
    TeamCard.id=id+1;    
    TeamCard.href="./player.html?id="+teamsList1.name;
    var TeamName= document.createElement("h2");
    TeamName.innerHTML=teamsList1.name;
    var TeamPhoto= document.createElement("img");
    TeamPhoto.src=teamsList1.icon;
    TeamPhoto.alt=teamsList1.name+"image"
    var PlayerCount= document.createElement("p")
    PlayerCount.innerHTML="Players"+ " : " +id+1;
    var TopBatsman= document.createElement("h3");
    TopBatsman.innerHTML="Top Batsman"+ " : " +teamsList1.batsman;
    var TopBowler= document.createElement("h3");
    TopBowler.innerHTML="Top Bowler"+ " : " +teamsList1.bowler;
    var Wins= document.createElement("h3");
    Wins.innerHTML="Champion"+ " : " +teamsList1.wins

    TeamCard.appendChild(TeamName);
    TeamCard.appendChild(TeamPhoto);
    TeamCard.appendChild(PlayerCount);
    TeamCard.appendChild(TopBatsman);
    TeamCard.appendChild(TopBowler);
    TeamCard.appendChild(Wins);
        
   
    console.log(TeamCard)
    mainElement.appendChild(TeamCard)
}
var searchElement=document.getElementById("search-element");
searchElement.onkeyup=function(e){
    alert("vbmm")
}
 