/* Examples */



$('.third.circle').circleProgress({
    value: .75,
    lineCap: 'round',
    fill: { gradient: [['#62bbf2', .5], ['#62bbf2', .5]], gradientAngle: Math.PI / 4 }
}).on('circle-animation-progress', function(event, progress, stepValue) {
    $(this).find('strong').text(String(stepValue.toFixed(2)).substr(1));
});




/*********按钮事件********/
$('#demo-reset').click(function(){
    
    $('.third.circle').circleProgress({
    value: 0,
    lineCap: 'round',
    fill: { gradient: [['#0681c4', .5], ['#4ac5f8', .5]], gradientAngle: Math.PI / 4 }
    }).on('circle-animation-progress', function(event, progress, stepValue) {
        $(this).find('strong').text(String(stepValue.toFixed(2)).substr(1));
    });
    
    
});

// $('#demo-play').click(function(){
//     $('.first.circle').circleProgress({
//     value: 0.35,
//     animation: false,
//     fill: { gradient: ['#ff1e41', '#ff5f43'] }
// });



// // $('.third.circle').circleProgress({
// //     value: 1,
// //     fill: { gradient: [['#0681c4', .5], ['#4ac5f8', .5]], gradientAngle: Math.PI / 4 }
// // }).on('circle-animation-progress', function(event, progress, stepValue) {
// //     $(this).find('strong').text(String(stepValue.toFixed(2)).substr(1));
// // });


// });