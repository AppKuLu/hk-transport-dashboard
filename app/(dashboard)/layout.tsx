export default function DashboardLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <div className="min-h-screen bg-slate-950 text-slate-100"><main className="px-6 py-6">{children}</main></div>;
}
