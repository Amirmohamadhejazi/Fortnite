/* eslint-disable @next/next/no-img-element */
/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'

import { type FC } from 'react'
import { toast } from 'react-toastify'
import { useQuery } from '@tanstack/react-query'

import Error from '@molecules/Error'
import Loading from '@molecules/Loading'

import newsApiFn from '@api/news'

import calculator from './resources'

const FNews: FC = () => {
    const { isLoading, isError, error, isSuccess, data } = useQuery({
        queryKey: ['fortniteBattleRoyalNews'],

        queryFn: () => newsApiFn(),
        retry: 1,
        retryOnMount: false,
        staleTime: 1200,
    })

    console.log(data)

    if (isLoading) {
        return (
            <div className='w-full flex items-center justify-center'>
                <Loading />
            </div>
        )
    }

    if (isError) {
        toast.error(error?.message)
        return (
            <div className='w-full flex items-center justify-center'>
                <Error />
            </div>
        )
    }

    if (isSuccess) {
        const { br } = data
        const { convertedData } = calculator(br.motds)

        return (
            <div className='flex flex-col gap-2 '>
                <div className='flex flex-col gap-2'>
                    <span className='font-bold text-xl '>News BattleRoyal</span>
                    <hr />
                    <div className='grid  xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4   gap-2'>
                        {convertedData.map((itemsNews: any) => (
                            <div className='flex flex-col p-1 gap-2 bg-slate-200 rounded-md' key={itemsNews.id}>
                                <img src={itemsNews.image} className='w-full object-cover' alt='' />
                                <div className='flex flex-col gap-2 max-h-[120px] overflow-auto'>
                                    <span className='font-semibold text-sm'>{itemsNews.title}</span>
                                    <span className='font-light text-xs'>{itemsNews.body}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        )
    }
}

export default FNews
