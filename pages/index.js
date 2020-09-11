import Obfuscate from "react-obfuscate";

export default function Home() {
  return (
    <div className="flex h-screen bg-gray-900 text-white">
      <div className="m-auto w-64 font-serif">
        <img
          src="/logo.png"
          alt="Patrick Alan Studio"
          className="w-64 mb-4"
        ></img>
        <Obfuscate email="info@patrickalanstudio.com" />
      </div>
    </div>
  );
}
