// FILTER
function filterPlayers(role){
 let cards=document.querySelectorAll(".card");
 cards.forEach(card=>{
   if(role==="all" || card.classList.contains(role)){
     card.style.display="block";
   } else{
     card.style.display="none";
   }
 });
}

// VOTE
document.querySelectorAll(".vote-btn").forEach(btn=>{
 btn.onclick=()=>{
   let count=parseInt(btn.innerText.replace("❤️",""))+1;
   btn.innerText="❤️ "+count;
 }
});

// CHARTS
window.onload = function(){

  // BAR CHART
  new Chart(document.getElementById("barChart"),{
    type:'bar',
    data:{
      labels:["2023","2024","2025","2026"],
      datasets:[
        {label:"Wins",data:[10,12,14,16],backgroundColor:"red"},
        {label:"Losses",data:[6,4,2,1],backgroundColor:"gold"}
      ]
    },
    options:{
      responsive:true,
      plugins:{legend:{position:'top'}},
      scales:{y:{beginAtZero:true}}
    }
  });

  // PIE CHART
  new Chart(document.getElementById("pieChart"),{
    type:'pie',
    data:{
      labels:["Wins","Losses"],
      datasets:[{
        data:[16,4],
        backgroundColor:["red","gold"],
        hoverOffset:20,
        borderColor:"#000",
        borderWidth:2
      }]
    },
    options:{
      responsive:true,
      plugins:{
        legend:{position:'bottom', labels:{color:'gold', font:{size:14}}},
        tooltip:{callbacks:{label:function(context){
          return context.label + ': ' + context.parsed + ' matches';
        }}}
      }
    }
  });

}
