import { shallowMount, mount } from '@vue/test-utils'
import PokemonPage from '@/pages/PokemonPage'
import { pokemons } from '../mocks/pokemons.mock';
import PokemonPicture from '@/components/PokemonPicture'


describe('PokemonPage Component', () => {
    
    let wrapper
    // let mixPokemonArraySpy

    beforeEach(() => {
        wrapper = shallowMount( PokemonPage )
    })

    // test('debe de hacer match con el snapshot', () => {
    //     expect( wrapper.html() ).toMatchSnapshot() 
    // })

    test('debe de llamar mixPokemonArray al montar.', () => {
        const mixPokemonArraySpy = jest.spyOn(PokemonPage.methods, 'mixPokemonArray')        
        const wrapper = shallowMount( PokemonPage )

        expect(mixPokemonArraySpy).toHaveBeenCalled()
    })

    test('debe de hacer match con el snapshot cuando cargan los pokemons', () => {
        const wrapper = shallowMount( PokemonPage, {
            data() {
                return {
                    pokemonArr: pokemons,
                    pokemon: pokemons[1],
                    showPokemon: false,
                    showAnswer: false,
                    message: ''
                }
            }
        })

        expect( wrapper.html() ).toMatchSnapshot()
    })


    test('Debe de mostrar los componentes de PokemonPicture y PokemonOptions', () => {

        const wrapper = shallowMount( PokemonPage, {
            data() {
                return {
                    pokemonArr: pokemons,
                    pokemon: pokemons[3],
                    showPokemon: false,
                    showAnswer: false,
                    message: ''
                }
            }
        })

        const picture = wrapper.find('pokemon-picture-stub')
        const options = wrapper.find('pokemon-options-stub')

        // PokemonPicture debe existir         
        expect(picture.exists()).toBeTruthy()
        // PokemonOption debe existir 
        expect(options.exists()).toBeTruthy()

        // PokemonPicture attribute pokemonid === 3
        expect( picture.attributes('pokemonid') ).toBe('2')
        // PokemonOption attribue pokemons toBe true
        expect( options.attributes('pokemons') ).toBeTruthy()

    })

    test('testing checkAnswer', () =>{

        const wrapper = shallowMount( PokemonPage, {
            data() {
                return {
                    pokemonArr: pokemons,
                    pokemon: pokemons[1],
                    showPokemon: false,
                    showAnswer: false,
                    message: ''
                }
            }
        })

        console.log( wrapper.vm)
        wrapper.vm.checkAnswer(4)

    })

});
