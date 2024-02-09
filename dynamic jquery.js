jQuery(document).ready(function(){
    jQuery(document).on("click", "#login_form", function(){
        alert("yess");
        var arr = $(this).serializeArray();
        $.ajax(
        {
            type:"POST",
            url: '',
            data:{},
            success:function(returnVal)
            {
                alert(returnVal);
                
            }
        });
        
    });
 });
