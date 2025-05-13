// /app/projects/page.tsx
export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-white text-black dark:bg-zinc-900 dark:text-white p-6">
      <section className="max-w-6xl mx-auto py-12">
        <h1 className="text-3xl font-bold mb-6">ผลงานของฉัน</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* ตัวอย่างผลงาน */}
          <div className="bg-white shadow-lg rounded-lg p-6 dark:bg-zinc-800">
            <h2 className="text-xl font-semibold">โปรเจกต์ที่ 1</h2>
            <p className="mt-4">คำอธิบายโปรเจกต์</p>
            <a href="https://github.com/dundog/portfolio-starter-kit" target="_blank" className="text-blue-600 dark:text-blue-400 mt-4 inline-block">ดูโปรเจกต์</a>
          </div>
          {/* เพิ่มการ์ดผลงานต่อไป */}
        </div>
      </section>
    </main>
  );
}
