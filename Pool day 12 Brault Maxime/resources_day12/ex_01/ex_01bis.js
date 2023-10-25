function handleSubmit() {
    const regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    let FNvalue = document.getElementById('firstname').value;
    let LNvalue = document.getElementById('lastname').value;
    let Evalue = document.getElementById('Email').value;
    let Pvalue = document.getElementById('Password').value;
    if (FNvalue === "") {
        let errorR = document.getElementById('error');
        errorR.innerHTML = "First name must not be empty";
    }
    else if (LNvalue === "") {
        let errorR = document.getElementById('error');
        errorR.innerHTML = "Last name must not be empty";
        return;
    }

    else if (!Evalue.match(regexEmail)) {
        let errorR = document.getElementById('error');
        errorR.innerHTML = "Email is badly formatted";
        return;
    }


    else if (Pvalue.length < 8 || !/^[0-9]+$/.test(Pvalue) || !/[a-zA-Z]/.test(Pvalue)) {
        let errorR = document.getElementById('error');
        errorR.innerHTML = "Password must be at least 8 characters long and contain at least a letter and a number";
        return;
    }
    let errorR = document.getElementById('error');
    errorR.innerHTML = "";
}
handleSubmit();
