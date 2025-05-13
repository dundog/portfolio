export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white text-black dark:bg-zinc-900 dark:text-white p-6">
      <section className="max-w-2xl mx-auto py-12">
        <h1 className="text-3xl font-bold mb-6">ติดต่อฉัน</h1>

        <p className="mb-6 leading-relaxed">
          สนใจจ้างงานพัฒนาเว็บไซต์ หรืออยากสอบถามข้อมูลเพิ่มเติม สามารถติดต่อผมผ่านช่องทางด้านล่างนี้ได้เลยครับ
        </p>

        <div className="space-y-4">
          <div>
            <h2 className="text-lg font-semibold">📧 อีเมล</h2>
            <a href="mailto:thanadun.ddx@email.com" className="text-blue-600 dark:text-blue-400 underline">
              thanadun.ddx@email.com
            </a>
          </div>
          
        

          <div>
            <h2 className="text-lg font-semibold">📱 ไลน์</h2>
            <p>Line ID: <span className="font-mono">yourlineid</span></p>
          </div>

          <div>
            <h2 className="text-lg font-semibold">📞 เบอร์โทร</h2>
            <p className="text-zinc-700 dark:text-zinc-300">098-216-1866</p>
          </div>

          <div>
            <h2 className="text-lg font-semibold">📷 QR Code</h2>
            <img src="/qr-line.png" alt="QR Code Line" className="w-40 h-40 mt-2 border border-zinc-300 dark:border-zinc-700 rounded" />
          </div>
        </div>
      </section>
    </main>
  );
}
