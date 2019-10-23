$(document).ready(function() {
    $(".dv-coupon .showOverlay").bind("click", function(){
        $(this).siblings(".overlay").slideDown(500);
    });

    $(".dv-coupon .closeOverlay").bind("click", function(){
        $(this).parent(".overlay").slideUp(500);
    });
    
    if(!isMobile) {
        $("button.js-clipCpnBtn").each(function (i, btn) { $(btn).ClipCoupon(); });
    }
    else if (isMobile) {
        $("button.js-clipCpnBtn").each(function(i, btn) {
            $(btn).ClipCoupon();
        });
    }		
});