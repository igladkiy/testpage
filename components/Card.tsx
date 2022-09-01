import React, {FunctionComponent} from 'react';
import Image from 'next/future/image'

type Props = {
    id: number | string,
    title: string;
    images: File[] | string | StaticImport;
    text: string[];
    list: string[];

}

const Card: FunctionComponent<Props> = ({images, title, list, text}) => {
    return (
        <div
            className='flex flex-col  rounded-lg bg-white overflow-hidden flex-initial w-[90%]  sm:flex-row sm:w-[437.5px]'>
            <div className='flex flex-row sm:flex-col'>
                {images.map((image: File[] | string | StaticImport, index: number) => <Image
                    className='flex-1 h-[300px] sm:h-auto object-cover' key={index}
                    src={image}
                    alt=''/>
                )}
            </div>
            <div className='flex justify-center sm:flex-col mb-[20px] sm:mb-0 sm:justify-start'>
                <div className='mt-[40px] ml-[34px] w-[300px] sm:w-[190px]'>
                    <p className='text-2xl mb-[12px] font-bold'>
                        {title}
                    </p>

                    <ul className='mb-[12px]'>
                        {list.map((item: string, index: number) =>
                            <li className='text-[15px] font-semibold text-custom-gray font-nunitoSans list-disc marker:text-tan-accent marker:text-[16px] ml-[21px]'
                                key={index}>
                                {item}
                            </li>
                        )
                        }
                    </ul>
                    {text.map((item: string, index: number) =>
                        <p className='text-[15px] mb-[5px] text-custom-gray font-nunitoSans' key={index}>
                            {item}
                        </p>
                    )
                    }

                </div>
            </div>
        </div>
    );
};

export default Card;
