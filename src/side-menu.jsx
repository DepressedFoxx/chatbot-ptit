import React from "react";

const SideMenu = () => {

    const [color, setColor] = React.useState(false)

    const toggle = React.useCallback(() => {
        setColor(!color)
    }, [color])

    return (
        <div className="w-full h-screen border-r-2">
            <menu>
                <section className="h-14 flex items-center border-t-2 bg-[#f7f7f7]">
                    <a href="/chatbot"/>
                    <span className="w-full text-2xl font-bold text-center">
                        Our Bot
                    </span>
                </section>
                <section className="h-16 flex items-center border-t-2">
                    <a href="/chatbot"/>
                    <div className="flex space-x-3 items-center ml-3">
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
                </section>
                <section className="h-16 flex items-center border-t-2">
                    <a href="/subscribe"/>
                    <div className="w-full text-2xl text-center">
                        Subscribe
                    </div>
                </section>
                <section className="h-16 flex-items-center border-t-2">
                    <a href="/setting"/>
                    <div className="w-full text-2xl text-center">
                        Setting
                    </div>
                </section>
            </menu>
        </div>
    )
}

export default React.memo(SideMenu)