import WhatsappLogo from '../components/logos/WhatsappLogo';
import { Btn } from '../components/index';

const WhatsappBtn = () => {
    return (
        <Btn logo={<WhatsappLogo color="#7B4AE2"/>} text="let's talk" toLink={"https://wa.me/+201281441143"}/>
    )
}

export default WhatsappBtn