import { WeatherCard } from "@omnibytes/weather";

const style = {
  background: "rgba(255, 255, 255, 0.22)",
  borderRadius: 16,
  boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
  backdropFilter: "blur(5.9px)",
  padding: 16,
};

export default async function HomePage() {
  return (
    <div className="h-screen w-screen bg-gradient-to-r from-fuchsia-600 to-pink-600 p-12 pl-32 text-xl text-white">
      <div className="w-1/4">
        <div style={style}>
          <WeatherCard />
        </div>
      </div>
    </div>
  );
}
