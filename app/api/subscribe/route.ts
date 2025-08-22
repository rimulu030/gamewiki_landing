import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

export const runtime = 'nodejs';

const isEmail = (s: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(s);

export async function POST(req: NextRequest) {
  try {
    const { email, company } = await req.json();           // company: 蜜罐字段
    if (company) return NextResponse.json({ ok: true });    // 机器人会被吞掉
    if (!email || !isEmail(email)) {
      return NextResponse.json({ ok: false, error: 'Invalid email' }, { status: 400 });
    }

    const supabase = createClient(
      process.env.SUPABASE_URL!,
      process.env.SUPABASE_SERVICE_ROLE_KEY!, // 仅服务器端使用
      { auth: { persistSession: false } }
    );

    const { error } = await supabase.from('subscribers').insert({
      email,
      source: req.headers.get('referer') ?? undefined,
      user_agent: req.headers.get('user-agent') ?? undefined,
    });

    if (error && !String(error.message).includes('duplicate')) {
      return NextResponse.json({ ok: false, error: 'DB error' }, { status: 500 });
    }

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ ok: false, error: 'Server error' }, { status: 500 });
  }
}