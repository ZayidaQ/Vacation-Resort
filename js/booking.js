
$(document).ready(function(){
    // Retrieve form input values
    var firstName = localStorage.getItem("firstName");
    var lastName = localStorage.getItem("lastName");
    var email = localStorage.getItem("email");
    var phone = localStorage.getItem("phone");
    var checkIn = localStorage.getItem("checkIn");
    var checkOut = localStorage.getItem("checkOut");
    var adults = localStorage.getItem("adults");
    var children = localStorage.getItem("children");

    var additionalRequests = localStorage.getItem("additionalRequests");

    // Display form input values in confirmation message
    $("#firstName").text(firstName);
    $("#lastName").text(lastName);
    $("#email").text(email);
    $("#phone").text(phone);
    $("#checkIn").text(checkIn);
    $("#checkOut").text(checkOut);
    $("#adults").text(adults);
    $("#children").text(children);

    $("#additionalRequests").text(additionalRequests);
    // Clear local storage
    localStorage.clear();
});