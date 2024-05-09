import client from "$apollo";
import { GETDASHBOARDDATA } from "$apollo/AuthGQL";

export async function getDashboardData() {
    try {
        const headers = new Headers();
        const { data } = await client.query({
            query: GETDASHBOARDDATA,
            fetchPolicy: 'network-only'  
        });
        return data;
    } catch (error) {
        throw error;
    }
}