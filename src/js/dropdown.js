import $ from 'jquery'


function choosItem(callback) {
    $('.dropdown__list__item').click(function(){
        var innText = $(this).text()
        $(this).parent().siblings('.dropdown__btn').children('.dropdown__text').text(innText);
        $(this).parent().hide()
        if(callback) callback(innText)
    }) 
}

function Dropdown(callback) {
    $('.dropdown__btn').click(function(){
        $(this).siblings('.dropdown__list').toggle()
    }) 
}
 export { choosItem, Dropdown }
