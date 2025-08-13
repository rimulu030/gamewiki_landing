import Link from "next/link";
// 引入图标
import { Download, Github, BookText, ArrowRight } from "lucide-react";

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
      <section className="w-full max-w-5xl text-center py-24 sm:py-32">
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
              href="https://github.com/rimulu030/gamewiki/releases/download/v1.0.0/GameWikiAssistant_Portable_onedir.zip"
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
          {/* Demo 视频 */}
          <div className="mt-12 w-full max-w-4xl rounded-2xl overflow-hidden border-2 border-border bg-secondary shadow-2xl shadow-primary/10">
            {/* 建议使用 <video> 替换 <img> 以获得更好的性能和体验 */}
            <img
              src="/demo.gif"
              alt="GameWiki demo"
              className="block w-full h-auto"
              loading="eager" decoding="async"
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="w-full max-w-5xl py-16 sm:py-24">
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

      {/* Footer */}
      <footer className="w-full max-w-5xl border-t border-border py-8">
        <div className="text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} GameWiki. Open Source.
        </div>
      </footer>
    </main>
  );
}
