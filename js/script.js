$(function () {

    $('.slider__items').slick({
        infinite: false,
        slidesToShow: 3,
        slidesToScroll: 3,
        dots: true,
        arrows: true,

        // fade: true,

        nextArrow: document.querySelector('.slider__btn-next'),
        prevArrow: document.querySelector('.slider__btn-prev'),
        speed: 500,
        // centerMode: true,
        autoplay: false,
        // variableWidth: true,
    });

    $(document).ready(function () {
        $('.question-item__title').click(function (event) {
            $('.question-item__title').not($(this)).removeClass('active');
            $('.question-item__descr').not($(this).next()).slideUp(200);

            $(this).toggleClass('active').next().slideToggle(200);
        });
    });
});

const praiseStatisticValue1 = document.querySelector('.praise-statistic__value1');
const praiseStatisticValue1Inner = praiseStatisticValue1.textContent;
const praiseStatisticLine1 = document.querySelector('.praise-statistic__line1');
praiseStatisticLine1.style.cssText = `width: ${praiseStatisticValue1Inner}`;



const praiseStatisticValue2 = document.querySelector('.praise-statistic__value2');
const praiseStatisticLine2 = document.querySelector('.praise-statistic__line2');
const praiseStatisticValue2Inner = praiseStatisticValue2.textContent;
praiseStatisticLine2.style.cssText = `width: ${praiseStatisticValue2Inner}`;



const praiseStatisticValue3 = document.querySelector('.praise-statistic__value3');
const praiseStatisticLine3 = document.querySelector('.praise-statistic__line3');
const praiseStatisticValue3Inner = praiseStatisticValue3.textContent;
praiseStatisticLine3.style.cssText = `width: ${praiseStatisticValue3Inner}`;
