import React from "react";
import Setting from './assets/setting.svg';
import Subscriber from './assets/subscriber.svg';

const SideMenu = () => {

    const [color, setColor] = React.useState(false)

    const toggle = React.useCallback(() => {
        setColor(!color)
    }, [color])

    return (
        <div className="w-full h-screen border-r-2">
            <menu>
                <section className="h-14 flex items-center border-t-2 bg-[#f7f7f7]">
                    {/* <a href="/chatbot"/> */}
                    <span className="w-full text-2xl font-bold text-center">
                        Our Bot
                    </span>
                </section>
                <section className="h-28 flex justify-center items-center border-t-2 space-x-4">
                    {/* <a href="/chatbot"/> */}
                    <div className="flex flex-col justify-center space-y-2 w-2/5 h-4/5 border rounded-lg bg-[#f7f7f7]">
                        <img src={Setting} alt="" className="w-8 h-8 ml-2"/>
                        <div className="flex justify-between mx-2">
                            <div className="font-[500]">Explore</div>
                            <div className="font-[500]">{`>`}</div>
                        </div>
                    </div>
                    <div className="flex flex-col justify-center space-y-2 w-2/5 h-4/5 border rounded-lg bg-[#f7f7f7]">
                        <img src={Setting} alt="" className="w-8 h-8 ml-2"/>
                        <div className="flex justify-between mx-2">
                            <div className="font-[500]">New Chat</div>
                            <div className="font-[500]">{`>`}</div>
                        </div>
                    </div>
                </section>
                <section className="h-16 flex items-center border-t-2">
                    {/* <a href="/chatbot"/> */}
                    <div className="flex w-full space-x-3 items-center ml-3">
                        <img    
                            src="https://slink.ptit.edu.vn/favicon.ico" 
                            alt="" 
                            className="h-10 w-10"
                        />
                        <div className="flex flex-col w-full">
                            <div className="flex w-full">
                                <span className="font-bold">New Chat</span>
                                <span className="flex transform translate-x-56" style={{ color: "#5d6565" }}>{`>`}</span>
                            </div>
                            <span>Our Bot</span>
                        </div>
                    </div>
                </section>
                <section className="h-16 flex items-center border-t-2 cursor-pointer hover:bg-[#f7f7f7]">
                    {/* <a href="/subscribe"/> */}
                    <div className="flex w-full text-2xl text-center space-x-4 ml-3">
                        <img src={Subscriber} alt="" className="w-10 h-10"/>
                        <span className="">Subscribe</span>
                    </div>
                </section>
                <section className="h-16 flex-items-center border-t-2 pt-4 cursor-pointer hover:bg-[#f7f7f7]">
                    {/* <a href="/setting"/> */}
                    <div className="flex w-full text-2xl text-center space-x-5 ml-4">
                        <img src={Setting} alt="" className="w-8 h-8"/>
                        <span>Setting</span>
                    </div>
                </section>
                <section className="h-16 flex-items-center border-t-8 pt-4 cursor-pointer hover:bg-[#f7f7f7]">
                    <div className="flex w-full text-2xl text-center space-x-5 ml-4">
                        <img src={Setting} alt="" className="w-8 h-8"/>
                        <span>Send Feedback</span>
                    </div>
                </section>
                <section className="h-16 flex-items-center border-t-2 pt-4 cursor-pointer hover:bg-[#f7f7f7]">
                    <div className="">
                        
                    </div>
                </section>
            </menu>
        </div>
    )
}

export default React.memo(SideMenu)