export default function Home() {
  return (
    <main className="min-h-screen bg-white text-black dark:bg-zinc-900 dark:text-white p-6">
      <section className="max-w-2xl mx-auto py-12">
        <h1 className="text-4xl font-bold mb-4">ธนาดุล เฮียงกัน</h1>
        <h2 className="text-xl text-zinc-600 dark:text-zinc-300 mb-8">
          Fullstack Developer | รับงานฟรีแลนซ์พัฒนาเว็บไซต์และระบบ
        </h2>
        <p className="mb-6 leading-relaxed">
          ผมเป็นนักพัฒนาสาย Fullstack ที่มีความรักในการสร้างเว็บไซต์และแอปพลิเคชัน
          เชี่ยวชาญทั้งฝั่ง Frontend และ Backend โดยใช้เทคโนโลยีอย่าง Next.js, React, Prisma และ Tailwind CSS
          พร้อมรับงานโปรเจกต์พัฒนาเว็บไซต์ ระบบ POS หรือระบบจองออนไลน์
        </p>

        <a
          href="mailto:your@email.com?subject=สนใจจ้างงานพัฒนาเว็บไซต์"
          className="inline-block mb-8 px-5 py-3 bg-black text-white dark:bg-white dark:text-black rounded-lg hover:bg-zinc-800 dark:hover:bg-zinc-100 transition"
        >
          📩 ติดต่อจ้างงาน
        </a>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <a href="/projects" className="rounded-xl border border-zinc-300 dark:border-zinc-700 p-4 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition">
            <h3 className="text-lg font-semibold">ดูผลงาน</h3>
            <p className="text-sm text-zinc-500 dark:text-zinc-400">รวมโปรเจกต์ที่เคยทำ</p>
          </a>

          <a href="/about" className="rounded-xl border border-zinc-300 dark:border-zinc-700 p-4 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition">
            <h3 className="text-lg font-semibold">เกี่ยวกับฉัน</h3>
            <p className="text-sm text-zinc-500 dark:text-zinc-400">เส้นทางและแนวคิดการทำงาน</p>
          </a>

          <a href="/contact" className="rounded-xl border border-zinc-300 dark:border-zinc-700 p-4 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition">
            <h3 className="text-lg font-semibold">ติดต่อ</h3>
            <p className="text-sm text-zinc-500 dark:text-zinc-400">ส่งข้อความหรือจ้างงานโดยตรง</p>
          </a>
        </div>
      </section>
      
    </main>
  );
}