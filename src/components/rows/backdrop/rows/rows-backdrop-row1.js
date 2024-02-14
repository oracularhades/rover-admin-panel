import '../../../global.css';
import "../../../../../styles/global.css";
import './css/rows-backdrop-row1.css';
import Link from 'next/link';

export default function Rows_backdrop_row1(props) {
    let href = "";
    if (props.href) {
        href = props.href;
    }
    return (
        <Link href={href} className='Rows_backdrop_row1'>
            <button onClick={props.onClick} disabled={props.disabled}>
                <div className='Rows_backdrop_row1_left'>
                    {props.icon && typeof props.icon == "string" && <img className='' src={props.icon}/>}
                    {props.icon && typeof props.icon != "string" && props.icon}
                    <div className='Rows_backdrop_row1_left_content'>
                        <p className='Rows_backdrop_row1_left_content_header'>{props.header}</p>
                        <p className='Rows_backdrop_row1_left_content_subtext greyText'>{props.subchildren}</p>
                    </div>
                </div>
                <div className='Rows_backdrop_row1_right'>
                    {props.right}
                    {/* <button>
                        <img src="/icons/pencil_over_line.svg"/>
                    </button>
                    <button>
                        <img src="/icons/trash.svg"/>
                    </button> */}
                </div>
            </button>
        </Link>
    )
}