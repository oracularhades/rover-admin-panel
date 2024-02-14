import './css/backup-or-restore.css';
import './css/settings.css';
import Home1 from "@/components/home/home";
import Backdrop_content from "@/components/rows/backdrop/backdrop_content";
import Rows_backdrop_row1 from "@/components/rows/backdrop/rows/rows-backdrop-row1";

export default function Settings() {
    return (
        <div className="frame_div">
            <Home1 className="home_padding backup_or_restore">
                <Backdrop_content style={{ maxWidth: 600 }}>
                    <Rows_backdrop_row1 icon="/icons/cloud_download.svg" header="Backup"/>
                    <p className='this_downloads_a_sql_backup greyText'>This downloads an SQL backup of all your Rover SQL databases. Each Rover section is a unique SQL DB. This backup includes every thing you can modify in the dashboard, including policies, is included in this back-up.</p>
                </Backdrop_content>

                <Backdrop_content style={{ maxWidth: 600 }}>
                    <Rows_backdrop_row1 icon="/icons/cloud_upload.svg" header="Restore"/>
                    <button>Start Restore</button>
                </Backdrop_content>
            </Home1>
        </div>
    )
}