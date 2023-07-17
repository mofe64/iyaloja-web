"use client";
import {
  ArrowLeftIcon,
  ReceiptPercentIcon,
  TicketIcon,
} from "@heroicons/react/24/outline";
import { useRouter } from "next/navigation";
import Link from "next/link";
const stats = [
  { name: "Revenue Generated", stat: "710,897" },
  { name: "Coupons Used", stat: "58" },
  { name: "Products Sold", stat: "89" },
];
const actions = [
  {
    title: "Create a new discount",
    href: "/dashboard/products/new",
    icon: ReceiptPercentIcon,
    iconForeground: "text-teal-700",
    iconBackground: "bg-teal-50",
  },
  {
    title: "Create a new Coupon",
    href: "/dashboard/orders/new",
    icon: TicketIcon,
    iconForeground: "text-purple-700",
    iconBackground: "bg-purple-50",
  },
];
const discounts = [
  {
    id: 1,
    amount: "1000",
    discountType: "Fixed",
    appliesTo: "All Products",
    startDate: "11/06/2023",
    endDate: "11/09/2023",
    role: "100,000",
  },
  {
    id: 2,
    amount: "10",
    discountType: "Percent",
    appliesTo: "Specific Category",
    startDate: "11/06/2023",
    endDate: "11/09/2023",
    role: "100,000",
  },
  {
    id: 3,
    amount: "35",
    discountType: "Percent",
    appliesTo: "Specific Product",
    startDate: "11/06/2023",
    endDate: "11/09/2023",
  },
];
const coupons = [
  {
    id: 1,
    code: "BlackFriday10",
    discountType: "Percent",
    discountValue: 10,
    expiry: "25/12/01",
    uses: 200,
  },
  {
    id: 2,
    code: "Starters",
    discountType: "Fixed",
    discountValue: 1000,
    expiry: "25/12/01",
    uses: 89,
  },
  {
    id: 3,
    code: "NewYears",
    discountType: "Percent",
    discountValue: 25,
    expiry: "05/01/01",
    uses: 27,
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function CampaignControlCenter() {
  const router = useRouter();
  return (
    <>
      <button className="w-7" onClick={() => router.back()}>
        <ArrowLeftIcon className="text-black" />
      </button>
      <div>
        <dl className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-3">
          {stats.map((item) => (
            <div
              key={item.name}
              className="overflow-hidden rounded-lg bg-white px-4 py-5 shadow sm:p-6"
            >
              <dt className="truncate text-sm font-medium text-gray-500">
                {item.name}
              </dt>
              <dd className="mt-1 text-3xl font-semibold tracking-tight text-gray-900">
                {item.stat}
              </dd>
            </div>
          ))}
        </dl>
      </div>
      <div className="mt-5">
        <h1 className="font-bold text-lg">Quick Actions</h1>
        <div className="divide-y divide-gray-200 overflow-hidden rounded-lg bg-gray-200 shadow sm:grid sm:grid-cols-2 sm:gap-px sm:divide-y-0">
          {actions.map((action, actionIdx) => (
            <div
              key={action.title}
              className={classNames(
                actionIdx === 0
                  ? "rounded-tl-lg rounded-tr-lg sm:rounded-tr-none"
                  : "",
                actionIdx === 1 ? "sm:rounded-tr-lg" : "",
                actionIdx === actions.length - 2 ? "sm:rounded-bl-lg" : "",
                actionIdx === actions.length - 1
                  ? "rounded-bl-lg rounded-br-lg sm:rounded-bl-none"
                  : "",
                "group relative bg-white p-6 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-500"
              )}
            >
              <div>
                <span
                  className={classNames(
                    action.iconBackground,
                    action.iconForeground,
                    "inline-flex rounded-lg p-3 ring-4 ring-white"
                  )}
                >
                  <action.icon className="h-6 w-6" aria-hidden="true" />
                </span>
              </div>
              <div className="mt-8">
                <h3 className="text-base font-semibold leading-6 text-gray-900">
                  <a href={action.href} className="focus:outline-none">
                    {/* Extend touch target to entire panel */}
                    <span className="absolute inset-0" aria-hidden="true" />
                    {action.title}
                  </a>
                </h3>
                <p className="mt-2 text-sm text-gray-500">
                  Doloribus dolores nostrum quia qui natus officia quod et
                  dolorem. Sit repellendus qui ut at blanditiis et quo et
                  molestiae.
                </p>
              </div>
              <span
                className="pointer-events-none absolute right-6 top-6 text-gray-300 group-hover:text-gray-400"
                aria-hidden="true"
              >
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20 4h1a1 1 0 00-1-1v1zm-1 12a1 1 0 102 0h-2zM8 3a1 1 0 000 2V3zM3.293 19.293a1 1 0 101.414 1.414l-1.414-1.414zM19 4v12h2V4h-2zm1-1H8v2h12V3zm-.707.293l-16 16 1.414 1.414 16-16-1.414-1.414z" />
                </svg>
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-8 flow-root">
        <h2 className="font-bold text-lg">Active Discounts</h2>
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
            <table className="min-w-full divide-y divide-gray-300">
              <thead>
                <tr>
                  <th
                    scope="col"
                    className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0"
                  >
                    Amount
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                  >
                    Discount Type
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                  >
                    Start Date
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                  >
                    End Date
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                  >
                    Applies To
                  </th>
                  <th scope="col" className="relative py-3.5 pl-3 pr-0">
                    <span className="sr-only">Pause</span>
                  </th>
                  <th scope="col" className="relative py-3.5 pl-3 pr-0">
                    <span className="sr-only">Delete</span>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 bg-white">
                {discounts.map((discount) => (
                  <tr key={discount.id}>
                    <td
                      className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0"
                      onClick={() =>
                        router.push("/dashboard/campaigns/1/discount/1")
                      }
                    >
                      {discount.amount}
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                      {discount.discountType}
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                      {discount.startDate}
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                      {discount.endDate}
                    </td>
                    <td className="whitespace-nowrap  py-4 text-sm text-gray-500">
                      {discount.appliesTo}
                    </td>
                    <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm sm:pr-0">
                      <Link
                        href="/dashboard/expenses/1/edit"
                        className="text-indigo-600 hover:text-indigo-900"
                      >
                        Pause
                      </Link>
                    </td>
                    <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm sm:pr-0">
                      <button
                        href="#"
                        className="text-red-600 hover:text-indigo-900"
                        onClick={() => setShowModal(true)}
                      >
                        Delete<span className="sr-only">, {discount.name}</span>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <nav
          className="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6"
          aria-label="Pagination"
        >
          <div className="hidden sm:block">
            <p className="text-sm text-gray-700">
              Showing <span className="font-medium">1</span> to{" "}
              <span className="font-medium">6</span> of{" "}
              <span className="font-medium">6</span> results
            </p>
          </div>
          <div className="flex flex-1 justify-between sm:justify-end">
            <a
              href="#"
              className="relative inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus-visible:outline-offset-0"
            >
              Previous
            </a>
            <a
              href="#"
              className="relative ml-3 inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus-visible:outline-offset-0"
            >
              Next
            </a>
          </div>
        </nav>
      </div>
      <div className="mt-8 flow-root">
        <h2 className="font-bold text-lg">Active Coupons</h2>
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
            <table className="min-w-full divide-y divide-gray-300">
              <thead>
                <tr>
                  <th
                    scope="col"
                    className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0"
                  >
                    CODE
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                  >
                    Type
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                  >
                    Value
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                  >
                    Expiry
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                  >
                    Uses
                  </th>

                  <th scope="col" className="relative py-3.5 pl-3 pr-0">
                    <span className="sr-only">Pause</span>
                  </th>
                  <th scope="col" className="relative py-3.5 pl-3 pr-0">
                    <span className="sr-only">Delete</span>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 bg-white">
                {coupons.map((coupon) => (
                  <tr key={coupon.id}>
                    <td
                      className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0"
                      onClick={() =>
                        router.push("/dashboard/campaigns/1/coupon/1")
                      }
                    >
                      {coupon.code}
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                      {coupon.discountType}
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                      {coupon.discountValue}
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                      {coupon.expiry}
                    </td>
                    <td className="whitespace-nowrap  py-4 text-sm text-gray-500">
                      {coupon.uses}
                    </td>
                    <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm sm:pr-0">
                      <Link
                        href="/dashboard/expenses/1/edit"
                        className="text-indigo-600 hover:text-indigo-900"
                      >
                        Pause
                      </Link>
                    </td>
                    <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm sm:pr-0">
                      <button
                        href="#"
                        className="text-red-600 hover:text-indigo-900"
                        onClick={() => setShowModal(true)}
                      >
                        Delete<span className="sr-only">, {coupon.code}</span>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <nav
          className="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6"
          aria-label="Pagination"
        >
          <div className="hidden sm:block">
            <p className="text-sm text-gray-700">
              Showing <span className="font-medium">1</span> to{" "}
              <span className="font-medium">6</span> of{" "}
              <span className="font-medium">6</span> results
            </p>
          </div>
          <div className="flex flex-1 justify-between sm:justify-end">
            <a
              href="#"
              className="relative inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus-visible:outline-offset-0"
            >
              Previous
            </a>
            <a
              href="#"
              className="relative ml-3 inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus-visible:outline-offset-0"
            >
              Next
            </a>
          </div>
        </nav>
      </div>
    </>
  );
}
