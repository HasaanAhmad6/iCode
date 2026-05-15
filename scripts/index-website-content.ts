import { reindexWebsiteKnowledge } from "@/lib/knowledge";

async function main() {
  const result = await reindexWebsiteKnowledge();
  console.log(`Indexed ${result.indexedChunks} knowledge chunks.`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});