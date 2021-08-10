Как избавиться от переменной that в этом примере? То есть не сохранять явно
контекст родителя в переменную.
```
function parent() {
var that = this;
that.multiplier = 3;
return [33, 77, 99, 81, 55].map(function(I) { return I * that.multiplier});
}
```
