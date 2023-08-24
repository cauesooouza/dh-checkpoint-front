export default function Cards({ nome, cor }) {
  return (
    <div
      className="flex flex-col rounded-md justify-end w-96 h-48 p-6 border-4 border-white/20"
      style={{ backgroundColor: cor }}
    >
      <div className="font-normal text-white text-xl">{nome}</div>
      <div className="font-extrabold text-white text-4xl uppercase">{cor}</div>
    </div>
  );
}
