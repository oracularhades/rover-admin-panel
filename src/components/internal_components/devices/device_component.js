import Link from 'next/link';
import './css/device_component.css';

export default function Device_Component(props) {
    const Right_Button = ((props) => {
        return (
            <Link href={props.href}><button className='right_button'>
                <img src={props.icon}/>
            </button></Link>
        )
    });

    return (
        <div className='device_component secondary_element'>
            <button className='device_component_left'>
                <img className='device_component_icon' src="/icons/computer.svg"/>
                <div className='device_component_metadata'>
                    <p className='device_component_metadata_alias'>Josh's Macbook Pro</p>
                    <p className='device_component_metadata_device_type'>Macbook • Joined 14/02/2024 • employee_1@example.com</p>
                </div>
            </button>

            {props.hide_right_buttons != true && <div className='device_component_right'>
                <Right_Button href="/device/placeholder" icon="/icons/device_logs.svg"/>
                <Right_Button href="/device/placeholder" icon="/icons/pencil_border.svg"/>
                <Right_Button icon="/icons/trash.svg"/>
            </div>}
        </div>
    )
}