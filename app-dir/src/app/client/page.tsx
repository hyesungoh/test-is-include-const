import ClientCompo from "@/ClientCompo";
import ClientInsideCompo from "@/ClientInsideCompo";

export default function Client() {
  return <div>
    <h1>only client</h1>
    <ClientCompo />
    <ClientInsideCompo />
  </div>
}