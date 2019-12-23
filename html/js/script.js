//  used
//  noUiSlider:
//  https://refreshless.com/nouislider/
//  PickMeUp cal
//  https://github.com/nazar-pc/PickMeUp

//index page
if (document.body.classList.contains('body-index')) {

    //calendar
    const calSettings = {
        format	: 'Y-m-d',
        hide_on_select  : true,
        first_day: 1,
        date: Date.now()
    };

    let inputCal    = pickmeup('.input_date_in', calSettings);
    let outputCal   = pickmeup('.input_date_out', calSettings);

    const inputCalBtn   = document.querySelector(".input_cal_in");
    const outputCalBtn  = document.querySelector(".input_cal_out");

    inputCalBtn.addEventListener("click", function() {    
        inputCal.show();
    })

    outputCalBtn.addEventListener("click", function() {
        outputCal.show();
    })

    //  modal btns
    const modalOpenBtn = document.querySelector('.modal-open-search-button');
    const modalSearchForm = document.querySelector('.modal-search_form');
    const modalBackground = document.querySelector('.form_black_bg');

    modalOpenBtn.addEventListener('click', function() {
        modalSearchForm.classList.add('displayBlock');
        modalBackground.classList.add('displayBlock');
    });

    modalBackground.addEventListener('click', function() {
        modalSearchForm.classList.remove('displayBlock')
        modalBackground.classList.remove('displayBlock');
    });

    // inc/dec btns

    const adultsDecBtn = document.querySelector('.adults_input_count_dec');
    const adultsIncBtn = document.querySelector('.adults_input_count_inc');

    const childrenDecBtn = document.querySelector('.children_input_count_dec');
    const childrenIncBtn = document.querySelector('.children_input_count_inc');

    let adultsCounter   = document.getElementById('adults');
    let childrenCounter = document.getElementById('kids');

    adultsDecBtn.addEventListener('click', function() {
        if (adultsCounter.value >0) {
            adultsCounter.value = parseInt(adultsCounter.value) - 1;    
        }
    });

    adultsIncBtn.addEventListener('click', function() {
            adultsCounter.value = parseInt(adultsCounter.value) + 1;    
    });

    childrenDecBtn.addEventListener('click', function() {
        if (childrenCounter.value >0) {
            childrenCounter.value = parseInt(childrenCounter.value) - 1;    
        }
    });

    childrenIncBtn.addEventListener('click', function() {
            childrenCounter.value = parseInt(childrenCounter.value) + 1;    
    });
};

//hotels page
if (document.body.classList.contains('body-hotels')) {
    let rangeSlider     = document.querySelector('.filter-block_priceRange_selector');
    let fromField       = document.querySelector('.filter-block_priceRange_from');
    let toField         = document.querySelector('.filter-block_priceRange_to');
    let priceFromInput  = document.getElementById('priceFromInput');
    let priceToInput    = document.getElementById('priceToInput');

    noUiSlider.create(rangeSlider, {
        start: [1200, 5000],
        connect: true,
        range: {
            'min': 1000,
            'max': 10000
        }
    });

    rangeSlider.noUiSlider.on('update', function(value) {
        fromField.innerHTML     = 'От ' + Math.round(value[0]);
        toField.innerHTML       = 'До ' + Math.round(value[1]);

        priceFromInput.value    = Math.round(value[0]);
        priceToInput.value      = Math.round(value[1]);    
    });
}