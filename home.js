function Tag(tag_number){
    for(i=1; i<=5; i++){
        document.getElementById("tag"+i).style.display = "none";
        document.getElementsByClassName("stitle")[i-1].style.color = "rgb(177, 176, 176)";
        if(tag_number==i){
            document.getElementById("tag"+i).style.display = "flex";
            document.getElementsByClassName("stitle")[i-1].style.color = "black";
        }
    }
}

// console.log(window.navigator.userAgent);
// const userAgent = window.navigator.userAgent;
// const substr = "Windows";
//     if (userAgent.includes("Android") || userAgent.includes("iPhone")){
//         document.location = "/mobile.html";
//     }