---
title: "Building a Local RAG Pipeline with Ollama and LangGraph"
description: "How I built a fully local PDF chat agent using open-source models — no cloud APIs, no data leaving your machine."
date: 2025-11-01
---

Retrieval-Augmented Generation (RAG) has become one of the most practical ways to make LLMs useful on domain-specific documents. In this post, I walk through how I built a fully local RAG agent using Ollama, LangGraph, and FAISS.

## Why Local?

Most RAG tutorials send your documents to OpenAI or Anthropic. That's fine for demos, but for sensitive documents — think research papers, medical records, or proprietary data — keeping everything on-device matters.

## Stack

- **Ollama** runs `qwen3:8b` for generation and `qwen3-embedding:4b` for embeddings
- **LangGraph** orchestrates the retrieval and generation workflow as a stateful graph
- **FAISS** stores and queries the in-memory vector index
- **Streamlit** provides the chat UI
- **Docker Compose** wraps everything into a one-command deployment

## How It Works

1. User uploads a PDF via the Streamlit interface
2. The document is chunked and embedded using the local embedding model
3. Vectors are stored in an in-memory FAISS index
4. On each query, the top-k most relevant chunks are retrieved
5. LangGraph passes the retrieved context + query to the LLM
6. The response streams back to the UI

The whole thing runs at `localhost:8501` after a single `docker compose up`.

## Key Lessons

- Chunk size matters enormously — I settled on 500 tokens with 50-token overlap
- Embedding model quality is the bottleneck, not the generator
- LangGraph's state management makes it easy to add memory and multi-turn support later

Check out the [full project on GitHub](https://github.com/jhaveri-bhavya/Streamlit-Ollama-PDF-RAG-Agent).
