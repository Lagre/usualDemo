$(function() {
    var allTd = $("tbody td:even");
    allTd.click(function() {
        var oTd = $(this),
            oText = oTd.html();
        if(oTd.children('input').length !== 0) {return false;}
        oTd.html("");

        var oInput = $("<input type='text'>").val(oText).css({
            "width" : oTd.width(),
            "border-width" : 0,
            "text-align" : "center",
            "font-size" : "21px",
            "background-color" : oTd.css("background-color")
        }).appendTo(oTd);

        oInput.trigger('focus').trigger('select');

        oInput.keyup(function(event) {
            var keyNum = event.which;
            switch(keyNum) {
                case 13 :
                    var newText = oInput.val();
                    oTd.html(newText);
                    break;
                case 27 : 
                    oTd.html(oText);
                    break;
            }
        });
    });
});