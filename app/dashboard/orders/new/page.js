"use client";
import SlideOver from "@/components/slideOver";
import { PhotoIcon, UserCircleIcon } from "@heroicons/react/24/solid";
import { useState } from "react";

export default function NewOrder() {
  const [openCustomerSelectionSlideOver, setCusomterSelectionOpenSlideOver] =
    useState(false);
  const [openProductSelectionSlideOver, setProductSelectionOpenSlideOver] =
    useState(false);
  return (
    <form>
      <div className="space-y-12">
        <div className="border-b border-gray-900/10 pb-12">
          <h2 className="text-base font-semibold leading-7 text-gray-900">
            Record a new order
          </h2>
          <p className="mt-1 text-sm leading-6 text-gray-600">
            Record the details of any orders that occured outside of your
            Storefront
          </p>
          <div className="border-gray-900/10 pb-12">
            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="sm:col-span-4">
                <p className="block text-sm font-medium leading-6 text-gray-900">
                  Select Customer (Optional)
                </p>
                <SlideOver
                  open={openCustomerSelectionSlideOver}
                  closeFunc={() => setCusomterSelectionOpenSlideOver(false)}
                />
                <div className="flex items-center">
                  <p className="font-semibold mr-3">Not selected</p>
                  <button
                    type="button"
                    className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    onClick={() => setCusomterSelectionOpenSlideOver(true)}
                  >
                    Select
                  </button>
                </div>
              </div>
              <div className="sm:col-span-4">
                <p className="block text-sm font-medium leading-6 text-gray-900">
                  Select Product
                </p>
                <SlideOver
                  open={openProductSelectionSlideOver}
                  closeFunc={() => setProductSelectionOpenSlideOver(false)}
                />
                <div className="flex items-center">
                  <p className="font-semibold mr-3">Not selected</p>
                  <button
                    type="button"
                    className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    onClick={() => setProductSelectionOpenSlideOver(true)}
                  >
                    Select
                  </button>
                </div>
              </div>

              <div className="sm:col-span-2 sm:col-start-1">
                <label
                  htmlFor="country"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Order Type
                </label>
                <div className="mt-2">
                  <select
                    id="country"
                    name="country"
                    autoComplete="country-name"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                  >
                    <option>WhatsApp</option>
                    <option>Twitter</option>
                    <option>Instagram</option>
                    <option>Physical Sale</option>
                  </select>
                </div>
              </div>

              <div className="sm:col-span-3">
                <label
                  htmlFor="country"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Order Status
                </label>
                <div className="mt-2">
                  <select
                    id="country"
                    name="country"
                    autoComplete="country-name"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                  >
                    <option>Completed</option>
                    <option>In Progress</option>
                  </select>
                </div>
              </div>
              <div className="sm:col-span-4">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Order date
                </label>
                <div className="mt-2">
                  <input
                    id="email"
                    name="email"
                    type="date"
                    autoComplete="email"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div className="col-span-full">
                <label
                  htmlFor="additionalInfo"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Additional Information
                </label>
                <div className="mt-2">
                  <textarea
                    id="additonalInfo"
                    name="additionalInfo"
                    rows={3}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    defaultValue={""}
                  />
                </div>
                <p className="mt-3 text-sm leading-6 text-gray-600">
                  Any other Information you want to record about this order
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-6 flex items-center justify-end gap-x-6">
        <button
          type="button"
          className="text-sm font-semibold leading-6 text-gray-900"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Save
        </button>
      </div>
    </form>
  );
}
