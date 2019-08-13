import './scss/main.scss'
import $ from 'jquery'
import IMask from 'imask';
import { choosItem, Dropdown } from '../src/js/dropdown'



$( document ).ready(function() {

    const getAjaxForDara = function(event){
        $.ajax({
          method: "GET",
          url: "/reports/ajax.php?id=6",
          success: function(data) {
                console.log('maqa')
                const reportWrap = $('.table')
                reportWrap.html(data)
                console.log(data)
            }
        })
        
    }


    choosItem(getAjaxForDara);
    Dropdown()
    // inputs
    $('.callback__form__inp').focusin(function(){
        $(this).siblings('.callback__form__span').css({
            top: '1px',
            fontSize: '12px'
        })
    })

    $('.callback__form__inp').focusout(function(){
        if($(this).val() == '') {
            $(this).siblings('.callback__form__span').css({
                top: '16px',
                fontSize: '16px'
            })
        }
        
    })

    $('.header__callback__btn').click(function(){
        $('.callback__form').css({
            bottom: 0
        })
        $('.modal__blocker').show()
    })

    $('.modal__blocker').click(function(){
        $('.callback__form').css({
            bottom: '-360px'
        })
        $('.modal__blocker').hide()
    })

    var element = document.getElementById('phone');
    var maskOptions = {
    mask: '+{7}(000)000-00-00'
    };
    var mask = IMask(element, maskOptions); 

   

});