

function formValidation() {
    const nama = document.forms["message_form"]["nama"].value;
    const tanhir = document.forms["message_form"]["tanhir"].value;
    const laki_laki = document.forms["message_form"]["laki_laki"].value;
    const messages = document.forms["message_form"]["messages"].value;

    if (nama == "" || tanhir == "" || laki_laki == "" || messages == "") {
        alert("Still error");
    }
    setSenderUI(nama, tanhir, laki-laki, messages);
    
}

function setSenderUI(nama, tanhir, laki_laki, messages) {
    document.getElementById("senderFN").innerHTML = nama;
    document.getElementById("senderBD").innerHTML = tanhir;
    document.getElementById("senderG").innerHTML = laki_laki;
    document.getElementById("senderM").innerHTML = messages;
}



