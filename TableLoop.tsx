// Use this code component with react.js, next.js, typescript and tailwind CSS...

import React from 'react';
import Image from "next/image";

export default function PaymentMethods() {
    const tableTitle = [
        "#", "Payment Method", "Min Dep.", " Deposit Time", "Payouts", "Withdrawal Time", "Used At"
    ]

    const tableContent = [
        {
            img: "/icons/Mastercard_icon.svg",
            method: "Credit card",
            dep: "$10",
            deposite: "Instant",
            payouts: "/icons/solid.png",
            withdrawal: "N/A",
            used: "45 Casinos"
        },
        {
            img: "/icons/Visa_icon.svg",
            method: "Debit card",
            dep: "$10",
            deposite: "Instant",
            payouts: "/icons/checked.png",
            withdrawal: "1-7 days",
            used: "45 Casinos"
        },
        {
            img: "/image/Mastercard2.png",
            method: "Apple Pay",
            dep: "$10-20",
            deposite: "Instant",
            payouts: "/icons/checked.png",    //right
            withdrawal: "1-3 days",
            used: "45 Casinos"
        },
        {
            img: "/icons/sepa_icon.svg",
            method: "Google Pay",
            dep: "$10",
            deposite: "Instant",
            payouts: "/icons/solid.png",
            withdrawal: "N/A",
            used: "45 Casinos"
        },
        {
            img: "/image/Visa2.png",
            method: "Play +",
            dep: "$5",
            deposite: "Instant",
            payouts: "/icons/solid.png",
            withdrawal: "Instant",
            used: "45 Casinos"
        },
        {
            img: "/icons/Mastercard_icon.svg",
            method: "Credit card",
            dep: "$10",
            deposite: "Instant",
            payouts: "/icons/checked.png",
            withdrawal: "N/A",
            used: "45 Casinos"
        },
    ]

    return (
        <>
            <div className='md:flex md:flex-col md:gap-6 mb-6'>
                <div className='block md:flex md:flex-col md:gap-4 mt-16'>
                    <h2 className='text-2xl font-bold '>Payment Methods at US Casinos</h2>
                    <p className="text-base text-gray-500">Compare payment options at top US casinos – including fees, speed, and withdrawal availability. Whether you prefer crypto, cards, or e-wallets, we’ve got you covered.</p>
                </div>
                <div className="relative">
                    <div className="absolute -left-32 top-[177px] w-[220px] -rotate-90 flex items-center justify-center bg-red-600 text-white text-base font-bold rounded-t-md shadow-md py-1 px-4">
                        TOP 3 USED
                    </div>

                    <table className="w-full border border-gray-200 table-auto rounded-xl relative">
                        <thead className='text-left bg-gray-100'>
                            <tr>
                                {tableTitle.map((title, index) => (

                                    <th key={index} className="border border-gray-200 px-5 py-4">{title}</th>

                                ))}
                            </tr>
                        </thead>

                        <tbody className='text-sm text-gray-500'>
                            {tableContent.map((content, index) => (
                                <tr key={index} className=''>
                                    <td className="border border-gray-200 px-5 py-4">{index + 1}</td>
                                    <td className="border border-gray-200 text-red-400 px-5 py-4">
                                        <div className="flex gap-2">
                                            <Image src={content.img} alt="content" height={24} width={28} />{content.method}</div>
                                    </td>
                                    <td className="border border-gray-200 px-5 py-4">{content.dep}</td>
                                    <td className="border border-gray-200 px-5 py-4">{content.deposite}</td>
                                    <td className="border border-gray-200 px-5 py-4 align-center">
                                        <Image src={content.payouts} alt="content" height={24} width={24} />
                                    </td>
                                    <td className="border border-gray-200 px-5 py-4">{content.withdrawal}</td>
                                    <td className="border border-gray-200 text-red-400 px-5 py-4">
                                        <div className="flex gap-2">
                                            {content.used}<Image src="/icons/linear.png" alt="content" height={24} width={28} /></div>
                                    </td>
                                </tr>
                            ))}
                            <tr>
                                <td colSpan={7} className='px-5 py-4'>
                                    <button className="w-full border border-red-600 rounded-xl text-base font-bold text-red-600 py-3 px-6">See all payment methods</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}
