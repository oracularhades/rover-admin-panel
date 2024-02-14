import Home1 from "@/components/home/home";
import "./../../../styles/global.css";
import "./../../../styles/flags.css";
import Table1 from "@/components/tables/table1/table1";
import Link from "next/link";
import "./css/users.css";
import { to_table } from "../../global";

export default function Users() {
    let data = [
        {
            "First name": "Josh",
            "Middle name": null,
            "Last name": "Doe",
            "Email": "user@example.com",
            "Last seen": "active now",
            "View details": <Link href="/users/hi">Open</Link>,
        }
    ]

    return (
        <div className="frame_div">
            <Home1 className="home_padding align_items_center">
                <Table1 data={to_table(data)}/>
            </Home1>
        </div>
    )
}