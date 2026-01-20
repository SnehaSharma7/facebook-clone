export default function SponsoredAds() {
  return (
    <div className="mb-6">
      <h3 className="text-sm font-semibold text-gray-600 mb-3">Sponsored</h3>

      <div className="space-y-3">
        <div className="flex gap-3 cursor-pointer hover:bg-gray-200 p-2 rounded-lg">
          <img src="/assets/gym.jpg" alt="" className="h-18 w-14 rounded-lg" />
          <div>
            <p className="text-sm font-medium">Gym Membership</p>
            <p className="text-xs text-gray-500">www.fitness.com</p>
          </div>
        </div>

        <div className="flex gap-3 cursor-pointer hover:bg-gray-200 p-2 rounded-lg">
          <img
            src="/assets/react.png"
            alt=""
            className="h-18 w-14 rounded-lg"
          />
          <div>
            <p className="text-sm font-medium">Learn React Faster</p>
            <p className="text-xs text-gray-500">www.reactcourse.com</p>
          </div>
        </div>
      </div>
    </div>
  );
}
