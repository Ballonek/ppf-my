import React from 'react'
import TextLoop from "react-text-loop";

class FooterText extends React.Component {
    render () {
        return <div className="footerText">{
            <TextLoop mask={true}>
                <div className="footerTextItem">Na viděnou!</div>
                <div className="footerTextItem">Viszlát!</div>
                <div className="footerTextItem">Näkemiin!</div>
                <div className="footerTextItem">再见了!</div>
                <div className="footerTextItem">¡Hasta pronto!</div>
                <div className="footerTextItem">Auf wiedersehen!</div>
                <div className="footerTextItem">Alavidha namaste!</div>
                <div className="footerTextItem">See you soon!</div>
                <div className="footerTextItem">さようなら!</div>
            </TextLoop>
        }</div>;
    }
}

export default FooterText;