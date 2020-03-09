import $ from 'jquery'
import './app2.css'

let $tabBtn = $('.tab-btn')
let $tabContent = $('.tab-content')

$tabBtn.on('click', 'li', e => {
    let $li = $(e.currentTarget)
    $li
        .addClass('active')
        .siblings()
        .removeClass('active')
    let index = $li.index()
    $tabContent
        .children()
        .eq(index)
        .addClass('active')
        .siblings()
        .removeClass('active')
})

$tabBtn.children().eq(0).trigger('click')
