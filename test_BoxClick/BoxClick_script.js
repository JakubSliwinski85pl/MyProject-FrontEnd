
$(function (){
    var $body  = $('body'); //chashowanie selektora//

    $body.on('click', '.box' ,  addMyProperty);

    function addMyProperty (event){
        var $target = $(event.target);                                  // <- zamieniam sobie czesto wyszukiwany kawalem na zmienną
        var isClicked =  $target.hasClass('clicked');                   // <- zamieniam sobie czesto wyszukiwany property na zmienną
        var $row = $target.closest('.row');                             // <- zamieniam sobie czesto wyszukiwany kawalem na zmienną
        var boxesCount = $row.find('.box:not(.template)').length       // <- znajdz najblizszy element od
                                                                        // targeta idąc po DOM w górę taki
                                                                        // jak podany w paramtrze 'closest(x)'
                                                                        // i znajdz element taki jak w parametrze find(x)
        var rowIsFull = boxesCount > 4 ;

        if(isClicked || rowIsFull){
            console.log('nie dodaję');
            }
            else {

                var $NewBox = $row.find('.box.template')
                    .clone()
                    .removeClass('template');

                $NewBox.text($NewBox.text() + (boxesCount +1));

                $target
                .after($NewBox)
                .addClass('clicked');
                console.log('dodaję');
        }
    }
});
