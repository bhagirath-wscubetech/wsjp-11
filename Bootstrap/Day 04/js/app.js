$('.my-slider').slick(
    {
        lazyLoad: 'ondemand',
        slidesToShow: 3,
        slidesToScroll: 1
    }
);


function handleTickInit(tick) {

    // Uncomment to set labels to different language ( in this case Dutch )
    /*
    var locale = {
        YEAR_PLURAL: 'Jaren',
        YEAR_SINGULAR: 'Jaar',
        MONTH_PLURAL: 'Maanden',
        MONTH_SINGULAR: 'Maand',
        WEEK_PLURAL: 'Weken',
        WEEK_SINGULAR: 'Week',
        DAY_PLURAL: 'Dagen',
        DAY_SINGULAR: 'Dag',
        HOUR_PLURAL: 'Uren',
        HOUR_SINGULAR: 'Uur',
        MINUTE_PLURAL: 'Minuten',
        MINUTE_SINGULAR: 'Minuut',
        SECOND_PLURAL: 'Seconden',
        SECOND_SINGULAR: 'Seconde',
        MILLISECOND_PLURAL: 'Milliseconden',
        MILLISECOND_SINGULAR: 'Milliseconde'
    };

    for (var key in locale) {
        if (!locale.hasOwnProperty(key)) { continue; }
        tick.setConstant(key, locale[key]);
    }
    */

    var nextYear = (new Date()).getFullYear() + 1;

    Tick.count.down(nextYear + '-01-01').onupdate = function (value) {
        tick.value = value;
    };

}