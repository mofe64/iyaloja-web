export default function ActionPanel() {
  return (
    <div className="bg-white shadow sm:rounded-lg">
      <div className="px-4 py-5 sm:p-6">
        <h3 className="text-base font-semibold leading-6 text-gray-900">
          Link your business account
        </h3>
        <div className="mt-2 max-w-xl text-sm text-gray-500">
          <p>
            Link your business account to your admin dashboard to automatically
            get updates whenever funds enter and leave your business account
          </p>
        </div>
        <button
          type="submit"
          className="mt-3 inline-flex w-full items-center justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600  sm:w-auto"
        >
          Link account
        </button>
      </div>
    </div>
  );
}
