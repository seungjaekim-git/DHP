export default function LoadingSpinner() {
  return (
    <div className="flex items-center justify-center w-full h-[300px]">
      <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-primary"></div>
    </div>
  );
} 