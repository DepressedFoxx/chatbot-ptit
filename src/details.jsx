import React from "react";

const Details = () => {
    return (
        <div className="h-full border-l-2">
            <div className="h-14 bg-[#f7f7f7] flex items-center border-t-2">
                <span className="w-full text-2xl font-bold text-center">
                    Bot details
                </span>
            </div>
            <div className="border-t-2 flex flex-col space-y-4 justify-center items-center">
                <div className="h-30 flex mt-4 space-x-4">
                    <img 
                        src="https://slink.ptit.edu.vn/favicon.ico" 
                        alt="null"
                        className="h-20 w-20"
                    />
                    <div className="flex flex-col w-full justify-center">
                        <span className="font-bold">Our Bot</span>
                        <span>Operated by Nhom 5</span>
                    </div>
                </div>
                <div className="text-2xl font-bold border-t-2 border-black">Tư vấn tuyển sinh PTIT</div>
            </div>
        </div>
    )
}

export default React.memo(Details);