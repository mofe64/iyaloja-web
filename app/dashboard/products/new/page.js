"use client";
import { XMarkIcon } from "@heroicons/react/24/solid";
import { Switch } from "@headlessui/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import SelectInput from "@/components/SelectInput";
import FormSlideOver from "@/components/FormSlideOver";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
const categoryList = ["One", "Two", "Three", "Four", "Five", "Six", "Seven"];
export default function NewProduct() {
  const router = useRouter();
  const [enabled, setEnabled] = useState(false);
  const [category, setCategory] = useState(categoryList[0]);
  const [additonalImages, setAdditonalImages] = useState([]);
  const [showCreateCategory, setShowCreateCategory] = useState(false);
  return (
    <form>
      <FormSlideOver
        open={showCreateCategory}
        closeFunc={() => setShowCreateCategory(false)}
        panelTitle="Create New category"
        placeholder="Enter Category Name"
        submitFunc={() => console.log("test")}
      />
      <div className="space-y-12">
        <div className="border-b border-gray-900/10 pb-12">
          <h2 className="text-base font-semibold leading-7 text-gray-900">
            Add a new product to your Storefront
          </h2>
          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Product Name
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="text"
                  autoComplete="email"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="col-span-full">
              <label
                htmlFor="about"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Product Description
              </label>
              <div className="mt-2">
                <textarea
                  id="about"
                  name="about"
                  rows={3}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  defaultValue={""}
                />
              </div>
              <p className="mt-3 text-sm leading-6 text-gray-600">
                Write a few sentences describing the product.
              </p>
            </div>
            <div className="col-span-full">
              <SelectInput
                label="Product Category"
                selected={category}
                setSelected={setCategory}
                options={categoryList}
              />
              <button
                type="button"
                className="mt-1"
                onClick={() => setShowCreateCategory(true)}
              >
                <p className="text-sm ml-1 cursor-pointer text-primary">
                  Create a new Category
                </p>
              </button>
            </div>
            <div className="col-span-full">
              <label
                htmlFor="cover-photo"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Main Product Image
              </label>
              <div className="mt-2 flex justify-center rounded-lg border  border-gray-900/25 px-6 py-10">
                <input type="file" />
              </div>
            </div>
            <div className="col-span-full">
              <button
                onClick={() => {
                  const updated = [...Array(additonalImages.length + 1)];
                  setAdditonalImages(updated);
                }}
                type="button"
                className="mt-1"
              >
                <p className="text-sm ml-1 cursor-pointer text-primary">
                  Add additonal image
                </p>
              </button>
              {additonalImages.map((image, index) => {
                return (
                  <div className="mt-2 flex items-center">
                    <label className="block text-sm font-medium leading-6 text-gray-900 w-[95%]">
                      {`Additional image ${index + 1}`}
                      <input type="file" />
                    </label>
                    <XMarkIcon
                      className="h-6 w-6 text-red-600 cursor-pointer mt-4 ml-4"
                      aria-hidden="true"
                      onClick={() => {
                        const copy = [...additonalImages];
                        copy.splice(index, 1);
                        setAdditonalImages(copy);
                      }}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="border-b border-gray-900/10 pb-12">
          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-3">
              <label
                htmlFor="first-name"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Product price (₦)
              </label>
              <div className="mt-2">
                <input
                  type="number"
                  name="first-name"
                  id="first-name"
                  autoComplete="given-name"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label
                htmlFor="last-name"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Product Quantity
              </label>
              <div className="mt-2">
                <input
                  type="number"
                  name="last-name"
                  id="last-name"
                  autoComplete="family-name"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="border-b border-gray-900/10 pb-12">
          <p className="text-lg font-semibold leading-6 text-gray-900">
            Feature Product ?
          </p>
          <p className="mt-1 mb-1 text-sm leading-6 text-gray-600">
            Make this product the first thing people see, when they visit your
            Storefront
          </p>
          <Switch
            checked={enabled}
            onChange={setEnabled}
            className={classNames(
              enabled ? "bg-indigo-600" : "bg-gray-200",
              "relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2"
            )}
          >
            <span className="sr-only">Use setting</span>
            <span
              aria-hidden="true"
              className={classNames(
                enabled ? "translate-x-5" : "translate-x-0",
                "pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out"
              )}
            />
          </Switch>
        </div>
      </div>

      <div className="mt-6 flex items-center justify-end gap-x-6">
        <button
          type="button"
          className="text-base font-semibold leading-6 text-gray-900"
          onClick={() => router.back()}
        >
          Cancel
        </button>
        <button
          type="submit"
          className="rounded-md bg-indigo-600 px-3 py-2 text-base font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Create
        </button>
      </div>
    </form>
  );
}
