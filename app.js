let pronoun = ['they', 'you', 'she', 'yours'];
let adj = ['smart', 'short', 'tall', 'cold'];
let noun = ['job', 'cheese', 'pen', 'snow'];
let ext = ['.ar', '.th', '.us', '.io'];

for(let i = 0; i < pronoun.length; i++){
    for(let j = 0; j < adj.length; j++){
        for(let k = 0; k < noun.length; k++){
            for(let m = 0; m < ext.length; m++) {
                document.getElementById("nombres-de-dominio").innerHTML += "<div>" + pronoun[i] + "" + adj[j] + "" + noun[k] + ext[m] + "</div>";
            }
        }   
    }
}    

