let myFormEl = document.getElementById("addUserForm");
let formData = {
    name: "",
    email: "",
    status: "Active",
    gender: "Male"
}
let nameEl = document.getElementById("name");
let nameErrMsgEl = document.getElementById("nameErrMsg")
nameEl.addEventListener("change", function(event) {
    if (event.target.value === "") {
        nameErrMsgEl.textContent = "Required*";
    } else {
        nameErrMsgEl.textContent = "";
    }
    formData.name = event.target.value;

})

let emailEl = document.getElementById("email");
let emailErrMsgEl = document.getElementById("emailErrMsg")
emailEl.addEventListener("change", function(event) {
    if (event.target.value === "") {
        emailErrMsgEl.textContent = "Required*";
    } else {
        emailErrMsgEl.textContent = "";
    }
    formData.email = event.target.value;
})
let statusEl = document.getElementById("status");
statusEl.addEventListener("change", function() {
    formData.status = event.target.value;

})
let maleGenderEl = document.getElementById("genderMale");
maleGenderEl.addEventListener("change", function() {
    formData.gender = event.target.value;
});
let femaleGenderE1 = document.getElementById("genderFemale");
femaleGenderE1.addEventListener("change", function() {
    formData.gender = event.target.value;

});

function submitFormData(formData) {
    let url = "https://gorest.co.in/public-api/users";
    let options = {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
            Authorization: "Bearer a333553f6830b7ee549f1fc4871bcbc71c4caaa610f15225af1c36030fbe3b38"
        },
        body: JSON.stringify(formData)
    };
    fetch(url, options)
        .then(function(response) {
            return response.json();
        })
        .then(function(jsonData) {
            if (jsonData.code === 422) {
                if (jsonData.data[0].message === "has already been taken") {
                    emailErrMsgEl.textContent = "Email has already been taken";
                }
            }
            console.log(jsonData)
        })
}
myFormEl.addEventListener("submit", function(event) {
    event.preventDefault();
    if (nameEl.value === "" && emailEl.value === "") {
        nameErrMsgEl.textContent = "required*";
        emailErrMsgEl.textContent = "required*";
    } else if (nameEl.value === "") {
        nameErrMsgEl.textContent = "required*";

    } else if (emailEl.value === "") {
        emailErrMsgEl.textContent = "required*";
    } else {
        submitFormData(formData);
    }
});