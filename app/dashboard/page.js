import React from "react";
import { ArrowDownIcon, ArrowUpIcon } from "@heroicons/react/20/solid";
import {
  BanknotesIcon,
  UsersIcon,
  ArchiveBoxIcon,
  ClipboardDocumentIcon,
  DocumentChartBarIcon,
  UserCircleIcon,
} from "@heroicons/react/24/outline";

const actions = [
  {
    title: "Add a new product",
    href: "/dashboard/products/new",
    icon: ArchiveBoxIcon,
    iconForeground: "text-teal-700",
    iconBackground: "bg-teal-50",
  },
  {
    title: "Record a new order",
    href: "#",
    icon: ClipboardDocumentIcon,
    iconForeground: "text-purple-700",
    iconBackground: "bg-purple-50",
  },
  {
    title: "Add a new customer",
    href: "#",
    icon: UsersIcon,
    iconForeground: "text-sky-700",
    iconBackground: "bg-sky-50",
  },
  {
    title: "Issue an invoice",
    href: "#",
    icon: DocumentChartBarIcon,
    iconForeground: "text-yellow-700",
    iconBackground: "bg-yellow-50",
  },
  {
    title: "Record an expense",
    href: "#",
    icon: BanknotesIcon,
    iconForeground: "text-rose-700",
    iconBackground: "bg-rose-50",
  },
  {
    title: "Update Profile",
    href: "/dashboard/profile",
    icon: UserCircleIcon,
    iconForeground: "text-indigo-700",
    iconBackground: "bg-indigo-50",
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function DashboardHome() {
  const stats = [
    {
      name: "Orders",
      stat: "41,897",
      previousStat: "35,946",
      change: "12%",
      changeType: "increase",
    },
    {
      name: "Customers",
      stat: "67,164",
      previousStat: "66,314%",
      change: "2.02%",
      changeType: "increase",
    },
    {
      name: "Storefront Visits",
      stat: "153,574",
      previousStat: "149,620",
      change: "4.05%",
      changeType: "increase",
    },
  ];
  return (
    <main className="flex min-h-screen flex-col">
      <div className="w-full mb-5">
        <h3>
          Hello, <b>Some name value</b>
        </h3>
      </div>
      <div>
        <h3 className="text-base font-semibold leading-6 text-gray-900">
          Last 30 days
        </h3>
        <dl className="mt-5 grid grid-cols-1 divide-y divide-gray-200 overflow-hidden rounded-lg bg-white shadow md:grid-cols-3 md:divide-x md:divide-y-0">
          {stats.map((item) => (
            <div key={item.name} className="px-4 py-5 sm:p-6">
              <dt className="text-base font-normal text-gray-900">
                {item.name}
              </dt>
              <dd className="mt-1 flex items-baseline justify-between md:block lg:flex">
                <div className="flex items-baseline text-2xl font-semibold text-indigo-600">
                  {item.stat}
                  <span className="ml-2 text-sm font-medium text-gray-500">
                    from {item.previousStat}
                  </span>
                </div>

                <div
                  className={classNames(
                    item.changeType === "increase"
                      ? "bg-green-100 text-green-800"
                      : "bg-red-100 text-red-800",
                    "inline-flex items-baseline rounded-full px-2.5 py-0.5 text-sm font-medium md:mt-2 lg:mt-0"
                  )}
                >
                  {item.changeType === "increase" ? (
                    <ArrowUpIcon
                      className="-ml-1 mr-0.5 h-5 w-5 flex-shrink-0 self-center text-green-500"
                      aria-hidden="true"
                    />
                  ) : (
                    <ArrowDownIcon
                      className="-ml-1 mr-0.5 h-5 w-5 flex-shrink-0 self-center text-red-500"
                      aria-hidden="true"
                    />
                  )}

                  <span className="sr-only">
                    {item.changeType === "increase" ? "Increased" : "Decreased"}{" "}
                    by{" "}
                  </span>
                  {item.change}
                </div>
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
    </main>
  );
}
