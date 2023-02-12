import { useState } from 'react';
import './static-graphs-home.css';
import logo from "./logo.png";
import VerticalBarChart from './vertical-bar-chart';
import HorizontalBarChart from './horizontal-bar-chart';
import GroupedBarChart from './grouped-bar-chart';
import AreaChart from './area-chart';
import LineChart from './line-chart';

function StaticGraphsHomePage() {
  const [selectedGraph,setSelectedGraph] = useState("Vertical Bar Chart");
  const staticTypeGraphs = ["Vertical Bar Chart","Horizontal Bar Chart","Grouped Bar Chart","Area Chart","Line Chart"];
  const handleShowGraph = (e) => {
    setSelectedGraph(e.target.id);
  }
  return (
    <div class="a">
		 <div class="left">
     {
        {
          'Vertical Bar Chart': <VerticalBarChart/>,
          'Horizontal Bar Chart': <HorizontalBarChart/>,
          'Grouped Bar Chart': <GroupedBarChart/>,
          'Area Chart': <AreaChart/>,
          'Line Chart': <LineChart/>,
        }[selectedGraph]
      }
		 </div>
		 <div class="right">
      <img src={logo} alt="logo" className='logo'/>
      <div className='all-graphs-details'>
			<p>STATIC GRAPHS</p>
      <div className='btn-group'>
      {staticTypeGraphs.map((graphType) => {
        return(
          <button id={graphType} onClick={handleShowGraph}>{graphType}</button>
        )
      })}
      </div>
      </div>
		 </div>
	 </div>
  );
}

export default StaticGraphsHomePage;