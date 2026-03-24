import supabase from'../../supabase-client'
import { useEffect, useState  } from 'react';




function Dashboard () {
    const [ salesDeals, setSalesDeals ] = useState(null);
    const [ error, setError ] = useState(null);

    useEffect(() => {
    async function fetchMetrics () {
        
        let { data: sales_deals, error } = await supabase
            .from('sales_deals')
            .select('*')
          
        if (error) {
            setError(error);
            setSalesDeals(null);
        } else {
            setSalesDeals(sales_deals);
            setError(null);
        }
    }

    fetchMetrics();
}, []);

    


    return (
        <div className ='dashboard-wrapper'>
            <div className='chart-container'>
                <h2>Total Sales This Quarter ($)</h2>
                {error && <p>{error.message}</p>}
                {salesDeals && salesDeals.map( (deal) => {
                    return (
                        <p key ={deal.id}>{deal.name} {deal.value}</p>
                    )
                })}
                    
            </div>
        </div>
    )
}

export default Dashboard;