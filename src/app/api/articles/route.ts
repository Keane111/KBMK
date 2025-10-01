import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;
const supabase = createClient(supabaseUrl, supabaseKey);

// ✅ Ambil semua artikel
export async function GET() {
  const { data, error } = await supabase
    .from("articles")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json(data, { status: 200 });
}

// ✅ Tambah artikel baru
export async function POST(req: Request) {
  const body = await req.json();
  const { title, content, category, author, image_url } = body;

  if (!title || !content || !category || !author) {
    return NextResponse.json(
      { error: "Semua field wajib diisi." },
      { status: 400 }
    );
  }

  const { data, error } = await supabase.from("articles").insert([
    {
      title,
      content,
      category,
      author,
      image_url,
    },
  ]);

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json(
    { message: "✅ Artikel berhasil ditambahkan", data },
    { status: 201 }
  );
}

// ✅ Hapus artikel berdasarkan ID
export async function DELETE(req: Request) {
  const { id } = await req.json();

  if (!id) {
    return NextResponse.json({ error: "ID artikel wajib disertakan." }, { status: 400 });
  }

  const { error } = await supabase.from("articles").delete().eq("id", id);

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json(
    { message: "🗑️ Artikel berhasil dihapus." },
    { status: 200 }
  );
}
