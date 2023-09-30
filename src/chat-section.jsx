import React from "react";

const Chat = () => {
    return (
        <div className="h-full">
            <div className="h-14 bg-[#f7f7f7] border-t-2 flex items-center pl-3 justify-between pr-3">
                <div className="flex space-x-3 items-center">
                    <img    
                        src="https://qph.fs.quoracdn.net/main-thumb-pb-1114627-200-hpyevtkykxctadokzojeabstnwcxqmeu.jpeg" 
                        alt="" 
                        className="border rounded-[100%] h-10 w-10"
                    />
                    <div className="flex flex-col">
                        <span className="font-bold">New Chat</span>
                        <span>Our Bot</span>
                    </div>
                </div>
                <button className="border-2 rounded-[40px] w-20 h-8">Share</button>
            </div>
            <div className="h-[82vh] border-t-2 overflow-y-scroll flex flex-col items-center">
                <div className="max-w-3/4 w-3/4">
                    <div className="w-full h-36 border rounded-lg bg-slate-100 mt-6 flex flex-col pl-6 space-y-1 pt-4">
                        <div className="flex space-x-4 items-center">
                            <img 
                                src="https://qph.fs.quoracdn.net/main-thumb-pb-1114627-200-hpyevtkykxctadokzojeabstnwcxqmeu.jpeg" 
                                alt="" 
                                className="border rounded-[100%] h-20 w-20"
                            />
                            <div className="flex flex-col">
                                <span className="text-2xl font-bold">Our Bot</span>
                                <span>Operated by nhom 5</span>
                            </div>
                        </div>
                        <div className="text-2xl font-bold">Tư vấn tuyển sinh PTIT</div>
                    </div>
                </div>

                <div className="w-3/4">
                    <div className="w-full flex flex-col pt-3 space-y-1">
                        <div className="flex items-end space-x-2 font-bold">
                            <img 
                                src="https://qph.fs.quoracdn.net/main-thumb-pb-1114627-200-hpyevtkykxctadokzojeabstnwcxqmeu.jpeg" 
                                alt="" 
                                className="border rounded-[100%] h-6 w-6"
                            />
                            <span>Our Bot</span>
                        </div>
                        <div className="w-fit border rounded-lg bg-[#f7f7f7] px-3 py-1">How can I help you today?</div>
                    </div>
                    <div className="w-full flex justify-end">
                        <div className="w-fit border rounded-lg bg-[#3b3abe] text-white px-3 py-1 mt-3">hello</div>
                    </div>
                </div>

            </div>
            <div className="border-t-2 flex justify-around">
                <div className="border-2 border-slate-300 w-[40rem] h-[3rem] rounded-[40px] mt-3 flex space-x-4 items-center pl-4">
                    <div className="w-3/4 h-full flex items-center">
                        <textarea name="" id="" cols="30" rows="1" style={{ resize: "none" }} className="none w-full h-[2.5rem] pl-3 align-middle leading-[2.5rem] focus: outline-none" placeholder="Talk to our bot"></textarea>
                    </div>
                    <button>
                        file
                    </button>
                    <button>
                        audio
                    </button>
                    <button className="bg-blue-400 w-[45px] h-[45px] border rounded-full">
                        send
                    </button>
                </div>
                {/* <input className="border border-2 border-slate-300 rounded-[40px] w-[40rem] h-[3rem] mt-3 pl-3" placeholder="Talk to our bot"/> */}
            </div>
        </div>
    )
}

export default React.memo(Chat)