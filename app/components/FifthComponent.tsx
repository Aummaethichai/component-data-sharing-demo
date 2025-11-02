import React from 'react'
import { useContext } from 'react'
import { DataContext } from '../page'

const FifthComponent = () => {
    const userInfo = useContext(DataContext);
    return (
        <div>FifthComponent
            <hr />
            <h3 className='text-green-500'> User info form useContext</h3>
            {userInfo && userInfo.map((val) => (
                <div key={val.id} className='flex flex-col'>
                    <div>
                        <span className='font-semibold text-blue-600'>Name: </span>
                        <span className='text-black-500 dark:text-yellow-300'>{val.name}</span>
                    </div>
                    <div>
                        <span className='font-semibold text-blue-600'>Email: </span>
                        <span className='text-black-500 dark:text-yellow-300'>{val.email}</span>
                    </div>
                    <div>
                        <span className='font-semibold text-blue-600'>github: </span>
                        <span className='text-black-500 dark:text-yellow-300'>
                            <a href={val.github} target='_blank' className='hover:underline'>{val.github}</a></span>
                    </div>
                </div>))}
            {/* <p>Name: {userInfo.name}</p> */}
        </div>
    )
}

export default FifthComponent