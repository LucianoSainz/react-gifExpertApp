import React, { useState } from 'react';
import {AddCategory} from './components/AddCategory';
import { GifGrid } from './components/GifGrid';



const GifExpertApp = () => {

    const [categories, setCategories] = useState(['Dragon Ball']);

    //const handleAdd = () =>{
        //setCategories([...categories, 'hunterXHunter']);
        //setCategories(cats => [...cats, 'HunterXHunter']);
    //}

    return(
        <>
    <div className="back">
    <h2 className='titleOne'>GifExpertApp</h2>
    </div>
    <AddCategory setCategories={setCategories}/>
    
    <hr />

    
    <ol>
        {
            categories.map(category => (
                 <GifGrid 
                 key={category}
                 category={category} />
                 ))
            }
        
    </ol>
    </>
    )
}


export default GifExpertApp;