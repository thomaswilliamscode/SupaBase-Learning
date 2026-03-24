import supabase from'../../supabase-client'
import { useEffect  } from 'react';




function Dashboard () {

    useEffect(() => {
    async function fetchMetrics () {
        
        let { data: sales_deals, error } = await supabase
            .from('sales_deals')
            .select('*')
          
            const newData = { sales_deals, error}
            return newData
    }
    
        const load = async () => {
            const data = await fetchMetrics();
            console.log(data)
        }
        load()

    load();
}, []);

    


    return (
        <div className ='dashboard-wrapper'>
            <div className='chart-container'>
                <h2>Total Sales This Quarter ($)</h2>
            </div>
        </div>
    )
}

export default Dashboard;