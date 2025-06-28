import React from 'react';
import Image from "next/image";

export default function PaymentMethods() {
    const choosen = 3;
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
            img: "/icons/Visa_icon.svg",
            method: "Debit card",
            dep: "$10",
            deposite: "Instant",
            payouts: "/icons/checked.png",
            withdrawal: "1-7 days",
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
            img: "/icons/Visa_icon.svg",
            method: "Debit card",
            dep: "$10",
            deposite: "Instant",
            payouts: "/icons/checked.png",
            withdrawal: "1-7 days",
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
            <div className='space-y-6'>
                <div className='space-y-4'>
                    <h2 className='text-2xl font-bold '>Payment Methods at US Casinos</h2>
                    <p className="text-base text-gray-500">Compare payment options at top US casinos – including fees, speed, and withdrawal availability. Whether you prefer crypto, cards, or e-wallets, we’ve got you covered.</p>
                </div>

                <div className="relative">
                    <div className='md:hidden text-red-400 flex flex-row gap-4 my-4'>
                        <div className="w-8 h-4 border-2 border-dashed border-red-400 mt-1 rounded-sm bg-red-100"></div>
                        <p className='text-sm font-bold'> - Top 3 Used</p>
                    </div>

                    <div className="absolute -left-31 top-[167px] z-10 hidden md:flex">
                        <div className="w-55 h-[30px] bg-red-600 rounded-t-md -rotate-90 text-white text-sm font-bold text-center shadow-md py-1 px-4">
                            TOP 3 USED
                        </div>
                    </div>

                    <div className="absolute z-10 left-0 top-27 md:top-18 h-55 w-full border-1 md:border-l-0 border-dashed border-red-500">
                    </div>

                    <div className="overflow-x-auto border rounded-xl border-gray-200 text-sm relative">
                        <table className="md:w-full">
                            <thead className='text-left text-sm bg-gray-100'>
                                <tr>
                                    {tableTitle.map((title, index) => (
                                        <th key={index} className="border-x border-gray-200 px-5 py-4">{title}</th>
                                    ))}
                                </tr>
                            </thead>

                            <tbody className='text-sm text-gray-500'>
                                {tableContent.map((content, index) => {
                                    const boerderSet = index < choosen;
                                    return (
                                        <tr key={index}>
                                            <td className={`border border-gray-200 px-5 py-4 ${boerderSet ? 'bg-red-100 text-red-500 font-bold border-0' : ''}`}>
                                                {index + 1}
                                            </td>
                                            <td className="border border-gray-200 text-red-400 px-5 py-4">
                                                <div className="flex gap-2">
                                                    <Image src={content.img} alt="content" height={24} width={24} />{content.method}</div>
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
                                    )
                                })}
                                <tr >
                                    <td colSpan={7} className='px-5 py-4 mx-auto items-center'>
                                        <div className='md:flex md:justify-center'>
                                            <button className="border border-red-600 rounded-xl text-base font-bold text-red-600 py-3 px-6">See all payment methods</button>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    )
}
