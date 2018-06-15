(function () {                                                                       //dodanie izolujacej funkcji , ktora na koncu jest
    // wywoływana przez () n końcu
    // zaraz po wywołaniu przez function(){}()
    document.addEventListener('DOMContentLoaded', init);                                //czekamy na załadowanie się strony i całego DOM ,
    // bez jquerry musimy to obsłuzyć w js
    var tbody;                                                                     //definicja zmienej dostepnej globalnie


    function init() {                                                                  //akcja ktorą wywołujemy już docelowo
        console.log('hello from vanilla');

        tbody = document.querySelector('tbody');
        tbody.addEventListener('input', handleItemChange);
        addTr();

        tbody.addEventListener('click', handleItemAdd);
        tbody.addEventListener('click', handleItemRemove);

        function handleItemAdd(event) {
            if (event.target.dataset.action === 'add') {                                         //sprawdznaie czy akcja jest zgodna z data.set.action === 'add'
                console.log('handleItemAdd', event.target.dataset.action);
                addTr();
            }
        }

        function handleItemRemove(event) {
            var isRemovedButton = event.target.dataset.action === 'remove'                      //warunki do if'a -> czy jest klasy remove
            var hasMultipleRows = tbody.querySelectorAll('tr:not(.template)').length > 1;        //tylko wtedy kiedy jest wiecej niz jden wiersz

            if (isRemovedButton && hasMultipleRows) {
                console.log('handleItemRemove', event.target.dataset.action);
                event.target.closest('tr').remove();                                       //wybiera selektor najblizszy 'tr' i wykonuje metode remove

            }
        }


        function handleItemChange(event) {
            if (event.target.type === 'number' || event.target.tagName === 'SELECT')      //ten if powoduje że działa tylko na polach przyjmujacych
            // number i polach select , bez pól typu strng
            //   console.log('handleItemChange',event);
                setItemSum(event.target.closest('tr'));

        }

        function addTr() {
            var template = tbody.querySelector('.template');
            var newTr = template.cloneNode(true);

            newTr.classList.remove('template');
            tbody.insertAdjacentElement('beforeend', newTr);
            console.log('addTr');
        }


        function setItemSum(tr) {
            //   console.log('setItemSum',event);
            var items = tr.querySelector('[name="txtFldItems"]').value;
            var net = tr.querySelector('[name="txtFldNetValue"]').value;
            var vat = tr.querySelector('[name="txtFldVAT"]').value;
            //console.log(items ,net, vat ,event);
            var sum = items * net * vat;                                                      //mnożenie danych
            tr.querySelector('[name="txtfldGrossValue"]').value = sum.toFixed(2);         //usupełnianie danych w polu 'brutto'
        }


    }
})();