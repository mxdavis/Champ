export default {

  createFactorial(){
    const range = Array.from(new Array(this.generateRandomNumber()), (val, i) => i + 1)
    return range.reduce((acc, i) => acc * i)
  },

  generateRandomNumber(){
    return Math.floor(Math.random() * 10) + 1
  },

  createOnUpdate(num){
    let newFactorial = this.createFactorial()
    while (num === newFactorial){
      newFactorial = this.createFactorial()
    }
    return newFactorial
  }
}
