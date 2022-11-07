import { addLeadingZeros, captalizeText, colorsForPokemon, convertHeight, convertWeight } from '../utils';

describe('utils',()=>{
  
  test('captalize name', () => {
    expect(captalizeText('metapod')).toBe("Metapod")
    expect(captalizeText('ale-ale')).toBe("Ale Ale")
  })
  test('add 0 to number and #', () => {
    expect(addLeadingZeros(1000)).toBe("#1000")
  })
  test('receive number, convert and add kg', () => {
    expect(convertWeight(30)).toBe("3.0kg")
  })
  test('receive number, convert and add kg', () => {
    expect(convertHeight(3)).toBe("0.3m")
  })
  test('return correct colors for pokemon',()=>{
    expect(colorsForPokemon('green')).toHaveProperty('avatar')
  })

})