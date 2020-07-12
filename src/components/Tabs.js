import React, { useState } from "react";
const Tabs = (props) => {
    const { content } = props
    console.log(content);

    const [text, setText] = useState({ text: "" })

    const handleClick = (event) => {
        setText({ text: content[event.target.value].text });
    }

    return (
        <>
            <nav>
                {content.map((item, idx) => {
                    return (<button onClick={handleClick} value={idx} key={idx}>Tab {idx + 1}</button>)
                })}
            </nav>
            <section>
                <h1>{text.text}</h1>
            </section>
        </>
    )
}

export default Tabs;