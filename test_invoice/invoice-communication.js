$(function(){

 var positions = [

     {
      name: 'Krzesło',
      items:4,
      net:200,
      vat: 1.23
    },

    {
        name: 'Stół',
        items:1,
        net:900,
        vat: 1.23
    }
];

 fillTable(positions);


 function fillTable(positions) {
     positions.forEach(function (position) {
         var $newTr = $('tr.template')
             .clone()
             .removeClass('template');

         var $filledTr = createTr(position, $newTr);
         $('tbody').append($filledTr);
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
    console.table(positions);
});