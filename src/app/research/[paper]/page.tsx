import Image from "next/image";
import Link from "next/link";
import { ResearchGrid } from "../components/research-grid";

export default function ResearchPaper() {
  return (
    <>
      <main className="min-h-screen bg-white mt-8">
        <article className="mx-auto max-w-4xl px-6 py-16 md:py-24">
          {/* Article Header */}
          <header className="mb-16 text-center">
            <h1 className="mb-6 text-balance font-sans text-4xl font-normal leading-tight tracking-tight text-neutral-700 md:text-5xl lg:text-6xl">
              Autoregressive-to-Diffusion Vision Language Models
            </h1>

            <p className="mb-4 text-lg text-neutral-600">
              Efficient training of state-of-the-art diffusion vision language
              models.
            </p>

            <div className="flex flex-col items-center gap-1 text-sm text-neutral-500">
              <time dateTime="2025-09-24">September 24, 2025</time>
              <p>
                by Marianne Arriola • Naveen Venkat • Jonathan Granskog •
                Anastasis Germanidis
              </p>
            </div>
          </header>

          {/* Featured Image */}
          <div className="mb-16">
            <div className="relative aspect-video w-full overflow-hidden rounded-sm bg-gradient-to-br from-blue-900 via-blue-800 to-teal-700">
              <Image
                src="/images/articles/Untitled 3.png"
                alt="Autoregressive-to-Diffusion Vision Language Models"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>

          {/* Article Body */}
          <div className="prose prose-neutral mx-auto max-w-none">
            <div className="space-y-8 text-base leading-relaxed text-neutral-700 md:text-lg">
              <p>
                We develop a state-of-the-art diffusion vision language model,{" "}
                <strong>Autoregressive-to-Diffusion (A2D)</strong>, by adapting
                an existing autoregressive vision language model for parallel
                diffusion decoding. Our approach makes it easy to unlock the
                speed-quality trade-off of diffusion language models without
                training from scratch, by leveraging existing pretrained
                autoregressive models.
              </p>

              <h2 className="mt-12 text-2xl font-semibold text-neutral-800">
                Abstract
              </h2>

              <p>
                Vision language models (VLMs) reason about images and videos
                through language, powering applications from image captioning to
                visual question answering. Autoregressive VLMs generate tokens
                sequentially, which prevents parallelization and limits
                inference throughput. Diffusion decoders are emerging as a
                promising alternative to autoregressive decoders in VLMs by
                enabling parallel token generation for faster inference.
              </p>

              <p>
                Whereas autoregressive language models are limited to a fixed
                inference throughput, diffusion language models can use fewer
                generation steps for higher throughput at the cost of quality.
                As a result, diffusion language models present a flexible
                trade-off between speed and quality.
              </p>

              <p>
                The key to managing the speed-quality trade-off is a confidence
                threshold that adaptively controls parallelism. When the
                confidence threshold is set high (e.g., 90%), the model
                prioritizes accuracy, generating multiple tokens only when
                highly certain. When the threshold is set lower (e.g., 30%), it
                prioritizes speed, tolerating more ambiguity to achieve greater
                parallelism.
              </p>

              <h2 className="mt-12 text-2xl font-semibold text-neutral-800">
                Challenges with Existing Diffusion VLMs
              </h2>

              <p>Existing diffusion VLMs face practical challenges:</p>

              <div className="my-8 space-y-6 rounded-lg bg-neutral-50 p-6">
                <div>
                  <h3 className="font-semibold text-neutral-800">
                    Expensive to train
                  </h3>
                  <p className="mt-2 text-neutral-600">
                    Current diffusion VLMs finetune diffusion LLMs to integrate
                    visual features. However, diffusion language modeling is up
                    to 16× more training compute than next-token prediction. For
                    example, diffusion VLM LLaDA-V 8B requires training on ≥12M
                    visual QA pairs.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-neutral-800">
                    Outdated architectures
                  </h3>
                  <p className="mt-2 text-neutral-600">
                    Current diffusion VLMs lack modern architectural components
                    compared to recent autoregressive VLMs such as the
                    Qwen2.5-VL series, which offer support for native visual
                    resolutions, multimodal positional encodings, and dynamic
                    FPS sampling.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-neutral-800">
                    Quality degradation in long-form responses
                  </h3>
                  <p className="mt-2 text-neutral-600">
                    We observe that sample quality degrades for longer outputs
                    (e.g., chain-of-thought reasoning and detailed image
                    captioning). Existing models perform diffusion over the full
                    sequence at once during training and inference, which has
                    been shown to degrade quality. In contrast, decoding in
                    smaller blocks of tokens (e.g., 8 tokens at a time)
                    inference improves quality and generalization to
                    arbitrary-length responses.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-neutral-800">
                    Lack of KV caching
                  </h3>
                  <p className="mt-2 text-neutral-600">
                    Existing diffusion VLMs utilize bidirectional attention
                    during training, which hinders KV (key-value) caching for
                    efficient attention computation. While LLaDA-V 8B may cache
                    and periodically update KVs throughout inference, it is an
                    approximate caching mechanism that requires expensive
                    recomputation.
                  </p>
                </div>
              </div>

              <h2 className="mt-12 text-2xl font-semibold text-neutral-800">
                We adapt powerful pretrained VLMs for parallel diffusion
                decoding
              </h2>

              <p>
                We present a novel diffusion VLM,{" "}
                <strong>A2D-VL 7B (Autoregressive-to-Diffusion)</strong> for
                parallel generation by finetuning an existing autoregressive
                VLM, Qwen2.5-VL-7B, on the diffusion language modeling task. In
                particular, we adopt the masked diffusion framework which
                "noises" tokens by masking them and "denoises" tokens by
                predicting the original tokens. We propose novel adaptation
                techniques that gradually increase the task difficulty during
                finetuning to smoothly transition from sequential to parallel
                decoding while preserving the base model's capabilities.
              </p>

              {/* Progressive Fine-tuning Diagram */}
              <div className="my-12">
                <div className="rounded-lg bg-neutral-50 p-8">
                  <h3 className="mb-6 text-center text-xl font-semibold text-neutral-800">
                    A2D-VLMs: Progressive fine-tuning
                  </h3>
                  <div className="space-y-6">
                    <div className="flex items-center gap-4">
                      <div className="flex-1 rounded bg-green-600 py-3 text-center text-white font-semibold">
                        AR
                      </div>
                      <div className="flex-none">→</div>
                      <div className="flex-1 rounded bg-gradient-to-r from-green-600 to-green-700 py-3 text-center text-white font-semibold">
                        Diffusion
                      </div>
                    </div>
                    <div className="text-center text-sm text-neutral-600">
                      <strong>Prediction window</strong>
                    </div>
                    <div className="grid grid-cols-3 gap-4 text-center">
                      <div>
                        <div className="rounded border-2 border-neutral-300 bg-white p-4">
                          <div className="font-semibold text-neutral-800">
                            1 token
                          </div>
                        </div>
                      </div>
                      <div>
                        <div className="rounded border-2 border-neutral-300 bg-white p-4">
                          <div className="font-semibold text-neutral-800">
                            2 tokens
                          </div>
                        </div>
                      </div>
                      <div>
                        <div className="rounded border-2 border-neutral-300 bg-white p-4">
                          <div className="font-semibold text-neutral-800">
                            4 tokens
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Parallel Generation Examples */}
              <div className="my-12 space-y-8">
                <h3 className="text-xl font-semibold text-neutral-800">
                  Diffusion VLMs offer a trade-off between quality and speed
                </h3>

                <div className="rounded-lg border-2 border-neutral-200 bg-white p-6">
                  <div className="mb-3 text-sm font-semibold text-neutral-500">
                    1× parallel: slow
                  </div>
                  <p className="text-neutral-700">
                    "The image showcases a striking modern architectural
                    structure that stands out due to its unique design and
                    vibrant color. The building is predominantly white, with a
                    series of geometric patterns that create a dynamic visual
                    effect..."
                  </p>
                </div>

                <div className="rounded-lg border-2 border-neutral-200 bg-white p-6">
                  <div className="mb-3 text-sm font-semibold text-neutral-500">
                    2× parallel: faster, with comparable quality
                  </div>
                  <p className="text-neutral-700">
                    "The image showcases a striking modern architectural
                    structure that stands out due to its unique design and
                    vibrant color scheme. The building is predominantly white,
                    with a series of geometric patterns that create a dynamic
                    visual effect. These patterns are arranged in a way that
                    gives the impression of movement and energy, enhancing the
                    building..."
                  </p>
                </div>

                <div className="rounded-lg border-2 border-neutral-200 bg-white p-6">
                  <div className="mb-3 text-sm font-semibold text-neutral-500">
                    3× parallel: much faster, with quality degradation
                  </div>
                  <p className="text-neutral-700">
                    "The image showcases a striking architectural marvel that
                    stands out design with natural elements. The structure is a
                    large, white building characterized on a unique, thatched
                    roof reminiscent This roof is composed of numerous series of
                    triangular forms, arranged layers, a visually interesting
                    pattern that mimics a forest or..."
                  </p>
                </div>

                <p className="text-sm text-neutral-500">
                  <strong>Fig 1:</strong> Diffusion VLMs offer a trade-off
                  between quality and speed by tuning the amount of generation
                  steps. Under fewer generation steps, we achieve higher
                  parallelism (number of concurrent tokens, averaged over the
                  sequence). Diffusion decoding also supports error correction,
                  where low-confidence tokens (red tokens) are revoked and
                  replaced (green tokens).
                </p>
              </div>

              <h2 className="mt-12 text-2xl font-semibold text-neutral-800">
                Key Insights
              </h2>

              <p>
                Vision language models (VLMs) reason about images and videos
                through language, powering applications from image captioning to
                visual question answering. Autoregressive VLMs generate tokens
                sequentially, which prevents parallelization and limits
                inference throughput. Diffusion decoders are emerging as a
                promising alternative to autoregressive decoders in VLMs by
                enabling parallel token generation for faster inference.
              </p>

              <p>
                Whereas autoregressive language models are limited to a fixed
                inference throughput, diffusion language models can use fewer
                generation steps for higher throughput at the cost of quality.
                As a result, diffusion language models present a flexible
                trade-off between speed and quality.
              </p>

              <h2 className="mt-12 text-2xl font-semibold text-neutral-800">
                Collaboration and Ethics
              </h2>

              <p>
                This research represents a significant advancement in vision
                language modeling, demonstrating how existing pretrained models
                can be adapted for new paradigms without extensive retraining.
                The work opens new possibilities for real-time visual
                understanding applications while maintaining high quality
                outputs.
              </p>

              <p className="pt-8 text-sm text-neutral-500">
                © {new Date().getFullYear()} Zonify.ai — Advancing human insight
                through vision-driven analytics.
              </p>
            </div>
          </div>
        </article>
      </main>
      <div className="max-w-7xl mx-auto pb-24">
        <h2 className="mb-8 text-center text-2xl font-semibold text-neutral-800">
          More Research
        </h2>
        <ResearchGrid max={3} />
      </div>
    </>
  );
}
