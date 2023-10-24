

let userInfo = {};
let originUserInfo = {};


function updateUserInfo() {
    $("#input-change-username").bind("change",function(){
        userInfo.username = $(this).val();
    });
    $("#input-change-gender-male").bind("click",function(){
        userInfo.gender = $(this).val();
    });
    $("#input-change-gender-female").bind("click",function(){
        userInfo.gender = $(this).val();
        
    });
    $("#input-change-address_1").bind("change",function(){
        userInfo.address_1 = $(this).val();
    });
    $("#input-change-address_2").bind("change",function(){
        userInfo.address_2 = $(this).val();
    });
    $("#input-change-city").bind("change",function(){
        userInfo.city = $(this).val();
    });
    $("#input-change-state").bind("change",function(){
        userInfo.state = $(this).val();
    });
    $("#input-change-zipCode").bind("change",function(){
        userInfo.zipCode = $(this).val();
    });

    $("#input-change-phone").bind("change",function(){  
        userInfo.phone = $(this).val();
    });
}


function callUpdateUserInfo(){
    $.ajax({
        url: "/updateInfo",
        type: "put",
        data: userInfo,
        success: function(){
            //update origin UserInfo
            originUserInfo = Object.assign(originUserInfo, userInfo);
            //reset all
            window.location.href = "http://localhost:8017/fuelPrediction";
            $("input-btn-cancel-update-user").click();
        },
        error: function(error){
            // display error
            console.log(error);
            $(".user-modal-alert-error").find("span").text(error.responseText);
            $(".user-modal-alert-error").css("display", "block");
            $("input-btn-cancel-update-user").click();

        }

    }) 
}

$(function(){
    originUserInfo = {
        username: $("#input-change-username").val(),
        gender: ($("#input-change-gender-male").is(":checked")) ? $("#input-change-gender-male").val() : $("#input-change-gender-female").val(),
        address_1: $("#input-change-address_1").val(),
        address_2: $("#input-change-address_2").val(),
        city: $("#input-change-city").val(),
        state: $("#input-change-state").val(),
        state: $("#input-change-zipCode").val(),
        phone: $("#input-change-phone").val(),
    
    }
    console.log(originUserInfo);
    updateUserInfo();
    $("#input-btn-update-user").bind("click",function(){
        if($.isEmptyObject(userInfo)){
            alertify.notify("you need to make some changes before updating your information","error",7);
            return false;
        }

        if(!$.isEmptyObject(userInfo)) {
            callUpdateUserInfo();
        }
        
    });

    $("#input-btn-cancel-update-user").on("click",function(){
        userInfo = {};
      
       $("#input-change-username").val(function() {
        return originUserInfo.username})
       if (originUserInfo.gender === "male"){
        $("#input-change-gender-male").click()
       } else {
        $("#input-change-gender-female").click();
       }
       
       $("#input-change-address_1").val(function(){
        return originUserInfo.address_1 })
        $("#input-change-address_2").val(function(){
            return originUserInfo.address_2 })
       $("#input-change-city").val(function() {
        return originUserInfo.city })
       $("#input-change-state").val(function() {
        return originUserInfo.state })
       $("#input-change-zipCode").val(function() {
        return originUserInfo.zipCode })
       $("#input-change-phone").val(function() {
        return originUserInfo.phone })
    });
})

