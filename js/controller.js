document.body.onkeydown = function(e) {
  var keys = { //Клавиши
    37: 'left', // Стрелка влево
    65: 'left', // 'A'

    39: 'right', // Стрелка вправо
    68: 'right', // 'D'

    40: 'down', // Стрелка вниз
    32: 'down', // Вниз - пробелом
    83: 'down', // 'S'

    38: 'rotate', // Вращение- стрелкой вверх
    87: 'rotate', // 'W'

    27: 'escape' // Пауза по клавише Esc
  };
  if (typeof(keys[e.keyCode]) != 'undefined') { //Если код клавиши допустимый,
    keyPress(keys[e.keyCode]); //Передать его обработчику
    render(); //и перерисовать стакан
  }
};