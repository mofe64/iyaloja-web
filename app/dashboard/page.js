import React from "react";
import InfoCard from "@/components/infoCard";
import Link from "next/link";

export default function DashboardHome() {
  return (
    <main className="flex min-h-screen flex-col">
      <div className="w-full mb-5">
        <h3>
          Hello, <b>Some name value</b>
        </h3>
      </div>
      <div className="mt-5 flex-col justify-between md:flex-row flex">
        <InfoCard title={"Orders"} header={"This week"} mainText={"+17"} />
        <InfoCard title={"Customers"} header={"This week"} mainText={"+23"} />
        <InfoCard
          title={"Storefront visits"}
          header={"This week"}
          mainText={"+76"}
        />
      </div>
      <div className="mt-5">
        <h1 className="font-bold text-lg">Latest Transactions</h1>
        <table className="basic mt-2">
          <thead>
            <tr>
              <td>Transaction Type</td>
              <td>Product Name</td>
              <td>Amount</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Product Sale </td>
              <td>Some product name</td>
              <td>₦43,000</td>
            </tr>
            <tr>
              <td>Invoice Issued</td>
              <td>Some product name</td>
              <td>₦13,000</td>
            </tr>
            <tr>
              <td>Product Return</td>
              <td>Some product name</td>
              <td>₦24,700</td>
            </tr>
            <tr>
              <td>Product Sale</td>
              <td>Some product name</td>
              <td>₦120,500</td>
            </tr>
          </tbody>
        </table>
      </div>
    </main>
  );
}
