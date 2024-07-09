import ClientCompo from "@/ClientCompo";
import ClientInsideCompo from "@/ClientInsideCompo";
import ServerCompo from "@/ServerCompo";

export default function Home() {
  return (
    <div>
      <h1>both</h1>
      <ServerCompo />
      <ClientCompo />
      <ClientInsideCompo />
    </div>
  );
}
