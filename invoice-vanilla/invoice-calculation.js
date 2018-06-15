(function(){                                                                       //dodanie izolujacej funkcji , ktora na koncu jest
                                                                                   // wywoływana przez () n końcu
                                                                                   // zaraz po wywołaniu przez function(){}()
document.addEventListener('DOMContentLoaded',init);                                //czekamy na załadowanie się strony i całego DOM ,
                                                                                   // bez jquerry musimy to obsłuzyć w js
Łfunction init() {                                                                  //akcja ktorą wywołujemy już docelowo
    console.log('hello from vanilla');
            var tbody =   document.querySelector('tbody');
                tbody.addEventListener('input',handleItemChange);

       function handleItemChange (event){
       if (event.target.type === 'number' || event.target.tagName ==='SELECT')      //ten if powoduje że działa tylko na polach przyjmujacych
                                                                                    // number i polach select , bez pól typu strng
        //   console.log('handleItemChange',event);
       setItemSum(event.target.closest('tr'));
       }

       function setItemSum(tr){
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