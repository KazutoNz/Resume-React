function SkeletonBlock({ className = '' }) {
  return <div className={`skeleton-shimmer rounded-lg ${className}`} />;
}

function SkeletonText({ lines = 3 }) {
  return (
    <div className="space-y-2">
      {Array.from({ length: lines }).map((_, index) => (
        <SkeletonBlock
          key={index}
          className={`h-4 ${index === lines - 1 ? 'w-2/3' : 'w-full'}`}
        />
      ))}
    </div>
  );
}

export { SkeletonBlock, SkeletonText };
