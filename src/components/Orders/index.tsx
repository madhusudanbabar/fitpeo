const Orders = () => {
    const orderIds = Array(6)
        .fill(9)
        .map(() => Math.floor(Math.random() * 100) * 10000);
    const amounts = Array(6)
        .fill(9)
        .map(() => Math.floor(Math.random() * 100) * 100);

    const data = [
        { name: "Wade Warren", status: "Delivered" },
        { name: "Jane Cooper", status: "Delivered" },
        { name: "Guy Hawkins", status: "Cancelled" },
        { name: "Kristin Watson", status: "Pending" },
        { name: "Cody Fisher", status: "Delivered" },
        { name: "Savannah Nguygen", status: "Delivered" },
    ];

    return (
        <div className="orders bg-zinc-800 rounded-md p-4">
            <b className="text-xl">Recent Orders</b>
            <table className="table-fixed w-full">
                <thead>
                    <tr className="border-b-[1px] border-zinc-700 h-12 text-sm">
                        <th className="text-left lg:w-60 ">Customer Name</th>
                        <th className="text-left">Order No.</th>
                        <th className="text-left">Amount</th>
                        <th className="text-left">Status</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((entry, i) => (
                        <tr className="border-b-[1px] border-zinc-700">
                            <td className="flex items-center gap-2 py-2">
                                <img
                                    className="block size-6 rounded-full"
                                    src={`http://unsplash.it/50/50?gravity=center?id=${i}`}
                                />
                                {entry.name}
                            </td>
                            <td>{orderIds[i]}</td>
                            <td>${amounts[i]}</td>
                            <td >
                                <span className={`bg-${entry.status === "Delivered" ? 'green' : 'red'}-500/20 py-1 px-2 rounded-full text-sm text-${entry.status === "Delivered" ? 'green' : 'red'}-500`}>
                                    {entry.status}
                                </span>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Orders;
