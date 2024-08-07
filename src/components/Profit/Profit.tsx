import RingChart from './RingChart';

const Profit = () => {


    return <div className="flex bg-zinc-800 rounded-md">
        <div className="flex flex-col justify-around p-4">
            <span>Net Profit</span>
            <b className="text-2xl">$ 6759.25</b>
            <span>3%</span>
        </div>
        <div className="">
            <RingChart />
        </div>
    </div>
}

export default Profit;



