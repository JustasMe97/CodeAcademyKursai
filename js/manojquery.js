$('.tabai > a').click(function(e){
    pakeistiTaba($(this).attr('href'));
    priskirtiKlase('active', this);
    e.preventDefault()
});

function pakeistiTaba (id) {
    $('.sheets > div').hide();
    $(id).show();
}

function priskirtiKlase(klasesvardas, el){
    $('.tabai > a').removeClass(klasesvardas);
    $(el).addClass(klasesvardas);
}




