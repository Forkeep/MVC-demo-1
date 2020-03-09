import './app4.css'
import  $ from  'jquery'


let $circle = $('.circle')

$circle.on('mouseenter',()=>{
    $circle.toggleClass('active')
})