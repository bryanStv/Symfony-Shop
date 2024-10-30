//Immediately-Invoked Function Expression (IIFE)
(function(){
    const infoProduct = $("#cart-modal");
    $( "a.open-cart" ).click(function(event) {
        event.preventDefault();
        const id = $( this ).attr('data-id');
        const href = `/api/show/${id}`;
        $.get( href, function(data) {
            $( infoProduct ).find( "#productName" ).text(data.name);
            $( infoProduct ).find( "#productPrice" ).text(data.price+"€");
            $( infoProduct ).find( "#productImage" ).attr("src", "/img/" + data.photo);
            infoProduct.modal('show');
        })
    });
    $(".closeCart").click(function (e) {
        infoProduct.modal('hide');
    });
})();
