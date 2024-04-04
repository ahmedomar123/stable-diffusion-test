import { useEffect } from "react"

import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

import exploring from "../assets/pages/home/exploring.png"
import whatIsSD from "../assets/pages/home/what-is-sd.png"

// definisco la vista con un'arrow function
const Home = () => {
  useEffect(() => {
    const scrollTop = () => {
      window.scrollTo(0, 0)
    }
    scrollTop()
  }, [])

  // ritorno i contenuti
  return (
    <>
      <Navbar />
      
      <main className="main-content">
        <header className="content-header">
          <p className="subtitle">April 5, 2024 ● Research report</p>
          <h1>
            Research and Evaluation of Generative AI Solutions
          </h1>
        </header>

        <section className="content-section">
          <header className="section-header">
            <h2>What is Stable Diffusion?</h2>            
            {
              // verifico che l'img esista veramente
              whatIsSD && (
                <figure>
                  <img 
                    src={whatIsSD} 
                    alt="" />
                </figure>
              )
            }            
          </header>
          <div className="section-body">
            <p>
              Stable Diffusion represents a paradigm within generative artificial intelligence (generative AI), proficient in generating images uniquely derived from textual prompts and image instructions.
            </p>
            <p>
              Beyond static imagery, this model extends its capabilities to the creation of videos and animations. Using diffusion technology and latent space, Stable Diffusion significantly mitigates computational costs, rendering it usable on standard desktop or laptop setups equipped with Graphics Processing Units (GPUs). Stable Diffusion is accessible to all under a permissive licensing regime for commercial and non-commercial usage.
            </p>          
          </div>          
        </section>

        <section className="content-section">
          <header className="section-header">
            <h2>Exploring the Facets of AI Art Generation: Stable Diffusion, Midjourney and Dall-E</h2>
            {
              exploring && (
                <figure>
                  <img 
                    src={exploring} 
                    alt="" />
                </figure>
              )
            }            
          </header>
          <div className="section-body">
            <p>
            Stable Diffusion represents just one face of the broader spectrum of Generative AI. Stable Diffusion, Midjourney and Dall-E  are the three main facets of the AI art generation, distinguished by their notable efficacy and versatility. These platforms allow transformation of textual prompts into corresponding images within a remarkably brief timeframe.
            </p>
            <p>
            In contrast to a myriad of AI art generators predominantly reliant on externally developed AI models, these platforms engage in AI image creation in a smooth and effortless way, however they have differences: 
            </p>
            <ul>
              <li>
                <strong>Midjourney</strong> offers a range of subscription plans starting from $10/month for basic, to  a 60/month for the pro plan. The free trial, although intermittent, allows users to generate images under Creative Commons guidelines. Basic, standard, and pro plans offer 3.3, 15, and 30 GPU hours respectively, with the option to purchase extra hours at $4 each. While the platform provides decent speed, accuracy can be inconsistent, with some generated images deviating from user prompts. However, users can create variations and upscale images for more detail. Each plan has queue limits, with the pro plan offering more extensive capabilities.
              </li>
              <li>
                <strong>DALL-E 2</strong>, an image-generating tool by OpenAI, operates on a credit-based system rather than monthly subscriptions. Users receive 15 free credits monthly, with additional credits available for purchase in increments of 115. OpenAI states that users own the images generated with DALL-E 2, regardless of whether they used free or paid credits. In terms of performance, DALL-E 2 offers faster generation times compared to some competitors, taking around 15 seconds to produce outputs. However, accuracy and style may vary, with users often needing to refine prompts to achieve desired results. While scalability is flexible with the ability to purchase more credits, users may encounter server issues during peak times, causing delays and frustration.
              </li>
              <li>
                <strong>Stable Diffusion</strong>'s features will be analyzed in detail later, but it presents a compelling option for users with its open-source model complemented by optional monthly subscription plans for the diverse needs. The main strength of Stable Diffusion , according to me, lies in its  ecosystem: it allows easy implementations of its API and the growing developer community surrounding it keeps introducing new extensions offering new solutions to its needs. It also allows a training model of  personal datasets to increase the accuracy of personalized prompts.
              </li>
            </ul>
          </div>          
        </section>

        <section className="content-section">
          <header className="section-header">
            <h2>Advantages and Drawbacks of Stable Diffusion</h2>
          </header>
          <div className="section-body">
            <p>
            Stable Diffusion employs both forward and reverse diffusion processes. The former gradually adds noise to input data to attain an optimal level of white noise, while the latter reverses this procedure by progressively eliminating noise to restore the original data.
            </p>
            <p>Advantages:</p>
            <ul>
              <li>Versatility: Stable Diffusion surpasses traditional methods such as deep neural networks by efficiently handling diverse input conditions simultaneously.</li>
              <li>Manual Adjustment: Users can manually fine-tune colors, brightness, contrast, and other parameters to achieve desired results.</li>
              <li>High-Quality Samples: The nature of noise removal in SD facilitates the creation of high-quality samples. The model initially constructs a rough image structure and then adds finer details.</li>
              <li>Intermediate Noisy Images: These serve as hidden codes and match the size of training images, contributing to the generation of highly accurate samples.</li>
              <li>Stability in Training: Stable Diffusion models exhibit stability during training, gradually smoothing the data distribution to enhance diversity in generated outputs.</li>
            </ul>
            <p>Challenges:</p>
            <ul>
              <li>Computational Resources: Extensive computational resources may impede real-time or large-scale deployment in resource-constrained environments.</li>
              <li>Realism in Deviating Data: Stable Diffusion models may struggle to produce sequential and realistic results for input data significantly different from the training data.</li>
              <li>Model Adaptation: Adapting pre-trained AI models to specific tasks often necessitates fine-tuning or retraining, demanding annotated or domain-specific data.</li>
              <li>Human-Centric Design: Ensuring results align with human intentions and requirements requires meticulous design and integration with operational processes, which can be labor-intensive.</li>
              <li>Integration: Integrating your AI system into existing infrastructure and processes can be challenging. It's important to ensure seamless integration to maximize the benefits of your AI solution.</li>
            </ul>
          </div>          
        </section>

        <section className="content-section">
          <header className="section-header">
            <h2>Customization Options and Control</h2>
          </header>
          <div className="section-body">
            <p>
            Stable Diffusion's ecosystem is renowned for its robust customization options and control over the image generation process, allowing users to create outputs to their specific requirements. Several key aspects contribute to this:
            </p>
            <ul>
              <li>Parameter Tuning and Configuration: Stable Diffusion provides users with extensive control over various parameters governing the image generation process. Users can adjust parameters such as resolution, sampling methods, noise levels, and temperature to fine-tune the output according to their preferences.</li>
              <li>Conditional Generation and Guidance: Stable Diffusion supports conditional generation, enabling users to provide input prompts or constraints to guide the image generation process. Users can specify desired attributes, themes, or visual characteristics, ensuring that generated images align closely with their intentions.</li>
              <li>Style Transfer and Manipulation: The ecosystem offers tools for style transfer and manipulation, allowing users to apply different artistic styles or attributes to generated images. Users can mix and match styles, interpolate between different visual elements, or manipulate specific features within the images.</li>
              <li>Fine-tuning and Adaptation: Stable Diffusion facilitates model fine-tuning and adaptation, enabling users to customize the underlying neural network models to better suit their specific datasets or use cases. Users can leverage techniques such as transfer learning, domain adaptation, and incremental training to refine model performance and adapt it to evolving requirements.</li>
            </ul>
          </div>
        </section>
      </main>

      <Footer/>
    </>
  )
}

// esporto la vista
export default Home