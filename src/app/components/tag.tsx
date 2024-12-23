export default function Tag({ children }: { children: string }) {
  return (
    <div className="p-1 pt-0 pb-0 border-slate-400 border-solid border rounded">
      <p className="text-sm font-light antialiased">{children}</p>
    </div>
  );
}
