'use strict';

$('.select-page').on('change', function () {

    let optionValue = $(this).val();

    if (optionValue === 'page1') {
        $('.divTemplate').html('');
        $('.divTemplate2').html('');
        $('.select').html('');
        $('.select').append(`<option class="option" value="default">Filter by Keyword</option>`)
        Horn.all.forEach(value => {
            value.renderNewHorn();
        })

        Keyword.all[lengthArr33 - 1].renderSelect();
    } else if (optionValue === 'page2') {
        $('.divTemplate').html('');
        $('.divTemplate2').html('');
        $('.divTemplate2').show();
        $('.select').html('');
        $('.select').append(`<option class="option" value="default">Filter by Keyword</option>`)
        Horn2.all.forEach(value => {
            value.renderNewHorn();
        })
        Keyword2.all[lengthArr44 - 1].renderSelect();
    } else {
        $('.divTemplate').html('');
        $('.divTemplate2').html('');
        $('.select').html('');
        $('.select').append(`<option class="option" value="default">Filter by Keyword</option>`)
        Horn.all.forEach(value => {
            value.renderNewHorn();
        })

        Keyword.all[lengthArr33 - 1].renderSelect();
    }

})

let lengthArr33 = 0;
let lengthArr44 = 0;

$.ajax('./data/page1.json')
    .then(pageData => {
        let lengthArray = pageData.length;
        lengthArr33 = lengthArray;
        pageData.forEach(val => {
            let newKeyword = new Keyword(val, lengthArray);
            newKeyword.renderSelect();
            let newHorn = new Horn(val);
            newHorn.renderNewHorn();
        })
    });

$.ajax('./data/page2.json')
    .then(pageData2 => {
        let lengthArray2 = pageData2.length;
        lengthArr44 = lengthArray2;
        pageData2.forEach(val => {
            let newKeyword2 = new Keyword2(val, lengthArray2);
            newKeyword2.renderSelect();
            let newHorn2 = new Horn2(val);
            newHorn2.renderNewHorn();
        })
    });

$('.divTemplate2').hide();


function Horn(hornData) {
    this.title = hornData.title;
    this.imgSrc = hornData.image_url;
    this.description = hornData.description;
    this.keyword = hornData.keyword;
    this.numberOfHorns = hornData.horns;
    Horn.all.push(this);
}

Horn.all = [];

Horn.prototype.renderNewHorn = function () {

    let photoClonedTemplate = $('.photo-template').html();
    let photoClonedData = Mustache.render(photoClonedTemplate, this);
    $('.divTemplate').append(photoClonedData);
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

            $('.select').append(`<option class="option" value='${value}'>${value}</option>`)

        })
    }
}


function Horn2(hornData) {
    this.title = hornData.title;
    this.imgSrc = hornData.image_url;
    this.description = hornData.description;
    this.keyword = hornData.keyword;
    this.numberOfHorns = hornData.horns;
    Horn2.all.push(this);
}

Horn2.all = [];

Horn2.prototype.renderNewHorn = function () {
    let photoClonedTemplate = $('.photo-template2').html();
    let photoClonedData = Mustache.render(photoClonedTemplate, this);
    $('.divTemplate2').append(photoClonedData);
};



function Keyword2(keywordData2, lengthArray2) {

    this.keywordContent = keywordData2.keyword;

    this.lengthArray3 = lengthArray2;

    Keyword2.all.push(this);
}

Keyword2.all = [];


Keyword2.prototype.renderSelect = function () {
    let checkArr = [];

    for (let i = 0; i < Keyword2.all.length; i++) {

        if (!(checkArr.includes(Keyword2.all[i].keywordContent))) {

            checkArr.push(Keyword2.all[i].keywordContent)

        }
    }
    if (this.lengthArray3 === Keyword2.all.length) {

        checkArr.forEach(value => {

            $('.select').append(`<option class="option" value='${value}'>${value}</option>`)

        })
    }
}


$('.select').on('change', function () {

    let optionValue = $(this).val();

    $('.photo-template').hide();

    $(`.${optionValue}`).show();

    if (optionValue === 'default') {
        $('.photo-template').show();
    }

})

$('.select-sort').on('change', function () {
    let optionValue = $(this).val();
    if ($('.divTemplate').html()) {
        let newHorns = [...Horn.all];
        if (optionValue === 'title') {
            newHorns.sort((a, b) => {
                if (a.title.toUpperCase() < b.title.toUpperCase()) {
                    return -1;
                }
                else if (a.title.toUpperCase() > b.title.toUpperCase()) return 1;
                else return 0;
            });
            $('.divTemplate').html('');
            $('.select').html('');
            $('.select').append(`<option class="option" value="default">Filter by Keyword</option>`)
            newHorns.forEach(value => {
                value.renderNewHorn();
            })
            Keyword.all[lengthArr33 - 1].renderSelect();
        } else if (optionValue === 'number') {
            newHorns.sort((a, b) => {
                if (a.numberOfHorns < b.numberOfHorns) {
                    return -1;
                }
                else if (a.numberOfHorns > b.numberOfHorns) return 1;
                else return 0;
            });
            $('.divTemplate').html('');
            $('.select').html('');
            $('.select').append(`<option class="option" value="default">Filter by Keyword</option>`)
            newHorns.forEach(value => {
                value.renderNewHorn();
            })
            Keyword.all[lengthArr33 - 1].renderSelect();
        }
    } else if ($('.divTemplate2').html()) {
        let newHorns = [...Horn2.all];
        if (optionValue === 'title') {
            newHorns.sort((a, b) => {
                if (a.title.toUpperCase() < b.title.toUpperCase()) {
                    return -1;
                }
                else if (a.title.toUpperCase() > b.title.toUpperCase()) return 1;
                else return 0;
            });
            $('.divTemplate2').html('');
            $('.select').html('');
            $('.select').append(`<option class="option" value="default">Filter by Keyword</option>`)
            newHorns.forEach(value => {
                value.renderNewHorn();
            })
            Keyword2.all[lengthArr44 - 1].renderSelect();
        } else if (optionValue === 'number') {
            newHorns.sort((a, b) => {
                if (a.numberOfHorns < b.numberOfHorns) {
                    return -1;
                }
                else if (a.numberOfHorns > b.numberOfHorns) return 1;
                else return 0;
            });
            $('.divTemplate2').html('');
            $('.select').html('');
            $('.select').append(`<option class="option" value="default">Filter by Keyword</option>`)
            newHorns.forEach(value => {
                value.renderNewHorn();
            })
            Keyword2.all[lengthArr44 - 1].renderSelect();
        }

    }
})
