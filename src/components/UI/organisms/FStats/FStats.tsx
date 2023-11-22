/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'
import { type FC, useRef, useState } from 'react'
import { IoSearch } from 'react-icons/io5'
import { LiaBullseyeSolid } from 'react-icons/lia'
import { TextInput } from '@mantine/core'
import { format } from 'date-fns'
import { useQuery } from '@tanstack/react-query'

import Error from '@molecules/Error'
import Loading from '@molecules/Loading'
import NoData from '@molecules/NoData'

import stateFn from '@api/state'

import { Spoiler } from '@core/utils/common'

import calculator from './resources'

const FState: FC = () => {
    const formRef = useRef<any>(null)

    const [inputSearch, setInputSearch] = useState<string>('')

    const searchSubmit = (e: any) => {
        e.preventDefault()
        const dataInput: any = Object.fromEntries(new FormData(formRef.current).entries()).search
        if (dataInput.trim().length !== 0) {
            setInputSearch(dataInput)
        }
    }
    // search first
    const {
        isLoading,
        isError,
        error,
        isSuccess,
        data,
    }: { isLoading: boolean; isError: boolean; error: any; isSuccess: boolean; data: any } = useQuery({
        queryKey: ['searchUserQuery', { inputSearch }],
        enabled: !!inputSearch,
        queryFn: () => stateFn(inputSearch),
        retry: 1,
        retryOnMount: false,
        staleTime: 1200,
    })

    const stateHandler = () => {
        if (isLoading) {
            return (
                <div className='w-full flex items-center justify-center'>
                    <Loading />
                </div>
            )
        }

        if (isError) {
            return (
                <div className='w-full flex items-center justify-center'>
                    <Error text={error.response.data.error} />
                </div>
            )
        }

        if (isSuccess) {
            if (!data) {
                return (
                    <div className='w-full flex items-center justify-center'>
                        <NoData text='data Not found!' />
                    </div>
                )
            }

            const { stats, account } = data

            const { convertDataState } = calculator(stats)
            const bgColors = ['#FAF6F0', '#F4EAE0', '#F4EAE0', '#F5EFE7']

            return (
                <div className='w-full flex flex-col gap-6'>
                    <div className='flex flex-col  font-medium'>
                        <span className='text-xl font-bold'>Account</span>
                        <span>
                            Name: <span className='text-sm'>{account.name}</span>
                        </span>

                        <div className='flex gap-1 items-center'>
                            <span>Account Id: </span>
                            <Spoiler>
                                <span className='text-sm '> {account.id}</span>
                            </Spoiler>
                        </div>
                    </div>
                    <hr className='border-2' />

                    <div className='flex flex-col  font-medium'>
                        <span className='text-xl font-bold'>States</span>
                        <hr className='border-dashed  my-3' />
                        <div className='flex flex-col  gap-4'>
                            {convertDataState.map((itemState, index: number) => (
                                <div className='flex flex-col gap-1' key={index}>
                                    {itemState.data.length > 0 && (
                                        <div className='flex items-center gap-2'>
                                            <span className='text-xl font-bold'>{itemState.name.toUpperCase()}</span>
                                            {itemState.icon}
                                        </div>
                                    )}
                                    <div className='grid  xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-5   gap-7 rounded-xl '>
                                        {itemState.data?.map(
                                            (itemsGames) =>
                                                itemsGames.data && (
                                                    <div
                                                        className={`flex flex-col p-2 gap-1 rounded-md shadow-xl`}
                                                        style={{
                                                            background: index > 3 ? bgColors[3] : bgColors[index],
                                                        }}
                                                        key={itemsGames.id}
                                                    >
                                                        <span className='text-lg font-bold'>{itemsGames.name}</span>
                                                        <div className='flex flex-col gap-1 text-sm font-semibold'>
                                                            <div className='flex items-center justify-between flex-wrap'>
                                                                <span className='flex items-center gap-2'>
                                                                    Matches:{' '}
                                                                    {itemsGames.data.matches || (
                                                                        <LiaBullseyeSolid className='text-lg text-gray-500' />
                                                                    )}
                                                                </span>
                                                                <span className='flex items-center gap-2'>
                                                                    Score:{' '}
                                                                    {itemsGames.data.score || (
                                                                        <LiaBullseyeSolid className='text-lg text-gray-500' />
                                                                    )}
                                                                </span>
                                                            </div>
                                                            <div className='flex items-center justify-between '>
                                                                <span className='flex items-center gap-2'>
                                                                    Kills:{' '}
                                                                    {itemsGames.data.kills || (
                                                                        <LiaBullseyeSolid className='text-lg text-gray-500' />
                                                                    )}
                                                                </span>
                                                                <span className='flex items-center gap-2'>
                                                                    K/D:{' '}
                                                                    {itemsGames.data.kd || (
                                                                        <LiaBullseyeSolid className='text-lg text-gray-500' />
                                                                    )}
                                                                </span>
                                                            </div>

                                                            <div className='flex items-center justify-between'>
                                                                <span className='flex items-center gap-2'>
                                                                    Wins:{' '}
                                                                    {itemsGames.data.wins || (
                                                                        <LiaBullseyeSolid className='text-lg text-gray-500' />
                                                                    )}
                                                                </span>
                                                                <span className='flex items-center gap-2'>
                                                                    WinRate:{' '}
                                                                    {itemsGames.data.winRate || (
                                                                        <LiaBullseyeSolid className='text-lg text-gray-500' />
                                                                    )}
                                                                </span>
                                                            </div>
                                                            <span className='flex items-center gap-2'>
                                                                Last Match:{' '}
                                                                {itemsGames.data.lastModified ? (
                                                                    format(
                                                                        new Date(itemsGames.data.lastModified),
                                                                        'yyyy-MM-dd'
                                                                    )
                                                                ) : (
                                                                    <LiaBullseyeSolid className='text-lg text-gray-500' />
                                                                )}
                                                            </span>
                                                        </div>
                                                    </div>
                                                )
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            )
        }
    }
    return (
        <div className='w-full  flex flex-col  container items-center mx-auto '>
            <form className=' w-full sm:w-auto' ref={formRef} onSubmit={searchSubmit}>
                <TextInput
                    type='text'
                    placeholder='Enter useName Fortnite!'
                    size='lg'
                    name='search'
                    withErrorStyles={false}
                    rightSection={
                        <div className='text-xl'>
                            <button type='submit'>
                                <IoSearch className='cursor-pointer' />
                            </button>
                        </div>
                    }
                />
            </form>
            {stateHandler()}
        </div>
    )
}

export default FState
