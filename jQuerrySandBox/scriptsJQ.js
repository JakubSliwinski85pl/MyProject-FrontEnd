// $('document').ready(function (){
//     var p = $('p');
//     console.log(p.length);
// })
// tak wyglada pełna skłądnia załadowania skryptu na zaladownaie strony.

//.on - na kliknięcie   .one- na klikniecie tylko raz


$(function (){
    var $body  = $('body')   //chashowanie selektora//

    $body.on('click', 'p', addNewParagraph)

    // function addNewParagraph (event){
    //     console.log(event);
    //     console.log(this);   //this - zawiera kontekst wywołani funkcji//
    //     $body.append('<p>Nowy paragraf</p>')
    //
    //     var p = $('p');
    //     console.log(p.length);
    // }


    function addNewParagraph (event){
    $(event.target).after('<p>Nowy paragraf</p>');}  //
});
