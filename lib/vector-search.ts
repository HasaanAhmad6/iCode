import { getSupabaseAdminClient } from "@/lib/supabase";

export type KnowledgeChunk = {
  id: string;
  source_type?: string | null;
  title?: string | null;
  slug?: string | null;
  url?: string | null;
  content?: string | null;
  summary?: string | null;
  similarity?: number | null;
};

export type KnowledgeDocument = {
  sourceId: string;
  sourceType: string;
  title: string;
  slug?: string;
  url?: string;
  content: string;
  summary?: string;
  metadata?: Record<string, unknown>;
};

export type KnowledgeChunkRecord = KnowledgeDocument & {
  id: string;
  chunkIndex: number;
  chunkText: string;
  embedding: number[];
};

export async function searchKnowledgeChunks(queryEmbedding: number[], limit = 5) {
  const supabase = getSupabaseAdminClient() as any;
  const { data, error } = await supabase.rpc("match_knowledge_chunks", {
    query_embedding: queryEmbedding,
    match_count: limit,
    min_similarity: 0.72,
  });

  if (error) {
    throw new Error(error.message);
  }

  return (data ?? []) as KnowledgeChunk[];
}

export async function upsertKnowledgeChunks(chunks: KnowledgeChunkRecord[]) {
  const supabase = getSupabaseAdminClient() as any;

  const { error } = await supabase.from("knowledge_chunks").upsert(
    chunks.map((chunk) => ({
      id: chunk.id,
      source_id: chunk.sourceId,
      source_type: chunk.sourceType,
      title: chunk.title,
      slug: chunk.slug ?? null,
      url: chunk.url ?? null,
      summary: chunk.summary ?? null,
      content: chunk.chunkText,
      metadata: chunk.metadata ?? {},
      chunk_index: chunk.chunkIndex,
      embedding: chunk.embedding,
    })),
    { onConflict: "id" }
  );

  if (error) {
    throw new Error(error.message);
  }
}