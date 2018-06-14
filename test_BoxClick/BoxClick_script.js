
$(function (){
    var $body  = $('body');   //chashowanie selektora//


    $body.on('click', $('.box').css('clicked'), sayHello);

    function sayHello (event){
        if($(event.target).hasClass('clicked')){
            console.log('Hello');}
          else {
            console.log('No');
            $(event.target).addClass('clicked')
        }
    }
});
