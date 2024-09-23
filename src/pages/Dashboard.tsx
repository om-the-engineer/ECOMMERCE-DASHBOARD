import AdminSidebar from "../components/AdminSidebar";//admin sidebar
import { FaRegBell } from "react-icons/fa";
import { BsSearch } from "react-icons/bs";
import { HiTrendingUp, HiTrendingDown } from "react-icons/hi";
import userImg from "../assets/userpic.png";//profile
//const userImg = "url/link";
import data from "../assets/data.json";//dataset
import { BarChart, DoughnutChart } from "../components/Charts";//Reactjs Charts
import { BiMaleFemale } from "react-icons/bi";
import Table from "../components/DashboardTable";//React Table


const Dashboard = () => {
  return (
    <div className="admin-container">
      <AdminSidebar />
      <main className="dashboard">
        <div className="bar">
          <BsSearch />
          <input type="text" placeholder="Search for data, users, docs" />
          <FaRegBell />
          <img src={userImg} alt="Users" />
        </div>

        {/*Widget Section Starts */}

        <section className="widget-container">
          <WidgetItem
            percent={40}
            value={340000}
            heading="Revenue"
            color="rgba(0,115,255)"
          />
          <WidgetItem
            percent={-14}
            value={400}
            heading="Users"
            color="rgba(0 198 202)"
          />
          <WidgetItem
            percent={80}
            value={23000}
            heading="Transaction"
            color="rgba(255 196 0)"
          />
          <WidgetItem
            percent={30}
            value={1000}
            heading="Products"
            color="rgba(76 0 255)"
          />
        </section>

        {/* Another Section */}
        <section className="graph-container">
          <div className="revenue-chart">
            <h2>Revenue & Transaction</h2>
            {/* Graph Here */}
            <BarChart
              data_1={[300, 144, 433, 655, 237, 755, 190]}
              data_2={[200, 444, 343, 556, 778, 455, 990]}
              title_1="Revenue"
              title_2="Transaction"
              bgColor_1="rgb(0,115,255)"
              bgColor_2="rgba(53,162,235,0.8)"
            />
          </div>
          <div className="dashboard-categories">
            <h2>Inventory</h2>
            {/* Progress Bar here */}
            <div>
              {data.categories.map((i) => (
                <CategoryItem
                  key={i.heading}
                  heading={i.heading}
                  value={i.value}
                  color={`hsl(${i.value * 4},${i.value}%, 50%)`}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Another Section */}
        <section className="transaction-container">

          {/* Gender Chart */}
          <div className="gender-chart">
            <h2>Gender Ratio</h2>
            {/* {Chart} */}
            <DoughnutChart
              labels={["female", "male"]}
              data={[12, 19]}
              backgroundColor={["hsl(340,82%,56%)", "rgba(53,162,235,0.8)"]}
              cutout={90}//for adjusting thickness of circle of doughnut
            />
            <p>
              <BiMaleFemale />
            </p>
          </div>

          {/*  */}
          <Table data={data.transaction}/>

        </section>
      </main>
    </div>
  );
};

//Widget Component which will be used in dashboard
interface WidgetItemProps {
  heading: string;
  value: number;
  percent: number;
  color: string;
  amount?: boolean;
}

const WidgetItem = ({ heading, value, percent, color, amount = false, }: WidgetItemProps) => (
  <article className="widget">

    {/* For Widget Info */}
    <div className="widget-info">
      <p>{heading}</p>
      {/* if amount then pass value in doller : that value */}
      <h4>{amount ? `$${value}` : value}</h4>
      {
        // if percent are > 0 then display +{percent}first span : else second span as number is <0 it is in -ve so directly as {percent}

        percent > 0 ? (
          <span className="green">
            {/* Icon for up */}
            <HiTrendingUp /> + {percent}%{" "}
          </span>
        ) : (
          <span className="red">
            {/* Icon for down */}
            <HiTrendingDown /> {percent}%{" "}
          </span>
        )
      }
    </div>

    <div className="widget-circle"
      style={{
        background: `conic-gradient(
        ${color} ${(Math.abs(percent) / 100) * 360}deg,
        rgb(255,255,255) 0
      )`,
      }}
    >
      <span style={{ color, }}>{percent}%</span>
    </div>
  </article>

);

interface CategoryItemProps {
  color: string;
  value: number;
  heading: string;
}

const CategoryItem = ({ color, value, heading }: CategoryItemProps) =>
(
  <div className="category-item">
    <h5>{heading}</h5>
    <div>
      <div style={{
        backgroundColor: color,
        width: `${value}%`,
      }}>
      </div>
    </div>
    <span> {value}%</span>
  </div>
);
export default Dashboard;