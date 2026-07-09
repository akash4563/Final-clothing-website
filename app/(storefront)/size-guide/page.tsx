export default function SizeGuidePage() {
  return (
    <main className="pt-24 pb-16 bg-white min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 mb-8">Size Guide</h1>

        <p className="text-gray-600 mb-8">Our clothing is designed for a relaxed, slightly oversized fit to match our modern aesthetic. Please refer to the charts below to find your perfect size.</p>

        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200 border border-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Size</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Chest (inches)</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Waist (inches)</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">S</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">36 - 38</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">29 - 31</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">M</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">39 - 41</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">32 - 34</td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">L</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">42 - 44</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">35 - 37</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">XL</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">45 - 47</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">38 - 40</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
}
