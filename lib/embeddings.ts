type GeminiEmbeddingResponse = {
  embedding?: {
    values?: number[];
  };
};

const GEMINI_EMBEDDING_MODEL = "text-embedding-004";

function assertEnv(name: string, value: string | undefined): string {
  if (!value) {
    throw new Error(`${name} is not configured.`);
  }

  return value;
}

export function chunkText(text: string, maxChunkSize = 1200): string[] {
  const cleaned = text.replace(/\r/g, "").replace(/[ \t]+\n/g, "\n").trim();

  if (!cleaned) {
    return [];
  }

  const paragraphs = cleaned.split(/\n\s*\n/);
  const chunks: string[] = [];
  let buffer = "";

  for (const paragraph of paragraphs) {
    const nextParagraph = paragraph.trim();

    if (!nextParagraph) {
      continue;
    }

    if ((buffer + "\n\n" + nextParagraph).trim().length > maxChunkSize && buffer) {
      chunks.push(buffer.trim());
      buffer = nextParagraph;
      continue;
    }

    buffer = buffer ? `${buffer}\n\n${nextParagraph}` : nextParagraph;
  }

  if (buffer.trim()) {
    chunks.push(buffer.trim());
  }

  return chunks;
}

export async function embedText(text: string): Promise<number[]> {
  const apiKey = assertEnv("GEMINI_API_KEY", process.env.GEMINI_API_KEY);
  const response = await fetch(
    `https://generativelanguage.googleapis.com/v1beta/models/${GEMINI_EMBEDDING_MODEL}:embedContent?key=${apiKey}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        content: {
          parts: [{ text }],
        },
      }),
    }
  );

  if (!response.ok) {
    throw new Error(`Gemini embedding request failed with status ${response.status}.`);
  }

  const data = (await response.json()) as GeminiEmbeddingResponse;
  const values = data.embedding?.values;

  if (!values || values.length === 0) {
    throw new Error("Gemini embedding response did not include vector values.");
  }

  return values;
}

export async function embedTexts(texts: string[]): Promise<number[][]> {
  const embeddings: number[][] = [];

  for (const text of texts) {
    embeddings.push(await embedText(text));
  }

  return embeddings;
}