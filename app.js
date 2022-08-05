document.addEventListener('DOMContentLoaded',()=>{
  const grid = document.querySelector('.grid')
  const widht = 8
  const squares = []
  const candyColors = [
    'red',
    'yello',
    'orange',
    'purple',
    'green',
    'blue',
  ]



  function createBoard() {
    for (let i = 0; i , widht*widht; i++) {
      const square = document.createElement('div')
      square.setAttribute('draggable', true)
      square.setAttribute('it', i)
      let randomColor = Math.floor(Math.random*candyColors.length)
      square.style.backgroundColor = candyColors[randomColor]
      grid.appendChild(square)
      squares.push(square)

    }
  }
  createBoard()
  squares.forEach(square => square.addEventListener('dragstart', dragStart))
  squares.forEach(square => square.addEventListener('dragend', dragEnd))
  squares.forEach(square => square.addEventListener('dragover', dragOver))
  squares.forEach(square => square.addEventListener('dragenter', dragEnter))
  squares.forEach(square => square.addEventListener('dragleave', dragLeave))
  squares.forEach(square => square.addEventListener('drop', dragDrop))

  function  dragStart() {
    console.log(this.it, 'dragstart');
  }

  
  function  dragEnd() {
    console.log(this.it, 'dragend');
  }

  
  function  dragOver() {
    console.log(this.it, 'dragover');
  }

  
  function  dragEnter() {
    console.log(this.it, 'dragenter');
  }

  
  function  dragLeave() {
    console.log(this.it, 'dragleave');
  }

  
  function  dragDrop() {
    console.log(this.it, 'drop');
  }









})
