let newPasswordE1 = document.getElementById("newPassword");
let updatePasswordE1 = document.getElementById("confirmPassword");
let newPasswordErrMsgEl = document.getElementById("newPasswordErrMsg");
let updateBtnEl = document.getElementById("updateBtn");
let updatePasswordFormEl = document.getElementById("updatePasswordForm");
let confirmPasswordErrMsgEl = document.getElementById("confirmPasswordErrMsg")
let confirmMsgElement = document.getElementById("confirmMsg");
newPasswordE1.addEventListener("blur", function(event) {
    if (event.target.value === "") {
        newPasswordErrMsgEl.textContent = "Required*";
    } else {
        newPasswordErrMsgEl.textContent = "";
    }
})
updatePasswordE1.addEventListener("blur", function(event) {
    if (event.target.value === "") {
        confirmPasswordErrMsgEl.textContent = "Required*";
    } else {
        confirmPasswordErrMsgEl.textContent = "";
    }
})
updatePasswordFormEl.addEventListener("submit", function(event) {
    event.preventDefault();
    if (newPasswordE1.value === "" && updatePasswordE1.value === "") {
        newPasswordErrMsgEl.textContent = "Required*";
        confirmPasswordErrMsgEl.textContent = "Required";

    } else if (newPasswordE1.value === "") {
        newPasswordErrMsgEl.textContent = "Required*";

    } else if (updatePasswordE1.value === "") {
        confirmPasswordErrMsgEl.textContent = "Required";

    } else {
        newPasswordErrMsgEl.textContent = "";
        if (newPasswordE1.value !== updatePasswordE1.value) {
            confirmPasswordErrMsgEl.textContent = "Password must be same";
        } else {
            confirmPasswordErrMsgEl.textContent = "";
            let intervalid;
            let count = 2;
            intervalid = setInterval(function() {
                if (count > 0) {
                    confirmMsgElement.textContent = "Password successfully updated";
                } else {
                    confirmMsgElement.textContent = "";
                    clearInterval(intervalid);
                }
                count--;
            }, 1000);

        }
    }

})