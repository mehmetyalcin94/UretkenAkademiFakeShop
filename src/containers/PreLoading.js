import "./PreLoading.css";

export default function Preloading() {
  return (
    <div className="spinner">
      <span>Loading...</span>
      <div className="half-spinner"></div>
    </div>
  );
}
