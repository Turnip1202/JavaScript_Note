let arr = [1, 2, 3, 4, 5]
let sum = arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(sum)

let countOccurrences = arr => arr.reduce((accumulator, currentValue) => { accumulator[currentValue] ? accumulator[currentValue]++ : accumulator[currentValue] = 1; return accumulator }, {})
console.log(countOccurrences([1, 2, 3, 2, 2, 5, 1]))

let items = [{ price: 10 }, { price: 50 }, { price: 100 }]
let reducers = {
  totalInEuros: function (state, item) {
    return state.euros += item.price * 0.1265
  },
  totalInDollars(state, item) {
    return state.dollars += item.price * 0.1487;
  }
}
let manageReducers = (reducers) => (state, item) => Object.keys(reducers).reduce((nextState, key) => { reducers[key](state, item); return state; }, {})
let bigTotalPriceReducer = manageReducers(reducers);
let initialState = { euros: 0, dollars: 0 }
let totals = items.reduce(bigTotalPriceReducer, initialState)
console.log(totals)