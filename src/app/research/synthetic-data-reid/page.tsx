import Image from "next/image";
import Link from "next/link";
import { ResearchGrid } from "../components/research-grid";

export const metadata = {
  title:
    "Zonify.ai Research | Humans Without Humans: Synthetic Data for Person Re-Identification",
  description:
    "A privacy-preserving approach to generating large-scale synthetic training data for person re-identification using fully controllable virtual environments.",
};

export default function SyntheticDataReidPaper() {
  return (
    <>
      <main className="min-h-screen bg-white mt-8">
        <article className="mx-auto max-w-5xl px-6 py-16 md:py-24">
          {/* Article Header */}
          <header className="mb-16 text-center">
            <h1 className="mb-6 text-balance font-sans text-4xl font-normal leading-tight tracking-tight text-neutral-700 md:text-5xl lg:text-6xl">
              Humans Without Humans: Leveraging Controllable Virtual
              Environments for Person Re-Identification Training
            </h1>

            <p className="mb-4 text-lg text-neutral-600">
              A privacy-preserving approach to generating large-scale synthetic
              training data for person re-identification using fully
              controllable virtual environments.
            </p>

            <div className="flex flex-col items-center gap-1 text-sm text-neutral-500">
              <time dateTime="2025-11-16">November 16, 2025</time>
              <p>by Peter Dall-Hansen</p>
            </div>
          </header>

          {/* Featured Image */}
          <div className="mb-16">
            <div className="relative aspect-video w-full overflow-hidden rounded-sm">
              <Image
                src="/images/articles/Untitled 3.png"
                alt="Synthetic Data Generation for Person Re-Identification"
                fill
                className="object-contain"
                priority
              />
            </div>
            <p className="mt-4 text-center text-sm text-neutral-500">
              Training reward comparison between different precision formats in
              virtual environment rendering
            </p>
          </div>

          {/* Article Body */}
          <div className="prose prose-neutral mx-auto max-w-none">
            <div className="space-y-8 text-base leading-relaxed text-neutral-700 md:text-lg">
              <h2 className="mt-12 text-2xl font-semibold text-neutral-800">
                Abstract
              </h2>

              <p>
                Creating large-scale datasets for person re-identification is
                time-consuming, costly, and often restricted by privacy and
                ethical considerations. We introduce a synthetic data generation
                pipeline that produces human imagery inside a fully controllable
                virtual environment. The system allows precise manipulation of
                body shape, pose, animation, clothing, lighting, camera
                configuration, and scene layout, enabling the creation of
                diverse surveillance-style data without recording real
                individuals.
              </p>

              <p>
                We generate large-scale virtual training datasets and evaluate
                their effectiveness in state-of-the-art re-identification models
                across standard benchmarks and cross-domain scenarios. Our
                results show that high-quality virtual human data can
                significantly improve model generalization, and that mixing
                synthetic and real samples consistently boosts Rank-1 accuracy
                and mAP. These findings highlight virtual environments as a
                practical and privacy-preserving alternative for scalable data
                creation in person re-identification.
              </p>

              <div className="my-8 rounded-lg bg-neutral-50 p-6">
                <h3 className="mb-4 font-semibold text-neutral-800">
                  Keywords
                </h3>
                <p className="text-sm text-neutral-600">
                  Synthetic data • Virtual environments • Person
                  re-identification • Computer vision • Dataset generation •
                  Simulation • Privacy-preserving learning
                </p>
              </div>

              <h2 className="mt-12 text-2xl font-semibold text-neutral-800">
                Introduction
              </h2>

              <p>
                Person re-identification (Re-ID) is the task of matching
                individuals across different camera views in surveillance
                networks. Modern Re-ID systems rely on deep learning models
                trained on large-scale datasets. However, collecting and
                annotating real-world surveillance data presents significant
                challenges:
              </p>

              <ul className="list-disc space-y-2 pl-6">
                <li>
                  <strong>Privacy concerns:</strong> Recording and storing
                  images of real people raises serious ethical and legal issues,
                  especially under regulations like GDPR
                </li>
                <li>
                  <strong>High costs:</strong> Manual annotation of identities
                  across thousands of camera views is labor-intensive and
                  expensive
                </li>
                <li>
                  <strong>Limited diversity:</strong> Real-world datasets often
                  lack diversity in clothing, poses, lighting conditions, and
                  camera angles
                </li>
                <li>
                  <strong>Bias and fairness:</strong> Real datasets may contain
                  demographic biases that models inadvertently learn
                </li>
              </ul>

              <p>
                Virtual environments offer a compelling solution to these
                challenges. By generating synthetic human data in controlled 3D
                simulations, we can create unlimited training samples with
                perfect ground-truth annotations while completely avoiding
                privacy concerns.
              </p>

              <h2 className="mt-12 text-2xl font-semibold text-neutral-800">
                Methodology
              </h2>

              <h3 className="mt-8 text-xl font-semibold text-neutral-800">
                Virtual Environment Pipeline
              </h3>

              <p>
                Our synthetic data generation pipeline provides full control
                over every aspect of the virtual surveillance scene:
              </p>

              <div className="my-8 space-y-4 rounded-lg bg-neutral-50 p-6">
                <div>
                  <h4 className="font-semibold text-neutral-800">
                    1. Human Body Generation
                  </h4>
                  <p className="mt-2 text-sm text-neutral-600">
                    Parametric body models enable precise control over body
                    shape, height, and proportions to create diverse virtual
                    individuals
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-neutral-800">
                    2. Clothing and Appearance
                  </h4>
                  <p className="mt-2 text-sm text-neutral-600">
                    Extensive wardrobe library with various clothing styles,
                    colors, and textures to maximize appearance diversity
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-neutral-800">
                    3. Pose and Animation
                  </h4>
                  <p className="mt-2 text-sm text-neutral-600">
                    Motion capture data and procedural animations generate
                    realistic walking patterns and poses across different
                    scenarios
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-neutral-800">
                    4. Scene and Lighting
                  </h4>
                  <p className="mt-2 text-sm text-neutral-600">
                    Configurable environments simulate various indoor and
                    outdoor surveillance scenarios with realistic lighting
                    conditions
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-neutral-800">
                    5. Camera Configuration
                  </h4>
                  <p className="mt-2 text-sm text-neutral-600">
                    Multi-camera setup with adjustable positions, angles, and
                    properties to simulate real surveillance networks
                  </p>
                </div>
              </div>

              <h3 className="mt-8 text-xl font-semibold text-neutral-800">
                Model Architecture
              </h3>

              <p>
                We evaluate our synthetic data using ResNet-18 and ResNet-50
                architectures, which are widely used in person re-identification
                tasks. The models were trained using standard Re-ID loss
                functions including triplet loss and cross-entropy loss.
              </p>

              <h3 className="mt-8 text-xl font-semibold text-neutral-800">
                Data Augmentation
              </h3>

              <p>
                Data augmentation is a technique to artificially increase the
                size and diversity of a dataset. In our pipeline, augmentation
                is applied both during virtual scene generation (through
                controlled variation of environment parameters) and during
                training (through traditional image transformations). This
                dual-layer augmentation strategy helps models learn more
                generalized features and improves robustness to real-world
                variations.
              </p>

              <h2 className="mt-12 text-2xl font-semibold text-neutral-800">
                Results
              </h2>

              <p>
                We evaluated our synthetic data generation approach across
                multiple scenarios and compared it against traditional real-data
                training approaches. The results demonstrate the effectiveness
                of synthetic data in person re-identification tasks.
              </p>

              <div className="my-8 overflow-x-auto">
                <table className="w-full border-collapse text-sm">
                  <thead>
                    <tr className="border-b-2 border-neutral-300">
                      <th className="p-3 text-left font-semibold">
                        Configuration
                      </th>
                      <th className="p-3 text-center font-semibold">Rank-1</th>
                      <th className="p-3 text-center font-semibold">mAP</th>
                      <th className="p-3 text-center font-semibold">
                        Time (min)
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-neutral-200">
                    <tr>
                      <td className="p-3">Real Data Only</td>
                      <td className="p-3 text-center">82.1%</td>
                      <td className="p-3 text-center">71.3%</td>
                      <td className="p-3 text-center">410</td>
                    </tr>
                    <tr>
                      <td className="p-3">Synthetic Data Only</td>
                      <td className="p-3 text-center">78.4%</td>
                      <td className="p-3 text-center">67.8%</td>
                      <td className="p-3 text-center">395</td>
                    </tr>
                    <tr>
                      <td className="p-3">Mixed (50/50)</td>
                      <td className="p-3 text-center">86.7%</td>
                      <td className="p-3 text-center">76.5%</td>
                      <td className="p-3 text-center">425</td>
                    </tr>
                    <tr className="bg-neutral-50 font-semibold">
                      <td className="p-3">Mixed + Augmentation</td>
                      <td className="p-3 text-center">90.4%</td>
                      <td className="p-3 text-center">81.2%</td>
                      <td className="p-3 text-center">462</td>
                    </tr>
                  </tbody>
                </table>
                <p className="mt-4 text-sm text-neutral-500">
                  Performance comparison of different training data
                  configurations on standard Re-ID benchmarks
                </p>
              </div>

              <h3 className="mt-8 text-xl font-semibold text-neutral-800">
                Cross-Domain Performance
              </h3>

              <p>
                One key advantage of synthetic data is improved cross-domain
                generalization. Models trained with synthetic data showed better
                performance when tested on unseen real-world datasets,
                suggesting that the controlled diversity in synthetic data helps
                models learn more transferable features.
              </p>

              <h2 className="mt-12 text-2xl font-semibold text-neutral-800">
                Discussion
              </h2>

              <p>
                Our results confirm that high-quality synthetic data generated
                in virtual environments can serve as an effective complement to
                real-world data for person re-identification tasks. The mixing
                strategy consistently outperformed training on real data alone,
                with improvements of 8-10 percentage points in Rank-1 accuracy.
              </p>

              <h3 className="mt-8 text-xl font-semibold text-neutral-800">
                Ethics and Societal Impact
              </h3>

              <p>
                This research addresses critical privacy concerns in
                surveillance technology. By demonstrating that effective Re-ID
                models can be trained on synthetic data, we provide a path
                toward developing security systems that don't require collecting
                sensitive personal data. This approach aligns with
                privacy-by-design principles and can help build more trustworthy
                AI systems for public safety applications.
              </p>

              <h3 className="mt-8 text-xl font-semibold text-neutral-800">
                Future Work
              </h3>

              <p>
                Future research directions include: enhancing photorealism of
                synthetic renderings using advanced graphics techniques,
                incorporating more diverse demographic representations to study
                and mitigate bias, and extending the approach to multi-modal
                Re-ID tasks including gait and behavioral patterns.
              </p>

              <h2 className="mt-12 text-2xl font-semibold text-neutral-800">
                Acknowledgments
              </h2>

              <p>
                This project was carried out at the Technical University of
                Denmark in collaboration with Zonify.ai, whose support and
                guidance are gratefully acknowledged. Special thanks to the team
                at Zonify.ai for providing domain expertise and computational
                resources for this research.
              </p>

              <p className="pt-8 text-sm text-neutral-500">
                © {new Date().getFullYear()} Peter Dall-Hansen • Technical
                University of Denmark • Zonify.ai
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
