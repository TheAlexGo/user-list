/**
 * Как избавиться от переменной that в этом примере? То есть не сохранять явно
 * контекст родителя в переменную.
 * function parent() {
    var that = this;
    that.multiplier = 3;
    return [33, 77, 99, 81, 55].map(function(I) { return I * that.multiplier});
  }
 *
 * Проблема: функция, которая передаётся первым параметром в map, будет иметь свой личный контекст, отличный от
 * контекста функции parent().
 * */

// Решение 1 - добавление контекста parent в map
function parent1() {
  this.multiplier = 3;
  return [33, 77, 99, 81, 55].map(function(I) { return  I * this.multiplier}, this);
}

console.log(parent1())

// Решение 2 - превращение безымянной функции в стрелочную
function parent2() {
  this.multiplier = 3;
  return [33, 77, 99, 81, 55].map(I => I * this.multiplier);
}

console.log(parent2())
