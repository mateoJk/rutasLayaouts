export default function StarRating({ rating }) {
  const roundedRating = Math.round(rating || 0);

  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((s) => (
        <span 
          key={s} 
          className={s <= roundedRating ? "text-yellow-400" : "text-gray-600"}
        >
          ★
        </span>
      ))}
    </div>
  );
}