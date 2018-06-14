
$(function (){
    var $body  = $('body'); //chashowanie selektora//

    $body.on('click', '.box' ,  handleBoxClick);                        //event handler dla klikniecie w box
    $body.on('click', '.clicked button' ,  removeBox);                  //event handler dla klikniecie w remove box

    function removeBox(event) {
            this.closest('.box').remove();
            console.log('usuń');
    }

    function handleBoxClick (event){
        var $target = $(event.target);                                  // <- zamieniam sobie czesto wyszukiwany kawalem na zmienną
           if (!$target.hasClass('box') ){
               console.log('nie box!');
               return;
           }

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

                $NewBox.find('span').text($NewBox.find('span').text() + (boxesCount +1));

                $target
                .after($NewBox)
                .addClass('clicked');
                console.log('dodaję');
        }
    }
});
