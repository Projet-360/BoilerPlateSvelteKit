import client from "$apollo";
import { GETDASHBOARDDATA } from "$apollo/Auth/getDashboardData";

export async function getDashboardData() {
    try {
        const { data } = await client.query({
            query: GETDASHBOARDDATA,
            fetchPolicy: 'network-only'  
        });        
        return data;
    } catch (error) {
        throw error;
    }
}