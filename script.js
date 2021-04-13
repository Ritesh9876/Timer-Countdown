var TimerModule=(function(){
    var k;
    var timer_is_on=1;
    function timechecker(val){
        if(timer_is_on){
        if(val>=0){
            var timer=val;
            document.querySelector(".secondcounter").innerHTML=timer;
            val-=1;
         k= setTimeout(function(){timechecker(val);}, 1000);

    }if(val===-1){
        let minutediplayer=document.querySelector(".minutecounter");
        let minvalue=parseInt(minutediplayer.innerHTML);
        if(minvalue>0){
            val=59;
        minvalue-=1;
        if(minvalue>=0){
            minutediplayer.innerHTML=minvalue;
             k= setTimeout(function(){timechecker(val,".secondcounter");}, 1000);
        }
        }if(minvalue===0){
            let hourdisplayer=document.querySelector(".hourcounter");
           let hourvalue=parseInt(hourdisplayer.innerHTML);
           if(hourvalue>0){
               val=59;
                minutediplayer.innerHTML=58;
               hourvalue-=1;
               if(hourvalue>=0){
                 k= setTimeout(function(){timechecker(val,".secondcounter");}, 1000);
                hourdisplayer.innerHTML=hourvalue;
               }
           }if(hourvalue===0&&minvalue===0){
            let daydisplayer=document.querySelector(".daycounter");
            let dayvalue=parseInt(daydisplayer.innerHTML);
            if(dayvalue>0){
               hourdisplayer.innerHTML=23;
                minutediplayer.innerHTML=58;
                val=59;
                dayvalue-=1;
                if(dayvalue>=0){
                    daydisplayer.innerHTML=hourvalue;
                     k= setTimeout(function(){timechecker(val,".secondcounter");}, 1000);
                    
                }
           }if(dayvalue===0&&hourvalue===0&&minvalue===0&&val===-1){
               return;
           }
        }
    }
    
    
}
    }
    }
    function secondCounter(){
        let seconds=document.querySelector("#seconds").value;
        const t=seconds;
        document.querySelector("#seconds").value =null;
        timer_is_on=1;
        timechecker(t);
    }
    
function setcounters(){
   let minutes=document.querySelector("#minutes").value;
        const minutediplayer=document.querySelector(".minutecounter");
        minutediplayer.innerHTML=minutes;
        document.querySelector("#minutes").value=null;

        let hours=document.querySelector("#hours").value;
        const hourdiplayer=document.querySelector(".hourcounter");
        hourdiplayer.innerHTML=hours;
        document.querySelector("#hours").value=null;

        let days=document.querySelector("#days").value;
        const daydiplayer=document.querySelector(".daycounter");
        daydiplayer.innerHTML=days;
        document.querySelector("#days").value=null;
}
    
    function setTimer(){
    secondCounter();
    setcounters();
    }
    function reset(){
  clearTimeout(k);
  timer_is_on=0;
    }
    return {setTimer,reset,timer_is_on};
}());

/// Event listeners
  const sumbit=document.querySelector("#submit");
sumbit.addEventListener("click",function(e){
      e.preventDefault();
      const days=document.querySelector("#days").value;
        const hours=document.querySelector("#hours").value;
        const minutes=document.querySelector("#minutes").value;
        const seconds=document.querySelector("#seconds").value;
    if(days===""|| hours===""||minutes===""||seconds===""){
        alert("Please fill all spaces");
    }else{
        TimerModule.setTimer();
    }
});



const  reset=document.querySelector(".reset");

reset.addEventListener("click",function(){
    document.querySelector(".secondcounter").innerHTML=null;
    document.querySelector(".minutecounter").innerHTML=null;
    document.querySelector(".hourcounter").innerHTML=null;
    document.querySelector(".daycounter").innerHTML=null;
    TimerModule.reset();
    
})
