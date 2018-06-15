$(function(){
    $.getJSON('http://localhost:3000/positions', function(positions){
        fillTable(positions);


    });
});



 function fillTable(positions) {
     positions.forEach(function (position) {
         var $newTr = $('tr.template')
             .clone()
             .removeClass('template');

         var $filledTr = createTr(position, $newTr);
         $('tbody').append($filledTr);

         //
   //      console.table(positions);
         //
     });
 }

 function createTr(position, $newTr){
        $newTr.find('[name=txtFldName]').val(position.name);
        $newTr.find('[name=txtFldItems]').val(position.items);
        $newTr.find('[name=txtFldNetValue]').val(position.net);
        $newTr.find('[name=txtFldVAT]').val(position.vat);
        $newTr.find('[name=txtfldGrossValue]').val(position.vat*position.net*position.items);
       // console.log($newTr);
        return $newTr;
 }

