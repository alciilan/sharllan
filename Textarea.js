
export function Textarea({ className = '', ...props }) {
  return (
    <textarea
      {...props}
      className={`border border-gray-300 rounded px-4 py-2 w-full ${className}`}
    />
  );
}
