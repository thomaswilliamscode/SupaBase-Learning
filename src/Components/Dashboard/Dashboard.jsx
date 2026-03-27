import supabase from'../../supabase-client'
import { useEffect, useState  } from 'react';
import { Chart } from 'react-charts'




function Dashboard () {
    const [ metrics, setMetrics ] = useState([]);
    const [ error, setError ] = useState(null);

    useEffect(() => {
    async function fetchMetrics () {
        try {
            const { data, error } = await supabase
            .from('sales_deals')
            .select(
                `
                name,
                value.sum()
                `,
            )
          // this is a test
            if (error) {
                setError(error);
                setMetrics([]);
            } else {
                setMetrics(data);
                setError(null);
            }
            } catch (err) {
                setError(err);
                setMetrics([]);
            }
        
    }

    fetchMetrics();
}, []);

    


    return (
        <div className ='dashboard-wrapper'>
            <div className='chart-container'>
                <h2>Total Sales This Quarter ($)</h2>
                {error && <p>{error.message}</p>}
                {metrics && metrics.map( (deal) => {
                    // console.log(deal)
                    return (
                        <p key ={deal.name}>{deal.name} {deal.sum}</p>
                    )
                })}
                    
            </div>
        </div>
    )
}

export default Dashboard;