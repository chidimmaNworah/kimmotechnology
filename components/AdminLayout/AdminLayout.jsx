import AdminNavbar from "@/components/AdminNavbar/AdminNavbar";
import useAuth from "@/middleware/auth";

export default function AdminLayout({ children }) {
  const loading = useAuth();

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#060B18]">
        <div className="flex flex-col items-center gap-3">
          <div className="w-8 h-8 border-2 border-[#1E293B] border-t-[#22D3EE] rounded-full animate-spin" />
          <span className="text-sm text-[#64748B] font-['Outfit']">
            Loading admin...
          </span>
        </div>
      </div>
    );
  }

  return (
    <>
      <AdminNavbar />
      <main className="min-h-screen bg-[#060B18] w-full overflow-x-hidden">{children}</main>
    </>
  );
}
