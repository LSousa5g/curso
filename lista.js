$(document).ready(function(){

    $('form').on('submit', function(e){
        e.preventDefault();
        
        const itemNovo = $('#input-add-item').val();
        const addNovoItem = $(`<li>${itemNovo}</li>`);

        $(addNovoItem).appendTo('ul');
        $('#input-add-item').val('');
    });
        $('ul').on('click', 'li', function(){

            $(this).toggleClass('riscado');
        });
});