'use strict';

let clickCount = 0;

$('.opener').click( () => {
    if(clickCount == 0){
        $('.hideShow').css('visibility', 'visible');
        $('.hideShow').css('position', 'static');
        clickCount += 1;
        console.log(clickCount);
    }
});

$('.closer').click( () => {
    if(clickCount == 1){
        $('.hideShow').css('visibility', 'hidden');
        $('.hideShow').css('position', 'absolute');
        clickCount -= 1;
    }
});

