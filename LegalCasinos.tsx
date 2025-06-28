import React from 'react';
import Image from "next/image";

export default function LegalCasinos() {
    return (
        <>
            <div className='space-y-6'>
                <div className='space-y-4'>
                    <h2 className='text-2xl font-bold'>Are Online Casinos Legal in the USA?</h2>
                    <p className='text-base text-gray-500'>Lorem ipsum dolor sit amet consectetur. Vel cras malesuada urna parturient orci feugiat felis amet. Nulla consectetur leo ultrices nisl dignissim nulla aliquet. Amet facilisis vitae viverra ut diam non dui sit blandit. Nibh augue in iaculis eu ac nulla praesent elit. </p>
                </div>
                <div>
                    <div className='border border-gray-200 rounded-t-xl px-6 py-4'>
                        <div className="flex md:justify-between flex-col gap-2 md:flex-row ">
                            <div className="w-[261px] md:w-60 max-w-sm order-2 md:order-1">
                                <select id="state" name="state" className="block w-full rounded-md border border-gray-300 bg-white px-4 py-2 text-gray-900 shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500">
                                    <option value="">Choose State</option>
                                    <option value="AK">Alaska</option>
                                    <option value="CA">California</option>
                                    <option value="DE">Delaware</option>
                                    <option value="FL">Florida</option>
                                    <option value="GA">Georgia</option>
                                    <option value="HI">Hawaii</option>
                                    <option value="IN">Indiana</option>
                                    <option value="MI">Michigan</option>
                                    <option value="MT">Montana</option>
                                    <option value="NE">Nebraska</option>
                                    <option value="NC">Carolina</option>
                                    <option value="SD">Dakota</option>
                                    <option value="WA">Washington</option>
                                    <option value="WI">Wisconsin</option>
                                </select>
                            </div>
                            <button className="order-1 w-full md:w-auto md:order-2 border border-red-400 text-sm md:text-base text-center text-red-400 font-bold rounded-xl py-[10px] flex px-4">
                                <Image
                                    src="/icons/bot-solid.png"
                                    alt="robo"
                                    width={20}
                                    height={20}
                                    className='pe-1'
                                />Ask about legality in your state</button>
                        </div>
                    </div>
                    <div className='border-x border-gray-200 p-4 md:px-6 md:py-5'>
                        <div className="flex justify-between md:justify-start md:flex-row items-start md:gap-6">
                            <div className="block space-y-2 md:flex md:flex-row md:gap-4">
                                <div className='text-sm flex items-center gap-1'>
                                    <div className="w-[14px] h-[14px] bg-blue-500 rounded-full"></div>
                                    Legal
                                </div>
                                <div className='text-sm flex items-center gap-1'>
                                    <div className="w-[14px] h-[14px] bg-red-500 rounded-full"></div>
                                    Pending
                                </div>
                                <div className='text-sm flex items-center gap-1'>
                                    <div className="w-[14px] h-[14px] bg-red-100 rounded-full"></div>
                                    Sweepstakes & Social casino
                                </div>
                            </div>
                            <div className='text-sm flex items-start md:items-center gap-3'>
                                <button id="toggleBtn"
                                    className="w-11 h-6 flex items-center bg-red-100 rounded-full p-1 transition-colors duration-300">
                                    <div id="toggleCircle"
                                        className="bg-white w-5 h-5 rounded-full shadow-md transform transition-transform duration-300"></div>
                                </button>
                                Legal only
                            </div>
                        </div>
                    </div>
                    <div className='border border-t-0 border-gray-200 rounded-b-xl px-6 py-8'>
                        <Image
                            src="/image/usa-labels-full 1.png"
                            alt="map.pic"
                            width={200}
                            height={200}
                            className='w-full h-full'
                        />
                    </div>
                </div>
            </div>
        </>
    )
}
