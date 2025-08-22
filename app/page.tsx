import Link from "next/link";
// 引入图标
import { Download, Github, BookText, ArrowRight, Mail } from "lucide-react";
import NewsletterForm from "./components/NewsletterForm";

// 功能特性列表，这次我们为每个特性加上了图标
const features = [
  {
    title: "Pin‑top browser",
    desc: "Floats above the game so you can open wikis and guides without breaking your flow.",
  },
  {
    title: "Game‑native knowledge base",
    desc: "RAG retrieval and custom indexes to answer questions that go beyond the wiki.",
  },
  {
    title: "One‑click setup",
    desc: ".exe app that just works. More games and languages are coming soon.",
  },
];

export default function Home() {
  return (
    <main className="flex flex-col items-center px-4">
      {/* Hero Section */}
      <section className="w-full max-w-5xl text-center py-24 sm:py-32 pb-8 md:pb-12">
        <div className="flex flex-col items-center gap-6">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter">
            GameWiki
            <span className="block text-transparent bg-clip-text
              bg-gradient-to-r from-cyan-300 via-emerald-300 to-blue-400
              text-3xl md:text-4xl font-medium tracking-tight mt-3
              drop-shadow-[0_1px_1px_rgba(0,0,0,0.45)]">
              The AI assistant over your game
            </span>
          </h1>
          <p className="max-w-2xl text-lg text-muted-foreground">
            Browse wikis, understand videos, and get answers to tricky mechanics —
            less Alt‑Tab, more progress. Open source and free.
          </p>
          {/* 按钮组 */}
          <div className="flex flex-wrap items-center justify-center gap-4 mt-4">
            <Link
              href="https://github.com/rimulu030/gamewiki/releases/download/v1.0.0/GameWikiAssistant.zip"
              className="inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3 bg-primary text-primary-foreground font-semibold shadow-lg hover:bg-primary/90 transition-all duration-200"
              target="_blank"
              rel="noreferrer"
            >
              <Download className="w-5 h-5" />
              Download Latest
            </Link>
            <Link
              href="https://github.com/rimulu030/gamewiki"
              className="inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3 bg-secondary text-secondary-foreground font-medium hover:bg-secondary/80 transition-all duration-200"
              target="_blank"
              rel="noreferrer"
            >
              <Github className="w-5 h-5" />
              Star on GitHub
            </Link>
            <Link
              href="https://github.com/rimulu030/gamewiki#readme"
              className="inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3 bg-secondary text-secondary-foreground font-medium hover:bg-secondary/80 transition-all duration-200"
              target="_blank"
              rel="noreferrer"
            >
              <BookText className="w-5 h-5" />
              Quickstart Docs
            </Link>
          </div>
          {/* Join Discord（放在 CTA 按钮下面） */}
          <div className="mt-3">
            <a
              href="https://discord.gg/WdZVcnQ2"  // TODO: 换成你的邀请链接
              target="_blank"
              rel="noreferrer"
              aria-label="Join our Discord"
              className="inline-flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-medium
                        bg-[#5865F2] text-white hover:bg-[#4752C4]
                        focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40
                        shadow-sm"
            >
              {/* Discord 图标（内联 SVG） */}
              <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4" fill="currentColor">
                <path d="M20.317 4.369a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.211.375-.444.864-.608 1.249c-1.845-.276-3.68-.276-5.486 0c-.164-.397-.405-.874-.617-1.249a.077.077 0 0 0-.079-.037a19.736 19.736 0 0 0-4.892 1.999a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.056c2.052 1.506 4.03 2.422 5.992 3.029a.077.077 0 0 0 .084-.027c.461-.63.873-1.295 1.226-1.994a.076.076 0 0 0-.041-.105c-.652-.247-1.276-.548-1.872-.892a.077.077 0 0 1-.007-.127c.125-.094.25-.192.368-.291a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.061 0a.074.074 0 0 1 .078.01c.119.099.243.197.368.291a.077.077 0 0 1-.006.127c-.596.344-1.241.645-1.873.891a.076.076 0 0 0-.04.106c.36.699.772 1.364 1.225 1.993a.076.076 0 0 0 .084.028c1.963-.607 3.941-1.523 5.993-3.03a.082.082 0 0 0 .031-.055c.5-5.177-.838-9.673-3.548-13.66a.06.06 0 0 0-.031-.028zM8.02 15.331c-1.182 0-2.157-1.086-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.213 0 2.178 1.096 2.157 2.419c0 1.333-.955 2.419-2.157 2.419zm7.95 0c-1.182 0-2.157-1.086-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.213 0 2.178 1.096 2.157 2.419c0 1.333-.944 2.419-2.157 2.419z"/>
              </svg>
              Join Discord
            </a>
          </div>
          {/* Demo 视频 */}
          <div className="mt-8 md:mt-10 w-full max-w-4xl">
            <div className="rounded-2xl overflow-hidden border-2 border-border bg-secondary shadow-2xl shadow-primary/10">
              {/* 建议使用 <video> 替换 <img> 以获得更好的性能和体验 */}
              <video
                src="/demo1.mp4"
                autoPlay muted loop playsInline
                className="w-full h-auto"
              />
            </div>
            <p className="text-center text-xl text-muted-foreground mt-3">Use as AI assistant</p>
          </div>
          <div className="mt-8 md:mt-10 w-full max-w-4xl">
            <div className="rounded-2xl overflow-hidden border-2 border-border bg-secondary shadow-2xl shadow-primary/10">
              {/* 建议使用 <video> 替换 <img> 以获得更好的性能和体验 */}
              <video
                src="/demo3.mp4"
                autoPlay muted loop playsInline
                className="w-full h-auto"
              />
            </div>
            <p className="text-center text-xl text-muted-foreground mt-3">Quick access to Wikis</p>
          </div>
          <div className="mt-6 md:mt-8 w-full max-w-4xl">
            <div className="rounded-2xl overflow-hidden border-2 border-border bg-secondary shadow-2xl shadow-primary/10">
              {/* 建议使用 <video> 替换 <img> 以获得更好的性能和体验 */}
              <video
                src="/demo2.mp4"
                autoPlay muted loop playsInline
                className="w-full h-auto"
              />
            </div>
            <p className="text-center text-xl text-muted-foreground mt-3">Quick access to webs</p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="w-full max-w-5xl pt-6 md:pt-8 pb-16 sm:pb-24">
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((f) => (
            <div
              key={f.title}
              className="rounded-2xl border border-border p-6 bg-secondary/50 transition-all duration-300 hover:border-primary/50 hover:bg-secondary"
            >
              <h3 className="text-xl font-semibold mb-2 text-foreground">{f.title}</h3>
              <p className="text-muted-foreground">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Contribute Section */}
      <section className="w-full max-w-5xl pb-24 sm:pb-32">
        <div className="rounded-2xl border border-border p-8 md:p-12 bg-gradient-to-br from-secondary to-secondary/50 relative overflow-hidden">
           <div className="absolute -right-10 -top-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl"></div>
           <div className="absolute -left-10 -bottom-10 w-40 h-40 bg-red-400/10 rounded-full blur-3xl"></div>
          <h4 className="text-3xl font-bold mb-3 text-center">Want to contribute?</h4>
          <p className="text-muted-foreground text-center max-w-xl mx-auto">
            Issues, PRs, game adapters, and knowledge-base building are all welcome.
            The more stars we get, the faster new games ship.
          </p>
          <div className="mt-8 flex justify-center">
            <Link
              href="https://github.com/rimulu030/gamewiki"
              className="inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3 bg-primary text-primary-foreground font-semibold shadow-lg hover:bg-primary/90 transition-all duration-200"
              target="_blank"
              rel="noreferrer"
            >
              Go to the Repo <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="w-full max-w-5xl pb-24 sm:pb-32 pt-2 md:pt-3">
        <div className="rounded-2xl border border-border p-6 md:p-8 bg-gradient-to-br from-secondary to-secondary/50 relative overflow-hidden">
          <div className="absolute -right-10 -top-10 w-40 h-40 bg-cyan-400/10 rounded-full blur-3xl"></div>
          <div className="absolute -left-10 -bottom-10 w-40 h-40 bg-emerald-400/10 rounded-full blur-3xl"></div>
          <div className="mx-4 md:mx-8 flex flex-col gap-4">
            {/* 第一行：标题和描述 */}
            <div className="flex flex-col md:flex-row md:items-center gap-1 md:gap-8">
              <div className="flex items-center gap-3 ml-4 md:ml-8">
                <Mail className="w-6 h-6 text-white/70" />
                <h4 className="text-xl font-bold">Stay Updated</h4>
              </div>
              <p className="text-muted-foreground text-sm flex-1">
                Get notified about new features and updates. No spam, unsubscribe anytime.
              </p>
            </div>
            {/* 第二行：表单，与图标对齐 */}
            <div className="ml-9 md:ml-9">
              <NewsletterForm />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full max-w-5xl border-t border-border py-8">
        <div className="text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} GameWiki. Open Source.
        </div>
      </footer>
    </main>
  );
}
