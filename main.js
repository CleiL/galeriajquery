$(document).ready(function() {
    $('header button').click(function() {
        $('form').slideDown();
    })

    $('#btn-cancelar').click(function() {
        $('form').slideUp();
    })

    $('form').on('submit', function(e) {
        e.preventDefault();
        const endNovaImg = $('#end-img').val();
        const novoItem = $('<li style="display:none"></li>');
        $(`<img src="${endNovaImg}"/>`).appendTo(novoItem);
        $(`
            <div class="overlay-img-link">
                <a href="${endNovaImg}" title="Ver imagem no tamanho real" target="_blank" >
                Ver imagem no tamanho real
                </a>
            </div >    
        `).appendTo(novoItem);
        $(novoItem).appendTo('ul');
        $(novoItem).fadeIn(1000);
        $('#end-img').val('');
    })
})