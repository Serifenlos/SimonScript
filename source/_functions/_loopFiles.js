function GetFileNameOnly(myFileName) {
    var myString = "";
    var myResult = myFileName.lastIndexOf(".");
    if (myResult == -1) {
        myString = myFileName;
    } else {
        myString = myFileName.substr(0, myResult);
    }
    var myString = myString.replace(/^(\d{3}(-|_{2}))(.+)/g, "$3");
    return myString
};

 