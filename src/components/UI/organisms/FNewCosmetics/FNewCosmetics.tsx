/* eslint-disable @typescript-eslint/no-explicit-any */

'use client'
import React from 'react'
import { toast } from 'react-toastify'
import { useQuery } from '@tanstack/react-query'

import Error from '@molecules/Error'
import Loading from '@molecules/Loading'

import newCosmeticsFn from '@api/newCosmetics'

import { CartItemShop } from '@core/utils/common'

import calculator from './resources'

const FNewCosmetics = () => {
    const { isLoading, isError, error, isSuccess, data } = useQuery({
        queryKey: ['fortniteNew'],

        queryFn: () => newCosmeticsFn(),
        retry: 1,
        retryOnMount: false,
        staleTime: 1200,
    })

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
        const { items } = data

        if (items.length === 0) {
            return <div className='w-full flex items-center justify-center'>NoData</div>
        }

        const { convertedData } = calculator(items)
        return (
            <div className='flex flex-col gap-2'>
                <div className='flex items-center justify-between'>
                    <span className='font-bold text-xl '>New Items</span>
                </div>
                <div className='grid  xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-5   gap-3 rounded-xl max-h-[500px] overflow-auto'>
                    {convertedData.map((items: any) => (
                        <CartItemShop dataItem={items} key={items.id} />
                    ))}
                </div>
            </div>
        )
    }
}

export default FNewCosmetics
