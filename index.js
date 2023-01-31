function validationOfButton(){

    if(document.getElementById('find_food').value == "")
        alert("Enter Pincode");
            else if(document.getElementById('find_food').value != "411005")
                alert('Mariyaan Restaurant provides services only in the area defined by pincode 411005');
                    else
                        window.location.href = "food-items.html";
                        // location.replace("foot-items.html");
}