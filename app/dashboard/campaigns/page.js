"use client";
import { useState } from "react";
import DeleteModal from "@/components/modal";
import ActionPanel from "@/components/ActionPanel";
import Link from "next/link";
import { useRouter } from "next/navigation";

const people = [
  {
    name: "Restock",
    title: "Business",
    email: "11/06/2023",
    role: "100,000",
  },
  {
    name: "Restock",
    title: "Business",
    email: "11/05/2023",
    role: "100,000",
  },
  {
    name: "Restock",
    title: "Business",
    email: "11/03/2023",
    role: "100,000",
  },
  {
    name: "Restock",
    title: "Business",
    email: "11/04/2023",
    role: "100,000",
  },
  {
    name: "Restock",
    title: "Business",
    email: "11/02/2023",
    role: "100,000",
  },
  {
    name: "Restock",
    title: "Business",
    email: "11/01/2023",
    role: "100,000",
  },

  // More people...
];

export default function SalesCampaignsDashboard() {
  const [showModal, setShowModal] = useState(false);
  const router = useRouter();
  return (
    <>
      <DeleteModal
        entity={"Sales Campaign"}
        show={showModal}
        close={() => {
          setShowModal(false);
        }}
        deleteFunc={() => {
          setShowModal(false);
        }}
      />
      <div className="mt-5 px-4 sm:px-6 lg:px-8">
        <div className="sm:flex sm:items-center">
          <div className="sm:flex-auto">
            <h1 className="text-lg font-semibold leading-6 text-gray-900">
              Sales Campaigns
            </h1>
            <p className="mt-2 text-sm text-gray-700">
              A list of all current and past sales campaigns
            </p>
          </div>
          <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
            <Link
              href={"/dashboard/expenses/new"}
              type="button"
              className="block rounded-md bg-primary px-3 py-2 text-center text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
            >
              New Campaign
            </Link>
          </div>
        </div>
        <div className="mt-8 flow-root">
          <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
              <table className="min-w-full divide-y divide-gray-300">
                <thead>
                  <tr>
                    <th
                      scope="col"
                      className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0"
                    >
                      Name
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      Status
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
                    <th scope="col" className="relative py-3.5 pl-3 pr-0">
                      <span className="sr-only">Pause</span>
                    </th>
                    <th scope="col" className="relative py-3.5 pl-3 pr-0">
                      <span className="sr-only">Delete</span>
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-white">
                  {people.map((person) => (
                    <tr key={person.email}>
                      <td
                        className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0"
                        onClick={() =>
                          router.push("/dashboard/campaigns/1/controlCenter")
                        }
                      >
                        {person.name}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        {person.title}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        {person.email}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        {person.role}
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
                          Delete<span className="sr-only">, {person.name}</span>
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
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
