
$(function (){
    var $body  = $('body'); //chashowanie selektora//

    $body.on('click', '.box' ,  addMyProperty);

    function addMyProperty (event){
        var $target = $(event.target);
        var isClicked =  $target.hasClass('clicked');
        var rowIsFull = $target.parent().children().length > 4 ;

        if(isClicked || rowIsFull){
            console.log('nie dodaję');   }
          else {$target
            .after('<div class="box">nowy</div>')
            .addClass('clicked');
            console.log('dodaję');
        }
    }
});
