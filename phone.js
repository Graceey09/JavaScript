function getNetwork(){
    let telNo = document.getElementsById("Number");
    let logo = document.createElement("img")
    logo.src = getNetworkLogo("080")
    telNo.appendChild(logo);
    
 
}

function getNetworkLogo(phonenumber) {
    if (phonenumber.startswith("070") || phonenumber.startswith("080") ) {
        return "mtn-icon-512x512-jvl0inah.png";        
    }
    if (phonenumber.startswith("0701") || phonenumber.startswith("0708")) {
        return "Airtel_Uganda_Logo.wine.svg";        
    }
    if (phonenumber.startswith("0705") || phonenumber.startswith("0805")) {
        return "globacom-limited-icon-1024x102";        
    }
    if (phonenumber.startswith("0909") || phonenumber.startswith("0809")) {
        return png-transparent-ElementInternalslat-mtn-
        
    }





    
}












// function getNetworkLogo(phoneNumber) {
//     // Assuming Nigerian phone numbers
//     if (phoneNumber.startsWith("080") || phoneNumber.startsWith("081")) {
//         return "mtn_logo.png";
//     } else if (phoneNumber.startsWith("070") || phoneNumber.startsWith("090")) {
//         return "glo_logo.png";
//     } else if (phoneNumber.startsWith("0802") || phoneNumber.startsWith("0808") || phoneNumber.startsWith("0708")) {
//         return "airtel_logo.png";
//     } else if (phoneNumber.startsWith("0809") || phoneNumber.startsWith("0819") || phoneNumber.startsWith("0909")) {
//         return "9mobile_logo.png";
//     } else {
//         return "unknown_logo.png"; // Default or handle other cases
//     }
// }