import supabase from'../../supabase-client'
import { useEffect  } from 'react';




function Dashboard () {

    useEffect( () => {

        
        console.log(load())
        console.log(import.meta.env.VITE_SUPABASE_URL);
        console.log(import.meta.env.VITE_SUPABASE_KEY);
    }, [])

    


    return (
        <div className ='dashboard-wrapper'>
            <div className='chart-container'>
                <h2>Total Sales This Quarter ($)</h2>
            </div>
        </div>
    )
}

export default Dashboard;