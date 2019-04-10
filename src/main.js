import $ from 'jquery'
import '../src/css/main.css'

$(function(){
  console.log('456')
//  alert(123)
})

class Person{
  static info = {name:'qian',age:'18'}
}

// var p1 = new Person();
console.log(Person.info)
