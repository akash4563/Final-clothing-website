import { IndianRupee, ShoppingCart, TrendingUp, Users } from 'lucide-react';

const stats = [
  {
    name: 'Total Revenue',
    value: '₹1,24,500',
    change: '+12.5%',
    trend: 'up',
    icon: IndianRupee,
  },
  {
    name: 'Active Orders',
    value: '45',
    change: '+5.2%',
    trend: 'up',
    icon: ShoppingCart,
  },
  {
    name: 'Total Customers',
    value: '1,024',
    change: '+18.1%',
    trend: 'up',
    icon: Users,
  },
  {
    name: 'Conversion Rate',
    value: '3.2%',
    change: '-1.1%',
    trend: 'down',
    icon: TrendingUp,
  },
];

const recentOrders = [
  { id: '#ORD-001', customer: 'Rahul Sharma', product: 'Oversized Anime Tee', amount: '₹1499', status: 'Completed' },
  { id: '#ORD-002', customer: 'Priya Singh', product: 'Vintage Wash Hoodie', amount: '₹2999', status: 'Processing' },
  { id: '#ORD-003', customer: 'Amit Kumar', product: 'Y2K Cargo Pants', amount: '₹3499', status: 'Shipped' },
  { id: '#ORD-004', customer: 'Sneha Patel', product: 'Graphic Crewneck', amount: '₹1999', status: 'Completed' },
];

export default function AdminDashboard() {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <div key={stat.name} className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-500">{stat.name}</p>
                <p className="text-2xl font-bold text-gray-900 mt-1">{stat.value}</p>
              </div>
              <div className={`p-3 rounded-lg ${stat.trend === 'up' ? 'bg-green-50 text-green-600' : 'bg-red-50 text-red-600'}`}>
                <stat.icon className="w-6 h-6" />
              </div>
            </div>
            <div className="mt-4 flex items-center">
              <span className={`text-sm font-medium ${stat.trend === 'up' ? 'text-green-600' : 'text-red-600'}`}>
                {stat.change}
              </span>
              <span className="text-sm text-gray-500 ml-2">vs last month</span>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-white rounded-xl border border-gray-100 shadow-sm">
        <div className="px-6 py-5 border-b border-gray-100">
          <h2 className="text-lg font-semibold text-gray-800">Recent Orders</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-gray-100">
                <th className="px-6 py-3 text-sm font-medium text-gray-500">Order ID</th>
                <th className="px-6 py-3 text-sm font-medium text-gray-500">Customer</th>
                <th className="px-6 py-3 text-sm font-medium text-gray-500">Product</th>
                <th className="px-6 py-3 text-sm font-medium text-gray-500">Amount</th>
                <th className="px-6 py-3 text-sm font-medium text-gray-500">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {recentOrders.map((order) => (
                <tr key={order.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 text-sm text-gray-900 font-medium">{order.id}</td>
                  <td className="px-6 py-4 text-sm text-gray-600">{order.customer}</td>
                  <td className="px-6 py-4 text-sm text-gray-600">{order.product}</td>
                  <td className="px-6 py-4 text-sm text-gray-900">{order.amount}</td>
                  <td className="px-6 py-4 text-sm">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                      order.status === 'Completed' ? 'bg-green-100 text-green-800' :
                      order.status === 'Processing' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-blue-100 text-blue-800'
                    }`}>
                      {order.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
