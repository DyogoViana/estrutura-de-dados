// Passo 01: Modelando
class Queue {
    constructor() {
        this.data = []
    }

    enqueue(item) {
        this.data.push(item)
        console.log(`${item} chegou na fila.`)
    }

    dequeue() {
        let item = this.data.shift()
        console.log(`${item} saiu da fila!`)
    }
}

// Passo 02: Utilizando
const fila = new Queue()

fila.enqueue('Basquiat')
fila.enqueue('Manu')
fila.enqueue('Pollok')

console.log("-----------------------")

fila.dequeue()
fila.dequeue()
fila.dequeue()
