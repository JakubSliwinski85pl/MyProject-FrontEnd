$(function () {
    var $tbody = $('tbody'); //chashowanie selektora//

    $tbody                                                              //dla $body:
    //      .on('click', '.box' ,  handleBoxClick)                         //event handler dla klikniecie w box
    //      .on('click', '.clicked button' ,  removeBox)                   //event handler dla klikniecie w remove box
        .on('input', '[type=number],select', handleInputChange)                  //event handler dla zmiany inputa
        .on('click', '[data-action="add"]', addItem)
        .on('click', '[data-action="remove"]', removeItem);

    addTr($('tbody').find('tr:last'));
    calcTotal($('tbody'));

function removeItem(event) {

  if( $('tbody tr:not(.templte)').length >1){
      console.log('a')
    $(event.target).closest('tr').remove();
    enumerate();
      calcTotal($('tbody'));
}
}

    function addTr($target) {
        var newTr = $target.closest('table').find('.template')
            .clone()
            .removeClass('template')
        $target.closest('tr').after(newTr);

        enumerate();
    }
    function addItem(event) {
        var $target = $(event.target);
        addTr($target);

    }
    function enumerate() {
        $('tbody tr:not(.template)').each(function (index, tr) {
            $(tr).find('td:first').text(index + 1 + '.')
        });

    }
    function handleInputChange(event) {
        setItemSum(event);
        calcTotal($(event.target));
    }
    function setItemSum(event) {
        var $target = $(event.target);
        var $row = $target.closest('tr');
        // var $row = $(this).closest('tr');      // --> to samo poniżej zmiast $(this).
        // var $target = $(event.target);
        // var $row = $target.closest('tr');
        console.log($(this));
        var items = $row.find('[name="txtFldItems"]').val();
        var net = $row.find('[name="txtFldNetValue"]').val();
        var vat = $row.find('[name="txtFldVAT"]').val();
        var sum = items * net * vat;
        $row.find('[name="txtfldGrossValue"]').val(sum.toFixed(2));
        console.log('Values= ' + '  item=' + items + '  net=' + net + '  vat=' + vat);
    }
    function calcTotal($target) {
        //var $target = $(event.target);
        var $table = $target.closest('table');
        var total = 0;

        $table.find('[name="txtfldGrossValue"]').each(function (index, xx) {
            total = total + parseFloat($(xx).val() || 0);
            // console.log( $table.find('[name=txtFldTotal]').val);
        });
        $table.find('[name="txtFldTotal"]').val(total.toFixed(2));
    }
});