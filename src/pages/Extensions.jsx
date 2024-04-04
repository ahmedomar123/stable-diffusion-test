import { useEffect } from "react"

import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

import extensions from "../assets/pages/extensions/extensions.png"
import controlNet from "../assets/pages/extensions/ControlNet.png"
import adetailer from "../assets/pages/extensions/adetailer.png"
import removeBg from "../assets/pages/extensions/removeBG.jpeg"
import inpaint from "../assets/pages/extensions/inpaint.png"
import gif1 from "../assets/pages/extensions/01.gif"
import gif2 from "../assets/pages/extensions/02.gif"
import gif3 from "../assets/pages/extensions/03.gif"
import gif4 from "../assets/pages/extensions/04.gif"
import capabilities from "../assets/pages/extensions/capabilities.png"

// definisco la vista con un'arrow function
const Extensions = () => {

  useEffect(() => {
    const scrollTop = () => {
      window.scrollTo(0, 0)
    }
    scrollTop()
  }, [])

  // ritorno i contenuti
  return (
    <>
      <Navbar/>

      <main className="main-content">
        <header className="content-header">
          <h1>Extensions</h1>                  
        </header>

        <section className="content-section">
          <header className="section-header">
            {
              extensions && (
                <figure>
                  <img src={extensions} alt="" />
                </figure>
              )
            }  
          </header>
          <div className="section-body">
            <p>
              Extensions for Automatic1111, often referred to as Automatic1111 WebUI extensions, are additional tools or functionalities designed to enhance and complement the capabilities of the Automatic1111 platform. These extensions boost the image generations of users and provide them with additional features to achieve desired outcomes more efficiently. Many extensions can be found: 
            </p>
            <ul>
              <li>ControlNet: It lets you copy human poses, color, and content of a reference image</li>
              <li>Adetailers: adds details to a certain area of your image of your choice</li>
              <li>Model Preset Manager: allows users to easily create, organize, and share presets for models</li>
              <li>Remove background: removes the background of an image that you generated and this can help exclude the usage of external software and speed up the process</li>
              <li>Aspect ratio Selector: With just a single click of the mouse, this extension automatically populates the appropriate image size.</li>
              <li>One Botton Prompt: It generates an entire prompt from scratch. It is random, but controlled</li>
              <li>Infinite Image Browsing: Precise image search combined with multi-selection operations allows for filtering/archiving/packaging, greatly increasing efficiency</li>
              <li>Inpaint anything: allows users to remove selected objects from images with a single click. Additionally, users can prompt the tool to replace the removed object with custom content specified through text input.</li>
              <li>Deforum: You only need to provide the text prompts and settings for how the camera moves</li>
              <li>AnimateDiff: It is a plug-and-play module turning most community models into animation generators</li>
            </ul>
          </div>
        </section>

        <section className="content-section">
          <header className="section-header">
            <h2>ControlNet</h2>
            {
              controlNet && (
                <figure>
                  <img src={controlNet} alt="" />
                </figure>
              )
            }            
          </header>
          <div className="section-body">
            <p>
            ControlNet is a neural network designed to enhance Stable Diffusion models by introducing additional conditioning parameters. While Stable Diffusion models traditionally rely on text prompts to guide image generation, ControlNet supplements this approach by incorporating extra conditions. This added flexibility allows users to exert precise control over the image generation process, facilitating tasks such as specifying human poses, replicating compositions from existing images, or turning scribbles into professional-grade images. By integrating with any Stable Diffusion model, ControlNet expands the possibilities of image generation, offering a versatile toolkit for creative expression. Two illustrative examples of ControlNet's capabilities include controlling image generation through edge detection and human pose detection, highlighting its transformative potential in the field of artificial image creation.
            </p>
            <p>
            ControlNet offers enhanced flexibility in tasks such as specifying human poses or replicating compositions, its effectiveness may vary depending on the complexity of the task. Users may encounter limitations in achieving highly intricate or nuanced adjustments. Another significant obstacle is the inefficiency of conveying certain concepts through textual input. 
            </p>
          </div>
        </section>   

        <section className="content-section">
          <header className="section-header">
            <h2>Adetailer</h2>
            {
              adetailer && (
                <figure>
                  <img src={adetailer} alt="" />
                </figure>
              )
            }            
          </header>      
          <div className="section-body">
            <p>
            Adetailer allows inpainting and other image correction processes. It offers a solution for common issues such as distorted faces and hands. Adetailer excels in fixing facial imperfections, thanks to its "inpaint only masked" option. This feature leverages the entire resolution to regenerate masked areas, resulting in significantly improved facial quality due to the higher resolution before scaling down to the original size.<br/>
            Adetailer also automates various processes, including sending the image to inpainting, creating an inpaint mask, setting up ControlNet (optional), and generating the inpaint. While it's possible to perform these tasks manually, Adetailer's automation significantly reduces the time and effort required. The most valuable aspect of this extension lies in its automation capabilities, allowing users to create multiple images with the same settings, even with a batch size larger than 1, a task that would be tedious to accomplish manually.
            </p>
            <p>
            The main problem of Adetailer lies in the output result image, when having a front view of the distorted face or hand the result may be very accurate, but sometimes results are bad and present a discrepancy between the image and the modified result. It is also important to understand that the models offered by Adetailer solely generate masks that the Adetailer inpainting process operates on. They do not enhance the quality of the outputs, but rather focus solely on refining the mask itself. If you're adept at identifying target faces without any difficulty, then this feature may not be necessary for your needs.
            </p>
          </div>  
        </section>

        <section className="content-section">
          <header className="section-header">
            <h2>Remove Background</h2>
            {
              removeBg && (
                <figure>
                  <img src={removeBg} alt="" />
                </figure>
              )
            }                      
          </header> 
          <div className="section-body">
            <p>
            Numerous free online applications offer background removal services, but concerns regarding privacy may dissuade individuals from utilizing them. The Remove Background extension, is a versatile tool empowering users to eliminate backgrounds from images, whether they're authentic or AI-generated.
            </p>
            <p>
            This extension also offers advanced options for fine-tuning the background removal process like: 
            </p>
            <ul>
              <li>Return mask: Enabling the "Return mask" option generates a black-and-white mask instead of the image itself. This mask allows artists to  integrate a new background.</li>
              <li>Alpha matting: An alpha matte serves as a pixel map delineating the foreground from the background.</li>
              <li>Foreground threshold: Lowering the foreground threshold expands the designated foreground area, adding precision in separating foreground elements from the background.</li>
              <li>Background threshold: Similarly, reducing the background threshold widens the foreground area, refining the distinction between foreground and background.</li>
              <li>Erode size: Decreasing the erode size parameter enhances fine details along the boundary, ensuring a smoother and more precise separation between foreground and background elements.</li>
            </ul>
            <p>
            Remove Background performs adequately to some extent. This method may not be viable for training purposes as if training would give better results if we isolated only the person we are training on by removing everything else. Training on images with removed backgrounds did not lead to good results. The images always came with solid colored or blurry backgrounds. 
            </p>
          </div>                         
        </section>   

        <section className="content-section">
          <header className="section-header">
            <h2>Inpaint anything</h2>
            {
              inpaint && (
                <figure>
                  <img src={inpaint} alt="" />
                </figure>
              )
            }                      
          </header>
          <div className="section-body">
            <p>
            Users can effortlessly select any object within an image simply by clicking on it, and Inpaint Anything seamlessly removes the selected object. This extension utilizes masks to smooth out image fixes. Users can pinpoint areas for masking without the need for manual filling, enhancing the speed and accuracy of mask creation. Consequently, this results in superior image corrections while significantly reducing time and effort. Moreover, Inpaint Anything can dynamically fill selected objects with desired content based on user input text:
            </p>
            <ul>
              <li>Remove Anything: Click on an object in the image and Inpainting Anything will remove it</li>
              <li>Fill Anything: Click on an object, type in what you want to fill, and Inpaint Anything will fill it</li>
              <li>Replace Anything: click on an object, type in what background you want to replace, and Inpaint Anything will replace it</li>
              <li>Remove Anything 3D: with a single click on an object in the first view of source views, Remove Anything 3D will remove the object from the whole scene</li>
              <li>Remove Anything Video: With a single click on an object in the first video frame, it can remove the object from the whole video</li>
            </ul>
            <p>
            This new extension has created quite a debate on reddit, as some users have been very satisfied with their accomplishments while others not. Other than the git page everything about the documentation of this extension is missing or cannot be found: https://github.com/geekyutao/Inpaint-Anything.
            </p>
          </div>          
        </section>  

        <section className="content-section">
          <header className="section-header">
            <h2>AnimateDiff</h2>
            {
              (
                gif1 &&
                gif2 &&
                gif3 &&
                gif4 
              ) && (
                <div className="header-imgs">
                  <img src={gif1} alt="" />
                  <img src={gif2} alt="" />
                  <img src={gif3} alt="" />
                  <img src={gif4} alt="" />
                </div>
              )
            }            
          </header>
          <div className="section-body">
            <p>
            Converting a text description into a video, known as text-to-video, presents a formidable challenge that has seen significant advancements in diffusion-based models. These models, once considered intricate and resource-intensive, have now reached a stage where they can be efficiently executed on local machines. AnimateDiff operates thanks to a motion model trained on short video clips to predict the appearance of subsequent video frames. This prior knowledge is then integrated into the noise predictor U-Net of a Stable Diffusion model, enabling the generation of videos based on text descriptions. 
            </p>
            <p>
            AnimateDiff's functionality is constrained by the motion patterns learned from the training data, resulting in the generation of videos with generic motion sequences. This limits its capability to faithfully replicate intricate sequences of motions described in the prompt. The quality of motion generated by AnimateDiff heavily relies on the diversity and quality of the training data. Consequently, it may struggle to animate complex graphics that were not adequately represented in the training dataset. Users should consider this limitation when selecting content to animate, as not all subjects and styles produce satisfactory results.
            </p>
          </div>
        </section>

        <section className="content-section">
          <header className="section-header">
            <h2>Capabilities of Stable Diffusion 3</h2>
            {
              capabilities && (
                <figure>
                  <img src={capabilities} alt="" />
                </figure>
              )
            }            
          </header>
          <div className="section-body">
            <p>
            In conclusion, Stable Diffusion offers users a multitude of tools and possibilities to refine their prompts, the ultimate question remains: Are we confident in the resulting image's quality and the precision of the prompt's alignment with it? Encord, a data platform for advanced computer vision, highlights the capabilities of SD3 in text-to-image generation:
            </p>
            <ul>
              <li>Precision in Text Rendering: SD3 excels in accurately rendering text within generated images, ensuring proper representation of fonts, styles, and sizes. This enhancement facilitates seamless integration of text-based descriptions into the imagery, fostering a coherent visual narrative.</li>
              <li>Enhanced Image Quality: SD3 showcases superior image quality compared to its predecessors. This advancement results in images that are more detailed, realistic, and visually captivating, enhancing the overall user experience.</li>
              <li>Adherence to Prompts: SD3 demonstrates robust adherence to provided prompts, ensuring that generated images faithfully reflect the details and specifications outlined in the input text. This capability minimizes deviations from the intended concept or scene, enabling the creation of desired visual content with precision.</li>
            </ul>
            <p>
            Comprehensive evaluations comparing SD3 with various text-to-image generation models, including both open and closed-source solutions such as SDXL, SDXL Turbo, Stable Cascade, Playground v2.5, Pixart-α, DALL·E 3, Midjourney v6, and Ideogram v1, underscore SD3's exceptional performance.
            </p>
          </div>
        </section>
      </main>

      <Footer/>
    </>
  )
}

// esporto la vista
export default Extensions