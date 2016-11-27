jQuery(function(){

    $('input[name="cabin"]').change(function() {
        $('.crystal').toggleClass('fade');
        $('.standard').toggleClass('fade');
    });

    /*$('.expand').click(function(){
        var text = $(this).text();
        $(this).parent().next().slideToggle("fast");
        $(this).text(text == "More Details" ? "Hide Details" : "More Details");
    });*/

    $(".btn-01").click(function () {
        $('.nav-tabs a[href="#question02"]').tab('show');
    });

    $(".btn-02").click(function () {
        $('.nav-tabs a[href="#question03"]').tab('show');
    });

    $(".btn-03").click(function () {
        $('.nav-tabs a[href="#packages"]').tab('show');
    });

    // On submit of checkbox form
    $(".btn-checkbox-submit").click(function(e) {
        e.preventDefault();
        console.log($(this));

        $('.nav-tabs a[href="#packages"]').tab('show');
    });

    // Go to heatmap
    $(".availability").click(function () {
        $('.nav-tabs a[href="#heatmap"]').tab('show');
    });

});