import WhatsappLogo from '../components/logos/WhatsappLogo';
import { Btn } from '../components/index';
import { sendWhatsappMsg } from '../assets/constants';

const WhatsappBtn = () => {
    return (
        <Btn logo={<WhatsappLogo/>} text="let's talk" toLink={sendWhatsappMsg}/>
    )
}

export default WhatsappBtn