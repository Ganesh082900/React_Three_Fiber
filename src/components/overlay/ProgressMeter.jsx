export default function ProgressMeter({ progress }) {
  const percent = Math.round(progress * 100);
  return (
    <>
      <div className="meter"><div style={{ height: `${percent}%` }} /></div>
      <div className="pct">{percent}%</div>
    </>
  );
}