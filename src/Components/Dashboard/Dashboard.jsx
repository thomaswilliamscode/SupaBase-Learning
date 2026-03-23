import supabase from'../../supabase-client'
import { useEffect} from 'react';



function Dashboard () {

    useEffect( () => {
        const load = async () => {
            const data = await fetchMetrics();
            console.log(data)
        }
        load()
    }, [])

    async function fetchMetrics () {
        const { data, error } = await supabase
        .from('sales_deals')
        .select(
            `
            name,
            value
            `,
            )
            .order('value', { ascending: false})
            .limit(1)
    }


    return (
        <div className ='dashboard-wrapper'>
            <div className='chart-container'>
                <h2>Total Sales This Quarter ($)</h2>
            </div>
        </div>
    )
}

export default Dashboard;