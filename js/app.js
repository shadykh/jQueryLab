'use strict';


$.ajax('./data/page1.json')
    .then(pageData => {
        let lengthArray = pageData.length;
        pageData.forEach(val => {
            let newKeyword = new Keyword(val, lengthArray);
            newKeyword.renderSelect();
            let newHorn = new Horn(val);
            newHorn.renderNewHorn();
        })
        $('.photo-template').first().remove();
    });

function Horn(hornData) {
    this.title = hornData.title;
    this.imgSrc = hornData.image_url;
    this.description = hornData.description;
    this.keyword = hornData.keyword;
}

Horn.prototype.renderNewHorn = function () {

    let photoClonedTemplate = $('.photo-template').first().clone();

    photoClonedTemplate.addClass(`${this.keyword}`)

    photoClonedTemplate.find('h2').text(this.title);

    photoClonedTemplate.find('img').attr('src', `${this.imgSrc}`);

    photoClonedTemplate.find('p').text(this.description);

    $('.divTemplate').append(photoClonedTemplate);
};


function Keyword(keywordData, lengthArray) {

    this.keywordContent = keywordData.keyword;

    this.lengthArray2 = lengthArray;

    Keyword.all.push(this);
}

Keyword.all = [];


Keyword.prototype.renderSelect = function () {
    let checkArr = [];

    for (let i = 0; i < Keyword.all.length; i++) {

        if (!(checkArr.includes(Keyword.all[i].keywordContent))) {

            checkArr.push(Keyword.all[i].keywordContent)

        }
    }
    if (this.lengthArray2 === Keyword.all.length) {

        checkArr.forEach(value => {

            let selectCloned = $('.option').first().clone();

            selectCloned.val(value);

            selectCloned.text(value);

            $('.select').append(selectCloned);

        })
    }
}

$('select').on('change', function () {

    let optionValue = $(this).val();

    $('.photo-template').hide();

    $(`.${optionValue}`).show();

    if (optionValue === 'default') {
        $('.photo-template').show();
    }

})