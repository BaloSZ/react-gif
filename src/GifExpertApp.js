import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

// const categories = ['E7', 'Halo', 'R6'];

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['Gears of war']);

    // const handleAdd = () => {
    //     setCategories( [...categories, 'GOW'] );
    // }

    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={setCategories} />
            <hr />

            <ol>
                {
                    categories.map(category => (
                        <GifGrid
                            key={category}
                            category={category}
                        />
                    ))
                }
            </ol>

        </>
    )
}
