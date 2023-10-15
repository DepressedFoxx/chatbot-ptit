import React from "react";
import Micro from './assets/mic.svg';
import Send from './assets/next.svg';
import File from './assets/attach-file.svg';
import Share from './assets/share.svg';

import { io } from 'socket.io-client';

// import Widget from 'rasa-webchat';

const Chat = () => {

    const [data, setData] = React.useState([])
    
    const [message, setMessage] = React.useState("")

    const messageRef = React.useRef(null)

    const containerRef = React.useRef(null)

    const socket = io("/mysocket.io")

    socket.on("connect", () => {
        console.log('hahahaha')
    })

    const submit = React.useCallback((event) => {
        if(event.target.value.includes("\n")) {
            const mess = event.target.value.replace("\n","")
            if(mess.length > 0) {
                setData((oldState) => {
                    return [...oldState,{message: mess, pos: "right"}]
                })
                setMessage("")
                socket.emit("send-message", mess)
            }
        } else {
            setMessage(event.target.value)
            socket.emit("send-message", event.target.value)
        }
    }, [data, setData, message])

    const submitbtn = React.useCallback(() => {
        if(message.length > 0)
        {
            setData((oldState) => {
                return [...oldState,{message: message, pos: "right"}]
            })
            setMessage("")
            messageRef.current.focus()
        }
    }, [data, message])

    React.useEffect(() => {
        if(containerRef.current) {
            containerRef.current.scrollTop = containerRef.current.scrollHeight
        }
    }, [data, message, containerRef])

    const press = (event) => {
        console.log(event);
    }

    return (
        <>
            {/* <Widget
                initPayload={"/get_started"}
                socketUrl={"http://localhost:5173"}
                socketPath={"/mysocket.io/"}
                customData={{"language": "vn"}} // arbitrary custom data. Stay minimal as this will be added to the socket
                title={"Title"}
            /> */}
            <div className="h-full">
                <div className="h-14 bg-[#f7f7f7] border-t-2 flex items-center pl-3 justify-between pr-3">
                    <div className="flex space-x-3 items-center">
                        <img    
                            src="https://slink.ptit.edu.vn/favicon.ico" 
                            alt="" 
                            className="h-10 w-10"
                        />
                        <div className="flex flex-col">
                            <span className="font-bold">New Chat</span>
                            <span>Our Bot</span>
                        </div>
                    </div>
                    <button className="flex border-2 rounded-[40px] w-20 h-8 space-x-1 items-center justify-center">
                        <img src={Share} alt="" className="w-[20px] h-[20px]"/>
                        <span>Share</span>
                    </button>
                </div>
                <div ref={containerRef} className="h-[82vh] border-t-2 overflow-y-scroll flex flex-col items-center">
                    <div className="max-w-3/4 w-3/4">
                        <div className="w-full h-36 border rounded-lg bg-slate-100 mt-6 flex flex-col pl-6 space-y-1 pt-4">
                            <div className="flex space-x-4 items-center">
                                <img 
                                    src="https://slink.ptit.edu.vn/favicon.ico" 
                                    alt="" 
                                    className="h-20 w-20"
                                />
                                <div className="flex flex-col">
                                    <span className="text-2xl font-bold">Our Bot</span>
                                    <span>Operated by nhom 5</span>
                                </div>
                            </div>
                            <div className="text-2xl font-bold">Tư vấn tuyển sinh PTIT</div>
                        </div>
                    </div>

                    <div className="w-3/4 mb-2">
                        {data.map((mess,index) => {
                            if(mess.pos == "right") {
                                return (
                                    <div key={index} className="w-full flex justify-end">
                                        <p style={{ wordBreak: "break-all" }} className="max-w-md w-fit border rounded-lg bg-[#3b3abe] text-white px-3 py-1 mt-3">{mess.message}</p>
                                    </div>
                                )
                            } else {
                                return (
                                    <div key={index} className="w-full flex flex-col pt-3 space-y-1">
                                        <div className="flex items-end space-x-2 font-bold">
                                            <img 
                                                src="https://code.ptit.edu.vn/2020/images/logo_ptit.png" 
                                                alt="" 
                                                className="border rounded-[100%] h-6 w-6"
                                            />
                                            <span>Our Bot</span>
                                        </div>
                                        <div className="w-fit border rounded-lg bg-[#f7f7f7] px-3 py-1">{mess.message}</div>
                                    </div>
                                )
                            }
                        })}
                    </div>

                </div>
                <div className="border-t-2 flex justify-around">
                    <div className="border-2 border-slate-300 w-[40rem] h-[3rem] rounded-[40px] mt-3 flex space-x-4 items-center pl-4">
                        <div className="w-3/4 h-full flex items-center">
                            <textarea onKeyDown={press} ref={messageRef} value={message} onChange={submit} rows={1} cols={30} style={{ resize: "none", overflow: "hidden", whiteSpace: "nowrap" }} className="none w-full h-[2.5rem] pl-3 align-middle leading-[2.5rem] focus: outline-none" placeholder="Talk to our bot"></textarea>
                        </div>
                        <button className="pl-4">
                            <img src={File} alt="" className="w-[25px] h-[25px]"/>
                        </button>
                        <button>
                            <img src={Micro} alt="" className="w-[25px] h-[25px]"/>
                        </button>
                        <button onClick={submitbtn} className="bg-blue-400 w-[45px] h-[45px] border rounded-full">
                            <img src={Send} alt="" className="w-[25px] h-[25px] transform translate-x-2.5"/>
                        </button>
                    </div>
                    {/* <input className="border border-2 border-slate-300 rounded-[40px] w-[40rem] h-[3rem] mt-3 pl-3" placeholder="Talk to our bot"/> */}
                </div>
            </div>
        </>
    )
}

export default React.memo(Chat)