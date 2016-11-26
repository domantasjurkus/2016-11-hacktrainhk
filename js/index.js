jQuery(function(){

    $('input[name="cabin"]').change(function() {
        $('.crystal').toggleClass('fade');
        $('.standard').toggleClass('fade');
    });

    $('.expand').click(function(){
        var text = $(this).text();
        $(this).parent().parent().next().slideToggle("fast");
        $(this).text(text == "More Details" ? "Hide Details" : "More Details");
    });

    $('.nav-tabs a[href="#question01"]').tab('show');

    $(".btn-01").click(function () {
        $('.nav-tabs a[href="#question02"]').tab('show');
    });

    $(".btn-02").click(function () {
        $('.nav-tabs a[href="#question03"]').tab('show');
    });

    $(".btn-03").click(function () {
        $('.nav-tabs a[href="#packages"]').tab('show');
    });

});