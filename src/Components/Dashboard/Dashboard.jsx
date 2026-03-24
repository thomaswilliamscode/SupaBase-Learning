import supabase from'../../supabase-client'
import { useEffect  } from 'react';




function Dashboard () {

    useEffect(() => {
    const load = async () => {
        const { data, error } = await supabase
            .from('sales_deals')
            .select('*')
            .limit(1);

        console.log("DATA:", data);
        console.log("ERROR:", error);
    };

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