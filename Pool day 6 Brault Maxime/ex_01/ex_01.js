window.onload = ()=> {
    let InfoAgent= {
        lastname :"Bond",
        firstname: "James",
        code: "007",
        age: 57,

    };

    function displayAgentInfo(InfoAgent){
        var paragraphe = document.getElementById('container')
        var ecrit = document.querySelector('p')
        ecrit.innerHTML = "MY NAME IS " + InfoAgent.lastname + ", " + InfoAgent.firstname +" "+ InfoAgent.lastname + "! " + "I'M THE AGENT " + InfoAgent.code + " AND I'M " + InfoAgent.age + "." 
    }
    displayAgentInfo(InfoAgent);
}