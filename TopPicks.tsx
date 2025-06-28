import React from 'react';
import Image from "next/image";

export default function TopPicks() {
    const allCards = [
        {
            rate: "78",
            img: "/image/topCasinos_11.png",
            title: "200% up to $3,000 + 30 free spins",
            payouts: "0-24h.",
        },
        {
            rate: "78",
            img: "/image/topCasinos_22.png",
            title: "200% up to $3,000 + 30 free spins",
            payouts: "0-24h.",
        },
        {
            rate: "90",
            img: "/image/topCasinos_33.png",
            title: "200% up to $3,000 + 30 free spins",
            payouts: "0-24h.",
        },
        {
            rate: "86",
            img: "/image/topCasinos_44.png",
            title: "200% up to $3,000 + 30 free spins",
            payouts: "0-24h.",
        },
        {
            rate: "78",
            img: "/image/topCasinos_55.png",
            title: "200% up to $3,000 + 30 free spins",
            payouts: "0-24h.",
        },
        {
            rate: "78",
            img: "/image/topCasinos_11.png",
            title: "200% up to $3,000 + 30 free spins",
            payouts: "0-24h.",
        },
    ]

    return (
        <>
            <div className='space-y-6'>
                <div className='space-y-4'>
                    <h2 className='text-2xl font-bold '>Our Top Picks</h2>

                    <div className="grid cols-1 md:grid-cols-3 gap-4 mt-14 md:mt-0">
                        <div className="col-span-1 md:col-span-3 relative">
                            <div className="absolute z-10 w-[220px] md:w-[222px] -top-12 left-0 md:-left-[126px] md:top-[87px] md:-rotate-90 flex items-center justify-center bg-red-600 text-white text-xs font-bold rounded-t-lg px-4 py-2">
                                <Image
                                    src="/icons/check_white.png"
                                    alt="casino"
                                    width={24}
                                    height={24}
                                    className="pe-2"
                                />
                                OUR PICK
                            </div>
                            <div className='border md:border-l-0 border-dashed border-red-300 rounded-xl rounded-tl-xs md:rounded-l-xs bg-red-50 p-6 overflow-hidden relative'>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
                                    {/*  */}
                                    <div className="relative w-full h-[171px] overflow-hidden rounded-md">
                                        <Image
                                            src="/image/topCasinos_22.png"
                                            alt="casino"
                                            width={239}
                                            height={171}
                                            className="w-full h-full object-cover"
                                        />
                                        <div className="absolute top-5 left-3">
                                            <div className="relative w-10 h-10">
                                                <svg className="w-full h-full rotate-0" viewBox="0 0 36 36">
                                                    <defs>
                                                        <linearGradient id="redGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                                            <stop offset="0%" stopColor="#FF3B30" />
                                                            <stop offset="100%" stopColor="#FFCDD2" />
                                                        </linearGradient>
                                                    </defs>

                                                    <path
                                                        className="text-gray-200"
                                                        stroke="currentColor"
                                                        strokeWidth="3"
                                                        fill="none"
                                                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                                                    />
                                                    <path
                                                        className="text-red-500"
                                                        stroke={`url(#redGradient)`}
                                                        strokeWidth="3"
                                                        strokeDasharray="98, 100"
                                                        fill="none"
                                                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                                                    />
                                                </svg>

                                                <div className="absolute inset-0 flex items-center justify-center text-xs font-semibold text-white">
                                                    98
                                                </div>
                                            </div>
                                        </div>
                                        <div className="absolute left-3 bottom-3 flex flex-row gap-2">
                                            <button className="bg-white/20 backdrop-blur-lg rounded-sm text-xs text-white flex flex-row gap-2 py-1 px-[6px]">
                                                EDITOR TESTED
                                            </button>

                                            <button className="bg-white/20 backdrop-blur-lg rounded-sm text-xs text-white flex flex-row gap-2 py-1 px-[6px]">
                                                <Image src="/icons/Vector (5).png" alt="casino" width={239} height={171} className="h-auto min-w-[24px] w-full" />
                                            </button>
                                        </div>
                                    </div>


                                    <div className='md:col-span-2'>
                                        <h2 className='text-md font-bold leadin-[26px] align-center'>200% up to $3,000 + 30 free spins</h2>
                                        <div className='h-[48px] flex flex-row items-start gap-2 text-gray-400 text-sm font-medium mb-4'>
                                            <Image src="/icons/avg_pay_icon.svg" alt="cal.pic" height={28} width={28} />
                                            Avg Payouts:<span className='text-black font-semiboldalign-top '>0-24h</span>
                                        </div>
                                        <div className='border-b border-gray-200 w-full my-4'></div>
                                        <div className="block md:flex md:flex-row items-center text-center gap-4">
                                            <button className="w-full md:w-auto text-center px-6 py-3 bg-red-500 text-white rounded-lg hover:bg-red-700 transition-colors text-base font-bold flex justify-center items-center">
                                                <Image width="20" height="20" src="/icons/gift_white.png" alt="giftIcon" className="h-5 w-5 mr-2" />
                                                Claim Bonus
                                            </button>
                                            <a href="#" className="text-red-500 text-sm font-bold">
                                                Read Review
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {allCards.map((card, index) => (
                            <div key={index} className="card">
                                <div className='border border-gray-200 rounded-xl p-4 overflow-hidden'>
                                    <div className="space-y-4">
                                        <div className="relative w-full h-[171px] overflow-hidden rounded-md">
                                            <Image
                                                src={card.img}
                                                alt="casino"
                                                width={239}
                                                height={171}
                                                className="w-full h-full object-cover"
                                            />
                                            {/* <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-black/10 pointer-events-none" /> */}

                                            <div className="absolute top-5 left-3">
                                                <div className="relative w-10 h-10">
                                                    <svg className="w-full h-full rotate-0" viewBox="0 0 36 36">
                                                        <defs>
                                                            <linearGradient id="redGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                                                <stop offset="0%" stopColor="#FF3B30" />
                                                                <stop offset="100%" stopColor="#FFCDD2" />
                                                            </linearGradient>
                                                        </defs>
                                                        <path
                                                            className="text-gray-200"
                                                            stroke="currentColor"
                                                            strokeWidth="3"
                                                            fill="none"
                                                            d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                                                        />
                                                        <path
                                                            className="text-red-500"
                                                            stroke="url(#redGradient)"
                                                            strokeWidth="3"
                                                            strokeDasharray={`${card.rate}, 100`}
                                                            fill="none"
                                                            d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                                                        />
                                                    </svg>

                                                    <div className="absolute inset-0 flex items-center justify-center text-xs font-semibold text-white">
                                                        {card.rate}
                                                    </div>
                                                </div>

                                            </div>
                                            <div className="absolute left-3 bottom-3 flex flex-row gap-2">
                                                <button className="bg-white/20 backdrop-blur-lg rounded-sm text-xs text-white flex flex-row gap-2 py-1 px-[6px]">
                                                    EDITOR TESTED
                                                </button>
                                                <button className="bg-white/20 backdrop-blur-lg rounded-sm text-xs text-white flex flex-row gap-2 py-1 px-[6px]">
                                                    <Image src="/icons/Vector (5).png" alt="casino" width={239} height={171} className="h-auto min-w-[24px] w-full" />
                                                </button>
                                            </div>
                                        </div>

                                        <div>
                                            <h2 className='text-md font-bold leadin-[26px] align-center'>{card.title}</h2>
                                            <div className='border-b border-gray-200 w-full my-4'></div>
                                            <div className='h-[48px] flex flex-row items-start gap-2 text-gray-400 text-sm font-medium mb-4'>
                                                <Image src="/icons/avg_pay_icon.svg" alt="cal.pic" height={28} width={28} />
                                                Avg Payouts:<span className='text-black font-semiboldalign-top '>{card.payouts}</span>
                                            </div>
                                            {/* <button className="w-full bg-red-600 text-white font-bold rounded-xl px-6 py-3">Claim Bonus</button> */}
                                            <div className="space-y-2 justify-center">
                                                <button className="w-full text-center px-6 py-3 bg-red-500 text-white rounded-lg hover:bg-red-700 transition-colors text-base font-bold flex justify-center items-center">
                                                    <Image width="20" height="20" src="/icons/gift_white.png" alt="giftIcon" className="h-5 w-5 mr-2" />
                                                    Claim Bonus
                                                </button>
                                                <a href="#" className="text-red-500 text-sm font-bold flex items-center justify-center lg:justify-center">
                                                    Read Review
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div >
                </div >
            </div >
        </>
    )
}
