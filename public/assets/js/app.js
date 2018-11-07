//console.log("app.js connected");
$('.addUser').on('click', function (event) {
    event.preventDefault;
    window.location.replace('/signup')
})

$('.Employee').on('click', function (event) {
    event.preventDefault;
    window.location.replace('/employee')
})


$('#signin').on("click", function (event) {
    event.preventDefault();
    console.log("Click Click");
    let user = {
        email: $("#email").val(),
        password: $("#password").val()
    }
    // console.log("User", user);
    $.ajax({
        url: "/signin",
        method: "POST",
        data: user
    }).then(function (response) {
        console.log(response)
        if (response.success) {
            window.location.replace("/dashboard")
        }
    })
})
