import $ from 'jquery'
import './app1.css'

let $add,$minus,$multiple,$divide,$num
$add = $('#add')
$minus = $('#minus')
$multiple = $('#multiple')
$divide = $('#divide')
$num = $('.num')

let number = parseInt(localStorage.getItem('n')) || 100
$num.text(number)
console.log('jhere')
$add.on('click',()=>{
    number+=1
    $num.text(number)
    localStorage.setItem('n',number)
})

$minus.on('click',()=>{
    number-=1
    $num.text(number)
    localStorage.setItem('n',number)
})

$multiple.on('click',()=>{
    number*=2
    $num.text(number)
    localStorage.setItem('n',number)
})


$divide.on('click',()=>{
    number/=2
    $num.text(number)
    localStorage.setItem('n',number)
})

