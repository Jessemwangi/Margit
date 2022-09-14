const userage = prompt("Enter your age");
var msg = "";
var age = parseInt(userage);
console.log(age);
{
    // switch (age){

    //     case (age < 18):
    //     console.log("two young");
    //     msg="a";
    //     break;
    //     case (age < 27):
    //     console.log("right age for military");
    //     msg="b";
    //     break;
    //     case (age < 41):
    //         console.log("you are in reserve");
    //         msg="c";
    //         break;
    //     case (age < 55):
    //             console.log("You are in backup reserved");
    //             msg="d";
    //             break;
    //     default:
    //                 console.log("Too aged");
    //                 msg="e";
    //              //   document.getElementById("agestatu").innerHTML=msg
    // }
    const checkAge = () => {
        if (age < 18) {
            msg = "two young";
        }
        else if (age < 27) {
            msg = "right age for military";
        }
        else if (age < 41) {
            msg = "you are in reserve";
        }
        else if (age < 55) {
            msg = "You are in backup reserved";
        }
        else {
            msg = "Too aged";
        }

        console.log(msg);
        document.getElementById("agestatu").innerHTML = String(msg);
        return msg;
    };
    checkAge();
}