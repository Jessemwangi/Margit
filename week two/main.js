var age = prompt("Enter your age");
var msg="";
switch (age){
    case (age<18):
    console.log("two young");
    msg="a";
    break;
    case (age<27):
    console.log("right age for military");
    msg="b";
    break;
    case (age<41):
        console.log("you are in reserve");
        msg="c";
        break;
        case (age<55):
            console.log("You are in backup reserved");
            msg="d";
            break;
            default:
                console.log("Too aged");
                msg="e";
             //   document.getElementById("agestatu").innerHTML=msg
}


// if (age<18)
// {
//     console.log("two young");
//     }
//     if (age<27)
//     {
//         console.log("right age for military");
//         }
//         if (age<41)
// {
//     console.log("you are in reserve");
//     }
//     if (age<18)
// {
//     console.log("two young");
//     }
