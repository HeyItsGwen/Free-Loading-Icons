'use strict';

$('.opener').click( () => {
    const hideShow = $(event.currentTarget).parent().find('.hideShow');
    hideShow.css('visibility', 'visible');
    hideShow.css('position', 'static');
});

$('.closer').click( () => {
    const hideShow = $(event.currentTarget).parent().parent().find('.hideShow');
    hideShow.css('visibility', 'hidden');
    hideShow.css('position', 'absolute');
});

