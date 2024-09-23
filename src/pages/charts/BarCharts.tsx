import AdminSidebar from "../../components/AdminSidebar";
import { BarChart } from "../../components/Charts";


const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "Aug",
    "Sept",
    "Oct",
    "Nov",
    "Dec",
];

const BarCharts = () => {
    return (
        <div className="admin-container">
            <AdminSidebar />
            <main className="chart-container">
                <h1>Bar Charts</h1>
                <section>
                    <BarChart
                        data_1={[200, 444, 666, 458, 787, 455, 858]}
                        data_2={[454, 545, 454, 158, 125, 848, 891]}
                        title_1="Products"
                        title_2="Users"
                        bgColor_1={`hsl(260, 50%, 30%)`}
                        bgColor_2={`hsl(360, 90%, 90%)`}
                        />
                        <h2>Top Selling Products & Top Customers</h2>
                </section>
                <section>
                    <BarChart
                        horizontal={true}
                        data_1={[200, 444, 666, 458, 787, 455, 858, 200, 444, 666, 458, 787]}
                        data_2={[]}
                        title_1="Products"
                        title_2=""
                        bgColor_1={`hsl(180, 40%, 50%)`}
                        bgColor_2={``}
                        labels={months}
                        />
                        <h2>Orders throughout the year</h2>
                </section>
            </main>
        </div>
    );
};

export default BarCharts;