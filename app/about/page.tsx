// /app/about/page.tsx
export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white text-black dark:bg-zinc-900 dark:text-white p-6">
      <section className="max-w-2xl mx-auto py-12">
        <h1 className="text-3xl font-bold mb-6">เกี่ยวกับฉัน</h1>

        <p className="mb-6 leading-relaxed">
          สวัสดีครับ! ฉันชื่อ <strong>ธนาดุล เฮียงกัน</strong> และตอนนี้ทำงานเป็น <strong>Full-stack Developer</strong> ฉันหลงรักในการพัฒนาเว็บไซต์และแอปพลิเคชัน ตั้งแต่การสร้าง frontend ที่ดูน่าสนใจ ไปจนถึงการพัฒนา backend ที่มีประสิทธิภาพ
        </p>

        <p className="mb-6 leading-relaxed">
          ด้วยประสบการณ์ในการทำงานหลายโปรเจกต์, ฉันสามารถพัฒนาและจัดการทั้งระบบ frontend และ backend รวมถึงการจัดการฐานข้อมูลและการดีไซน์ UI/UX ได้
        </p>

        <h2 className="text-2xl font-semibold mb-4">ทักษะของฉัน</h2>
        <ul className="list-disc pl-6">
          <li>JavaScript, TypeScript</li>
          <li>React, Next.js</li>
          <li>Node.js, Express</li>
          <li>Database (MySQL, PostgreSQL)</li>
          <li>Flutter for mobile apps</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">ประสบการณ์การทำงาน</h2>
        <ul className="list-decimal pl-6">
          <li>พัฒนาเว็บไซต์ eCommerce ด้วย Next.js และ Node.js</li>
          <li>สร้างแอปมือถือด้วย Flutter และ Firebase</li>
          <li>พัฒนาระบบจัดการภายในบริษัท</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">ดาวน์โหลดเรซูเม่</h2>
        <a href="/resume.pdf" className="text-blue-600 dark:text-blue-400 underline">
          ดาวน์โหลดเรซูเม่ (PDF)
        </a>
      </section>
    </main>
  );
}
