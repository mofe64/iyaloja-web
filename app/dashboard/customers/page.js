"use client";
import Link from "next/link";
import DeleteModal from "@/components/modal";
import { useState, Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { EllipsisVerticalIcon } from "@heroicons/react/20/solid";

const customers = [
  {
    id: 1,
    name: "Product 1",
    editLink: `/dashboard/customers/1/edit`,
    viewLink: `/dashboard/customers/1/details`,
    createdBy: "Leslie Alexander",
    dueDate: "March 17, 2023",
    dueDateTime: "2023-03-17T00:00Z",
  },
  {
    id: 2,
    name: "Water Bottles",
    editLink: `/dashboard/customers/2/edit`,
    viewLink: `/dashboard/customers/2/details`,
    createdBy: "Leslie Alexander",
    dueDate: "May 5, 2023",
    dueDateTime: "2023-05-05T00:00Z",
  },
  {
    id: 3,
    name: "Laptops",
    editLink: `/dashboard/customers/3/edit`,
    viewLink: `/dashboard/customers/3/details`,
    createdBy: "Courtney Henry",
    dueDate: "May 25, 2023",
    dueDateTime: "2023-05-25T00:00Z",
  },
  {
    id: 4,
    name: "Iphones",
    editLink: `/dashboard/customers/4/edit`,
    viewLink: `/dashboard/customers/4/details`,
    createdBy: "Leonard Krasner",
    dueDate: "June 7, 2023",
    dueDateTime: "2023-06-07T00:00Z",
  },
  {
    id: 5,
    name: "Chargers",
    editLink: `/dashboard/customers/5/edit`,
    viewLink: `/dashboard/customers/5/details`,
    createdBy: "Courtney Henry",
    dueDate: "June 10, 2023",
    dueDateTime: "2023-06-10T00:00Z",
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function DashboardCustomers() {
  const [showModal, setShowModal] = useState(false);

  return (
    <main className="flex min-h-screen flex-col p-2">
      <DeleteModal
        entity={"Customer"}
        show={showModal}
        close={() => {
          setShowModal(false);
        }}
        deleteFunc={() => {
          setShowModal(false);
        }}
      />
      <Link
        className="btn-primary lg:w-[15%] w-[50%] mb-5 text-center"
        href={"/dashboard/customers/new"}
      >
        <p>New Customer</p>
      </Link>
      <h1 className="font-bold text-lg">Latest Orders</h1>
      <ul role="list" className="divide-y divide-gray-100">
        {customers.map((customer) => (
          <li
            key={customer.id}
            className="flex items-center justify-between gap-x-6 py-5"
          >
            <div className="min-w-0">
              <div className="flex items-start gap-x-3">
                <Link
                  href={"/dashboard/customers/5/details"}
                  className="text-sm font-semibold leading-6 text-gray-900"
                >
                  {customer.name}
                </Link>
              </div>
              <div className="mt-1 flex items-center gap-x-2 text-xs leading-5 text-gray-500">
                <p className="whitespace-nowrap">
                  <time dateTime={customer.dueDateTime}>
                    {customer.dueDate}
                  </time>
                </p>
              </div>
            </div>
            <div className="flex flex-none items-center gap-x-4">
              <a
                href={customer.viewLink}
                className="hidden rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:block"
              >
                View Customer details
                <span className="sr-only">, {customer.name}</span>
              </a>
              <Menu as="div" className="relative flex-none">
                <Menu.Button className="-m-2.5 block p-2.5 text-gray-500 hover:text-gray-900">
                  <span className="sr-only">Open options</span>
                  <EllipsisVerticalIcon
                    className="h-5 w-5"
                    aria-hidden="true"
                  />
                </Menu.Button>
                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <Menu.Items className="absolute right-0 z-10 mt-2 w-32 origin-top-right rounded-md bg-white py-2 shadow-lg ring-1 ring-gray-900/5 focus:outline-none">
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          href={customer.editLink}
                          className={classNames(
                            active ? "bg-gray-50" : "",
                            "block px-3 py-1 text-sm leading-6 text-gray-900"
                          )}
                        >
                          Edit
                          <span className="sr-only">, {customer.name}</span>
                        </a>
                      )}
                    </Menu.Item>

                    <Menu.Item>
                      {({ active }) => (
                        <button
                          className={classNames(
                            active ? "bg-gray-50" : "",
                            "block px-3 py-1 text-sm leading-6 text-gray-900"
                          )}
                          onClick={() => setShowModal(true)}
                        >
                          Delete
                          <span className="sr-only">, {customer.name}</span>
                        </button>
                      )}
                    </Menu.Item>
                  </Menu.Items>
                </Transition>
              </Menu>
            </div>
          </li>
        ))}
      </ul>
      <nav
        className="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6"
        aria-label="Pagination"
      >
        <div className="hidden sm:block">
          <p className="text-sm text-gray-700">
            Showing <span className="font-medium">1</span> to{" "}
            <span className="font-medium">10</span> of{" "}
            <span className="font-medium">20</span> results
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
    </main>
  );
}
