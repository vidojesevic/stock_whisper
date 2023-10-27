$(document).ready(function() {
    console.log("From jQuery!");
    logoAnimate();
})

function logoAnimate() {
    const logo = $('.navbar a');

    // $(logo).on('mouseover', function() {
    //     const span = $(this).find('span');
    //     span.removeAttr("hidden").animate({ opacity: 0 }, {
    //         duration: 200,
    //         step: function(now, fx) {
    //             if (fx.prop === "opacity") {
    //                 span.css("opacity", 1 - now);
    //             }
    //         },
    //         complete: function() {
    //             span.attr("hidden", true);
    //         }
    //     });
    // })
    $(logo).on('mouseover', function() {
        const span = $(this).find('span');
        setTimeout(function() {
            span.removeAttr("hidden");
        }, 230);
    }).on('mouseleave', function() {
        const span = $(this).find('span');
        setTimeout(function() {
            span.attr("hidden", true);
        }, 230);
       });
}
