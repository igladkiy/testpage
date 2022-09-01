import type {NextPage} from 'next'
import Card from "../components/Card";
import data from '../Data.js'

const Home: NextPage = () => {
    return (
        <div className='flex justify-center items-center flex-col mt-[108px] '>
            <p className="text-custom-blue-black font-bold text-center text-[30px] mb-[80px] md:text-[46px] lg:text-[56px]">
                We make creative media <br/> that <span className='text-custom-blue-white '>adds value</span>
            </p>
            <div
                className='flex flex-wrap justify-center items-center gap-[30px] w-[100%] max-w-[1400px] px-[3%] mb-[60px] sm:px-0'>
                {data.cards.map(card => {
                    const {id, name, list, text, images} = card
                    return (
                        <Card id={id} title={name} list={list} text={text} images={images}/>
                    )
                })}
            </div>
            <div className=' flex justify-center items-center mb-[108px] w-[100%]'>
                <button
                    className='bg-custom-blue-black w-[80%] h-[60px] rounded-[12px] uppercase text-white font-semibold sm:w-[315px]'>
                    get started
                </button>
            </div>

        </div>
    )
}

export default Home
