import { Bar, BarChart, CartesianGrid, Cell, RectangleProps, XAxis, YAxis } from "recharts";

interface IData {
  name: string;
  uv: number;
  pv: number;
  amt: number;
}

const data: IData[] = [
  {
    name: 'Page A',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Page B',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Page C',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Page D',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Page E',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Page F',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'Page G',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];


const CustomShape = (props: RectangleProps & IData) => {
  const { x = 0, y, width = 0, height, fill } = props;
  const rectangleProps = { x, y, width, height, fill, strokeWidth: 0 };
  return <g>
    <rect { ...rectangleProps } />
  </g>
};

function App() {

  return (
    <>
      <BarChart
        width={ 500 }
        height={ 300 }
        data={ data }
        margin={ {
          top: 20,
          right: 30,
          left: 20,
          bottom: 5,
        } }
      >
        <CartesianGrid strokeDasharray="3 3"/>
        <XAxis dataKey="name"/>
        <YAxis/>
        <Bar dataKey="uv" fill="#8884d8" shape={CustomShape} label={ { position: 'top' } }>
          { data.map((_entry, index) => (
            <Cell key={ `cell-${ index }` }/>
          )) }
        </Bar>
      </BarChart>
    </>
  )
}

export default App
