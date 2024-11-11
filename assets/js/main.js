$(document).ready(function() {
    // Inicializar o Owl Carousel
    const owl = $('.owl-carousel').owlCarousel({
        items: 3,
        loop: true,
        margin: 20,
        
        nav: false,
        dots: false, // Desabilitar os pontos padrão do Owl Carousel        autoplayHoverPause: true,
        startPosition: 1,
        slideTransition: 'ease-in',
        responsive:{
            0:{
                items:3
            },
            600:{
                items:3
            },
            1000:{
                items:3
            }
        }
    })

        

    // Adicionar evento de clique para os pontos personalizados
    $('.dot').click(function() {
        // Obter o índice do ponto clicado
        const index = $(this).data('index');

        // Ir para o slide correspondente no Owl Carousel
        owl.trigger('to.owl.carousel', [index, 300]);

        // Atualizar a classe 'active' nos pontos
        $('.dot').removeClass('active');
        $(this).addClass('active');
    });

    // Sincronizar os pontos personalizados com o slide atual do Owl Carousel
    owl.on('changed.owl.carousel', function(event) {
        // Obter o índice do slide atual
        const currentIndex = event.item.index;

        // Remover a classe 'active' de todos os pontos e adicionar ao ponto correspondente
        $('.dot').removeClass('active');
        $('.dot').eq(currentIndex).addClass('active');
    });
});
