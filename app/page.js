import '../styles/global.css';
import { redirect } from 'next/navigation';

export default function Main() {
  redirect("/home");
  
  return (
    <div style={{ width: "100%", height: "100vh", overflow: "hidden", alignItems: "center", justifyContent: "center" }}>
    </div>
  )
}
