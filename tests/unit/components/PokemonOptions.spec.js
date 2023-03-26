import { shallowMount } from "@vue/test-utils"
import PokemonOptions from "@/components/PokemonOptions"

import { pokemons } from "../mocks/pokemons.mock"

describe("PokemonOptions Component", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(PokemonOptions, {
      props: {
        pokemons,
      },
    });
  });

  test("Debe de hacer match con el snapshot", () => {
    
    //console.log(wrapper.html());

    // toMatchInlineSnapshot
    expect( wrapper.html() ).toMatchSnapshot()
    
  });

  test('Debe de mostrar las 4 opciones correctamente', () => {
    const liOptions = wrapper.findAll("li");
    expect(liOptions.length).toBe(4);

    const list = liOptions.map( (wrp) => wrp.text() )
    //console.log(list)   

    const list2 = pokemons.map( ({name}) => name)
    //console.log(list2)

    expect(list).toEqual(list2);

    expect( liOptions[0].text() ).toBe('bulbasaur')
    expect( liOptions[1].text() ).toBe('charmander')
    //...
  })


  test('Debe emitir "selection" con sus respectivos parámetors al hacer click', () => {
    const [li1, li2, li3, li4] = wrapper.findAll("li");

    li1.trigger('click')
    li2.trigger('click')
    li3.trigger('click')
    li4.trigger('click')

    //console.log( wrapper.emitted('pokemonSelection') )
    expect( wrapper.emitted('pokemonSelection').length ).toBe(4)
    expect( wrapper.emitted('pokemonSelection')[0] ).toEqual([1])
    expect( wrapper.emitted('pokemonSelection')[1] ).toEqual([4])
    expect( wrapper.emitted('pokemonSelection')[2] ).toEqual([3])
    expect( wrapper.emitted('pokemonSelection')[3] ).toEqual([2])

  })


});
