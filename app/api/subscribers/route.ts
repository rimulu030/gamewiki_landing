import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

export const runtime = 'nodejs';

export async function GET(req: NextRequest) {
  // 简单鉴权：需要携带 Bearer 管理员令牌
  const token = req.headers.get('authorization');
  if (token !== `Bearer ${process.env.ADMIN_TOKEN}`) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const supabase = createClient(
    process.env.SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!,
    { auth: { persistSession: false } }
  );

  const { data, error } = await supabase
    .from('subscribers')
    .select('email,created_at')
    .order('created_at', { ascending: false });

  if (error) return NextResponse.json({ error: 'DB error' }, { status: 500 });

  // 返回 CSV（也可改成 JSON）
  const csv = ['email,created_at', ...data.map(r => `${r.email},${new Date(r.created_at).toISOString()}`)].join('\n');
  return new NextResponse(csv, {
    headers: {
      'Content-Type': 'text/csv; charset=utf-8',
      'Content-Disposition': 'attachment; filename="subscribers.csv"',
    },
  });
}