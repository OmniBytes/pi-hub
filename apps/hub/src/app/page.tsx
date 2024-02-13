import { WeatherCard } from "@omnibytes/weather";

const style = {
  background: "rgba(255, 255, 255, 0.22)",
  borderRadius: 16,
  boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
  backdropFilter: "blur(5.9px)",
  padding: 24,
};

export default async function HomePage() {
  return (
    <div className="flex">
      <div className="flex w-32 flex-col items-center p-4">hub</div>
      <div className="h-screen w-screen rounded-l-xl bg-gradient-to-r from-fuchsia-600 to-pink-600 p-12 text-xl text-white">
        <div className="m-2 w-fit">
          <div style={style}>
            <WeatherCard />
          </div>
        </div>
      </div>
    </div>
  );
}
