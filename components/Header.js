import Image from "next/image"
import React from 'react'
import {
    SearchIcon,
    UsersIcon,
    UserCircleIcon,
    MenuIcon,
    GlobeAltIcon
} from "@heroicons/react/solid"
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRangePicker } from 'react-date-range';
import { useRouter } from "next/dist/client/router"




function Header({ data }) {
    const router = useRouter();
    const [inputValue, setInputValue] = React.useState("");
    const [startDate, setStartDate] = React.useState(new Date())
    const [endDate, setEndDate] = React.useState(new Date())
    const [noOfGuests, setNoOfGuests] = React.useState(1)
    const selectionRange = {
        startDate: startDate,
        endDate: endDate,
        key: "selection"
    }

    const handleSelect = (ranges) => {
        setStartDate(ranges.selection.startDate)
        setEndDate(ranges.selection.endDate)

    }

    const search = () => {
        router.push({
            pathname: "/search",
            query: {
                location: inputValue,
                startDate: startDate.toISOString(),
                endDate: endDate.toISOString(),
                noOfGuests,
            }
        })
    }



    return (
        <header className="sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md  p-5 md:px-10">
            <div className="relative flex items-center h-10 cursor-pointer">
                <Image
                    onClick={() => router.push("/")}
                    layout="fill"
                    objectFit="contain"
                    objectPosition="left"
                    src='https://assets.stickpng.com/images/580b57fcd9996e24bc43c513.png'
                />
            </div>
            <div className="flex items-center 
            md:border-2 rounded-full py-2 md:shadow-sm">
                <input className='flex-grow outline-none pl-5 bg-transparent
                 text-sm text-gray-600 placeholder-gray-400'
                    type="text"
                    placeholder={ data|| "Start your search"}
                    onChange={(e) => setInputValue(e.target.value)}
                    value={inputValue}
                />
                <SearchIcon className=" hidden md:inline-flex h-8 bg-red-400 
                text-white rounded-full p-2 cursor-pointer md:mx-2" />
            </div>
            <div className="flex space-x-4 items-center justify-end text-gray-500">
                <p className="hidden md:inline cursor-pointer">Become a host</p>
                <GlobeAltIcon className="h-6 cursor-pointer" />
                <div className="flex 
                rounded-full border-2 space-x-2 p-2 ">
                    <MenuIcon className="h-6 cursor-pointer" />
                    <UserCircleIcon className="h-6 cursor-pointer" />
                </div>
            </div>

            {inputValue &&
                <div className="flex flex-col col-span-3 mx-auto mt-5">
                    <DateRangePicker
                        ranges={[selectionRange]}
                        minDate={new Date()}
                        rangeColors={["#FD5B61"]}
                        onChange={handleSelect}

                    />
                    <div className="flex items-center border-b mb-4">
                        <h2 className="text-2xl flex-grow font-semibold ">Number of Guests</h2>
                        <UsersIcon className="h-5" />
                        <input
                            type="number"
                            className="w-12 pl-2 text-lg outline-none text-red-500"
                            value={noOfGuests}
                            onChange={(e) => setNoOfGuests(e.target.value)}
                            min={1}
                        />
                    </div>
                    <div className="flex">
                        <button onClick={() => setInputValue("")} className="flex-grow">Cancel</button>
                        <button onClick={() => search()} className="flex-grow">Search</button>
                    </div>

                </div>}
        </header>
    )
}

export default Header